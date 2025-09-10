"use client";

import React from "react";
import {
  LightbulbIcon,
  ArrowRightIcon,
  PlayCircleIcon,
} from "@phosphor-icons/react";

const HeroSection = () => {
  return (
    <section className="px-4 2xl:px-[9.5rem] relative min-h-[calc(100vh-3.5rem)] xl:min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-blue-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-400/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white10"/>

      <div className="relative z-10 text-center mx-auto max-w-5xl">
        <div data-animate id="hero-content" className="animate-fade-in-up">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 sm:py-2 mb-6 sm:mb-8">
            <LightbulbIcon className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white text-xs sm:text-sm font-medium font-manrope">
              Building Things, One Solution at a Time
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-clashGrotesk font-semibold leading-tight sm:leading-snug lg:leading-[64px] mb-4 sm:mb-6 text-white bg-clip-text text-transparent">
            Build <span className="text-accent">Smart</span>,<br />
            Scale <span className="text-accent">Fast</span>,<br />
            Win <span className="text-accent">Globally</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-secondary_bg mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed font-manrope">
            TechiTech Solutions was founded by passionate tech enthusiasts in
            2014 with a vision to transform businesses through innovative
            technology. Over the years, we've grown into a trusted development
            agency.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center font-manrope">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center text-sm sm:text-base">
              Start Your Journey
              <ArrowRightIcon className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center text-white/90 hover:text-white transition-colors">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-white/20 transition-colors">
                <PlayCircleIcon className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <span className="text-sm sm:text-base">Watch Our Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;