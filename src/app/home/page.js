// src/app/home/page.js
"use client";

import React from "react";
import HeroSection from "./content/HeroSection";
import StatsBar from "./content/StatsBar";
import CompaniesShowcase from "./content/CompaniesShowcase";
import IndustriesWeServe from "./content/IndustriesWeServe";
import Banner from "@/components/Banner";
import { generalFaqs } from "@/constants/FaqConstants";

// Lazy imported heavy components
import {
  LazyServicesCarousel,
  LazyTestimonials,
  LazyNextGenAI,
  LazyFAQ,
  LazyTechStack,
  LazySuccessStories
} from "@/components/DynamicLoader";

const HomePage = () => {
  return (
    <>
      {/* Above the fold - Load immediately */}
      <HeroSection />
      <StatsBar />
      <CompaniesShowcase />
      
      {/* Below the fold - Load dynamically */}
      <LazyNextGenAI />
      <LazyServicesCarousel />
      <IndustriesWeServe />
      {/* <LazySuccessStories /> */}
      <LazyTechStack />
      <LazyTestimonials />
      <LazyFAQ faqs={generalFaqs} />
      <Banner variant="landingPage" />
    </>
  );
};

export default HomePage;