"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";

const DifferenceSection = () => {
  return (
    <section className="section relative bg-transparent">
      <div className="flex gap-24">
        {/* First Section - Left - Independent content area */}
        <motion.div
          className="flex w-1/2 flex-col items-start justify-between bg-primary_bg pl-12 xl:py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="HeadingH3">
              The{" "}
              <span className="italic">
                <GradientText>WAYSEL</GradientText>
              </span>{" "}
              difference
            </h2>
          </motion.div>
          <div className="flex flex-col gap-12 font-satoshi text-[32px] leading-[52px] tracking-[-0.03em]">
            <motion.p
              className="text-text-tertiary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              We spend more time figuring out what you're trying to do than most teams spend designing.
            </motion.p>
            <motion.p
              className="font-medium text-text-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              That's because good output comes from clarity not just vibes.
            </motion.p>
          </div>
        </motion.div>
        {/* Second Section - Right - Independent gradient border box */}
        <motion.div
          className="h-[500px] w-1/2 rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="h-full rounded-[32px] bg-card"></div>
        </motion.div>
      </div>

      {/* Gradient vector blur at bottom edge */}
      <div className="oval-blur bottom-[-10%] right-0 z-0 -translate-x-1/2 -translate-y-1/2 transform" />
    </section>
  );
};

export default DifferenceSection;
