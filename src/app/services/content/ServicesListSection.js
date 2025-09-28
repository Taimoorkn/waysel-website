"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ServicesListSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Strategic Design &\nMarketing",
      description: "We spend more time figuring out what you're trying to do than most teams spend designing.",
      additionalText: "That's because good output comes from clarity not just vibes.",
      image: "/about us/dashboard-mockup.png",
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
  ];

  return (
    <section className="section">
      {/* Section Title */}
      <motion.div
        className="relative mb-16 text-start xl:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="HeadingH2 text-text-primary">Our Services</h2>
        <div
          className="absolute left-[10%] top-0 -z-10 h-[75px] w-[200px] -translate-x-1/2 -translate-y-1/2 transform"
          style={{
            background: "linear-gradient(90deg, #7a66e1 0%, #fb3081 50%, #f8805f 100%)",
            filter: "blur(60px)",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Services List */}
      <div className="space-y-32 xl:space-y-40">
        {services.map((service, index) => {
          const isActive = activeService === index;
          return (
            <motion.div
              key={index}
              className={`grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-16 ${
                isActive ? "bg-card py-20" : "bg-primary_bg py-16"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                onComplete: () => setActiveService(index),
              }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Column 1 - Service Title */}
              <div className="flex items-center">
                <h3 className="HeadingH3 whitespace-pre-line">{service.title}</h3>
              </div>

              {/* Column 2 - Image Div */}
              <div className="flex items-center justify-center">
                {service.hasImage ? (
                  <div className="relative h-[250px] w-full overflow-hidden rounded-2xl bg-card xl:h-[300px]">
                    {/* Placeholder for dashboard mockup - you can replace with actual image */}
                    <div className="flex h-full items-center justify-center border-2 border-dashed border-[#FFFFFF29] text-text-tertiary">
                      Dashboard Mockup
                      <br />
                      (Add image at: /about us/dashboard-mockup.png)
                    </div>
                  </div>
                ) : (
                  <div className="h-[250px] w-full xl:h-[300px]" />
                )}
              </div>

              {/* Column 3 - Description */}
              <div className="flex flex-col justify-center space-y-6">
                <p className="BodyText text-text-secondary">{service.description}</p>
                <p className="BodyText text-text-secondary">{service.additionalText}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesListSection;
