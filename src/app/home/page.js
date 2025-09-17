// src/app/home/page.js
"use client";

import React from "react";
import HeroSection from "./content/HeroSection";
import PortfolioSection from "./content/PortfolioSection";
import FillerSection from "./content/FillerSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <FillerSection/>
    </>
  );
};

export default HomePage;
