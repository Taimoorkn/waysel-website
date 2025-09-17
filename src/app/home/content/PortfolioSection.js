import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
    <div className={`w-1/2 h-full px-16 bg-[#121211] flex flex-col items-start justify-center ${isReversed ? 'rounded-r-[32px]' : 'rounded-l-[32px]'}`}>
      <h2 className="mb-6 text-4xl font-semibold">{title}</h2>
      <p className="text-xl">{description}</p>
    </div>
  );

  const imageSection = (
    <div className={`relative flex items-center justify-between gap-4 bg-black w-1/2 h-full overflow-hidden ${isReversed ? 'rounded-l-[32px]' : 'rounded-r-[32px]'}`}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #0D0D0C 0%, rgba(13, 13, 12, 0) 100%)' }}
      ></div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(13, 13, 12, 0) 0%, #0D0D0C 100%)' }}
      ></div>

      {/* First column - scroll down moves down */}
      <motion.div
        className="flex flex-col items-center justify-center gap-8 -ml-32 -my-48 overflow-hidden"
        style={{ y: column1Y }}
      >
        {[...Array(6)].map((_, index) => (
          <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image
              src={imageSrc}
              alt={`${title} mockup ${index + 1}`}
              width={450}
              height={280}
              className="rounded-xl border-2 border-[#1F3547]"
            />
          </div>
        ))}
      </motion.div>

      {/* Second column - scroll down moves up */}
      <motion.div
        className="flex flex-col items-center justify-center gap-8 -my-48"
        style={{ y: column2Y }}
      >
        {[...Array(6)].map((_, index) => (
          <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image
              src={imageSrc}
              alt={`${title} mockup ${index + 1}`}
              width={450}
              height={280}
              className="rounded-xl border-2 border-[#1F3547]"
            />
          </div>
        ))}
      </motion.div>

      {/* Third column - scroll down moves down */}
      <motion.div
        className="flex flex-col items-center justify-center gap-8 -mr-32 -my-48 overflow-hidden"
        style={{ y: column3Y }}
      >
        {[...Array(6)].map((_, index) => (
          <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image
              src={imageSrc}
              alt={`${title} mockup ${index + 1}`}
              width={450}
              height={280}
              className="rounded-xl border-2 border-[#1F3547]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="flex items-center justify-between px-4 py-12 text-white sm:px-12 sm:py-20 h-screen">
      {isReversed ? (
        <>
          {imageSection}
          {textSection}
        </>
      ) : (
        <>
          {textSection}
          {imageSection}
        </>
      )}
    </section>
  );
}

function PortfolioSection() {
  return (
    <div>
      {/* Project 1 - Text left, Images right */}
      <ProjectSection
        title="Hospice Care Web"
        description="Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions with efficiency."
        imageSrc="/images/portfolio/project1.svg"
        isReversed={false}
        scrollOffset={0}
      />

      {/* Project 2 - Images left, Text right */}
      <ProjectSection
        title="E-Commerce Platform"
        description="Building modern, scalable online shopping experiences with seamless user journeys. Optimized for performance and conversion across all devices and platforms."
        imageSrc="/images/portfolio/project1.svg"
        isReversed={true}
        scrollOffset={1000}
      />

      {/* Project 3 - Text left, Images right */}
      <ProjectSection
        title="Mobile Banking App"
        description="Secure, intuitive financial management at your fingertips. Streamlined interface design focused on user trust and accessibility for modern banking needs."
        imageSrc="/images/portfolio/project1.svg"
        isReversed={false}
        scrollOffset={2000}
      />
    </div>
  );
}

export default PortfolioSection;
