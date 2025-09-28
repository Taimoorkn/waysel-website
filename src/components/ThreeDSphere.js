"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDSphere = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);
  const animationIdRef = useRef(null);

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
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create sphere geometry (20% bigger)
    const geometry = new THREE.SphereGeometry(2.4, 32, 32);

    // Create simple material with linear gradient
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x7A66E1) }, // #7A66E1
        color2: { value: new THREE.Color(0xFB3081) }, // #FB3081
        color3: { value: new THREE.Color(0xF8805F) }  // #F8805F
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
        uniform vec3 color3;
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          // Create a truly seamless circular gradient
          // Map UV to angle for smooth circular interpolation
          float angle = vUv.x * 6.28318530718; // 2 * PI

          // Use sine wave shifted to create smooth 0-1 range that loops seamlessly
          float t = (sin(angle - 1.57079632679) + 1.0) * 0.5; // sin(x - π/2) = -cos(x), shifted to 0-1

          // Create three zones that blend smoothly in a circle
          vec3 color;

          if (t < 0.333) {
            // Zone 1: color1 to color2
            float localT = t * 3.0;
            color = mix(color1, color2, smoothstep(0.0, 1.0, localT));
          } else if (t < 0.666) {
            // Zone 2: color2 to color3
            float localT = (t - 0.333) * 3.0;
            color = mix(color2, color3, smoothstep(0.0, 1.0, localT));
          } else {
            // Zone 3: color3 back to color1 (seamless loop)
            float localT = (t - 0.666) * 3.0;
            color = mix(color3, color1, smoothstep(0.0, 1.0, localT));
          }

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

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && rendererRef.current) {
        const size = Math.min(window.innerWidth * 0.3, 300);
        rendererRef.current.setSize(size, size);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);

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

  return (
    <div
      ref={mountRef}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
      style={{
        width: '300px',
        height: '300px',
        pointerEvents: 'none'
      }}
    />
  );
};

export default ThreeDSphere;