"use client";

import React from "react";
import Button from "./Button";

const Banner = ({ variant = "default", className = "bg-card_bg", ...props }) => {
  const baseStyles = "relative py-8 sm:py-10 lg:py-[60px] px-4 sm:px-6 lg:px-8 2xl:px-[9.5rem]";

  const variants = {
    default: {
      heading: "Ready to Launch Your Project Today?",
      description: "Kickstart your vision with our expert development team.",
      buttonText: "Get Started",
    },
    landing: {
      heading: "Stay Ahead of the Competition",
      description: "Leverage cutting-edge technology to lead the market.",
      buttonText: "Explore Solutions",
    },
    aboutUs: {
      heading: "Is Outdated Tech Holding You Back?",
      description: "Modernize your business with our innovative solutions.",
      buttonText: "Upgrade Now",
    },
    mobileDev: {
      heading: "Turn Your Idea into a Mobile App",
      description: "Build seamless, user-friendly mobile experiences.",
      buttonText: "Start Building",
    },
    webDev: {
      heading: "Bring Your Web Vision to Life",
      description: "Create powerful, responsive websites that engage users.",
      buttonText: "Launch Your Site",
    },
  };

  const bannerStyles = `${baseStyles} ${className}`;
  const { heading, description, buttonText } = variants[variant] || variants.default;

  return (
    <div className={bannerStyles} {...props}>
      <div className="relative flex min-h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-accent pb-6 pt-6 text-white sm:gap-4 sm:pb-8 sm:pt-8 lg:pb-8 lg:pt-11">
        {/* Top Right Pattern */}
        <div className="opacity absolute -right-4 top-0 size-32 sm:size-40 lg:size-52">
          <img src="/images/BannerPattern.svg" alt="Banner Pattern" className="h-full w-full" />
        </div>

        {/* Bottom Left Pattern */}
        <div className="opacity absolute -left-4 bottom-0 size-32 rotate-180 sm:size-40 lg:size-52">
          <img src="/images/BannerPattern.svg" alt="Banner Pattern" className="h-full w-full" />
        </div>

        {/* Content */}
        <h2 className="relative z-10 px-4 text-center font-neueMontreal text-xl font-medium sm:px-0 sm:text-2xl lg:text-[42px]">
          {heading}
        </h2>
        <p className="relative z-10 px-4 text-center font-neueMontreal text-sm sm:px-0 sm:text-base lg:text-lg">
          {description}
        </p>
        <Button
          variant="primary"
          className="relative z-10 border border-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
