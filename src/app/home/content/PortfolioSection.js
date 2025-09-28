import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionHeading from "../../../components/SectionHeading";
import GradientText from "@/components/GradientText";

// Single project component
function ProjectSection({ title, description, imageSrc, isReversed = false, scrollOffset = 0 }) {
  const { scrollY } = useScroll();

  // Transform scroll position to movement values with offset for each section
  const column1YRaw = useTransform(scrollY, [scrollOffset, scrollOffset + 1000], [0, -400]);
  const column2YRaw = useTransform(scrollY, [scrollOffset, scrollOffset + 1000], [0, 400]);
  const column3YRaw = useTransform(scrollY, [scrollOffset, scrollOffset + 1000], [0, -400]);

  // Add smooth spring physics to the transforms
  const column1Y = useSpring(column1YRaw, { stiffness: 100, damping: 30, mass: 0.8 });
  const column2Y = useSpring(column2YRaw, { stiffness: 100, damping: 30, mass: 0.8 });
  const column3Y = useSpring(column3YRaw, { stiffness: 100, damping: 30, mass: 0.8 });

  const textSection = (
    <div
      className={`flex w-full flex-col justify-center gap-6 bg-card p-8 xl:h-full xl:w-1/2 xl:px-16 ${
        isReversed ? "xl:rounded-r-[32px]" : "xl:rounded-l-[32px]"
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
      className={`relative flex h-80 w-full items-center justify-between gap-4 overflow-hidden bg-black xl:h-full xl:w-1/2 ${
        isReversed ? "xl:rounded-l-[32px]" : "xl:rounded-r-[32px]"
      }`}
    >
      {/* Top gradient */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-20"
        style={{ background: "linear-gradient(180deg, #0D0D0C 0%, rgba(13, 13, 12, 0) 100%)" }}
      ></div>

      {/* Bottom gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20"
        style={{ background: "linear-gradient(180deg, rgba(13, 13, 12, 0) 0%, #0D0D0C 100%)" }}
      ></div>

      {/* First column - scroll down moves down */}
      <motion.div
        className="hidden -my-48 -ml-32 flex-col items-center justify-center gap-8 overflow-hidden xl:flex"
        style={{ y: column1Y }}
      >
        {[...Array(8)].map((_, index) => (
          <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image src={imageSrc} alt={`${title} mockup ${index + 1}`} width={450} height={280} />
          </div>
        ))}
      </motion.div>

      {/* Second column - scroll down moves up */}
      <motion.div
        className="flex -my-32 flex-col items-center justify-center gap-6 xl:-my-48 xl:gap-8"
        style={{ y: column2Y }}
      >
        {[...Array(6)].map((_, index) => (
          <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image
              src={imageSrc}
              alt={`${title} mockup ${index + 1}`}
              width={300}
              height={188}
              className="xl:h-[280px] xl:w-[450px]"
            />
          </div>
        ))}
      </motion.div>

      {/* Third column - scroll down moves down */}
      <motion.div
        className="hidden -my-48 -mr-32 flex-col items-center justify-center gap-8 overflow-hidden xl:flex"
        style={{ y: column3Y }}
      >
        {[...Array(8)].map((_, index) => (
          <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image src={imageSrc} alt={`${title} mockup ${index + 1}`} width={450} height={280} />
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="relative">
      <div className="oval-blur left-1/2 top-[15%] z-0 -translate-x-1/2 -translate-y-1/2 transform" />
      <div className="rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px pb-[0.8px]">
        <section className="relative z-10 flex min-h-[500px] flex-col items-center justify-between rounded-[32px] bg-card text-white xl:h-[65vh] xl:flex-row">
          {/* Mobile: Always text first, then images */}
          <div className="xl:hidden">
            {textSection}
            {imageSection}
          </div>

          {/* Desktop: Respect isReversed prop */}
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
      </div>
    </div>
  );
}

function PortfolioSection() {
  return (
    <div className="section">
      <SectionHeading
        title={
          <>
            <GradientText>Work</GradientText> we&apos;ve built,
            <br /> fixed & rescued
          </>
        }
        description="Real builds that launched and worked. Not case studies with fake testimonials."
      />

      <div className="flex flex-col gap-16 py-8">
        <ProjectSection
          title="Hospice Care Web"
          description="Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions with efficiency."
          imageSrc="/images/portfolio/project1.svg"
          isReversed={false}
          scrollOffset={0}
        />

        <ProjectSection
          title="E-Commerce Platform"
          description="Building modern, scalable online shopping experiences with seamless user journeys. Optimized for performance and conversion across all devices and platforms."
          imageSrc="/images/portfolio/project1.svg"
          isReversed={true}
          scrollOffset={1000}
        />

        <ProjectSection
          title="Mobile Banking App"
          description="Secure, intuitive financial management at your fingertips. Streamlined interface design focused on user trust and accessibility for modern banking needs."
          imageSrc="/images/portfolio/project1.svg"
          isReversed={false}
          scrollOffset={2000}
        />
      </div>
    </div>
  );
}

export default PortfolioSection;