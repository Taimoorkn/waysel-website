"use client";

import React from "react";
import { TargetIcon, EyeIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

const GoalsVision = () => {
  return (
    <section className="px-4 2xl:px-[9.5rem] py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white30"></div>
      </div>

      <div className="relative z-10 mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-primary_text font-clashGrotesk">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mission
            </span>{" "}
            Ahead
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          <div className="group">
            <div className="bg-white backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:border-blue-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-accent to-accent_purple rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <TargetIcon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 font-manrope">
                  Our Goals
                </h3>
              </div>
              <h4 className="font-clashGrotesk text-xl sm:text-2xl lg:text-[32px] font-semibold text-primary_text mb-4 sm:mb-6 leading-tight">
                To upscale your business to a higher level
              </h4>
              <p className="text-secondary_text font-manrope leading-relaxed text-sm sm:text-base lg:text-lg">
                We build fast, scalable, and secure web-based solutions tailored
                to your goals. From intuitive interfaces to powerful backend
                systems, our team ensures seamless performance and user
                satisfaction.
              </p>
              <Link
                href={"/contact"}
                className="mt-4 sm:mt-6 flex items-center text-accent font-manrope font-semibold text-sm sm:text-base group-hover:translate-x-2 transition-transform"
              >
                Get Started <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="group">
            <div className="bg-white backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:border-purple-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-accent to-accent_purple rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <EyeIcon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-accent font-manrope">
                  Our Vision
                </h3>
              </div>
              <h4 className="font-clashGrotesk text-xl sm:text-2xl lg:text-[32px] font-semibold text-primary_text mb-4 sm:mb-6 leading-tight">
                To provide solutions for growing companies
              </h4>
              <p className="text-secondary_text font-manrope leading-relaxed text-sm sm:text-base lg:text-lg">
                We create scalable web solutions for growing businesses. Our
                team delivers custom applications, seamless user experiences,
                and robust systems that empower companies with cutting-edge
                technology.
              </p>
              <Link
                href={"/contact"}
                className="mt-4 sm:mt-6 flex items-center text-accent font-manrope font-semibold text-sm sm:text-base group-hover:translate-x-2 transition-transform"
              >
                Get Started <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsVision;