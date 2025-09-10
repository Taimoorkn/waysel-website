// src/app/components/FAQ.js
"use client";

import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ArrowCircleDownIcon } from "@phosphor-icons/react";

const FAQ = ({ faqs = [] }) => {
  const [open, setOpen] = React.useState(0); // Default to first FAQ (index 0)

  const handleOpen = (value) => setOpen(open === value ? null : value); // Allows closing by setting to null

  return (
    <section className="bg-primary_bg px-4 py-10 2xl:px-[9.5rem]">
      <h1 className="section-header !text-center">FAQ's</h1>
      {faqs.length > 0 ? (
        faqs.map((item, index) => (
          <Accordion
            key={index}
            open={open === index}
            className="mb-2 rounded-lg border border-dark_border"
          >
            <AccordionHeader
              onClick={() => handleOpen(index)}
              className={`px-4 py-4 text-left font-neueMontreal text-xs text-primary_text transition-colors sm:px-6 sm:py-6 sm:text-base lg:px-9 ${open === index ? "text-blue-500" : ""} flex w-full items-center justify-between`}
            >
              <span className="flex-1">{item.question}</span>
              <span className="ml-2 sm:ml-4">
                <ArrowCircleDownIcon
                  className={`h-5 w-5 transition-transform duration-300 ease-in-out sm:h-6 sm:w-6 ${open === index ? "rotate-180 text-accent" : ""}`}
                />
              </span>
            </AccordionHeader>
            <AccordionBody className="bg-light_blue_bg px-4 py-3 text-sm font-normal text-primary_text sm:px-6 sm:py-4 sm:text-base lg:px-9">
              <p>{item.answer}</p>
            </AccordionBody>
          </Accordion>
        ))
      ) : (
        <p className="text-center text-sm text-primary_text sm:text-base">No FAQs available.</p>
      )}
    </section>
  );
};

export default FAQ;
