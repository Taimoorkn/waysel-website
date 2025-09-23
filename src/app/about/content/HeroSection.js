"use client";

import React from "react";
import { LightbulbIcon, ArrowRightIcon, PlayCircleIcon } from "@phosphor-icons/react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 to-blue-900 px-4 xl:min-h-[calc(100vh-4.5rem)]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-48 w-48 animate-pulse rounded-full bg-blue-400/20 blur-2xl lg:h-72 lg:w-72 xl:left-20 xl:top-20 xl:h-64 xl:w-64 xl:blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-64 w-64 animate-pulse rounded-full bg-purple-400/30 blur-2xl lg:h-96 lg:w-96 xl:bottom-20 xl:right-20 xl:h-80 xl:w-80 xl:blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="bg-grid-white10 absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div data-animate id="hero-content" className="animate-fade-in-up">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm xl:mb-8 xl:py-2">
            <LightbulbIcon className="mr-2 h-4 w-4 text-yellow-400" />
            <span className="text-xs font-medium text-white xl:text-sm">Building Things, One Solution at a Time</span>
          </div>

          <h1 className="mb-4 bg-clip-text text-4xl font-medium text-transparent text-white md:text-6xl lg:text-[72px] xl:mb-6 xl:text-5xl">
            Build <span className="text-accent">Smart</span>,<br />
            Scale <span className="text-accent">Fast</span>,<br />
            Win <span className="text-accent">Globally</span>
          </h1>

          <p className="text-secondary_bg mx-auto mb-8 max-w-3xl text-base lg:mb-12 lg:text-xl xl:mb-10 xl:text-lg">
            TechiTech Solutions was founded by passionate tech enthusiasts in 2014 with a vision to transform businesses
            through innovative technology. Over the years, we&apos;ve grown into a trusted development agency.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 xl:flex-row xl:gap-4">
            <button className="group flex transform items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-2xl xl:px-8 xl:py-4 xl:text-base">
              Start Your Journey
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 xl:h-5 xl:w-5" />
            </button>
            <button className="group flex items-center text-white/90 transition-colors hover:text-white">
              <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-white/20 xl:mr-3 xl:h-12 xl:w-12">
                <PlayCircleIcon className="h-4 w-4 xl:h-5 xl:w-5" />
              </div>
              <span className="text-sm xl:text-base">Watch Our Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 transform animate-bounce xl:bottom-8 xl:block">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
