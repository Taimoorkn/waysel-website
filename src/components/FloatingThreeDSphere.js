"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const FloatingThreeDSphere = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);
  const animationIdRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial window and document dimensions
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
    setDocumentHeight(document.documentElement.scrollHeight);
    checkMobile();

    // Handle scroll events
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Handle resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
      setDocumentHeight(document.documentElement.scrollHeight);
      checkMobile();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Initial scroll position
    setScrollY(window.scrollY);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Capture the ref value at the start of the effect
    const currentMount = mountRef.current;

    // Clear any existing content first
    if (currentMount.firstChild) {
      currentMount.removeChild(currentMount.firstChild);
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      1, // aspect ratio will be 1:1 for a square container
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    currentMount.appendChild(renderer.domElement);

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(2.0, 32, 32);

    // Create simple material with linear gradient
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x7a66e1) }, // #7A66E1 (purple)
        color2: { value: new THREE.Color(0xfb3081) }, // #FB3081 (pink)
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vUv = uv;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          // Create a smooth two-color gradient
          // Map UV to angle for smooth circular interpolation
          float angle = vUv.x * 6.28318530718; // 2 * PI

          // Use sine wave to create smooth 0-1 range that loops seamlessly
          float t = (sin(angle) + 1.0) * 0.5; // Convert from -1,1 to 0,1

          // Simple two-color gradient: purple to pink and back
          vec3 color = mix(color1, color2, t);

          // Simple lighting for 3D effect
          vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
          float lightIntensity = max(dot(vNormal, lightDir), 0.6);

          color = color * lightIntensity;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    // Create sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    sphereRef.current = sphere;
    scene.add(sphere);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (sphereRef.current) {
        // Continuous rotation only on Y-axis
        sphereRef.current.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }

      if (rendererRef.current) {
        if (currentMount && currentMount.contains(rendererRef.current.domElement)) {
          currentMount.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
        rendererRef.current = null;
      }

      if (sceneRef.current) {
        sceneRef.current.clear();
        sceneRef.current = null;
      }

      if (sphereRef.current) {
        sphereRef.current = null;
      }
    };
  }, []);

  // Calculate position and size based on scroll
  const calculatePosition = () => {
    const heroEnd = 50;
    const shrinkingPhaseEnd = 600;
    const halfPageThreshold = documentHeight * 0.5; // middle of the page
    const fadeRange = 200; // scroll distance for fading

    // --- FIXED: One-direction fade logic ---
    // Fully visible until halfway; then fade out once; fade back in only when scrolling above again
    let opacity = 1;

    if (scrollY > halfPageThreshold && scrollY <= halfPageThreshold + fadeRange) {
      // fade from 1 → 0 as you move through the fade zone
      opacity = 1 - (scrollY - halfPageThreshold) / fadeRange;
    } else if (scrollY > halfPageThreshold + fadeRange) {
      // completely hidden past fade zone
      opacity = 0;
    } else if (scrollY < halfPageThreshold) {
      // fully visible again when above halfway
      opacity = 1;
    }

    // Clamp to [0,1]
    opacity = Math.min(Math.max(opacity, 0), 1);

    // ---- Position / scale logic stays same ----
    if (isMobile) {
      const isInHeroSection = scrollY < heroEnd;
      return {
        left: "50%",
        top: "50%",
        transform: isInHeroSection ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.5)",
        transition: "all 0.8s ease-out, opacity 0.4s ease-out",
        width: "300px",
        height: "300px",
        pointerEvents: isInHeroSection ? "auto" : "none",
        opacity,
      };
    }

    if (scrollY < heroEnd) {
      return {
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) scale(1)",
        transition: "all 0.8s ease-out, opacity 0.4s ease-out",
        width: "300px",
        height: "300px",
        opacity,
      };
    } else if (scrollY < shrinkingPhaseEnd) {
      const progress = (scrollY - heroEnd) / (shrinkingPhaseEnd - heroEnd);
      const scale = 0.5 - progress * 0.2;
      return {
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) scale(${scale})`,
        transition: "all 1s ease-out, opacity 0.4s ease-out",
        width: "300px",
        height: "300px",
        opacity,
      };
    } else {
      return {
        left: "-40px",
        top: "300px",
        transform: "scale(0.3)",
        transition: "all 1s ease-out, opacity 0.4s ease-out",
        width: "300px",
        height: "300px",
        opacity,
      };
    }
  };

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none z-0 ${isMobile ? "absolute" : "fixed"}`}
      style={{
        ...calculatePosition(),
      }}
    />
  );
};

export default FloatingThreeDSphere;
