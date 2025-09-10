"use client";

import ServiceBox from "@/components/ServiceBox";

const ServiceBoxes = () => {
  const items = [
    {
      title: "Cloud Infrastructure Setup",
      description:
        "Provision and configure servers, storage, and networking with AWS, Azure, or GCP for reliable, scalable infrastructure tailored to your business needs.",
      image: "/images/services_page/cloud/infrastructure.svg",
    },
    {
      title: "Cloud Migration",
      description:
        "Seamlessly move on-premise applications, databases, and workloads to the cloud with minimal downtime, ensuring performance, security, and future scalability.",
      image: "/images/services_page/cloud/migration.svg",
    },
    {
      title: "DevOps & CI/CD Pipelines",
      description:
        "Implement automated build, test, and deployment pipelines using tools like Jenkins, GitHub Actions, or AWS CodePipeline for faster, safer releases.",
      image: "/images/services_page/cloud/devops.svg",
    },
    {
      title: "Cloud Security & Compliance",
      description:
        "Secure cloud environments with identity management, encryption, monitoring, and policy enforcement—ensuring compliance with GDPR, HIPAA, SOC 2, and more.",
      image: "/images/services_page/cloud/security.svg",
    },
    {
      title: "Serverless Architecture",
      description:
        "Build lightweight, scalable applications using AWS Lambda or Google Cloud Functions—reducing maintenance, speeding up development, and cutting costs.",
      image: "/images/services_page/cloud/serverless.svg",
    },
  ];

  return (
    <section className="bg-primary_bg section_padding">
      <h2 className="section-header !text-center mb-8">
        Cloud Integration
        <br /> <span className="text-accent">Services</span>
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
