"use client";

import Button from "@/components/Button";

const HeroSection = () => {
  const item = {
    title: "Custom Software Development",
    description:
      "Creating bespoke software solutions tailored to your unique business requirements. We focus on scalability, security, and innovation to drive your success.",
    image: "/images/services_page/custom-dev.svg",
    buttonText: "Book a Consultation",
  };

  return (
    <section className="bg-primary_bg section_padding flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
      <div className="w-full md:w-1/2 text-start order-2 md:order-none">
        <h2 className="service-header">
          Custom <span className="text-accent">Software</span>
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
