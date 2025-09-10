"use client";

import StructuredData, { serviceSchema, breadcrumbSchema } from '@/components/StructuredData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "./content/HeroSection";
import Banner from "@/components/Banner";
import { LazyComponent } from "@/components/DynamicLoader";

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

const LazyServiceBoxes = (props) => (
  <LazyComponent
    importFn={() => import('./content/ServiceBoxes')}
    className="min-h-[500px]"
    minHeight="500px"
    {...props}
  />
);

const LazyDevelopmentProcess = (props) => (
  <LazyComponent
    importFn={() => import('./content/DevelopmentProcess')}
    className="min-h-[600px]"
    minHeight="600px"
    {...props}
  />
);

const LazyHelpYourBusiness = (props) => (
  <LazyComponent
    importFn={() => import('./content/HelpYourBusiness')}
    className="min-h-[400px]"
    minHeight="400px"
    {...props}
  />
);

const WebDevelopment = () => {
  return (
    <div>
      <StructuredData data={serviceSchema(webDevServiceData)} />
      <StructuredData data={breadcrumbSchema(breadcrumbData)} />
      <Navbar />
      <HeroSection />
      <LazyServiceBoxes />
      <LazyDevelopmentProcess />
      <LazyHelpYourBusiness />
      <Banner variant="webDev" />
      <Footer />
    </div>
  );
};

export default WebDevelopment;