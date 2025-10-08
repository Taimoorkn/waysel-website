"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";

const ThingsWeBuildSection = () => {
  return (
    <section className="section relative bg-primary_bg overflow-hidden">
      {/* Soft oval blur accent */}
      <div className="oval-blur absolute left-1/2 top-[60%] -z-10 -translate-x-1/2 -translate-y-1/2 transform" />

      <div className="flex flex-col gap-16 xl:flex-row xl:gap-24">
        {/* Left Side: Intro Copy */}
        <motion.div
          className="flex w-full flex-col justify-center gap-8 px-6 py-8 xl:w-1/2 xl:gap-12 xl:py-12 xl:pl-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="HeadingH3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            THINGS WE <GradientText>BUILD</GradientText>
          </motion.h2>

          <motion.p
            className="text-text-secondary font-medium text-lg leading-8 tracking-[-0.03em] xl:text-[28px] xl:leading-[46px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We build like we know your product better than you do.
          </motion.p>

          <motion.div
            className="flex flex-col gap-6 font-satoshi text-lg leading-8 tracking-[-0.03em] text-text-tertiary xl:text-[22px] xl:leading-[38px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Whether you’ve got an MVP, a half-finished doc, or no roadmap at all — we help you make sense of it, build
              it right, and get it out.
            </p>
            <p>We don’t just “design experiences.” We wire them, test them, run them under stress, and build the version that actually makes sense.</p>
            <p className="font-medium text-text-secondary">
              Design-led development. Infra-Aware UI. Marketing built like product. Everything versioned, tracked, and tested.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side: Pillars / Gradient Card */}
        <motion.div
          className="relative w-full rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px xl:w-1/2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex h-full w-full flex-col justify-between rounded-[31px] bg-card px-8 py-10 xl:px-16 xl:py-20">
            <motion.h3
              className="HeadingH5 mb-8 text-text-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Pillars we build on
            </motion.h3>

            <div className="flex flex-col gap-8 xl:gap-12">
              {[
                "Interface-first development",
                "Outcome-based marketing infrastructure",
                "Strategy baked in, never bolted on",
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  className="group flex flex-col border-b border-border-secondary pb-4 xl:pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <span className="BodyTextBold text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                    {pillar}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThingsWeBuildSection;
