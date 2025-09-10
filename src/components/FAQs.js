// src/app/components/FAQ.js
"use client";

import React from "react";
import {
 Accordion,
 AccordionHeader,
 AccordionBody,
} from "@material-tailwind/react";
import { ArrowCircleDownIcon } from "@phosphor-icons/react";

const FAQ = ({ faqs = [] }) => {
 const [open, setOpen] = React.useState(0); // Default to first FAQ (index 0)

 const handleOpen = (value) => setOpen(open === value ? null : value); // Allows closing by setting to null

 return (
 <section className="bg-primary_bg px-4 2xl:px-[9.5rem] py-10">
 <h1 className="!text-center section-header">
 FAQ's
 </h1>
 {faqs.length > 0 ? (
 faqs.map((item, index) => (
 <Accordion
 key={index}
 open={open === index}
 className="mb-2 rounded-lg border border-dark_border"
 >
 <AccordionHeader
 onClick={() => handleOpen(index)}
 className={`px-4 sm:px-6 lg:px-9 py-4 sm:py-6 text-left font-neueMontreal text-xs sm:text-base text-primary_text transition-colors 
 ${open === index ? "text-blue-500" : ""} flex justify-between items-center w-full`}
 >
 <span className="flex-1">{item.question}</span>
 <span className="ml-2 sm:ml-4">
 <ArrowCircleDownIcon
 className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-in-out ${open === index ? "rotate-180 text-accent" : ""}`}
 />
 </span>
 </AccordionHeader>
 <AccordionBody className="px-4 sm:px-6 lg:px-9 py-3 sm:py-4 text-sm sm:text-base font-normal text-primary_text bg-light_blue_bg">
 <p>{item.answer}</p>
 </AccordionBody>
 </Accordion>
 ))
 ) : (
 <p className="text-center text-sm sm:text-base text-primary_text">No FAQs available.</p>
 )}
 </section>
 );
};

export default FAQ;