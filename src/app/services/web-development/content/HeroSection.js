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
    <section className="section_padding flex flex-col gap-8 bg-primary_bg md:flex-row md:items-center md:justify-between md:gap-12">
      <div className="order-2 w-full text-start md:order-none md:w-1/2">
        <h2 className="service-header">
          Web - <span className="text-accent">Site</span>/<span className="text-accent">App</span>
          <br /> Development
        </h2>
        <p className="mb-6 font-neueMontreal text-sm text-secondary_text sm:mb-8 sm:text-base md:text-lg">
          {item.description}
        </p>
        <Button variant="primary" className="w-full sm:w-auto">
          {item.buttonText}
        </Button>
      </div>
      <img
        src={item.image}
        alt={`${item.title} illustration`}
        className="order-1 h-auto w-full max-w-full md:order-none md:w-1/2 lg:w-[500px]"
      />
    </section>
  );
};

export default HeroSection;
