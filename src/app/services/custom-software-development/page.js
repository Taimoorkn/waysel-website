"use client";

import StructuredData, { serviceSchema, breadcrumbSchema } from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "./content/HeroSection";
import Banner from "@/components/Banner";
import ServiceBoxes from "./content/ServiceBoxes";
import DevelopmentProcess from "./content/DevelopmentProcess";
import HelpYourBusiness from "./content/HelpYourBusiness";

const customDevServiceData = {
  name: "Custom Software Development Services",
  description:
    "Tailored custom software development solutions for businesses. Build scalable, enterprise-grade software applications.",
  features: [
    "Business Analysis & Consulting",
    "Custom Application Development",
    "Enterprise Software Solutions",
    "AI & Machine Learning Integration",
    "Legacy System Modernization",
  ],
};

const breadcrumbData = [
  { name: "Home", url: "https://techitech.com" },
  { name: "Services", url: "https://techitech.com/services" },
  {
    name: "Custom Software Development",
    url: "https://techitech.com/services/custom-software-development",
  },
];

const CustomSoftwareDevelopment = () => {
  return (
    <div>
      <StructuredData data={serviceSchema(customDevServiceData)} />
      <StructuredData data={breadcrumbSchema(breadcrumbData)} />
      <Navbar />
      <HeroSection />
      <ServiceBoxes />
      <DevelopmentProcess />
      <HelpYourBusiness />
      <Banner variant="customDev" />
      <Footer />
    </div>
  );
};

export default CustomSoftwareDevelopment;
