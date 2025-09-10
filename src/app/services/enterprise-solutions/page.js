"use client";

import StructuredData, { serviceSchema, breadcrumbSchema } from '@/components/StructuredData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "./content/HeroSection";
import Banner from "@/components/Banner";
import { LazyComponent } from "@/components/DynamicLoader";

const enterpriseServiceData = {
  name: 'Enterprise Solutions & Software Development',
  description: 'Enterprise-grade software solutions and consulting services. Build scalable, secure enterprise applications.',
  features: [
    'Enterprise Architecture Design',
    'System Integration Services',
    'Business Process Automation',
    'Performance & Scalability Optimization',
    'Enterprise Security Solutions'
  ]
};

const breadcrumbData = [
  { name: 'Home', url: 'https://techitech.com' },
  { name: 'Services', url: 'https://techitech.com/services' },
  { name: 'Enterprise Solutions', url: 'https://techitech.com/services/enterprise-solutions' }
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

const EnterpriseSolutions = () => {
  return (
    <div>
      <StructuredData data={serviceSchema(enterpriseServiceData)} />
      <StructuredData data={breadcrumbSchema(breadcrumbData)} />
      <Navbar />
      <HeroSection />
      <LazyServiceBoxes />
      <LazyDevelopmentProcess />
      <LazyHelpYourBusiness />
      <Banner variant="eCommerce" />
      <Footer />
    </div>
  );
};

export default EnterpriseSolutions;