"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";

const DifferenceSection = () => {
  return (
    <section className="section relative bg-primary_bg">
      <div className="flex flex-col gap-12 xl:flex-row xl:gap-24">
        {/* First Section - Mobile: Full width, XL: Left half */}
        <motion.div
          className="flex w-full flex-col items-start gap-12 px-6 py-8 xl:w-1/2 xl:gap-[88px] xl:py-8 xl:pl-12"
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
          <div className="flex flex-col gap-6 font-satoshi text-lg leading-8 tracking-[-0.03em] xl:gap-12 xl:text-[32px] xl:leading-[52px]">
            <motion.p
              className="text-text-tertiary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              We spend more time figuring out what you&apos;re trying to do than most teams spend designing.
            </motion.p>
            <motion.p
              className="font-medium text-text-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              That&apos;s because good output comes from clarity not just vibes.
            </motion.p>
          </div>
        </motion.div>
        {/* Second Section - Mobile: Full width, XL: Right half */}
        <motion.div
          className="relative h-[300px] w-full rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px xl:h-[500px] xl:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="oval-blur absolute left-1/2 top-[60%] z-0 -translate-x-1/2 -translate-y-1/2 transform" />
          <div className="flex relative justify-center z-10 rounded-[31px] bg-card">
            <Image
              src="/images/bulb.svg"
              width={600}
              height={400}
              alt="AI-powered Gemini illustration"
              className="h-[250px] w-[250px] p-10 object-contain xl:h-[500px] xl:w-[500px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferenceSection;
