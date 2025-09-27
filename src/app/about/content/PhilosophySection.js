"use client";

import React from "react";
import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="section relative bg-transparent">
      {/* Gradient spotlight effect at top */}
      <div
        className="absolute left-1/2 top-0 -z-10 h-[400px] w-[800px] -translate-x-1/2 transform"
        style={{
          background: "linear-gradient(180deg, rgba(251, 48, 129, 0.3) 0%, rgba(186, 85, 211, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
          filter: "blur(60px)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center xl:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="HeadingH2 text-text-primary">Our philosophy</h2>
        </motion.div>

        {/* Philosophy Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Card with gradient border */}
          <div className="rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px">
            <div className="h-full rounded-[32px] bg-card px-8 py-12 xl:px-16 xl:py-20">
              <div className="space-y-8 xl:space-y-12">
                <motion.p
                  className="HeadingH4 leading-relaxed text-text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our mission is to build products that are powered by smart automation & deployed on secure, infinitely scalable infrastructure.
                </motion.p>

                <motion.p
                  className="HeadingH4 leading-relaxed text-text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  We don't just follow standards—we establish new ones for your market.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;