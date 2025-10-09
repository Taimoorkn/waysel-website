"use client";
import { useEffect, useRef } from "react";

/**
 * Smooth inertia-style scrolling
 * Works with any Next.js + Tailwind layout
 */
export default function SmoothScrollWrapper({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let current = 0;
    let target = 0;
    const ease = 0.08; // smaller = smoother (0.05–0.1 is ideal)

    // Set body height to match scroll container
    const setBodyHeight = () => {
      document.body.style.height = `${container.getBoundingClientRect().height}px`;
    };
    setBodyHeight();
    window.addEventListener("resize", setBodyHeight);

    const smoothScroll = () => {
      target = window.scrollY;
      current += (target - current) * ease;
      container.style.transform = `translateY(-${current}px)`;
      requestAnimationFrame(smoothScroll);
    };
    requestAnimationFrame(smoothScroll);

    return () => {
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
