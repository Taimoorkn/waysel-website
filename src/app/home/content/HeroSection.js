"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import FluidBackground from "@/components/FluidBackground";

const HeroSection = () => {
  const [showWebGL, setShowWebGL] = useState(false);

  useEffect(() => {
    console.log("Starting WebGL initialization...");

    // Load Unicorn Studio library first
    if (!window.UnicornStudio) {
      console.log("Loading UnicornStudio script...");
      window.UnicornStudio = { isInitialized: !1 };
      var i = document.createElement("script");
      i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
      i.onload = function () {
        console.log("UnicornStudio script loaded, initializing...");
        window.UnicornStudio.isInitialized || (UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
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
    <section className="section relative flex h-[100vh] items-center overflow-hidden bg-transparent">
      <FluidBackground />
      {/* Unicorn Studio WebGL mesh background */}
      {/* {showWebGL && <div data-us-project="u8G0keiRdDw7PbxSpQ3N" className="absolute inset-0 -z-20 h-full w-full" />} */}
      {/* Overlay to cover watermark - adjust position as needed */}
      {/* <div className="absolute bottom-6 left-0 right-0 -z-10 mx-auto h-16 w-48" /> */}
      <div className="z-20 mx-auto flex max-w-4xl flex-col items-center justify-between">
        {/* Main content */}
        <div className="HeadingH1 px-4 text-center md:px-0">
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words"
              initial={{ y: "112%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.1, 0.8, 0.2, 1] }}
            >
              We design with intent,
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words"
              initial={{ y: "112%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.1, 0.8, 0.2, 1] }}
            >
              build with precision,
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="gradient-primary break-words pb-3"
              initial={{ y: "112%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.1, 0.8, 0.2, 1] }}
            >
              and launch with impact.
            </motion.h1>
          </div>
        </div>

        <div className="mt-1 xl:mt-5">
          <div className="BodyText text-center">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.1, 0.8, 0.2, 1] }}
              >
                We design, build, and ship product-grade web systems,
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: [0.1, 0.8, 0.2, 1] }}
              >
                for founders, teams, and anyone trying to make something work.
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          className="mt-6 flex items-center gap-4 xl:mt-12 xl:gap-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <Button variant="primary" href="/contact">
            Start something
          </Button>
          <Button variant="secondary" href="/contact">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
