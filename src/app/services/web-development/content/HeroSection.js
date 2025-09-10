"use client";

import Button from "@/components/Button";

const HeroSection = () => {
 const item = {
 title: "Web Development",
 description:
 "Building modern, responsive websites tailored to your brand. Our team delivers fast, SEO-optimized, and accessible sites that engage users and drive business growth.",
 image: "/images/services_page/web-dev.svg",
 buttonText: "Book a Call",
 };

 return (
 <section className="bg-primary_bg section_padding flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
 <div className="w-full md:w-1/2 text-start order-2 md:order-none">
 <h2 className="service-header">
 Web - <span className="text-accent">Site</span>/
 <span className="text-accent">App</span>
 <br /> Development
 </h2>
 <p className="font-neueMontreal text-sm sm:text-base md:text-lg text-secondary_text mb-6 sm:mb-8">
 {item.description}
 </p>
 <Button variant="primary" className="w-full sm:w-auto">
 {item.buttonText}
 </Button>
 </div>
 <img
 src={item.image}
 alt={`${item.title} illustration`}
 className="w-full md:w-1/2 lg:w-[500px] max-w-full h-auto order-1 md:order-none"
 />
 </section>
 );
};

export default HeroSection;