"use client";

import Button from "@/components/Button";

const HeroSection = () => {
  const item = {
    title: "Chrome Extension Development",
    description:
      "Develop custom Chrome extensions using JavaScript, Manifest V3, and APIs to enhance productivity, streamline workflows, or extend web platform functionality.",
    image: "/images/services_page/chrome/chrome-extension-dev.svg",
    buttonText: "Book a Consultation",
  };

  return (
    <section className="bg-primary_bg section_padding flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
      <div className="w-full md:w-1/2 text-start order-2 md:order-none">
        <h2 className="service-header">
          Chrome <span className="text-accent">Extension </span>
          <br /> Development
        </h2>
        <p className="font-manrope text-sm sm:text-base md:text-lg leading-5 sm:leading-6 text-secondary_text mb-6 sm:mb-8">
          {item.description}
        </p>
        <Button variant="primary">{item.buttonText}</Button>
      </div>
      <img src={item.image} alt={`${item.title}`} className="w-[500px]" />
    </section>
  );
};

export default HeroSection;
