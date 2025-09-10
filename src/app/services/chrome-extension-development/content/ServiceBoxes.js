"use client";

import ServiceBox from "@/components/ServiceBox";

const ServiceBoxes = () => {
  const items = [
    {
      title: "Productivity Extension",
      description:
        "Create time-saving tools like task managers, note-takers, or shortcut launchers to streamline user workflows directly within the browser.",
      image: "/images/services_page/chrome/productivity.svg",
    },
    {
      title: "E-Commerce Enhancers",
      description:
        "Build extensions for price tracking, coupon automation, and product comparisons to improve shopping experiences and boost customer retention.",
      image: "/images/services_page/chrome/ecommerce.svg",
    },
    {
      title: "Scraping & Automation",
      description:
        "Develop lightweight tools to scrape, extract, and organize data from websites, helping users gather insights efficiently and legally.",
      image: "/images/services_page/chrome/automation.svg",
    },
    {
      title: "Social Media Tool",
      description:
        "Craft extensions for content scheduling, engagement tracking, or quick sharing to boost online presence and social performance.",
      image: "/images/services_page/chrome/social.svg",
    },
    {
      title: "Custom Dashboard Widgets",
      description:
        "Design browser-side widgets for quick access to dashboards, analytics, or CRM tools—perfect for internal teams and SaaS users.",
      image: "/images/services_page/chrome/widget.svg",
    },
  ];

  return (
    <section className="bg-primary_bg section_padding">
      <h2 className="section-header !text-center mb-8">
        Chrome Extension Development <br />{" "}
        <span className="text-accent">Services</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 w-full">
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
