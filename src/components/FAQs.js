// src/app/components/FAQ.js
"use client";

import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";
import GradientText from "./GradientText";

const FAQ = ({ faqs = [] }) => {
  const [open, setOpen] = React.useState(0); // Default to first FAQ (index 0)

  const handleOpen = (value) => setOpen(open === value ? null : value); // Allows closing by setting to null

  return (
    <section className="section text-primary relative mx-auto flex w-full flex-col items-center !pb-16">
      <div className="oval-blur left-1/2 top-[25%] z-0 -translate-x-1/2 -translate-y-1/2 transform" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 py-16 text-center">
        <h2 className="text-4xl tracking-[-3%] text-white xl:text-[64px] xl:leading-[80px]">
          <GradientText>Frequently</GradientText> Asked Questions
        </h2>
        <p className="text-xl leading-[32px] text-[#ffffffe6]">Get answers to common questions about our services</p>
      </div>
      <div className="relative z-10 w-full space-y-7">
        {faqs.length > 0 ? (
          faqs.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-[#fed7be33] bg-primary_bg transition-all duration-300 hover:border-[#fed7be55] hover:shadow-lg"
            >
              <Accordion open={open === index} className="border-none bg-transparent">
                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className={`px-6 py-5 text-left transition-all duration-300 ease-in-out xl:px-8 xl:py-6 ${
                    open === index ? "bg-[#1A1A1A] shadow-inner" : "hover:bg-[#151515] group-hover:bg-[#161616]"
                  } flex w-full items-center justify-between border-none`}
                >
                  <span className="flex-1 text-base font-medium tracking-[-0.5px] text-[#ffffffcc] xl:text-lg xl:leading-relaxed">
                    {item.question}
                  </span>
                  <span className="relative flex h-6 w-6 items-center justify-center xl:h-8 xl:w-8">
                    <PlusIcon
                      className={`absolute inset-0 m-auto size-4 transform text-[#fed7be88] transition-all duration-300 ease-in-out xl:size-6 ${
                        open === index ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                      }`}
                    />
                    <MinusIcon
                      className={`absolute inset-0 m-auto size-4 transform text-[#fed7bebb] transition-all duration-300 ease-in-out xl:size-6 ${
                        open === index ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
                      }`}
                    />
                  </span>
                </AccordionHeader>
                <AccordionBody className="border-t border-[#fed7be22] bg-[#121211] px-6 py-5 xl:px-8 xl:py-6">
                  <div className="max-w-none">
                    <p className="text-sm font-normal leading-relaxed text-[#ffffffd9] xl:text-base xl:leading-relaxed">
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
