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
    <section className="section_padding flex flex-col gap-8 bg-primary_bg md:flex-row md:items-center md:justify-between md:gap-12">
      <div className="order-2 w-full text-start md:order-none md:w-1/2">
        <h2 className="service-header">
          Mobile <span className="text-accent">App</span>
          <br /> Development
        </h2>
        <p className="mb-6 font-neueMontreal text-sm text-secondary_text sm:mb-8 sm:text-base md:text-lg">
          {item.description}
        </p>
        <Button variant="primary">{item.buttonText}</Button>
      </div>
      <img src={item.image} alt={`${item.title}`} className="w-[500px]" />
    </section>
  );
};

export default HeroSection;
