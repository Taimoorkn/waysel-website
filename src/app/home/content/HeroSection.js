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
          .split("")
          .map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return `<span class="letter-span" style="display: inline-block;">${char}</span>`;
          })
          .join("");
        element.innerHTML = wrappedText;
        return element.querySelectorAll(".letter-span");
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
                gsap.fromTo(
                  letters,
                  { y: -30, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.03,
                    ease: "power2.out",
                  }
                );
              },
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
    <section className="relative mt-[200px] flex min-h-screen items-start justify-between gap-24 overflow-hidden bg-black">
      {/* Left sidebar text */}
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
        <div className="space-y-[10px] text-start font-neueMontreal text-3xl font-medium !leading-[0.8] !tracking-[-1px] text-[#EFEEEC] sm:text-8xl">
          <h1>Start building websites</h1>
          <h1>people remember.</h1>
        </div>
        <div className="mt-8 flex flex-col items-start space-y-4 font-neueMontreal text-sm font-medium sm:mt-10 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 sm:text-base md:mt-12 md:space-x-6 md:text-lg lg:mt-16 lg:space-x-8 lg:text-xl xl:space-x-[42px] xl:text-[21px]">
          {[
            { href: "/login", label: "Become a Member" },
            { href: "/get-started", label: "Abous Us" },
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => (heroLinksRef.current[index] = el)}
              className="w-full rounded-md bg-[#efeeec] px-4 py-3 text-center leading-[1] text-[#131313] sm:w-auto sm:px-5 sm:py-4 md:px-6 md:py-5 lg:px-7 lg:py-5 xl:px-8 xl:py-6"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom tagline - positioned absolutely */}
      <div className="absolute bottom-8 left-4 right-4 z-20 max-w-xs sm:bottom-12 sm:left-6 sm:right-6 sm:max-w-sm md:bottom-16 md:left-8 md:right-8 md:max-w-md lg:bottom-20 lg:left-12 lg:right-auto lg:max-w-lg xl:left-16 xl:max-w-lg">
        <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
          Waysel came from constantly digging through old projects wondering, 'How did I build that
          again?' It is basically our personal toolbox, packed with components, techniques, tricks
          and tutorials—and it will keep growing.
        </p>
      </div>

      {/* Cross indicator in bottom right */}
      <div className="absolute bottom-32 right-8 z-10 hidden md:bottom-40 md:right-16 lg:bottom-48 lg:right-32 lg:block xl:right-48">
        <svg
          width="80"
          height="80"
          className="md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32"
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
