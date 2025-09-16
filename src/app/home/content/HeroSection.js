"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextField from "../../../components/TextField";
import Button from "@/components/Button";

const HeroSection = () => {
  const [showWebGL, setShowWebGL] = useState(false);

  useEffect(() => {
    console.log("Starting WebGL initialization...");

    // Load Unicorn Studio library first
    if (!window.UnicornStudio) {
      console.log("Loading UnicornStudio script...");
      window.UnicornStudio = { isInitialized: !1 };
      var i = document.createElement("script");
      i.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
      i.onload = function () {
        console.log("UnicornStudio script loaded, initializing...");
        window.UnicornStudio.isInitialized ||
          (UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
        console.log("UnicornStudio initialized, waiting 2 seconds...");

        // Delay showing WebGL by 2 seconds after script loads
        setTimeout(() => {
          console.log("Showing WebGL now");
          setShowWebGL(true);

          // Reinitialize UnicornStudio after DOM element is added
          setTimeout(() => {
            if (window.UnicornStudio && window.UnicornStudio.init) {
              console.log("Reinitializing UnicornStudio for new DOM elements...");
              window.UnicornStudio.init();
            }
          }, 100);
        }, 1000);
      };
      i.onerror = function () {
        console.error("Failed to load UnicornStudio script");
      };
      (document.head || document.body).appendChild(i);
    } else {
      console.log("UnicornStudio already exists, waiting 2 seconds...");
      // If script already exists, just delay showing WebGL
      setTimeout(() => {
        console.log("Showing WebGL now");
        setShowWebGL(true);

        // Reinitialize UnicornStudio after DOM element is added
        setTimeout(() => {
          if (window.UnicornStudio && window.UnicornStudio.init) {
            console.log("Reinitializing UnicornStudio for new DOM elements...");
            window.UnicornStudio.init();
          }
        }, 100);
      }, 1000);
    }
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-start overflow-hidden px-4 pt-[120px] sm:px-9 sm:pt-[200px]">
      {/* Unicorn Studio WebGL mesh background */}
      {showWebGL && (
        <div
          data-us-project="u8G0keiRdDw7PbxSpQ3N"
          className="absolute inset-0 -z-20 h-full w-full"
        ></div>
      )}
      {/* Overlay to cover watermark - adjust position as needed */}
      <div className="absolute bottom-6 left-0 right-0 -z-10 mx-auto h-16 w-48 bg-[#090909]" />

      {/* Left sidebar text */}
      <div className="flex w-full items-start justify-between gap-4 lg:gap-24">
        <div className="hidden items-center justify-between pr-8 pt-6 font-neueMontreal text-sm font-medium text-muted lg:flex lg:pr-20 lg:text-lg">
          <div className="flex gap-4 md:gap-8 lg:gap-12">
            <div className="flex flex-col space-y-1">
              {["Buttons", "Components", "Transitions", "Animations", "Loaders"].map(
                (item, index) => (
                  <span key={index}>{item}</span>
                )
              )}
            </div>
            <div className="flex flex-col space-y-1">
              {["Documentation", "Tools", "References", "Tutorials"].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex w-full flex-col items-start justify-start lg:w-auto lg:flex-1">
          <div className="space-y-[8px] text-start font-neueMontreal text-3xl font-medium !leading-[0.9] !tracking-[-1px] text-primary sm:space-y-[10px] sm:text-5xl md:text-6xl lg:text-[94px]">
            <div className="overflow-hidden">
              <motion.h1
                className="break-words"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Start building websites
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="break-words"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                people remember.
              </motion.h1>
            </div>
          </div>
          <motion.div
            className="mt-6 flex w-full flex-col items-start gap-3 font-neueMontreal text-sm font-medium sm:mt-8 sm:flex-row sm:items-center sm:gap-4 sm:text-base lg:mt-12"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Button variant="primary" href="/login" className="w-full sm:w-auto">
              Become a Member
            </Button>
            <Button variant="secondary" href="/get-started" className="w-full sm:w-auto">
              About Us
            </Button>
          </motion.div>
          <div className="mt-12 max-w-md sm:mt-16 lg:mt-20">
            <p className="font-neueMontreal text-sm font-medium leading-relaxed text-primary sm:text-base sm:leading-snug">
              Waysel came from constantly digging through old projects wondering, &apos;How did I
              build that again?&apos; It is basically our personal toolbox, packed with components,
              techniques, tricks and tutorials—and it will keep growing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
