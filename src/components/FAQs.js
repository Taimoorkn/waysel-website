// src/app/components/FAQ.js
"use client";

import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ArrowCircleDownIcon } from "@phosphor-icons/react";

const FAQ = ({ faqs = [] }) => {
  const [open, setOpen] = React.useState(0); // Default to first FAQ (index 0)

  const handleOpen = (value) => setOpen(open === value ? null : value); // Allows closing by setting to null

  return (
    <section className="section relative mx-auto flex w-full flex-col items-center text-primary">
      <div className="oval-blur left-1/2 top-[-10%] z-0 -translate-x-1/2 -translate-y-1/2 transform" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 py-16 text-center font-hurme">
        <h1 className="bg-gradient-to-b from-white to-[#FFBA8F] bg-clip-text text-4xl tracking-[-3%] text-transparent sm:text-[64px] sm:leading-[80px]">
          Frequently Asked Questions
        </h1>
        <p className="text-xl leading-[32px] text-[#ffffffe6]">
          Get answers to common questions about our services
        </p>
      </div>
      <div className="relative z-10 w-full">
        {faqs.length > 0 ? (
          faqs.map((item, index) => (
            <Accordion
              key={index}
              open={open === index}
              className="mb-4 overflow-hidden rounded-2xl border border-[#fed7be33] bg-[#0D0D0C]"
            >
              <AccordionHeader
                onClick={() => handleOpen(index)}
                className={`px-6 py-6 text-left font-hurme transition-all duration-300 ease-in-out sm:px-8 sm:py-8 ${open === index ? "bg-[#1A1A1A]" : "hover:bg-[#181818]"} flex w-full items-center justify-between`}
              >
                <span className="flex-1 text-base font-semibold tracking-[-1%] text-white sm:text-xl">
                  {item.question}
                </span>
                <span className="ml-4">
                  <ArrowCircleDownIcon
                    className={`h-6 w-6 text-white transition-transform duration-300 ease-in-out sm:h-8 sm:w-8 ${open === index ? "rotate-180" : ""}`}
                  />
                </span>
              </AccordionHeader>
              <AccordionBody className="border-t border-[#fed7be33] bg-[#121211] px-6 py-6 sm:px-8 sm:py-8">
                <p className="font-hurme text-base font-normal leading-relaxed text-[#ffffffe6] sm:text-lg">
                  {item.answer}
                </p>
              </AccordionBody>
            </Accordion>
          ))
        ) : (
          <p className="text-center font-hurme text-lg text-[#ffffffe6]">No FAQs available.</p>
        )}
      </div>
    </section>
  );
};

export default FAQ;
