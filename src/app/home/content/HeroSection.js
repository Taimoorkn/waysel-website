"use client";

import Link from "next/link";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Load Unicorn Studio library
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
    script.async = true;

    script.onload = () => {
      console.log("Unicorn Studio script loaded successfully");
      // Check if UnicornStudio is available
      if (window.UnicornStudio) {
        console.log("UnicornStudio object found:", window.UnicornStudio);
        // Try to manually initialize
        setTimeout(() => {
          const element = document.querySelector("[data-us-project-src]");
          if (element && window.UnicornStudio) {
            console.log("Attempting manual initialization...");
            console.log("Found element:", element);
            try {
              // Try different initialization methods
              window.UnicornStudio.init();

              // Also try adding scene manually
              if (window.UnicornStudio.addScene) {
                console.log("Trying addScene...");
                window.UnicornStudio.addScene({
                  element: element,
                  projectSrc: "/mesh.json",
                });
              }
            } catch (e) {
              console.error("Manual init failed:", e);
            }
          }
        }, 500);
      } else {
        console.log("UnicornStudio object not found on window");
      }
    };

    script.onerror = () => {
      console.error("Failed to load Unicorn Studio script");
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
 
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Unicorn Studio WebGL mesh background */}
      <div
        id="unicorn-canvas"
        data-us-alttext="graphic background"
        data-us-project-src="/mesh.json"
        data-us-disablemobile="false"
        data-us-scale="1"
        data-us-dpi="1.5"
        data-us-production="true"
        className="absolute inset-0 h-full w-full"
        style={{ width: "100%", height: "100%" }}
      ></div>

      {/* Left sidebar text */}
      <div className="absolute left-[107px] top-[258px] z-20 font-neueMontreal text-[21px] font-medium text-[#9c9b9a]">
        <div className="flex gap-16">
          <div className="flex flex-col">
            {["Buttons", "Components", "Transitions", "Animations", "Loaders"].map(
              (item, index) => (
                <span key={index}>{item}</span>
              )
            )}
          </div>
          <div className="flex flex-col">
            {" "}
            {["Documentation", "Tools", "References", "Tutorials"].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative ml-[670px] mt-[234px] flex max-w-[844px] flex-col items-start justify-start">
        <div className="space-y-5 text-start font-neueMontreal text-[118px] font-medium leading-[0.8] text-[#EFEEEC]">
          <h1>Start building</h1>
          <h1>websites people</h1>
          <h1>remember.</h1>
        </div>
        <div className="mt-16 flex items-center space-x-[42px] font-neueMontreal text-[21px] font-medium">
          {[
            { href: "/login", label: "Become a Member" },
            { href: "/get-started", label: "Abous Us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md bg-[#efeeec] px-8 py-6 leading-[1] text-[#131313]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom tagline - positioned absolutely */}
      <div className="absolute bottom-16 left-8 right-8 z-20 lg:bottom-20 lg:left-12 xl:left-16 xl:right-auto xl:max-w-lg">
        <p className="text-xs leading-relaxed text-gray-500 lg:text-sm">
          Osmo came from constantly digging through old projects wondering, 'How did I build that
          again?' It is basically our personal toolbox, packed with components, techniques, tricks
          and tutorials—and it will keep growing.
        </p>
      </div>

      {/* Right side video preview */}
      <div className="absolute bottom-16 right-16 z-20 hidden xl:block">
        <div className="relative">
          {/* Video container with avatars */}
          <div className="relative h-48 w-80 overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl">
            {/* Video placeholder */}
            <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900">
              {/* Avatar strip at bottom */}
              <div className="absolute bottom-4 left-4 flex -space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-gray-700 bg-gradient-to-br from-gray-600 to-gray-700"
                  />
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800 text-xs text-gray-400">
                  +
                </div>
              </div>

              {/* Play button and timestamp */}
              <div className="absolute bottom-4 right-4 flex items-center gap-3">
                <span className="text-xs text-gray-400">00:35</span>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* VRTL WRLD label */}
              <div className="absolute right-4 top-4">
                <span className="font-mono text-xs text-gray-400">
                  VRTL
                  <br />
                  WRLD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross indicator in bottom right */}
      <div className="absolute bottom-48 right-48 z-10 hidden xl:block">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M60 0V120M0 60H120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
