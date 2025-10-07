"use client";

import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Minus, Plus } from "@phosphor-icons/react";

const services = [
  {
    id: 1,
    title: "Website development",
    desc: "We design and build websites that don’t just look good — they perform. Every layer of the process connects design, development, and reliability into one seamless system.",
    faqs: [
      {
        id: 1,
        title: "User Experience",
        desc: "We start with purposeful design utilizing Material 3 to create intuitive user journeys that solve users problems.",
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
    ],
    color: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Digital marketing",
    desc: "We craft marketing strategies that align with your business goals and drive measurable results.",
    faqs: [
      { id: 1, title: "Campaign ads", desc: "Data-driven campaigns designed to convert." },
      { id: 2, title: "Content strategy", desc: "Create and manage consistent brand narratives that drive engagement." },
      { id: 3, title: "Organic growth", desc: "Leverage SEO and social channels for long-term audience retention." },
    ],
    color: "bg-yellow-400",
  },
  {
    id: 3,
    title: "Cloud-native application development on AWS",
    desc: "Harness the power of the cloud with applications designed for scale, reliability, and cost efficiency.",
    faqs: [
      {
        id: 1,
        title: "Cross-platform apps",
        desc: "Flutter-based apps with a modular, block architecture for Android, iOS, and web.",
      },
      { id: 2, title: "Serverless deployment", desc: "Automated deployment pipelines using AWS Lambda and Amplify." },
      { id: 3, title: "Cloud-native design", desc: "Resilient designs optimized for distributed systems." },
    ],
    color: "bg-black",
  },
  {
    id: 4,
    title: "AWS Amplify-powered applications",
    desc: "We specialize in building entire application architectures using AWS Amplify, AppSync, and GraphQL.",
    faqs: [
      {
        id: 1,
        title: "GraphQL API with AppSync",
        desc: "Secure, high-performance APIs tailored to your app’s needs.",
      },
      { id: 2, title: "Full AWS integration", desc: "Seamless integrations with AWS services like S3, Lambda, and Cognito." },
      { id: 3, title: "Real-time & offline support", desc: "Sync data across devices with real-time updates and offline persistence." },
      { id: 4, title: "Cost optimization", desc: "Monitor and optimize cloud costs with AWS tools and strategies." },
    ],
    color: "bg-yellow-400",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#121211] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-24 text-center text-4xl font-semibold">Our services</h2>

        {services.map((service, index) => (
          <ServiceBlock key={service.id} service={service} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

function ServiceBlock({ service, isReversed }) {
  const [open, setOpen] = useState(1);
  const handleOpen = (id) => setOpen(open === id ? 0 : id);

  return (
    <div
      className={`mb-32 flex flex-col items-center justify-between gap-10 xl:flex-row ${
        isReversed ? "xl:flex-row-reverse" : ""
      }`}
    >
      {/* Text/Accordion */}
      <div className="w-full max-w-xl border border-[#ffffff1a]">
        <div className="border-b border-[#ffffff1a] p-6 sm:p-10">
          <h3 className="text-2xl font-semibold">{service.title}</h3>
          <p className="mt-3 text-sm text-[#ffffffcc]">{service.desc}</p>
        </div>

        {service.faqs.map((faq) => (
          <Accordion key={faq.id} open={open === faq.id} className="border-none bg-transparent">
            <AccordionHeader
              onClick={() => handleOpen(faq.id)}
              className="flex items-center justify-between border-b border-[#ffffff1a] px-6 py-4 text-left text-base font-semibold text-white sm:px-10"
            >
              <span>{faq.title}</span>
              {open === faq.id ? (
                <Minus size={20} weight="bold" className="text-[#ffffffb3]" />
              ) : (
                <Plus size={20} weight="bold" className="text-[#ffffffb3]" />
              )}
            </AccordionHeader>
            <AccordionBody className="px-6 py-3 sm:px-10">
              <p className="text-sm leading-relaxed text-[#ffffffb3]">{faq.desc}</p>
            </AccordionBody>
          </Accordion>
        ))}

        <div className="border-t border-[#ffffff1a] py-8 text-center">
          <button className="rounded-full bg-white px-8 py-3 font-medium text-black transition hover:bg-[#e5e5e5]">
            Get service now
          </button>
        </div>
      </div>

      {/* Visual */}
      <div
        className={`relative h-[400px] w-full max-w-md rounded-md ${service.color} shadow-[0_0_80px_10px_rgba(255,255,0,0.2)]`}
      ></div>
    </div>
  );
}
