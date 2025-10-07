"use client";

import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Plus, Minus } from "@phosphor-icons/react";

export default function ServicesSection() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const services = [
    {
      id: 1,
      title: "User Experience",
      desc: "We start with purposeful design utilizing Material 3 to create intuitive user journeys that solve users’ problems.",
    },
    {
      id: 2,
      title: "Front-End Development",
      desc: "We build responsive, accessible interfaces using React, Next.js, and modern frameworks for pixel-perfect delivery.",
    },
    {
      id: 3,
      title: "Backend & Hosting",
      desc: "Our backend services ensure reliable APIs, authentication, and hosting built on Node.js, Supabase, and scalable infrastructures.",
    },
    {
      id: 4,
      title: "Performance & Analytics",
      desc: "We optimize for speed and insights using Lighthouse metrics, SEO enhancements, and analytics integrations.",
    },
  ];

  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center bg-black text-white xl:flex-row">
      {/* Left Side */}
      <div className="w-full border border-[#ffffff1a] xl:w-1/2">
        {/* Top Section */}
        <div className="border-b border-[#ffffff1a] px-6 py-8 xl:px-10">
          <h2 className="text-2xl font-semibold xl:text-3xl">Digital marketing</h2>
          <p className="mt-3 max-w-lg text-sm text-[#ffffffcc] xl:text-base">
            We craft marketing strategies that align with your business goals and drive measurable results.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="divide-y divide-[#ffffff1a]">
          {services.map((service) => (
            <Accordion
              key={service.id}
              open={open === service.id}
              className="border-none bg-transparent"
            >
              <AccordionHeader
                onClick={() => handleOpen(service.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-white hover:bg-[#151515] xl:px-10"
              >
                <span>{service.title}</span>
                {open === service.id ? (
                  <Minus size={22} weight="bold" className="text-[#ffffffcc]" />
                ) : (
                  <Plus size={22} weight="bold" className="text-[#ffffffcc]" />
                )}
              </AccordionHeader>

              <AccordionBody className="bg-black px-6 py-4 xl:px-10">
                <p className="text-sm leading-relaxed text-[#ffffffb3] xl:text-base">
                  {service.desc}
                </p>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Right Side (visual area) */}
      <div className="hidden w-full border border-[#ffffff1a] xl:block xl:w-1/2">
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,150,0.1),_transparent_70%)]" />
        </div>
      </div>

      {/* Button */}
      <div className="w-full border-t border-[#ffffff1a] py-10 text-center xl:absolute xl:bottom-0">
        <button className="rounded-full bg-white px-8 py-3 font-medium text-black transition hover:bg-[#e5e5e5]">
          Get service now
        </button>
      </div>
    </section>
  );
}
