"use client";
import { useEffect, useRef } from "react";

/**
 * Half-more glide smooth scrolling — balanced inertia
 * Natural feel, smoother than default, without eye strain.
 */
export default function SmoothScrollWrapper({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let current = 0;
    let target = 0;
    let rafId;

    const ease = 0.045;        // ← balanced: more glide than 0.055 but not too floaty
    const stopThreshold = 0.2; // ← smooth stop without abrupt snap

    const setBodyHeight = () => {
      document.body.style.height = `${container.getBoundingClientRect().height}px`;
    };
    setBodyHeight();
    window.addEventListener("resize", setBodyHeight);

    const animate = () => {
      target = window.scrollY;
      const diff = target - current;

      // smooth interpolation
      current += diff * ease;

      // snap when close enough to prevent jitter
      if (Math.abs(diff) < stopThreshold) current = target;

      container.style.transform = `translate3d(0, -${current}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setBodyHeight);
      document.body.style.height = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full will-change-transform"
      style={{ contain: "layout style paint" }}
    >
      {children}
    </div>
  );
}
