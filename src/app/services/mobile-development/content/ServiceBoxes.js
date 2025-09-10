"use client";

import ServiceBox from "@/components/ServiceBox";

const ServiceBoxes = () => {
  const items = [
    {
      title: "iOS Development",
      description:
        "Craft responsive, user-friendly interfaces using React, Vue, or Angular. Focus on performance, accessibility, and seamless user experiences across devices.",
      image: "/images/services_page/mobile/apple.svg",
    },
    {
      title: "Andriod Development",
      description:
        "Develop robust server-side logic with Node.js, Python, or Ruby. Manage databases, APIs, and ensure scalable, secure web application architecture.",
      image: "/images/services_page/mobile/android.svg",
    },
    {
      title: "Cross Platform Development",
      description:
        "Deliver end-to-end web solutions combining modern frontends and powerful backends. Build scalable, maintainable apps tailored to your business needs.",
      image: "/images/services_page/mobile/crossplatform.svg",
    },
  ];

  return (
    <section className="section_padding bg-primary_bg">
      <h2 className="section-header mb-8 !text-center">
        Mobile Development <br /> <span className="text-accent">Services</span>
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <ServiceBox
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            className="w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceBoxes;
