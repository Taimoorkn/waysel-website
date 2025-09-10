"use client";

import React from "react";
import Button from "./Button";

const Banner = ({
 variant = "default",
 className = "bg-light_blue_bg",
 ...props
}) => {
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
 <div className="relative w-full min-h-full bg-accent rounded-3xl pt-6 sm:pt-8 lg:pt-11 pb-6 sm:pb-8 lg:pb-8 gap-3 sm:gap-4 flex flex-col items-center justify-center text-white overflow-hidden">

 {/* Top Right Pattern */}
 <div className="absolute top-0 -right-4 size-32 sm:size-40 lg:size-52 opacity">
 <img
 src="/images/BannerPattern.svg"
 alt="Banner Pattern"
 className="w-full h-full"
 />
 </div>

 {/* Bottom Left Pattern */}
 <div className="absolute bottom-0 -left-4 size-32 sm:size-40 lg:size-52 opacity rotate-180">
 <img
 src="/images/BannerPattern.svg"
 alt="Banner Pattern"
 className="w-full h-full"
 />
 </div>


 {/* Content */}
 <h2 className="font-neueMontreal text-xl sm:text-2xl lg:text-[42px] font-semibold text-center px-4 sm:px-0 relative z-10">
 {heading}
 </h2>
 <p className="font-neueMontreal text-sm sm:text-base lg:text-lg text-center px-4 sm:px-0 relative z-10">
 {description}
 </p>
 <Button variant="primary" className="border border-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 relative z-10">
 {buttonText}
 </Button>
 </div>
 </div>
 );
};

export default Banner;