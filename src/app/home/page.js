// src/app/home/page.js
"use client";

import React from "react";
import HeroSection from "./content/HeroSection";
import StatsBar from "./content/StatsBar";
import CompaniesShowcase from "./content/CompaniesShowcase";
import IndustriesWeServe from "./content/IndustriesWeServe";
import Banner from "@/components/Banner";
import { generalFaqs } from "@/constants/FaqConstants";

// Regular imports
import ServicesCarousel from "./content/ServicesCarousel";
import Testimonials from "./content/Testimonials";
import NextGenAICarousel from "./content/NextGenAICarousel";
import FAQs from "@/components/FAQs";
import TechStack from "@/components/TechStack";
import SuccessStories from "@/components/SuccessStories";

const HomePage = () => {
  return (
    <>
      {/* Above the fold - Load immediately */}
      <HeroSection />
      <StatsBar />
      <CompaniesShowcase />

      {/* Below the fold - Now loading directly */}
      <NextGenAICarousel />
      <ServicesCarousel />
      <IndustriesWeServe />
      {/* <SuccessStories /> */}
      <TechStack />
      <Testimonials />
      <FAQs faqs={generalFaqs} />
      <Banner variant="landingPage" />
    </>
  );
};

export default HomePage;
