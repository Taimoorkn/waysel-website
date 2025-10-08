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

        {/* Right Side: Pillars / Enhanced Design */}
        <motion.div
          className="relative w-full xl:w-1/2 px-6 py-10 xl:px-12 xl:py-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="HeadingH5 mb-10 text-text-primary font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Pillars we build on
          </motion.h3>

          <div className="flex flex-col gap-6 xl:gap-8">
            {[
              {
                title: "Interface-first development",
                description: "Crafting intuitive, responsive interfaces that prioritize user experience from day one.",
                icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z",
              },
              {
                title: "Outcome-based marketing infrastructure",
                description: "Building marketing systems that drive measurable results and align with your goals.",
                icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
              },
              {
                title: "Strategy baked in, never bolted on",
                description: "Embedding strategic thinking into every phase to ensure cohesive, impactful outcomes.",
                icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-8 h-8 text-[#FB3081] group-hover:text-[#FB3081]/80 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={pillar.icon} />
                </svg>
                <div className="flex flex-col">
                  <span className="font-satoshi font-semibold text-xl xl:text-2xl text-text-primary group-hover:text-[#FB3081] transition-colors duration-300">
                    {pillar.title}
                  </span>
                  <span className="text-sm xl:text-base text-text-tertiary group-hover:text-text-secondary transition-colors duration-300">
                    {pillar.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThingsWeBuildSection;