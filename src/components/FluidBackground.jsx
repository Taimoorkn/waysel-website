"use client";
import { useEffect, useRef } from "react";
import Fluid from "webgl-fluid";

export default function FluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Resize to fill screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Enable pointer input
    canvas.style.pointerEvents = "auto";
    canvas.style.touchAction = "none"; // Prevent scrolling on mobile

    // Initialize fluid simulation
    Fluid(canvas, {
      SIM_RESOLUTION: 256,
      DYE_RESOLUTION: 1024,
      DENSITY_DISSIPATION: 0.97,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE_ITERATIONS: 30,
      SPLAT_RADIUS: 0.015,
      SPLAT_FORCE: 8000,
      BLOOM: true,
      BLOOM_INTENSITY: 0.7,
      COLORFUL: true,
      COLOR: { r: 255, g: 0, b: 200 },
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: false,
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="fluid-canvas"
      className="fixed inset-0 w-full h-full z-10"
      style={{
        cursor: "crosshair",
        background: "black",
        pointerEvents: "auto",
      }}
    />
  );
}
