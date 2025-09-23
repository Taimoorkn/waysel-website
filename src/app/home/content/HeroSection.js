"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <section className="section relative min-h-screen overflow-hidden pt-[120px] sm:pt-[200px]">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between border">
        {/* Main content */}
        <div className="2xl:text-h1-medium text-primary text-center"> 
          <div className="overflow-hidden">
            <motion.h1
              className="break-words"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Curating the kind of
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="break-words"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              solutions you wish <br />
              <span className="text-clip bg-transparent bg-gradient-primary">you started with.</span>
            </motion.h1>
          </div>
        </div>
        <motion.div
          className="mt-6 flex w-full flex-col items-start gap-3 text-sm font-medium sm:mt-8 sm:flex-row sm:items-center sm:gap-4 sm:text-base lg:mt-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <Button variant="primary" href="/login" className="w-full sm:w-auto">
            Dis a Button
          </Button>
          <Button variant="secondary" href="/get-started" className="w-full sm:w-auto">
            Another Button
          </Button>
        </motion.div>
        <div className="mt-12 max-w-md sm:mt-16 lg:mt-20">
          <p className="text-sm font-medium leading-relaxed text-primary sm:text-base sm:leading-snug">
            Waysel came from constantly digging through old projects wondering, &apos;How did I build that again?&apos;
            It is basically our personal toolbox, packed with components, techniques, tricks and tutorials—and it will
            keep growing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
