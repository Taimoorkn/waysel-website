// src/app/home/page.js
"use client";

import React from "react";
import HeroSection from "./content/HeroSection";
import PortfolioSection from "./content/PortfolioSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
    </>
  );
};

export default HomePage;
