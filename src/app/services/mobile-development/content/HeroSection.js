"use client";

import Button from "@/components/Button";

const HeroSection = () => {
  const item = {
    title: "Mobile Development",
    description:
      "Creating seamless, high-performance mobile apps customized for your needs. We focus on intuitive design, robust functionality, and smooth user experiences across all devices.",
    image: "/images/services_page/mobile-dev.svg",
    buttonText: "Book a Consultation",
  };

  return (
    <section className="bg-primary_bg section_padding flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
      <div className="w-full md:w-1/2 text-start order-2 md:order-none">
        <h2 className="service-header">
          Mobile <span className="text-accent">App</span>
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
