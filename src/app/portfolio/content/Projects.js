"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { 
  CaretDownIcon, 
  StarFourIcon, 
  XIcon,
  FunnelIcon,
  CheckIcon,
  MagnifyingGlassIcon
} from "@phosphor-icons/react";

// Combined data structure - no need for separate mappings
const stories = [
  {
    title: "Professionally.ai",
    description: "An AI-powered Outlook add-in that transforms email communication by automatically rewriting messages to match the perfect tone, helping professionals save 25+ hours monthly.",
    image: "/images/successstories/Professionally.png", // Update with actual image path
    alt: "Professionally.ai Email Assistant",
    industry: "Productivity & AI",
    solutionType: "outlook-addon",
    solutionName: "Outlook Add-in",
    slug: "professionally"
  },
  {
    title: "Nimvio",
    description: "Nimvio is a sleek, responsive marketing site built for a fintech startup.",
    image: "/images/successstories/Portfolio2.png",
    alt: "Nimvio",
    industry: "Fintech",
    solutionType: "web",
    solutionName: "Website/Web App",
    slug: "nimvio"
  },
  {
    title: "Blinket",
    description: "Blinket is a social micro-vlogging app designed for Gen Z users.",
    image: "/images/successstories/Portfolio3.png",
    alt: "Blinket",
    industry: "Social Networking",
    solutionType: "mobile",
    solutionName: "Mobile App",
    slug: "blinket"
  },
  {
    title: "Wellysy",
    description: "Wellysy is a wellness tracker that blends habit building, journaling, and mindfulness.",
    image: "/images/successstories/Portfolio4.png",
    alt: "Wellysy",
    industry: "Healthcare",
    solutionType: "mobile",
    solutionName: "Mobile App",
    slug: "wellysy"
  },
  {
    title: "CloudSync",
    description: "CloudSync is a cloud-based file synchronization tool that ensures seamless data access.",
    image: "/images/successstories/Portfolio5.png",
    alt: "CloudSync",
    industry: "Business",
    solutionType: "cloud",
    solutionName: "Cloud Integration",
    slug: "cloudsync"
  },
  {
    title: "ExtenderPro",
    description: "ExtenderPro is a Chrome extension that enhances browsing with productivity tools.",
    image: "/images/successstories/Portfolio6.png",
    alt: "ExtenderPro",
    industry: "Business",
    solutionType: "chrome extension",
    solutionName: "Chrome Extension",
    slug: "extenderpro"
  },
];


// Extract unique values from stories
const industries = [...new Set(stories.map(s => s.industry))];
const solutionTypes = stories.reduce((acc, story) => {
  if (!acc.find(item => item.key === story.solutionType)) {
    acc.push({ key: story.solutionType, name: story.solutionName });
  }
  return acc;
}, []);

