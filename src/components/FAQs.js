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
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 py-16 text-center">
        <h1 className="bg-gradient-to-b from-white to-[#FFBA8F] bg-clip-text text-4xl tracking-[-3%] text-transparent sm:text-[64px] sm:leading-[80px]">
          Frequently Asked Questions
        </h1>
        <p className="text-xl leading-[32px] text-[#ffffffe6]">
          Get answers to common questions about our services
        </p>
      </div>
      <div className="relative z-10 w-full space-y-4">
        {faqs.length > 0 ? (
          faqs.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-[#fed7be33] bg-[#0D0D0C] transition-all duration-300 hover:border-[#fed7be55] hover:shadow-lg"
            >
              <Accordion
                open={open === index}
                className="border-none bg-transparent"
              >
                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className={`px-6 py-5 text-left transition-all duration-300 ease-in-out sm:px-8 sm:py-6 ${
                    open === index
                      ? "bg-[#1A1A1A] shadow-inner"
                      : "hover:bg-[#151515] group-hover:bg-[#161616]"
                  } flex w-full items-center justify-between border-none`}
                >
                  <span className="flex-1 text-base font-medium tracking-[-0.5px] text-[#ffffffcc] sm:text-lg sm:leading-relaxed">
                    {item.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    <ArrowCircleDownIcon
                      className={`h-7 w-7 text-[#fed7be88] transition-all duration-300 ease-in-out sm:h-9 sm:w-9 ${
                        open === index
                          ? "rotate-180 text-[#fed7bebb]"
                          : "group-hover:text-[#fed7beaa]"
                      }`}
                    />
                  </span>
                </AccordionHeader>
                <AccordionBody className="border-t border-[#fed7be22] bg-[#121211] px-6 py-5 sm:px-8 sm:py-6">
                  <div className="max-w-none">
                    <p className="text-sm font-normal leading-relaxed text-[#ffffffd9] sm:text-base sm:leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </AccordionBody>
              </Accordion>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center py-16">
            <p className="text-center text-xl text-[#ffffff88]">No FAQs available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
