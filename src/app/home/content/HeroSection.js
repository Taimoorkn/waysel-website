"use client";

import Link from "next/link";
import { useEffect } from "react";
import AnimatedText from "../../../components/AnimatedText";

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
    <section className="relative mt-[200px] flex min-h-screen flex-col items-start overflow-hidden">
      {/* Unicorn Studio WebGL mesh background */}
      <div
        id="unicorn-canvas"
        data-us-alttext="graphic background"
        data-us-project-src="/mesh.json"
        data-us-disablemobile="false"
        data-us-scale="1"
        data-us-dpi="1.5"
        data-us-production="false"
        className="absolute inset-0 -z-10 h-full w-full"
        style={{ width: "100%", height: "100%" }}
      ></div>

      {/* Left sidebar text */}
      <div className="flex items-start justify-between gap-24">
        <div className="hidden items-center justify-between pr-20 pt-6 font-neueMontreal text-sm font-medium text-[#9c9b9a] sm:flex sm:text-lg">
          <div className="flex gap-4 sm:gap-8 md:gap-12">
            <div className="flex flex-col">
              {["Buttons", "Components", "Transitions", "Animations", "Loaders"].map(
                (item, index) => (
                  <span key={index}>{item}</span>
                )
              )}
            </div>
            <div className="flex flex-col">
              {["Documentation", "Tools", "References", "Tutorials"].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex w-full flex-col items-start justify-start">
          <div className="space-y-[10px] text-start font-neueMontreal text-3xl font-medium !leading-[0.9] !tracking-[-1px] text-[#EFEEEC] sm:text-8xl">
            <h1>Start building websites</h1>
            <h1>people remember.</h1>
          </div>
          <div className="mt-8 flex items-center justify-between gap-2 font-neueMontreal text-sm font-medium sm:mt-12 sm:text-[17px]">
            {[
              { href: "/login", label: "Become a Member" },
              { href: "/get-started", label: "Abous Us" },
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="button w-full rounded-md bg-[#efeeec] px-4 py-3 text-center text-[#131313] sm:w-auto sm:px-[26px] sm:py-[15px]"
              >
                <AnimatedText text={link.label} />
              </Link>
            ))}
          </div>
          <div className="mt-20 max-w-md">
            <p className="font-neueMontreal text-sm font-medium leading-snug text-[#EFEEEC] sm:text-[17px]">
              Waysel came from constantly digging through old projects wondering, 'How did I build
              that again?' It is basically our personal toolbox, packed with components, techniques,
              tricks and tutorials—and it will keep growing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
