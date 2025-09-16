import Image from "next/image";
import React from "react";

function PortfolioSection() {
  return (
    <section className="flex items-center justify-between border px-4 py-12 text-white sm:px-12 sm:py-20">
      <div className="w-1/2 border px-16">
        <h2 className="mb-6 text-4xl font-semibold">Hospice Care Web</h2>
        <p className="text-xl">
          Crafting user-friendly, cross platform solutions with efficiency. Crafting user-friendly,
          cross platform solutions with efficiency. Crafting user-friendly, cross platform solutions
          with efficiency.
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 bg-black w-1/2 h-[500px] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-16 -ml-16 -my-48 overflow-hidden">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-1">
              <Image
                src="/images/portfolio/project1.svg"
                alt="Mobile mockup 3"
                width={378}
                height={232}
                className="rounded-xl border-2 border-[#1F3547]"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-16 -my-48">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-1">
              <Image
                src="/images/portfolio/project1.svg"
                alt="Mobile mockup 3"
                width={378}
                height={232}
                className="rounded-xl border-2 border-[#1F3547]"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-16 -mr-16 -my-48 overflow-hidden">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="rounded-2xl border-2 border-[#FFFFFF29] p-1">
              <Image
                src="/images/portfolio/project1.svg"
                alt="Mobile mockup 3"
                width={378}
                height={232}
                className="rounded-xl border-2 border-[#1F3547]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
