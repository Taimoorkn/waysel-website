import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./content/HeroSection";
import GoalsVision from "./content/GoalsVision";
import WhyChooseUs from "./content/WhyChooseUs";
import OurTeam from "./content/OurTeam";

export const metadata = {
  title: "About Us - TechiTech Solutions",
  description:
    "Learn about TechiTech Solutions, our mission, vision, and the expert team behind our innovative software development services.",
  keywords: [
    "about techitech",
    "software development team",
    "company mission",
    "technology experts",
    "software solutions",
  ],
  openGraph: {
    title: "About Us - TechiTech Solutions",
    description:
      "Learn about TechiTech Solutions, our mission, vision, and the expert team behind our innovative software development services.",
    type: "website",
    url: "https://techitech.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - TechiTech Solutions",
    description:
      "Learn about TechiTech Solutions, our mission, vision, and the expert team behind our innovative software development services.",
  },
  alternates: {
    canonical: "https://techitech.com/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <GoalsVision />
      <WhyChooseUs />
      <OurTeam />
      <Footer />
    </>
  );
};

export default AboutPage;
