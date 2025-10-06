"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SectionHeading from "../../../components/SectionHeading";
import GradientText from "@/components/GradientText";

gsap.registerPlugin(ScrollTrigger);

// ------------------------------------------------
// Single Project Component (original layout retained)
// ------------------------------------------------
function ProjectSection({ title, description, imageSrc, isReversed = false }) {
  const sectionRef = useRef(null);
  const col1 = useRef(null);
  const col2 = useRef(null);
  const col3 = useRef(null);

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({ lerp: 0.1, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP parallax animation tied to viewport
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Subtle, proportional movement (keep your original proportions)
      tl.to(col1.current, { yPercent: -30, ease: "none" }, 0) // top column — more noticeable upward motion
        .to(col2.current, { yPercent: 30, ease: "none" }, 0) // middle column — opposite direction
        .to(col3.current, { yPercent: -25, ease: "none" }, 0); // bottom column — now visibly moving again
    });

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  // -------------------- Text Section --------------------
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

  // -------------------- Image Section --------------------
  const imageSection = (
    <div
      ref={sectionRef}
      className={`relative flex h-80 w-full items-center justify-between gap-4 overflow-hidden rounded-b-[32px] bg-black xl:h-full xl:w-1/2 xl:rounded-none ${
        isReversed ? "xl:rounded-l-[32px]" : "xl:rounded-r-[32px]"
      }`}
    >
      {/* top + bottom gradients */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-20"
        style={{
          background: "linear-gradient(180deg, #0D0D0C 0%, rgba(13,13,12,0) 100%)",
        }}
      ></div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20"
        style={{
          background: "linear-gradient(180deg, rgba(13,13,12,0) 0%, #0D0D0C 100%)",
        }}
      ></div>

      {/* Column 1 */}
      <div
        ref={col1}
        className="-my-48 -ml-32 hidden flex-col items-center justify-center gap-8 overflow-hidden xl:flex"
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image
              src={imageSrc}
              alt={`${title} mockup ${i + 1}`}
              width={450}
              height={280}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Column 2 */}
      <div ref={col2} className="-my-32 flex flex-col items-center justify-center gap-6 xl:-my-48 xl:gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image
              src={imageSrc}
              alt={`${title} mockup ${i + 1}`}
              width={300}
              height={188}
              className="w-full object-contain xl:w-[450px]"
            />
          </div>
        ))}
      </div>

      {/* Column 3 */}
      <div
        ref={col3}
        className="-my-48 -mr-32 hidden flex-col items-center justify-center gap-8 overflow-hidden xl:flex"
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="rounded-2xl border-2 border-[#FFFFFF29] p-[2px]">
            <Image
              src={imageSrc}
              alt={`${title} mockup ${i + 1}`}
              width={450}
              height={280}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );

  // -------------------- Final Layout --------------------
  return (
    <div className="relative">
      <div className="oval-blur left-1/2 top-[15%] z-0 -translate-x-1/2 -translate-y-1/2 transform" />
      <div className="rounded-[32px] bg-gradient-to-b from-[#FB3081]/20 to-[#999999]/20 p-px pb-[0.8px]">
        <section className="relative z-10 flex min-h-[500px] flex-col items-center justify-between rounded-[32px] bg-card text-white xl:h-[65vh] xl:flex-row">
          {/* Mobile: text first */}
          <div className="xl:hidden">
            {textSection}
            {imageSection}
          </div>

          {/* Desktop: respect isReversed */}
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

// ------------------------------------------------
// Portfolio Section Wrapper (unchanged layout)
// ------------------------------------------------
export default function PortfolioSection() {
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
          description="Crafting user-friendly, cross platform solutions with efficiency."
          imageSrc="/images/portfolio/project1.svg"
          isReversed={false}
        />
        <ProjectSection
          title="E-Commerce Platform"
          description="Building modern, scalable online shopping experiences with seamless user journeys."
          imageSrc="/images/portfolio/project1.svg"
          isReversed={true}
        />
        <ProjectSection
          title="Mobile Banking App"
          description="Secure, intuitive financial management at your fingertips."
          imageSrc="/images/portfolio/project1.svg"
          isReversed={false}
        />
      </div>
    </div>
  );
}
