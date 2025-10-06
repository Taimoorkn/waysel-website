// src/app/home/page.js
"use client";

import React from "react";
import HeroSection from "./content/HeroSection";
import PortfolioSection from "./content/PortfolioSection";
import FillerSection from "./content/FillerSection";
import StarWars from "./content/StarWars";
import TestimonialsSection from "./content/TestimonialsSection";
import FAQ from "../../components/FAQs";
import TechStack from "../../components/TechStack";
import { generalFaqs } from "../../constants/FaqConstants";
import MagicBento from "./content/MagicBento";
import Contact from "@/components/Contact";
import BrandCarousel from "@/components/BrandCarousel";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BrandCarousel />
      <PortfolioSection />
      <FillerSection />
      <TestimonialsSection />
      {/* <MagicBento enableBorderGlow={true} disableAnimations={false} glowColor="255, 76, 36" /> */}
      <TechStack />
      <FAQ faqs={generalFaqs} />

      <StarWars />
      <Contact />
    </>
  );
};

export default HomePage;
