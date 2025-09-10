"use client";

import StructuredData, { serviceSchema, breadcrumbSchema } from '@/components/StructuredData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "./content/HeroSection";
import Banner from "@/components/Banner";
import { LazyComponent } from "@/components/DynamicLoader";

const cloudIntegrationServiceData = {
  name: 'Cloud Integration Services',
  description: 'Professional cloud integration and migration services. AWS, Azure, Google Cloud solutions with DevOps and CI/CD.',
  features: [
    'Cloud Infrastructure Setup',
    'Cloud Migration Services',
    'DevOps & CI/CD Pipelines',
    'Cloud Security & Compliance',
    'Serverless Architecture'
  ]
};

const breadcrumbData = [
  { name: 'Home', url: 'https://techitech.com' },
  { name: 'Services', url: 'https://techitech.com/services' },
  { name: 'Cloud Integration', url: 'https://techitech.com/services/cloud-integration' }
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

const CloudIntegration = () => {
  return (
    <div>
      <StructuredData data={serviceSchema(cloudIntegrationServiceData)} />
      <StructuredData data={breadcrumbSchema(breadcrumbData)} />
      <Navbar />
      <HeroSection />
      <LazyServiceBoxes />
      <LazyDevelopmentProcess />
      <LazyHelpYourBusiness />
      <Banner variant="cloud" />
      <Footer />
    </div>
  );
};

export default CloudIntegration;