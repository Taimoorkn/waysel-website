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
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener("resize", resize);

      canvas.style.pointerEvents = "auto";
      canvas.style.touchAction = isMobile ? "pan-y" : "none";

      // webgl-fluid prevents default touch events; make these listeners passive
      // on mobile so drag scrolling still works over the hero.
      const nativeAddEventListener = canvas.addEventListener;
      if (isMobile) {
        canvas.addEventListener = function (type, listener, options) {
          if (type === "touchstart" || type === "touchmove") {
            if (typeof options === "boolean") {
              return nativeAddEventListener.call(canvas, type, listener, {
                capture: options,
                passive: true,
              });
            }

            return nativeAddEventListener.call(canvas, type, listener, {
              ...(options || {}),
              passive: true,
            });
          }

          return nativeAddEventListener.call(canvas, type, listener, options);
        };
      }

      // No splash on load.
      Fluid(canvas, {
        // turn off any auto-splats
        IMMEDIATE: false,
        AUTO: false,
        SPLAT_COUNT: 0,

        // existing tuning
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

      if (isMobile) {
        canvas.addEventListener = nativeAddEventListener;
      }

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
