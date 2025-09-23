// src/app/home/page.js
"use client";

import React from "react";
import HeroSection from "./content/HeroSection";
import PortfolioSection from "./content/PortfolioSection";
import FillerSection from "./content/FillerSection";
import StarWars from "./content/StarWars";
import Contact from "./content/Contact";
import TestimonialsSection from "./content/TestimonialsSection";
import FAQ from "../../components/FAQs";
import TechStack from "../../components/TechStack";
import { generalFaqs } from "../../constants/FaqConstants";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <FillerSection />
      <TechStack />
      <FAQ faqs={generalFaqs} />
      <TestimonialsSection />
      <StarWars />
      <Contact />
    </>
  );
};

export default HomePage;
