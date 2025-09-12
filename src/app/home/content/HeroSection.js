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
          ].map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => (heroLinksRef.current[index] = el)}
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
          Waysel came from constantly digging through old projects wondering, 'How did I build that
          again?' It is basically our personal toolbox, packed with components, techniques, tricks
          and tutorials—and it will keep growing.
        </p>
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
