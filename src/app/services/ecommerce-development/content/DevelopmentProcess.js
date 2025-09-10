"use client";

import DashedLineCircle from "@/components/DashedLineCircle";
import React from "react";

const DevelopmentProcess = () => {
  const processItems = [
    {
      title: "Requirement Gathering",
      description: "Analyze your e-commerce goals, target audience, and product catalog to define a tailored development strategy.",
      iconSrc: "/images/services_page/dev/analysis.svg",
    },
    {
      title: "E-Commerce Design",
      description: "Design intuitive, conversion-focused interfaces with prototypes, ensuring a seamless shopping experience.",
      iconSrc: "/images/services_page/dev/smartphone.svg",
    },
    {
      title: "Implementation",
      description: "Develop your e-commerce site using selected platforms or custom code, integrating payment and inventory systems.",
      iconSrc: "/images/services_page/dev/development.svg",
    },
    {
      title: "Testing & Optimization",
      description: "Conduct thorough testing for functionality, security, and performance to ensure a reliable e-commerce platform.",
      iconSrc: "/images/services_page/dev/testing.svg",
    },
    {
      title: "Launch & Marketing",
      description: "Manage site launch, SEO optimization, and initial marketing campaigns to maximize your online presence.",
      iconSrc: "/images/services_page/dev/launch.svg",
    },
    {
      title: "Continuous Support",
      description: "Offer ongoing maintenance, updates, and performance enhancements to keep your e-commerce site competitive.",
      iconSrc: "/images/services_page/dev/maintenance.svg",
    },
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
                    <h3 className="font-clashGrotesk text-lg md:text-xl font-medium leading-normal text-primary_text mt-4">
                      {item.title}
                    </h3>
                    <p className="font-manrope text-sm md:text-base leading-[18px] md:leading-[21.9px] text-secondary_text text-center max-w-xs">
                      {item.description}
                    </p>
                  </div>
                  <DashedLineCircle iconSrc={item.iconSrc} isReversed />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-end flex-grow mt-6 md:mt-[94px]">
                  <DashedLineCircle iconSrc={item.iconSrc} />
                  <div className="min-h-[150px] md:min-h-[220px]">
                    <h3 className="font-clashGrotesk text-lg md:text-xl font-medium leading-normal text-primary_text mt-4 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-manrope text-sm md:text-base leading-[18px] md:leading-[21.9px] text-secondary_text text-center max-w-xs">
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