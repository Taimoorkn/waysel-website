"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { RetroGrid } from "@/components/ui/shadcn-io/retro-grid/index";

const AboutHeroSection = () => {
  return (
    <section className="section relative flex min-h-screen items-center overflow-hidden bg-transparent">
      {/* Retro Grid Background */}
      <RetroGrid
        angle={65}
        cellSize={30}
        opacity={0.4}
        lightLineColor="#7A66E1"
        darkLineColor="#7A66E1"
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center">
        {/* Main content */}
        <div className="HeadingH1">
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words text-center"
              initial={{ y: "112%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.1, 0.8, 0.2, 1] }}
            >
              We understand what
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words text-center"
              initial={{ y: "112%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.1, 0.8, 0.2, 1] }}
            >
              <GradientText>you&apos;re building</GradientText>, even
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words pb-3 text-center"
              initial={{ y: "112%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.1, 0.8, 0.2, 1] }}
            >
              when <span className="italic">you</span> don&apos;t.
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
                WAYSEL started as a few people trying to fix what didn&apos;t make sense.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: [0.1, 0.8, 0.2, 1] }}
              >
                We&apos;ve been inside enough half-finished products, broken dashboards, and lost roadmaps
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 1.3, ease: [0.1, 0.8, 0.2, 1] }}
              >
                to know that most teams don&apos;t need more buzzwords; they need clarity.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[300px] bg-gradient-to-b from-transparent via-[rgba(13,13,12,0.5)] to-[rgb(13,13,12)]" />
    </section>
  );
};

export default AboutHeroSection;
