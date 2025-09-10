"use client";

import DashedLineCircle from "@/components/DashedLineCircle";
import React from "react";

const DevelopmentProcess = () => {
  const processItems = [
    {
      title: "Requirement Gathering",
      description:
        "Analyze your e-commerce goals, target audience, and product catalog to define a tailored development strategy.",
      iconSrc: "/images/services_page/dev/analysis.svg",
    },
    {
      title: "E-Commerce Design",
      description:
        "Design intuitive, conversion-focused interfaces with prototypes, ensuring a seamless shopping experience.",
      iconSrc: "/images/services_page/dev/smartphone.svg",
    },
    {
      title: "Implementation",
      description:
        "Develop your e-commerce site using selected platforms or custom code, integrating payment and inventory systems.",
      iconSrc: "/images/services_page/dev/development.svg",
    },
    {
      title: "Testing & Optimization",
      description:
        "Conduct thorough testing for functionality, security, and performance to ensure a reliable e-commerce platform.",
      iconSrc: "/images/services_page/dev/testing.svg",
    },
    {
      title: "Launch & Marketing",
      description:
        "Manage site launch, SEO optimization, and initial marketing campaigns to maximize your online presence.",
      iconSrc: "/images/services_page/dev/launch.svg",
    },
    {
      title: "Continuous Support",
      description:
        "Offer ongoing maintenance, updates, and performance enhancements to keep your e-commerce site competitive.",
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
