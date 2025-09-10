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

const ecommerceDevServiceData = {
  name: "E-Commerce Development Services",
  description:
    "Professional e-commerce development services including Shopify, WooCommerce, and custom online stores.",
  features: [
    "Shopify Development",
    "WooCommerce Development",
    "Custom E-Commerce Solutions",
    "Payment Gateway Integration",
    "Inventory Management Systems",
  ],
};

const breadcrumbData = [
  { name: "Home", url: "https://techitech.com" },
  { name: "Services", url: "https://techitech.com/services" },
  { name: "E-Commerce Development", url: "https://techitech.com/services/ecommerce-development" },
];

const ECommerceDevelopment = () => {
  return (
    <div>
      <StructuredData data={serviceSchema(ecommerceDevServiceData)} />
      <StructuredData data={breadcrumbSchema(breadcrumbData)} />
      <Navbar />
      <HeroSection />
      <ServiceBoxes />
      <DevelopmentProcess />
      <HelpYourBusiness />
      <Banner variant="ecommerceDev" />
      <Footer />
    </div>
  );
};

export default ECommerceDevelopment;
