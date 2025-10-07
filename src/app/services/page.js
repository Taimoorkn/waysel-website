// src/app/services/page.js
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHeroSection from "./content/ServicesHeroSection";
import Contact from "@/components/Contact";
import ServicesSection from "./content/ServicesSection";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <ServicesHeroSection />
      <ServicesSection />
      <Contact />
      <Footer />
    </>
  );
};

export default ServicesPage;
