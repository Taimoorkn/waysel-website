"use client";
import { useEffect, useRef } from "react";

export default function FluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanup = () => {};

    async function init() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const { default: Fluid } = await import("webgl-fluid");

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener("resize", resize);

      canvas.style.pointerEvents = "auto";
      canvas.style.touchAction = "none";

      // ✅ No splash on load
      Fluid(canvas, {
        // --- turn off any auto-splats ---
        IMMEDIATE: false, // no initial random splats
        AUTO: false, // no interval splats
        SPLAT_COUNT: 0, // guard: zero splats if triggered

        // --- your existing tuning ---
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

      cleanup = () => {
        window.removeEventListener("resize", resize);
      };
    }

    init();
    return () => cleanup();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="fluid-canvas"
      className="absolute inset-0 z-10 h-full w-full"
      style={{ background: "black", pointerEvents: "auto" }}
    />
  );
}
