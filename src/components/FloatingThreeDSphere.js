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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window dimensions
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);

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
      setWindowWidth(window.innerWidth);
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
    // Define hero section height - accounting for the hero section's actual height
    // The hero section has min-h-screen and padding, so let's use a more accurate calculation
    const heroSectionHeight = windowHeight;

    // Check if we're in the hero section
    const isInHeroSection = scrollY < heroSectionHeight * 0.7; // Reduced buffer for better detection

    if (isInHeroSection) {
      // Position sphere in the center of the hero section's visible area
      // Account for hero section padding: pt-[80px] xl:pt-[150px]
      const heroPaddingTop = windowWidth >= 1280 ? 150 : 80; // xl breakpoint is 1280px

      // Center of the hero section's content area
      const heroContentHeight = windowHeight - heroPaddingTop;
      const centerY = heroPaddingTop + (heroContentHeight / 2);

      // Add gentle floating animation
      const floatOffset = Math.sin(Date.now() * 0.002) * 15;

      return {
        left: '50%',
        top: `${centerY + floatOffset}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    } else {
      // Floating mode when scrolled past hero
      const maxTop = windowHeight - 250; // Keep 250px from bottom
      const minTop = 50; // Keep 50px from top

      // Calculate how far we've scrolled past the hero
      const scrollPastHero = scrollY - heroSectionHeight * 0.7;

      // Very gentle movement - only move 15% of scroll distance past hero
      const scrollMovement = scrollPastHero * 0.15;

      // Start floating from a good position
      const basePosition = windowHeight * 0.3;
      let topPosition = basePosition + scrollMovement;

      // Clamp to stay within viewport
      topPosition = Math.max(minTop, Math.min(topPosition, maxTop));

      // Add gentle floating animation
      const floatOffset = Math.sin(Date.now() * 0.002) * 15;

      return {
        left: '50px',
        top: `${topPosition + floatOffset}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    }
  };

  return (
    <div
      ref={mountRef}
      className="fixed z-10 pointer-events-none"
      style={{
        width: '200px',
        height: '200px',
        ...calculatePosition()
      }}
    />
  );
};

export default FloatingThreeDSphere;