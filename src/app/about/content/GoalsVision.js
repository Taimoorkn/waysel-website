"use client";

import React from "react";
import { TargetIcon, EyeIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

const GoalsVision = () => {
  return (
    <section className="bg-secondary_bg relative overflow-hidden px-4 py-8 sm:py-12 lg:py-16 2xl:px-[9.5rem]">
      <div className="absolute inset-0">
        <div className="bg-grid-white30 absolute left-0 top-0 h-full w-full"></div>
      </div>

      <div className="relative z-10 mx-auto">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h2 className="text-primary_text mb-4 text-3xl font-medium sm:mb-6 sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="from-accent to-accent_light bg-gradient-to-r bg-clip-text text-transparent">Mission</span>{" "}
            Ahead
          </h2>
          <div className="from-accent to-accent_light mx-auto h-1 w-20 rounded-full bg-gradient-to-r sm:w-24"></div>
        </div>

        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2 lg:gap-16">
          <div className="group">
            <div className="border-border_primary bg-card_bg group-hover:border-accent rounded-2xl border p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl sm:rounded-3xl sm:p-8">
              <div className="mb-4 flex items-center sm:mb-6">
                <div className="from-accent to-accent_purple mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br sm:mr-4 sm:h-12 sm:w-12">
                  <TargetIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-accent text-xl font-medium sm:text-2xl">Our Goals</h3>
              </div>
              <h4 className="text-primary_text mb-4 text-xl font-medium sm:mb-6 sm:text-2xl lg:text-[32px]">
                To upscale your business to a higher level
              </h4>
              <p className="text-secondary_text text-sm sm:text-base lg:text-lg">
                We build fast, scalable, and secure web-based solutions tailored to your goals. From intuitive
                interfaces to powerful backend systems, our team ensures seamless performance and user satisfaction.
              </p>
              <Link
                href={"/contact"}
                className="text-accent mt-4 flex items-center text-sm font-medium transition-transform group-hover:translate-x-2 sm:mt-6 sm:text-base"
              >
                Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="group">
            <div className="border-border_primary bg-card_bg group-hover:border-accent rounded-2xl border p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl sm:rounded-3xl sm:p-8">
              <div className="mb-4 flex items-center sm:mb-6">
                <div className="from-accent to-accent_purple mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br sm:mr-4 sm:h-12 sm:w-12">
                  <EyeIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-accent text-xl font-medium sm:text-2xl">Our Vision</h3>
              </div>
              <h4 className="text-primary_text mb-4 text-xl font-medium sm:mb-6 sm:text-2xl lg:text-[32px]">
                To provide solutions for growing companies
              </h4>
              <p className="text-secondary_text text-sm sm:text-base lg:text-lg">
                We create scalable web solutions for growing businesses. Our team delivers custom applications, seamless
                user experiences, and robust systems that empower companies with cutting-edge technology.
              </p>
              <Link
                href={"/contact"}
                className="text-accent mt-4 flex items-center text-sm font-medium transition-transform group-hover:translate-x-2 sm:mt-6 sm:text-base"
              >
                Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsVision;
