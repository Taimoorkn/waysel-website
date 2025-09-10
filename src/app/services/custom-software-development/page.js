"use client";

import StructuredData, { serviceSchema, breadcrumbSchema } from '@/components/StructuredData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "./content/HeroSection";
import Banner from "@/components/Banner";
import { LazyComponent } from "@/components/DynamicLoader";

const customDevServiceData = {
  name: 'Custom Software Development Services',
  description: 'Tailored custom software development solutions for businesses. Build scalable, enterprise-grade software applications.',
  features: [
    'Business Analysis & Consulting',
    'Custom Application Development',
    'Enterprise Software Solutions',
    'AI & Machine Learning Integration',
    'Legacy System Modernization'
  ]
};

const breadcrumbData = [
  { name: 'Home', url: 'https://techitech.com' },
  { name: 'Services', url: 'https://techitech.com/services' },
  { name: 'Custom Software Development', url: 'https://techitech.com/services/custom-software-development' }
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

const CustomSoftwareDevelopment = () => {
  return (
    <div>
      <StructuredData data={serviceSchema(customDevServiceData)} />
      <StructuredData data={breadcrumbSchema(breadcrumbData)} />
      <Navbar />
      <HeroSection />
      <LazyServiceBoxes />
      <LazyDevelopmentProcess />
      <LazyHelpYourBusiness />
      <Banner variant="customDev" />
      <Footer />
    </div>
  );
};

export default CustomSoftwareDevelopment;