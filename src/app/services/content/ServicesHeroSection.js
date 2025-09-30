"use client";

import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "@/components/ui/aceternity-ui/background-ripple-effect";
const ServicesHeroSection = () => {
  return (
    <section className="section relative flex min-h-screen items-center overflow-hidden">
      <BackgroundRippleEffect />
      {/* Circular radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_25%,rgba(13,13,12,0.4)_50%,rgba(13,13,12,0.9)_75%,rgb(13,13,12)_100%)]" />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between">
        {/* Main content */}
        <div className="HeadingH1">
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.1, 0.8, 0.2, 1] }}
            >
              Comprehensive solutions
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.1, 0.8, 0.2, 1] }}
            >
              for modern
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="gradient-primary break-words pb-3"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.1, 0.8, 0.2, 1] }}
            >
              digital challenges
            </motion.h1>
          </div>
        </div>

        <div className="mt-4 xl:mt-5">
          <div className="BodyText text-center">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.1, 0.8, 0.2, 1] }}
              >
                Not fluff. Not theory. Just the kind of work that
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: [0.1, 0.8, 0.2, 1] }}
              >
                ships, scales, and stays alive in the wild.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
