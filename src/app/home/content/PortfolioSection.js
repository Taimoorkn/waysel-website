import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function PortfolioSection() {
  return (
    <section className="flex items-center justify-between px-4 py-12 text-white sm:px-12 sm:py-20 h-screen">
      <div className="w-1/2 h-full px-16 bg-[#121211] flex flex-col items-start justify-center rounded-l-[32px]">
        <h2 className="mb-6 text-4xl font-semibold">Hospice Care Web</h2>
        <p className="text-xl">
          Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly,
          cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions
          with efficiency.
        </p>
      </div>
      <div className="relative flex items-center justify-between gap-4 bg-black w-1/2 h-full overflow-hidden rounded-r-[32px]">
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
        {/* First column - top to bottom */}
        <motion.div
          className="flex flex-col items-center justify-center gap-8 -ml-32 -my-48 overflow-hidden"
          animate={{ y: [-200, 200] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
              <Image
                src="/images/portfolio/project1.svg"
                alt="Mobile mockup 3"
                width={450}
                height={280}
                className="rounded-xl border-2 border-[#1F3547]"
              />
            </div>
          ))}
        </motion.div>

        {/* Second column - bottom to top */}
        <motion.div
          className="flex flex-col items-center justify-center gap-8 -my-48"
          animate={{ y: [200, -200] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
              <Image
                src="/images/portfolio/project1.svg"
                alt="Mobile mockup 3"
                width={450}
                height={280}
                className="rounded-xl border-2 border-[#1F3547]"
              />
            </div>
          ))}
        </motion.div>

        {/* Third column - top to bottom */}
        <motion.div
          className="flex flex-col items-center justify-center gap-8 -mr-32 -my-48 overflow-hidden"
          animate={{ y: [-200, 200] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
              <Image
                src="/images/portfolio/project1.svg"
                alt="Mobile mockup 3"
                width={450}
                height={280}
                className="rounded-xl border-2 border-[#1F3547]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PortfolioSection;
