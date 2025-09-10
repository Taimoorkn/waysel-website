"use client";

import Button from "@/components/Button";

const HeroSection = () => {
  const item = {
    title: "Cloud Integration",
    description:
      "Deploy scalable, secure solutions on AWS, Azure, or Google Cloud—automating infrastructure, improving uptime, and optimizing cost-performance across services.",
    image: "/images/services_page/cloud-dev.svg",
    buttonText: "Book a demo",
  };

  return (
    <section className="bg-primary_bg section_padding flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
      <div className="w-full md:w-1/2 text-start order-2 md:order-none">
        <h2 className="service-header">
          <span className="text-accent">Cloud </span>Integration
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
