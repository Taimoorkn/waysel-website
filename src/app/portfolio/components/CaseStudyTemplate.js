'use client'
import React, { useState, useEffect, useRef } from 'react';

// Import all section components
import ProgressBar from './sections/ProgressBar';
import HeroSection from './sections/HeroSection';
import Navigation from './sections/Navigation';
import OverviewSection from './sections/OverviewSection';
import ClientSection from './sections/ClientSection';
import ChallengeSection from './sections/ChallengeSection';
import GoalsSection from './sections/GoalsSection';
import ResearchSection from './sections/ResearchSection';
import ApproachSection from './sections/ApproachSection';
import ImagesSection from './sections/ImagesSection';
import ResultsSection from './sections/ResultsSection';
import LearningsSection from './sections/LearningsSection';
import Banner from '@/components/Banner';

// Navigation sections definition - used to track active section and for navigation
const sections = [
  { id: 'overview', label: 'Overview', icon: 'Eye' },
  { id: 'client-background', label: 'Client', icon: 'Building' },
  { id: 'challenge', label: 'Challenge', icon: 'AlertTriangle' },
  { id: 'goals', label: 'Goals', icon: 'Target' },
  { id: 'timeline', label: 'Timeline', icon: 'Calendar' },
  { id: 'research', label: 'Research', icon: 'BookOpen' },
  { id: 'approach', label: 'Approach', icon: 'Lightbulb' },
  { id: 'gallery', label: 'Gallery', icon: 'Image' },
  { id: 'results', label: 'Results', icon: 'TrendingUp' },
  { id: 'learnings', label: 'Learnings', icon: 'Sparkles' }
];

const CaseStudyTemplate = ({ data }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  // Handle scroll for progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const sectionElements = sections.map(section =>
        document.getElementById(section.id)
      );

      const currentSection = sectionElements.find(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <ProgressBar scrollProgress={scrollProgress} />

      {/* Hero Section */}
      <HeroSection heroRef={heroRef} data={data} />

      {/* Floating Navigation */}
      <Navigation 
        sections={sections} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      {/* Main Content */}
      <div className=" ">
        {/* Overview Section */}
        <OverviewSection data={data} />

        {/* Challenge Section */}
        <ChallengeSection data={data} />

        {/* Client Background Section */}
        <ClientSection data={data} />


        {/* Goals Section */}
        <GoalsSection data={data} />

        {/* Research Section */}
        <ResearchSection data={data} />

        {/* Approach Section */}
        <ApproachSection data={data} />

        {/* Images Gallery Section */}
        <ImagesSection data={data} />

        {/* Results Section */}
        <ResultsSection data={data} />

        {/* Learnings Section */}
        <LearningsSection data={data} />

        {/* Call to Action */}
        <Banner />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default CaseStudyTemplate;