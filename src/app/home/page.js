// src/app/home/page.js
"use client";

import React from "react";
import HeroSection from "./content/HeroSection";
import PortfolioSection from "./content/PortfolioSection";
import FillerSection from "./content/FillerSection";
import StarWars from "./content/StarWars";
import Contact from "./content/Contact";
import TestimonialsSection from "./content/TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <FillerSection/>
      <TestimonialsSection/>
      <StarWars/>
      <Contact/>
    </>
  );
};

export default HomePage;
