"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="section relative bg-transparent">
      {/* Gradient spotlight effect at top */}
      <div className="absolute left-[49.12%] top-0 -z-10 -translate-x-1/2 transform">
        <Image src="/images/filler/spotlight.png" alt="spotlight" width={800} height={600} className=" " />
      </div>

      <div className="flex flex-col">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center xl:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="HeadingH2">Our philosophy</h2>
        </motion.div>

        {/* Main Philosophy Container */}
        <motion.div
          className="relative rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex h-full flex-col rounded-[32px] bg-card xl:flex-row">
            {/* First Section - Mobile: Full width, XL: Left half */}
            <div className="flex h-full w-full flex-col items-start justify-center gap-6 rounded-t-[32px] bg-primary_bg px-6 py-12 font-satoshi text-lg leading-8 tracking-[-0.03em] xl:w-1/2 xl:gap-12 xl:rounded-l-[32px] xl:rounded-t-none xl:px-12 xl:py-20 xl:text-[32px] xl:leading-[52px]">
              <motion.p
                className="text-text-tertiary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Our mission is to build products that are powered by smart automation & deployed on secure, infinitely
                scalable infrastructure.
              </motion.p>
              <motion.p
                className="font-medium text-text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                We don&apos;t just follow standards—we establish new ones for your market.
              </motion.p>
            </div>

            {/* Second Section - Mobile: Full width, XL: Right half */}
            <div className="flex h-[300px] w-full flex-col items-start justify-center gap-4 rounded-b-[32px] bg-card px-6 py-8 xl:w-1/2 xl:rounded-b-none xl:rounded-r-[32px] xl:px-16"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
