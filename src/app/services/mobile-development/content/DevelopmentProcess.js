"use client";

import DashedLineCircle from "@/components/DashedLineCircle";
import React from "react";

const DevelopmentProcess = () => {
  const processItems = [
    {
      title: "Analysis",
      description:
        "Thoroughly gather and analyze user requirements, market trends, and technical feasibility to define clear, actionable goals for your mobile app project.",
      iconSrc: "/images/services_page/dev/analysis.svg",
    },
    {
      title: "Design",
      description:
        "Craft detailed UI/UX designs and interactive prototypes focused intuitive navigation, mobile responsiveness, and an engaging user experience.",
      iconSrc: "/images/services_page/dev/smartphone.svg",
    },
    {
      title: "Development",
      description:
        "Build high-performance mobile applications using native or cross-platform frameworks, adhering to best coding practices and architecture principles.",
      iconSrc: "/images/services_page/dev/development.svg",
    },
    {
      title: "Testing",
      description:
        "Perform extensive testing—functional, performance, security, and usability—to ensure a smooth, bug-free, and reliable app experience.",
      iconSrc: "/images/services_page/dev/testing.svg",
    },
    {
      title: "Launch",
      description:
        "Manage app store submissions, optimize metadata, and coordinate release strategies for a successful launch across platforms.",
      iconSrc: "/images/services_page/dev/launch.svg",
    },
    {
      title: "Maintenance",
      description:
        "Deliver continuous support with updates, feature enhancements, security patches, and performance optimizations to keep your app competitive.",
      iconSrc: "/images/services_page/dev/maintenance.svg",
    },
  ];

  return (
    <section className="devprocess_section">
      <h2 className="section-header">Development Process</h2>
      <div className="relative flex flex-col items-center md:flex-row md:items-start md:justify-center">
        {/* Vertical dashed line for mobile, horizontal for desktop */}
        <div className="absolute left-1/2 hidden h-full w-[1px] bg-transparent md:left-0 md:right-0 md:top-1/2 md:block md:h-[1px] md:w-full">
          <div className="dashed-line absolute h-full w-full" />
        </div>

        {/* Process items */}
        {processItems.map((item, index) => {
          const isReversed = index % 2 === 0;
          return (
            <div
              key={index}
              className="flex w-full max-w-md flex-col items-center px-4 py-6 text-center md:max-h-[550px] md:w-auto md:px-5"
            >
              {isReversed ? (
                <div className="flex flex-grow flex-col items-center justify-start">
                  <div className="min-h-[150px] md:min-h-[220px]">
                    <h3 className="mt-4 font-neueMontreal text-lg font-medium text-primary_text md:text-xl">
                      {item.title}
                    </h3>
                    <p className="max-w-xs text-center font-neueMontreal text-sm text-secondary_text md:text-base">
                      {item.description}
                    </p>
                  </div>
                  <DashedLineCircle iconSrc={item.iconSrc} isReversed />
                </div>
              ) : (
                <div className="mt-6 flex flex-grow flex-col items-center justify-end md:mt-[94px]">
                  <DashedLineCircle iconSrc={item.iconSrc} />
                  <div className="min-h-[150px] md:min-h-[220px]">
                    <h3 className="mb-2 mt-4 font-neueMontreal text-lg font-medium text-primary_text md:text-xl">
                      {item.title}
                    </h3>
                    <p className="max-w-xs text-center font-neueMontreal text-sm text-secondary_text md:text-base">
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
