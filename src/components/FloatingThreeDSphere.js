"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const FloatingThreeDSphere = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);
  const animationIdRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);

    // Handle scroll with throttling for smoother performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Handle resize
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

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
      antialias: true
    });
    renderer.setSize(200, 200); // Smaller for floating effect
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create sphere geometry (smaller for floating)
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);

    // Create simple material with linear gradient
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x7A66E1) }, // #7A66E1 (purple)
        color2: { value: new THREE.Color(0xFB3081) }  // #FB3081 (pink)
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
      `
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
      }

      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, []);

  // Calculate position based on scroll
  const calculatePosition = () => {
    // Keep sphere visible within the viewport
    const maxTop = windowHeight - 250; // Keep 250px from bottom
    const minTop = 50; // Keep 50px from top

    // Very gentle movement - only move 20% of scroll distance
    const scrollMovement = scrollY * 0.2;

    // Calculate base position (start at 30% of screen height)
    const basePosition = windowHeight * 0.3;

    // Final position with movement constraint
    let topPosition = basePosition + scrollMovement;

    // Clamp to stay within viewport
    topPosition = Math.max(minTop, Math.min(topPosition, maxTop));

    // Add gentle floating animation
    const floatOffset = Math.sin(Date.now() * 0.002) * 15;

    return {
      left: '50px',
      top: `${topPosition + floatOffset}px`
    };
  };

  return (
    <div
      ref={mountRef}
      className="fixed z-50 pointer-events-none"
      style={{
        width: '200px',
        height: '200px',
        transition: 'top 0.1s ease-out, left 0.1s ease-out',
        ...calculatePosition()
      }}
    />
  );
};

export default FloatingThreeDSphere;