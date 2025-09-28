"use client";

import React from "react";
import Image from "next/image";

const ServicesListSection = () => {
  const services = [
    {
      title: "Strategic Design &\nMarketing",
      description: "We spend more time figuring out what you're trying to do than most teams spend designing.",
      additionalText: "That's because good output comes from clarity not just vibes.",
      image: "/images/portfolio/project1.png",
      hasImage: true,
    },
    {
      title: "Web & App\nDevelopment",
      description: "We spend more time figuring out what you're trying to do than most teams spend designing.",
      additionalText: "That's because good output comes from clarity not just vibes.",
      hasImage: false,
    },
    {
      title: "Product-Driven\nMarketing",
      description: "We spend more time figuring out what you're trying to do than most teams spend designing.",
      additionalText: "That's because good output comes from clarity not just vibes.",
      hasImage: false,
    },
    {
      title: "Healthcare & Compliance\nProducts",
      description: "We spend more time figuring out what you're trying to do than most teams spend designing.",
      additionalText: "That's because good output comes from clarity not just vibes.",
      hasImage: false,
    },
    {
      title: "Healthcare & Compliance\nProducts",
      description: "We spend more time figuring out what you're trying to do than most teams spend designing.",
      additionalText: "That's because good output comes from clarity not just vibes.",
      hasImage: false,
    },
    {
      title: "Healthcare & Compliance\nProducts",
      description: "We spend more time figuring out what you're trying to do than most teams spend designing.",
      additionalText: "That's because good output comes from clarity not just vibes.",
      hasImage: false,
    },
  ];

  return (
    <section className="py-8 xl:py-20">
      {/* Section Title */}
      <div className="relative mb-16 text-start xl:mb-24 xl:px-[120px]">
        <h2 className="HeadingH2 text-text-primary">Our Services</h2>
        <div
          className="absolute left-[10%] top-0 -z-10 h-[75px] w-[200px] -translate-x-1/2 -translate-y-1/2 transform"
          style={{
            background: "linear-gradient(90deg, #7a66e1 0%, #fb3081 50%, #f8805f 100%)",
            filter: "blur(60px)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Services List */}
      <div>
        {services.map((service, index) => {
          const isFirst = index === 0;
          const isLast = index === services.length - 1;
          return (
            <>
              <div
                className={`grid grid-cols-1 gap-12 px-4 xl:grid-cols-3 xl:gap-12 xl:px-[120px] ${
                  isFirst ? "bg-card py-20" : "bg-primary_bg"
                }`}
              >
                {/* Column 1 - Service Title */}
                <div className="flex items-center">
                  <h3 className="HeadingH3 whitespace-pre-line">{service.title}</h3>
                </div>

                {/* Column 2 - Image Div */}
                <div className="flex items-center justify-center">
                  {service.hasImage ? (
                    <div className="relative h-[250px] w-full overflow-hidden rounded-2xl bg-card xl:h-[400px]">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="h-[250px] w-full xl:h-[400px]" />
                  )}
                </div>

                {/* Column 3 - Description */}
                <div className="flex flex-col justify-center space-y-6">
                  <p className="BodyText text-text-secondary">{service.description}</p>
                  <p className="BodyText text-text-secondary">{service.additionalText}</p>
                </div>
              </div>

              {/* Line divider between services - except after the last one */}
              {!isLast && (
                <div
                  className="w-full"
                  style={{
                    height: '0px',
                    borderTop: '1px solid transparent',
                    borderImage: 'linear-gradient(90deg, #7A66E1 0%, #FB3081 50%, #F8805F 100%) 1',
                    minHeight: '0px',
                    maxHeight: '0px'
                  }}
                  data-divider={`line-${index}-${index + 1}`}
                />
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesListSection;
