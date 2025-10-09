"use client";

import React from "react";
import { MonitorSmartphone, BarChart3, BrainCircuit } from "lucide-react";
import GradientText from "@/components/GradientText";

const ThingsWeBuildSection = () => {
  return (
    <section className="section relative overflow-hidden bg-primary_bg">
      {/* Soft background blur accent */}
      <div className="oval-blur absolute left-1/2 top-[60%] -z-10 -translate-x-1/2 -translate-y-1/2 transform" />

      <div className="flex flex-col gap-16 xl:flex-row xl:gap-24">
        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="flex w-full flex-col justify-center gap-8 px-6 py-8 xl:w-1/2 xl:gap-12 xl:py-12 xl:pl-12">
          <h2 className="HeadingH3">
            THINGS WE <GradientText>BUILD</GradientText>
          </h2>

          <p className="text-lg font-medium leading-8 tracking-[-0.03em] text-text-secondary xl:text-[28px] xl:leading-[46px]">
            We build like we know your product better than you do.
          </p>

          <div className="flex flex-col gap-6 font-satoshi text-lg leading-8 tracking-[-0.03em] text-text-tertiary xl:text-[22px] xl:leading-[38px]">
            <p>
              Whether you’ve got an MVP, a half-finished doc, or no roadmap at all — we help you make sense of it, build
              it right, and get it out.
            </p>
            <p>
              We don’t just “design experiences.” We wire them, test them, run them under stress, and build the version
              that actually makes sense.
            </p>
            <p className="font-medium text-text-secondary">
              Design-led development. Infra-aware UI. Marketing built like product. Everything versioned, tracked, and
              tested.
            </p>
          </div>
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="relative w-full px-6 py-10 xl:w-1/2 xl:px-12 xl:py-16">
          <h3 className="HeadingH5 mb-10 font-bold text-text-primary">Pillars we build on</h3>

          <div className="flex flex-col gap-6 xl:gap-8">
            {/* Pillar 1 */}
            <div className="group flex items-center gap-4 rounded-xl bg-white/5 p-4 shadow-md transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(251,48,129,0.15)]">
              <MonitorSmartphone
                className="h-8 w-8 text-[#FB3081] transition-colors duration-300 group-hover:text-[#FB3081]/80"
                strokeWidth={1.6}
              />
              <div className="flex flex-col">
                <span className="font-satoshi text-xl font-semibold text-text-primary transition-colors duration-300 group-hover:text-[#FB3081] xl:text-2xl">
                  Interface-first development
                </span>
                <span className="text-sm text-text-tertiary transition-colors duration-300 group-hover:text-text-secondary xl:text-base">
                  Crafting intuitive, responsive interfaces that prioritize user experience from day one.
                </span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group flex items-center gap-4 rounded-xl bg-white/5 p-4 shadow-md transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(251,48,129,0.15)]">
              <BarChart3
                className="h-8 w-8 text-[#FB3081] transition-colors duration-300 group-hover:text-[#FB3081]/80"
                strokeWidth={1.6}
              />
              <div className="flex flex-col">
                <span className="font-satoshi text-xl font-semibold text-text-primary transition-colors duration-300 group-hover:text-[#FB3081] xl:text-2xl">
                  Outcome-based marketing infrastructure
                </span>
                <span className="text-sm text-text-tertiary transition-colors duration-300 group-hover:text-text-secondary xl:text-base">
                  Building marketing systems that drive measurable results and align with your goals.
                </span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group flex items-center gap-4 rounded-xl bg-white/5 p-4 shadow-md transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(251,48,129,0.15)]">
              <BrainCircuit
                className="h-8 w-8 text-[#FB3081] transition-colors duration-300 group-hover:text-[#FB3081]/80"
                strokeWidth={1.6}
              />
              <div className="flex flex-col">
                <span className="font-satoshi text-xl font-semibold text-text-primary transition-colors duration-300 group-hover:text-[#FB3081] xl:text-2xl">
                  Strategy baked in, never bolted on
                </span>
                <span className="text-sm text-text-tertiary transition-colors duration-300 group-hover:text-text-secondary xl:text-base">
                  Embedding strategic thinking into every phase to ensure cohesive, impactful outcomes.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsWeBuildSection;
