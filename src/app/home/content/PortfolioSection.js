"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";
import GradientText from "@/components/GradientText";

function ProjectSection({ title, description, images, isReversed = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const column1YRaw = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const column2YRaw = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const column3YRaw = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const springConfig = { stiffness: 70, damping: 25, mass: 0.8 };
  const column1Y = useSpring(column1YRaw, springConfig);
  const column2Y = useSpring(column2YRaw, springConfig);
  const column3Y = useSpring(column3YRaw, springConfig);
  const hasAnimatedRef = useRef(false);

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
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-[#0D0D0C] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-[#0D0D0C] to-transparent" />

      {/* Column 1 - tilt RIGHT */}
      <motion.div
        style={{
          y: column1Y,
          rotateY: 30,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="-my-48 -ml-48 hidden scale-[1.15] flex-col items-center justify-center gap-6 xl:flex"
      >
        {images.map((src, i) => (
          <div
            key={`col1-${i}`}
            style={{ transform: "translateZ(40px)" }}
            className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]"
          >
            <Image
              src={src}
              alt={`${title} mockup ${i + 1}`}
              width={300}
              height={188}
              className="w-full overflow-hidden rounded-2xl object-contain xl:w-[450px]"
            />
          </div>
        ))}
      </motion.div>

      {/* Column 2 - tilt LEFT */}
      <motion.div
        style={{
          y: column2Y,
          rotateY: -30,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="-my-32 flex scale-[1.1] flex-col items-center justify-center gap-6 xl:-my-48"
      >
        {images.slice(0, 6).map((src, i) => (
          <div
            key={`col2-${i}`}
            style={{ transform: "translateZ(20px)" }}
            className="rounded-2xl border-2 border-[#ffffff29] p-[2px]"
          >
            <Image
              src={src}
              alt={`${title} mockup ${i + 1}`}
              width={300}
              height={188}
              className="w-full overflow-hidden rounded-2xl object-contain xl:w-[450px]"
            />
          </div>
        ))}
      </motion.div>

      {/* Column 3 - tilt RIGHT again (moved closer) */}
      <motion.div
        style={{
          y: column3Y,
          rotateY: 30,
          x: -64, // pull inward slightly
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="-my-48 -mr-40 hidden scale-[1.15] flex-col items-center justify-center gap-6 xl:flex"
      >
        {images.map((src, i) => (
          <div
            key={`col3-${i}`}
            style={{ transform: "translateZ(40px)" }}
            className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]"
          >
            <Image
              src={src}
              alt={`${title} mockup ${i + 1}`}
              width={300}
              height={188}
              className="w-full overflow-hidden rounded-2xl object-contain xl:w-[450px]"
            />
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
        animate={
          !hasAnimatedRef.current && isInView
            ? { opacity: 1, y: 0 }
            : hasAnimatedRef.current
              ? { opacity: 1, y: 0 }
              : {}
        }
        onAnimationComplete={() => {
          hasAnimatedRef.current = true;
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px"
      >
        <section className="relative z-10 flex min-h-[500px] flex-col items-center justify-between rounded-[32px] bg-card text-white xl:h-[65vh] xl:flex-row">
          <div className="xl:hidden">
            {textSection}
            {imageSection}
          </div>

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
    <div className="section overflow-hidden pt-0">
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
        {/* Hospice Project */}
        <ProjectSection
          title="Hospice Care Web"
          description="Crafting user-friendly, cross-platform solutions with elegant UX and solid performance."
          images={[
            "/images/portfolio/Hospice/1.svg",
            "/images/portfolio/Hospice/2.svg",
            "/images/portfolio/Hospice/3.svg",
            "/images/portfolio/Hospice/4.svg",
          ]}
        />

        {/* Pallative Project */}
        <ProjectSection
          title="Palliative Platform"
          description="Building a care-focused digital experience that connects patients, families, and providers seamlessly."
          images={[
            "/images/portfolio/Pallative/2.png",
            "/images/portfolio/Pallative/1.png",
            "/images/portfolio/Pallative/3.png",
            "/images/portfolio/Pallative/4.png",
          ]}
          isReversed
        />
      </div>
    </div>
  );
}

export default PortfolioSection;
