"use client";

import StructuredData, { serviceSchema, breadcrumbSchema } from '@/components/StructuredData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "./content/HeroSection";
import Banner from "@/components/Banner";
import ServiceBoxes from "./content/ServiceBoxes";
import DevelopmentProcess from "./content/DevelopmentProcess";
import HelpYourBusiness from "./content/HelpYourBusiness";

const webDevServiceData = {
  name: 'Web Development Services',
  description: 'Professional web development services including frontend, backend, full-stack development, and e-commerce solutions.',
  features: [
    'Frontend Development',
    'Backend Development', 
    'Full Stack Development',
    'E-Commerce Development',
    'Website Maintenance & Updates'
  ]
};

const breadcrumbData = [
  { name: 'Home', url: 'https://techitech.com' },
  { name: 'Services', url: 'https://techitech.com/services' },
  { name: 'Web Development', url: 'https://techitech.com/services/web-development' }
];

const WebDevelopment = () => {
  return (
    <div>
      <StructuredData data={serviceSchema(webDevServiceData)} />
      <StructuredData data={breadcrumbSchema(breadcrumbData)} />
      <Navbar />
      <HeroSection />
      <ServiceBoxes />
      <DevelopmentProcess />
      <HelpYourBusiness />
      <Banner variant="webDev" />
      <Footer />
    </div>
  );
};

export default WebDevelopment;