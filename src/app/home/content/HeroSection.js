"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroLinksRef = useRef([]);

  useEffect(() => {
    // GSAP animations for hero section links
    if (heroLinksRef.current.length > 0) {
      gsap.fromTo(
        heroLinksRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.5,
        }
      );

      // Function to wrap each letter in a span
      const wrapLetters = (element) => {
        const text = element.textContent;
        const wrappedText = text
          .split('')
          .map((char, index) => {
            if (char === ' ') {
              return ' ';
            }
            return `<span class="letter-span" style="display: inline-block;">${char}</span>`;
          })
          .join('');
        element.innerHTML = wrappedText;
        return element.querySelectorAll('.letter-span');
      };

      // Hover animations
      heroLinksRef.current.forEach((link) => {
        if (link) {
          const letters = wrapLetters(link);

          const handleMouseEnter = () => {
            gsap.to(letters, {
              y: 30,
              opacity: 0,
              duration: 0.3,
              stagger: 0.03,
              ease: "power2.in",
              onComplete: () => {
                gsap.fromTo(letters,
                  { y: -30, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.03,
                    ease: "power2.out",
                  }
                );
              }
            });
          };

          const handleMouseLeave = () => {
            gsap.set(letters, { y: 0, opacity: 1 });
          };

          link.addEventListener("mouseenter", handleMouseEnter);
          link.addEventListener("mouseleave", handleMouseLeave);

          return () => {
            link.removeEventListener("mouseenter", handleMouseEnter);
            link.removeEventListener("mouseleave", handleMouseLeave);
          };
        }
      });
    }
  }, []);

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
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Unicorn Studio WebGL mesh background */}
      <div
        id="unicorn-canvas"
        data-us-alttext="graphic background"
        data-us-project-src="/mesh.json"
        data-us-disablemobile="false"
        data-us-scale="1"
        data-us-dpi="1.5"
        data-us-production="false"
        className="absolute inset-0 h-full w-full"
        style={{ width: "100%", height: "100%" }}
      ></div>

      {/* Left sidebar text */}
      <div className="absolute left-4 sm:left-8 md:left-16 lg:left-20 xl:left-[107px] top-32 sm:top-40 md:top-48 lg:top-56 xl:top-[258px] z-20 font-neueMontreal text-sm sm:text-base md:text-lg lg:text-xl xl:text-[21px] font-medium text-[#9c9b9a] hidden md:block">
        <div className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col space-y-1">
            {["Buttons", "Components", "Transitions", "Animations", "Loaders"].map(
              (item, index) => (
                <span key={index}>{item}</span>
              )
            )}
          </div>
          <div className="flex flex-col space-y-1">
            {" "}
            {["Documentation", "Tools", "References", "Tutorials"].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative px-4 sm:px-8 md:px-0 md:ml-64 lg:ml-96 xl:ml-[670px] mt-20 sm:mt-28 md:mt-36 lg:mt-48 xl:mt-[234px] flex max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-[844px] flex-col items-start justify-start">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 text-start font-neueMontreal text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[118px] font-medium leading-[0.8] text-[#EFEEEC]">
          <h1>Start building</h1>
          <h1>websites people</h1>
          <h1>remember.</h1>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-[42px] font-neueMontreal text-sm sm:text-base md:text-lg lg:text-xl xl:text-[21px] font-medium">
          {[
            { href: "/login", label: "Become a Member" },
            { href: "/get-started", label: "Abous Us" },
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => (heroLinksRef.current[index] = el)}
              className="rounded-md bg-[#efeeec] px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-3 sm:py-4 md:py-5 lg:py-5 xl:py-6 leading-[1] text-[#131313] w-full sm:w-auto text-center">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom tagline - positioned absolutely */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 right-4 sm:right-6 md:right-8 lg:right-auto z-20 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
        <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
          Waysel came from constantly digging through old projects wondering, 'How did I build that
          again?' It is basically our personal toolbox, packed with components, techniques, tricks
          and tutorials—and it will keep growing.
        </p>
      </div>

      {/* Cross indicator in bottom right */}
      <div className="absolute bottom-32 md:bottom-40 lg:bottom-48 right-8 md:right-16 lg:right-32 xl:right-48 z-10 hidden lg:block">
        <svg
          width="80"
          height="80"
          className="md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
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
