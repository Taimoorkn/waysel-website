// src/app/services/page.js
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHeroSection from "./content/ServicesHeroSection";
import ServicesListSection from "./content/ServicesListSection";
import Contact from "@/components/Contact";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <ServicesHeroSection />
      <ServicesListSection />
      <Contact />
      <Footer />
    </>
  );
};

export default ServicesPage;
