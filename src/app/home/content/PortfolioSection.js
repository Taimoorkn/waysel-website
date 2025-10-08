"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";
import GradientText from "@/components/GradientText";

// Single Project Component
function ProjectSection({ title, description, imageSrc, isReversed = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Transform based on scroll progress (0 → 1)
  const column1YRaw = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const column2YRaw = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const column3YRaw = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Add smooth spring physics
  const springConfig = { stiffness: 70, damping: 25, mass: 0.8 };
  const column1Y = useSpring(column1YRaw, springConfig);
  const column2Y = useSpring(column2YRaw, springConfig);
  const column3Y = useSpring(column3YRaw, springConfig);

  const textSection = (
    <div
      className={`flex w-full flex-col justify-center gap-6 rounded-t-[32px] bg-card p-8 xl:h-full xl:w-1/2 xl:rounded-none xl:px-16 ${
        isReversed ? "rounded-l-[32px] xl:rounded-r-[32px]" : "xl:rounded-l-[32px]"
      }`}
    >
      <h2 className="HeadingH4">
        <GradientText>{title}</GradientText>
      </h2>
      <p className="BodyText">{description}</p>
    </div>
  );

  const imageSection = (
    <div
      className={`relative flex h-80 w-full items-center justify-between gap-6 overflow-hidden rounded-b-[32px] bg-black xl:h-full xl:w-1/2 xl:rounded-none ${
        isReversed ? "xl:rounded-l-[32px]" : "xl:rounded-r-[32px]"
      }`}
    >
      {/* Gradients for smooth top/bottom fade */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-[#0D0D0C] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-[#0D0D0C] to-transparent" />

      {/* Columns */}
      <motion.div
        style={{ y: column1Y, willChange: "transform" }}
        className="-my-48 -ml-32 hidden flex-col items-center justify-center gap-6 xl:flex"
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image src={imageSrc} alt={`${title} mockup ${i + 1}`} width={450} height={280} />
          </div>
        ))}
      </motion.div>

      {/* Second column - scroll down moves up */}
      <motion.div
        style={{ y: column2Y, willChange: "transform" }}
        className="-my-32 flex flex-col items-center justify-center gap-6 xl:-my-48"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-2xl border-2 border-[#ffffff29] p-[2px]">
            <Image
              src={imageSrc}
              alt={`${title} mockup ${i + 1}`}
              width={300}
              height={188}
              className="w-full xl:w-[450px]"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{ y: column3Y, willChange: "transform" }}
        className="-my-48 -mr-32 hidden flex-col items-center justify-center gap-6 xl:flex"
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image src={imageSrc} alt={`${title} mockup ${i + 1}`} width={450} height={280} />
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div ref={ref} className="relative will-change-transform">
      <div className="oval-blur left-1/2 top-[15%] z-0 -translate-x-1/2 -translate-y-1/2 transform" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px"
      >
        <section className="relative z-10 flex min-h-[500px] flex-col items-center justify-between rounded-[32px] bg-card text-white xl:h-[65vh] xl:flex-row">
          {/* Mobile always text first */}
          <div className="xl:hidden">
            {textSection}
            {imageSection}
          </div>

          {/* Desktop layout */}
          {isReversed ? (
            <div className="hidden xl:contents">
              {imageSection}
              {textSection}
            </div>
          ) : (
            <div className="hidden xl:contents">
              {textSection}
              {imageSection}
            </div>
          )}
        </section>
      </motion.div>
    </div>
  );
}

function PortfolioSection() {
  return (
    <div className="section overflow-hidden">
      <SectionHeading
        title={
          <>
            <GradientText>Work</GradientText> we&apos;ve built,
            <br /> fixed & rescued
          </>
        }
        description="Real builds that launched and worked. Not case studies with fake testimonials."
      />

      <div className="flex flex-col gap-24 py-12">
        <ProjectSection
          title="Hospice Care Web"
          description="Crafting user-friendly, cross-platform solutions with elegant UX and solid performance."
          imageSrc="/images/portfolio/project1.svg"
          isReversed={false}
        />

        <ProjectSection
          title="E-Commerce Platform"
          description="Modern, scalable online shopping with optimized user journeys and seamless interactions."
          imageSrc="/images/portfolio/project1.svg"
          isReversed={true}
        />

        <ProjectSection
          title="Mobile Banking App"
          description="Secure, intuitive financial management focused on accessibility and trust."
          imageSrc="/images/portfolio/project1.svg"
          isReversed={false}
        />
      </div>
    </div>
  );
}

export default PortfolioSection;
