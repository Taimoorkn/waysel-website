"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";

const DifferenceSection = () => {
  return (
    <section className="section relative bg-transparent">
      <div className="mx-auto max-w-6xl">
        {/* Main Content Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Card with gradient border */}
          <div className="rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px">
            <div className="h-full rounded-[32px] bg-card px-8 py-16 xl:px-16 xl:py-24">
              <div className="space-y-12 xl:space-y-16">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="HeadingH2">
                    The <GradientText>WAYSEL</GradientText> difference
                  </h2>
                </motion.div>

                {/* Description */}
                <div className="space-y-8 xl:space-y-12">
                  <motion.p
                    className="HeadingH4 leading-relaxed text-text-secondary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    We spend more time figuring out what you're trying to do than most teams spend designing.
                  </motion.p>

                  <motion.p
                    className="HeadingH4 leading-relaxed text-text-secondary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    That's because good output comes from clarity not just vibes.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient blur effect */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 translate-y-1/2 transform"
            style={{
              background: "linear-gradient(0deg, rgba(251, 48, 129, 0.2) 0%, rgba(186, 85, 211, 0.1) 50%, rgba(0, 0, 0, 0) 100%)",
              filter: "blur(80px)",
            }}
          />
        </motion.div>
      </div>

      {/* Gradient vector blur at bottom edge */}
      <div className="oval-blur bottom-[-10%] right-0 z-0 -translate-x-1/2 -translate-y-1/2 transform" />
    </section>
  );
};

export default DifferenceSection;