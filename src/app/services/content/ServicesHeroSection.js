"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";

const ServicesHeroSection = () => {
  return (
    <section className="section relative min-h-screen overflow-hidden bg-transparent pt-[80px] xl:pt-[150px]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center">
        {/* Main content */}
        <div className="HeadingH1">
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="break-words text-center"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.1, 0.8, 0.2, 1] }}
            >
              Comprehensive solutions for
            </motion.h1>
          </div>
          <div style={{ clipPath: "inset(0 0 -0.7rem 0)" }}>
            <motion.h1
              className="gradient-primary break-words text-center"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.1, 0.8, 0.2, 1] }}
            >
              modern digital challenges
            </motion.h1>
          </div>
        </div>

        <div className="xl:mt-8">
          <div className="BodyText text-center">
            <div className="overflow-hidden">
              <motion.p
                className="max-w-4xl"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.1, 0.8, 0.2, 1] }}
              >
                From strategic design to cloud-native development, we deliver end-to-end solutions that{" "}
                <span className="BodyTextBold">transform your ideas into scalable digital realities.</span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;