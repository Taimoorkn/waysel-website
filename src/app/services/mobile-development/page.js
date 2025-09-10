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

const MobileDevelopment = () => {
 return (
 <div>
 <StructuredData data={serviceSchema(mobileDevServiceData)} />
 <StructuredData data={breadcrumbSchema(breadcrumbData)} />
 <Navbar />
 <HeroSection />
 <ServiceBoxes />
 <DevelopmentProcess />
 <HelpYourBusiness />
 <Banner variant="mobileDev" />
 <Footer />
 </div>
 );
};

export default MobileDevelopment;