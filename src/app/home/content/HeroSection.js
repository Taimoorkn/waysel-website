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
    <section className="section relative min-h-screen overflow-hidden bg-transparent pt-[110px] xl:pt-[150px]">
      {/* Unicorn Studio WebGL mesh background */}
      {/* {showWebGL && <div data-us-project="u8G0keiRdDw7PbxSpQ3N" className="absolute inset-0 -z-20 h-full w-full" />} */}
      {/* Overlay to cover watermark - adjust position as needed */}
      {/* <div className="absolute bottom-6 left-0 right-0 -z-10 mx-auto h-16 w-48" /> */}
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between border">
        {/* Main content */}
        <div className="HeadingH1">
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Curating the kind of
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              solutions you wish <br />
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="gradient-primary break-words"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              you started with.
            </motion.h1>
          </div>
        </div>

        <div className="xl:mt-8">
          <p className="BodyText text-center">
            We design, build, and ship product-grade web systems,
            <br /> for founders, teams, and anyone trying to make something work.
          </p>
        </div>
        <motion.div
          className="mt-6 flex items-center gap-8 xl:mt-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <Button variant="primary" href="/contact">
            Dis a Button
          </Button>
          <Button variant="secondary" href="/contact">
            Another Button
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
