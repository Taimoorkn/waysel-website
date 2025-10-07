"use client";

import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Minus, MinusIcon, Plus, PlusIcon } from "@phosphor-icons/react";

const services = [
  {
    id: 1,
    title: "Website development",
    desc: "We design and build websites that don't just look good — they perform. Every layer of the process connects design, development, and reliability into one seamless system.",
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
      {
        id: 2,
        title: "Content strategy",
        desc: "Create and manage consistent brand narratives that drive engagement.",
      },
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
      {
        id: 2,
        title: "Full AWS integration",
        desc: "Seamless integrations with AWS services like S3, Lambda, and Cognito.",
      },
      {
        id: 3,
        title: "Real-time & offline support",
        desc: "Sync data across devices with real-time updates and offline persistence.",
      },
      { id: 4, title: "Cost optimization", desc: "Monitor and optimize cloud costs with AWS tools and strategies." },
    ],
    color: "bg-yellow-400",
  },
];

export default function ServicesSection() {
  return (
    <section className="section">
      <h2 className="HeadingH3 py-4">Our services</h2>

      {services.map((service, index) => (
        <div className="py-8 xl:py-20">
          <ServiceBlock key={service.id} service={service} isReversed={index % 2 !== 0} />
        </div>
      ))}
    </section>
  );
}

function ServiceBlock({ service, isReversed }) {
  const [open, setOpen] = useState(1);
  const handleOpen = (id) => setOpen(open === id ? 0 : id);

  return (
    <div
      className={`flex flex-col items-center justify-between gap-16 xl:flex-row ${
        isReversed ? "xl:flex-row-reverse" : ""
      }`}
    >
      {/* Text/Accordion */}
      <div className="flex w-full flex-col items-start gap-2 xl:gap-12">
        <div className="flex w-full flex-col justify-between">
          <div>
            <h3 className="HeadingH5">{service.title}</h3>
            <p className="BodyText mt-3">{service.desc}</p>
            <div className="my-8 border border-border-secondary"></div>
          </div>

          {service.faqs.map((faq) => (
            <Accordion key={faq.id} open={open === faq.id}>
              <AccordionHeader
                onClick={() => handleOpen(faq.id)}
                className="m-0 flex h-full w-full items-start justify-between border-none p-0"
              >
                <span
                  className={`BodyTextBold w-full ${open === faq.id ? "!text-text-primary" : "!text-text-tertiary"}`}
                >
                  {faq.title}
                </span>
                <div>
                  {" "}
                  {/* Adds 16px gap */}
                  {open === faq.id ? (
                    <MinusIcon
                      size={20}
                      weight="bold"
                      className={open === faq.id ? "text-text-primary" : "text-text-secondary"}
                    />
                  ) : (
                    <PlusIcon
                      size={20}
                      weight="bold"
                      className={open === faq.id ? "text-text-primary" : "text-text-secondary"}
                    />
                  )}
                </div>
              </AccordionHeader>
              <AccordionBody className="m-0 mt-4 p-0">
                <p className="BodyText">{faq.desc}</p>
              </AccordionBody>
              <div className="my-8 border border-border-secondary"></div>
            </Accordion>
          ))}
        </div>

        <div className="text-center">
          <button className="rounded-full bg-white px-6 py-2 font-medium text-black transition hover:bg-[#e5e5e5]">
            Get service now
          </button>
        </div>
      </div>

      {/* Visual */}
      <div
        className={`relative h-[400px] w-full rounded-md xl:h-[600] ${service.color} shadow-[0_0_80px_10px_rgba(255,255,0,0.2)]`}
      ></div>
    </div>
  );
}
