"use client";

import ServiceBox from "@/components/ServiceBox";

const ServiceBoxes = () => {
  const items = [
    {
      title: "Fully Managed Model",
      description:
        "We provision and configure servers, storage, and networking with AWS, Azure, or GCP for a scalable, tailored enterprise infrastructure.",
      image: "/images/services_page/enterprise/infrastructure.svg",
    },
    {
      title: "99.9% Uptime SLA with 24/7 Support",
      description:
        "Migrate on-premise apps, databases, and workloads to the cloud with minimal downtime, backed by a 99.9% uptime SLA and 24/7 support.",
      image: "/images/services_page/enterprise/customersupport.svg",
    },
    {
      title: "High Scalability for Growing Enterprise Needs",
      description:
        "Implement automated build, test, and deployment pipelines with Jenkins, GitHub Actions, or AWS CodePipeline for efficient enterprise scaling.",
      image: "/images/services_page/enterprise/growth.svg",
    },
    {
      title: "Industry Compliance (e.g., HIPAA, ISO, GDPR)",
      description:
        "Secure cloud environments with identity management, encryption, and monitoring, ensuring compliance with GDPR, HIPAA, and SOC 2 standards.",
      image: "/images/services_page/enterprise/check.svg",
    },
    {
      title: "Proven Experience with Fortune 1000 Clients",
      description:
        "Leverage our expertise with Fortune 1000 companies to deliver reliable, high-performance enterprise solutions.",
      image: "/images/services_page/enterprise/award.svg",
    },
    {
      title: "Dedicated Solution Architects & Account Managers",
      description:
        "Benefit from dedicated architects and managers who provide personalized guidance to optimize your enterprise technology stack.",
      image: "/images/services_page/enterprise/manager.svg",
    },
  ];

  return (
    <section className="bg-primary_bg section_padding">
      <h2 className="section-header !text-center mb-8">
        <span className="text-accent">Enterprise Solutions</span> <br />{" "}
        Benefits & Competitive Edge
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
