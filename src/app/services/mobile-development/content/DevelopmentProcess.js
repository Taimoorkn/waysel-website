"use client";

import DashedLineCircle from "@/components/DashedLineCircle";
import React from "react";

const DevelopmentProcess = () => {
 const processItems = [
 {
 title: "Analysis",
 description: "Thoroughly gather and analyze user requirements, market trends, and technical feasibility to define clear, actionable goals for your mobile app project.",
 iconSrc: "/images/services_page/dev/analysis.svg",
 },
 {
 title: "Design",
 description: "Craft detailed UI/UX designs and interactive prototypes focused intuitive navigation, mobile responsiveness, and an engaging user experience.",
 iconSrc: "/images/services_page/dev/smartphone.svg",
 },
 {
 title: "Development",
 description: "Build high-performance mobile applications using native or cross-platform frameworks, adhering to best coding practices and architecture principles.",
 iconSrc: "/images/services_page/dev/development.svg",
 },
 {
 title: "Testing",
 description: "Perform extensive testing—functional, performance, security, and usability—to ensure a smooth, bug-free, and reliable app experience.",
 iconSrc: "/images/services_page/dev/testing.svg",
 },
 {
 title: "Launch",
 description: "Manage app store submissions, optimize metadata, and coordinate release strategies for a successful launch across platforms.",
 iconSrc: "/images/services_page/dev/launch.svg",
 },
 {
 title: "Maintenance",
 description: "Deliver continuous support with updates, feature enhancements, security patches, and performance optimizations to keep your app competitive.",
 iconSrc: "/images/services_page/dev/maintenance.svg",
 }
 ];

 return (
 <section className="devprocess_section">
 <h2 className="section-header">
 Development Process
 </h2>
 <div className="relative flex flex-col md:flex-row md:justify-center items-center md:items-start">
 {/* Vertical dashed line for mobile, horizontal for desktop */}
 <div className="absolute left-1/2 md:top-1/2 md:left-0 md:right-0 w-[1px] md:h-[1px] h-full md:w-full bg-transparent hidden md:block">
 <div className="absolute dashed-line w-full h-full" />
 </div>

 {/* Process items */}
 {processItems.map((item, index) => {
 const isReversed = index % 2 === 0;
 return (
 <div
 key={index}
 className="text-center flex flex-col items-center py-6 px-4 md:px-5 w-full md:w-auto max-w-md md:max-h-[550px]"
 >
 {isReversed ? (
 <div className="flex flex-col items-center justify-start flex-grow">
 <div className="min-h-[150px] md:min-h-[220px]">
 <h3 className="font-neueMontreal text-lg md:text-xl font-medium text-primary_text mt-4">
 {item.title}
 </h3>
 <p className="font-neueMontreal text-sm md:text-base text-secondary_text text-center max-w-xs">
 {item.description}
 </p>
 </div>
 <DashedLineCircle iconSrc={item.iconSrc} isReversed />
 </div>
 ) : (
 <div className="flex flex-col items-center justify-end flex-grow mt-6 md:mt-[94px]">
 <DashedLineCircle iconSrc={item.iconSrc} />
 <div className="min-h-[150px] md:min-h-[220px]">
 <h3 className="font-neueMontreal text-lg md:text-xl font-medium text-primary_text mt-4 mb-2">
 {item.title}
 </h3>
 <p className="font-neueMontreal text-sm md:text-base text-secondary_text text-center max-w-xs">
 {item.description}
 </p>
 </div>
 </div>
 )}
 </div>
 );
 })}
 </div>
 </section>
 );
};

export default DevelopmentProcess;