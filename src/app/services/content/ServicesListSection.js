"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ServicesListSection = () => {
  const services = [
    {
      title: "Strategic Design & Marketing",
      description: "We spend more time figuring out what you're trying to do than most teams spend designing.",
      additionalText: "That's because good output comes from clarity not just vibes.",
      features: [
        "UX/UI Design & Prototyping",
        "Brand Strategy & Identity",
        "User Research & Testing",
        "Design Systems",
      ],
      image: "/about us/dashboard-mockup.png",
      hasImage: true,
    },
    {
      title: "Web & App Development",
      description: "We build modern, scalable applications that perform exceptionally across all platforms.",
      additionalText:
        "From responsive websites to complex web applications, we deliver solutions that grow with your business.",
      features: [
        "React & Next.js Development",
        "Mobile App Development",
        "Progressive Web Apps",
        "API Development & Integration",
      ],
      hasImage: false,
    },
    {
      title: "Product-Driven Marketing",
      description: "Marketing strategies that are deeply integrated with your product development cycle.",
      additionalText: "We create campaigns that highlight your product's unique value and drive meaningful engagement.",
      features: [
        "Product Marketing Strategy",
        "Content Creation & SEO",
        "Performance Analytics",
        "Conversion Optimization",
      ],
      hasImage: false,
    },
    {
      title: "Healthcare & Compliance Products",
      description: "Specialized solutions for healthcare and highly regulated industries.",
      additionalText:
        "We understand compliance requirements and build products that meet the highest security standards.",
      features: [
        "HIPAA Compliant Development",
        "Healthcare Data Management",
        "Regulatory Compliance",
        "Security Auditing",
      ],
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

      {/* Services Grid */}
      <div className="space-y-16 xl:space-y-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start gap-8 xl:flex-row xl:gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Left content */}
            <div className="w-full xl:w-1/2">
              <div className="space-y-6 xl:space-y-8">
                <h3 className="HeadingH3">{service.title}</h3>
                <div className="space-y-4">
                  <p className="BodyText text-text-secondary">{service.description}</p>
                  <p className="BodyText text-text-secondary">{service.additionalText}</p>
                </div>

                {/* Features list */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-primary" />
                      <span className="BodyText text-text-tertiary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="w-full xl:w-1/2">
              {service.hasImage ? (
                <div className="relative h-[300px] w-full overflow-hidden rounded-2xl bg-card xl:h-[400px]">
                  {/* Placeholder for dashboard mockup - you can replace with actual image */}
                  <div className="flex h-full items-center justify-center border-2 border-dashed border-[#FFFFFF29] text-text-tertiary">
                    Dashboard Mockup
                    <br />
                    (Add image at: /about us/dashboard-mockup.png)
                  </div>
                </div>
              ) : (
                <div className="h-[300px] xl:h-[400px]" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesListSection;
