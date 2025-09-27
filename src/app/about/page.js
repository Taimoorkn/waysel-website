// src/app/about/page.js
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeroSection from "./content/AboutHeroSection";
import PhilosophySection from "./content/PhilosophySection";
import DifferenceSection from "./content/DifferenceSection";
import Contact from "../home/content/Contact";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <PhilosophySection />
      <DifferenceSection />
      <Contact />
      <Footer />
    </>
  );
};

export default AboutPage;