const FilterDropdown = ({ 
  label, 
  value, 
  setValue, 
  options, 
  isOpen, 
  setIsOpen, 
  placeholder 
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
          isOpen 
            ? 'border-accent bg-blue-50 text-accent' 
            : value 
              ? 'border-gray-300 bg-gray-50' 
              : 'border-gray-200 hover:border-gray-300'
        }`}
        aria-expanded={isOpen}
      >
        <span>{value || placeholder}</span>
        <CaretDownIcon 
          size={14} 
          weight="bold" 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
        {value && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              setValue("");
            }}
            className="ml-1 text-gray-500 hover:text-gray-700 cursor-pointer"
            aria-label={`Clear ${label.toLowerCase()} filter`}
          >
            <XIcon size={12} weight="bold" />
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-20 border border-gray-100">
          <div className="px-4 py-2 border-b border-gray-100">
            <h4 className="font-medium text-primary_text">{label}</h4>
          </div>
          <div className="max-h-60 overflow-y-auto px-2 py-2">
            <button
              className={`w-full px-4 py-2 text-left rounded-md transition-colors flex items-center justify-between ${
                !value ? 'bg-blue-50 text-accent font-medium' : 'hover:bg-gray-50'
              }`}
              onClick={() => {
                setValue("");
                setIsOpen(false);
              }}
            >
              <span>All {label}s</span>
              {!value && <CheckIcon size={16} weight="bold" />}
            </button>
            
            {options.map((option) => {
              const optionValue = typeof option === 'string' ? option : option.name;
              const optionKey = typeof option === 'string' ? option : option.key;
              const isSelected = typeof option === 'string' ? value === option : value === optionKey;
              
              return (
                <button
                  key={optionKey}
                  className={`w-full px-4 py-2 text-left rounded-md transition-colors flex items-center justify-between ${
                    isSelected ? 'bg-blue-50 text-accent font-medium' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setValue(optionKey);
                    setIsOpen(false);
                  }}
                >
                  <span>{optionValue}</span>
                  {isSelected && <CheckIcon size={16} weight="bold" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedSolutionType, setSelectedSolutionType] = useState("");
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const modalRef = useRef(null);
  const router = useRouter();

  // Simple filtering logic
  const filteredStories = stories.filter((story) => {
    const industryMatch = !selectedIndustry || story.industry === selectedIndustry;
    const solutionMatch = !selectedSolutionType || story.solutionType === selectedSolutionType;
    return industryMatch && solutionMatch;
  });

  // Get available options based on current selection
  const availableIndustries = selectedSolutionType 
    ? [...new Set(stories.filter(s => s.solutionType === selectedSolutionType).map(s => s.industry))]
    : industries;
    
  const availableSolutionTypes = selectedIndustry
    ? stories.filter(s => s.industry === selectedIndustry).reduce((acc, story) => {
        if (!acc.find(item => item.key === story.solutionType)) {
          acc.push({ key: story.solutionType, name: story.solutionName });
        }
        return acc;
      }, [])
    : solutionTypes;

  const filterCount = (selectedIndustry ? 1 : 0) + (selectedSolutionType ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedIndustry("");
    setSelectedSolutionType("");
    setIsIndustryOpen(false);
    setIsSolutionOpen(false);
  };

  // Handle mobile modal
  useEffect(() => {
    if (showMobileFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showMobileFilters]);

  return (
    <section className="bg-secondary_bg py-8 sm:py-12 px-4 sm:px-6 lg:px-8 2xl:px-[9.5rem]">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="font-manrope inline-flex items-center bg-blue-100 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <StarFourIcon weight="fill" className="w-4 h-4 mr-2" />
          Our Success Stories
        </div>
        <h2 className="font-clashGrotesk text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-primary_text">
          Portfolio that <span className="text-accent">Speaks</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-secondary_text mx-auto font-manrope max-w-3xl">
          Explore our collection of innovative solutions and success stories
          that have transformed businesses across industries.
        </p>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="bg-accent text-white px-4 py-2.5 rounded-lg font-medium text-sm sm:text-base w-full flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
        >
          <FunnelIcon size={16} weight="fill" />
          Filter Projects
          {filterCount > 0 && (
            <span className="ml-1 bg-white text-accent rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {filterCount}
            </span>
          )}
        </button>
      </div>

      {/* Desktop Filters Bar */}
      <div className="hidden lg:flex mb-8 items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FunnelIcon size={20} weight="fill" className="text-accent mr-2" />
            <span className="font-medium text-primary_text">Filters:</span>
          </div>
          
          <FilterDropdown
            label="Industry"
            value={selectedIndustry}
            setValue={setSelectedIndustry}
            options={availableIndustries}
            isOpen={isIndustryOpen}
            setIsOpen={setIsIndustryOpen}
            placeholder="Industry"
          />
          
          <FilterDropdown
            label="Solution Type"
            value={solutionTypes.find(s => s.key === selectedSolutionType)?.name || ""}
            setValue={setSelectedSolutionType}
            options={availableSolutionTypes}
            isOpen={isSolutionOpen}
            setIsOpen={setIsSolutionOpen}
            placeholder="Solution Type"
          />
          
          {filterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-accent hover:text-accent/80 font-medium text-sm flex items-center gap-1 px-2 py-1 hover:bg-blue-50 rounded-md transition-colors"
            >
              <XIcon size={14} weight="bold" />
              Clear all filters
            </button>
          )}
        </div>
        
        <div>
          <span className="text-sm text-gray-500">
            {filteredStories.length} project{filteredStories.length !== 1 ? 's' : ''} found
          </span>
        </div>
      </div>

      {/* Selected Filters Display (Mobile only) */}
      {(selectedIndustry || selectedSolutionType) && (
        <div className="lg:hidden mb-4 flex flex-wrap gap-2">
          {selectedIndustry && (
            <div className="bg-gray-100 px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
              <span>{selectedIndustry}</span>
              <button
                onClick={() => setSelectedIndustry("")}
                className="text-accent hover:text-accent/80"
              >
                <XIcon size={14} />
              </button>
            </div>
          )}
          {selectedSolutionType && (
            <div className="bg-gray-100 px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
              <span>{solutionTypes.find(s => s.key === selectedSolutionType)?.name}</span>
              <button
                onClick={() => setSelectedSolutionType("")}
                className="text-accent hover:text-accent/80"
              >
                <XIcon size={14} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex items-end lg:hidden bg-black/50">
          <div 
            ref={modalRef}
            className="bg-white w-full rounded-t-xl p-6 animate-slide-up h-[80vh] flex flex-col"
          >
            <div className="sticky top-0 bg-white z-10 pb-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-clashGrotesk font-medium">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-secondary_text hover:text-secondary_text/80"
                  aria-label="Close filters"
                >
                  <XIcon size={24} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-6">
                <div>
                  <p className="mb-2 font-semibold text-base">Industry</p>
                  <div className="relative">
                    <button
                      aria-expanded={isIndustryOpen}
                      aria-controls="industry-dropdown-mobile"
                      className="w-full bg-gray-100 py-3 px-4 rounded-lg text-left flex justify-between items-center text-base hover:bg-gray-200 transition-colors"
                      onClick={() => {
                        setIsIndustryOpen(!isIndustryOpen);
                        setIsSolutionOpen(false);
                      }}
                    >
                      <span>{selectedIndustry || "Select Industry"}</span>
                      <CaretDownIcon size={16} weight="duotone" />
                    </button>
                    {isIndustryOpen && (
                      <div className="absolute w-full bg-white shadow-lg rounded-lg mt-2 max-h-60 overflow-auto z-10">
                        <button
                          className="w-full p-4 text-left hover:bg-gray-100 text-base transition-colors"
                          onClick={() => {
                            setSelectedIndustry("");
                            setIsIndustryOpen(false);
                          }}
                        >
                          All Industries
                        </button>
                        {availableIndustries.map((industry) => (
                          <button
                            key={industry}
                            className="w-full p-4 text-left hover:bg-gray-100 text-base transition-colors"
                            onClick={() => {
                              setSelectedIndustry(industry);
                              setIsIndustryOpen(false);
                            }}
                          >
                            {industry}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    className="mt-2 text-end w-full font-medium text-sm text-accent hover:underline"
                    onClick={() => setSelectedIndustry("")}
                  >
                    Reset Industry
                  </button>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-base">Solution Type</p>
                  <div className="relative">
                    <button
                      aria-expanded={isSolutionOpen}
                      aria-controls="solution-dropdown-mobile"
                      className="w-full bg-gray-100 py-3 px-4 rounded-lg text-left flex justify-between items-center text-base hover:bg-gray-200 transition-colors"
                      onClick={() => {
                        setIsSolutionOpen(!isSolutionOpen);
                        setIsIndustryOpen(false);
                      }}
                    >
                      <span>
                        {selectedSolutionType
                          ? solutionTypes.find((s) => s.key === selectedSolutionType)?.name || "Select Solution Type"
                          : "Select Solution Type"}
                      </span>
                      <CaretDownIcon size={16} weight="duotone" />
                    </button>
                    {isSolutionOpen && (
                      <div className="absolute w-full bg-white shadow-lg rounded-lg mt-2 max-h-60 overflow-auto z-10">
                        <button
                          className="w-full p-4 text-left hover:bg-gray-100 text-base transition-colors"
                          onClick={() => {
                            setSelectedSolutionType("");
                            setIsSolutionOpen(false);
                          }}
                        >
                          All Solution Types
                        </button>
                        {availableSolutionTypes.map((solution) => (
                          <button
                            key={solution.key}
                            className="w-full p-4 text-left hover:bg-gray-100 text-base transition-colors"
                            onClick={() => {
                              setSelectedSolutionType(solution.key);
                              setIsSolutionOpen(false);
                            }}
                          >
                            {solution.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    className="mt-2 text-end w-full font-medium text-sm text-accent hover:underline"
                    onClick={() => setSelectedSolutionType("")}
                  >
                    Reset Solution Type
                  </button>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white z-10 pt-4 border-t">
              <div className="flex gap-4">
                <button
                  className="w-full bg-accent text-white py-3 rounded-lg font-semibold text-base hover:bg-accent/90 transition-colors"
                  onClick={() => {
                    setSelectedIndustry("");
                    setSelectedSolutionType("");
                    setShowMobileFilters(false);
                  }}
                >
                  Reset All
                </button>
                <button
                  className="w-full bg-primary_text text-white py-3 rounded-lg font-semibold text-base hover:bg-primary_text/90 transition-colors"
                  onClick={() => setShowMobileFilters(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredStories.length > 0 ? (
          filteredStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-dark_border overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300 flex flex-col justify-between h-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.alt}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-primary_text">
                  {story.industry}
                </div>
              </div>
              
              <div className="flex flex-col justify-between items-start p-5">
                <div>
                  <h3 className="font-clashGrotesk text-xl sm:text-2xl text-primary_text font-medium">
                    {story.title}
                  </h3>
                  <p className="font-manrope text-sm sm:text-base leading-6 sm:leading-[21.9px] text-secondary_text mt-2 sm:mt-3">
                    {story.description}
                  </p>
                </div>
                
                <div className="w-full mt-5">
                  <div className="flex items-center mb-4">
                    <span className="text-xs font-medium text-gray-500 mr-2">Solution:</span>
                    <span className="bg-blue-50 text-accent text-xs px-2.5 py-1 rounded-full">
                      {story.solutionName}
                    </span>
                  </div>
                  
                  <Button
                    variant="project_card"
                    className="w-full text-sm sm:text-base"
                    onClick={() => router.push(`/portfolio/${story.slug}`)} // Updated to use slug
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="bg-gray-50 rounded-full p-5 mb-4">
              <MagnifyingGlassIcon size={32} weight="duotone" className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-primary_text mb-2">No matching projects</h3>
            <p className="text-secondary_text mb-6">Try adjusting your filters to find more projects.</p>
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all"
            >
              <XIcon size={16} weight="bold" />
              Clear all filters
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;