"use client";

import StructuredData, { serviceSchema, breadcrumbSchema } from '@/components/StructuredData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "./content/HeroSection";
import Banner from "@/components/Banner";
import { LazyComponent } from "@/components/DynamicLoader";

const mobileDevServiceData = {
  name: 'Mobile App Development Services',
  description: 'Professional mobile app development for iOS and Android. Build native and cross-platform mobile applications.',
  features: [
    'iOS Development',
    'Android Development', 
    'Cross-Platform Development',
    'React Native Apps',
    'Flutter Apps'
  ]
};

const breadcrumbData = [
  { name: 'Home', url: 'https://techitech.com' },
  { name: 'Services', url: 'https://techitech.com/services' },
  { name: 'Mobile Development', url: 'https://techitech.com/services/mobile-development' }
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

const MobileDevelopment = () => {
  return (
    <div>
      <StructuredData data={serviceSchema(mobileDevServiceData)} />
      <StructuredData data={breadcrumbSchema(breadcrumbData)} />
      <Navbar />
      <HeroSection />
      <LazyServiceBoxes />
      <LazyDevelopmentProcess />
      <LazyHelpYourBusiness />
      <Banner variant="mobileDev" />
      <Footer />
    </div>
  );
};

export default MobileDevelopment;