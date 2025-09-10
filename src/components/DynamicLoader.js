// STEP 1: Create src/components/TrueLazyLoader.js
"use client";

import { Suspense, lazy, useState, useRef, useEffect } from 'react';

// Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
          console.log(`🎯 Component became visible, loading...`);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '200px', // Start loading 200px before visible
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasBeenVisible]);

  return { elementRef, hasBeenVisible };
};

// True Lazy Component
export const LazyComponent = ({ 
  importFn,
  componentName,
  className = "",
  minHeight = "400px",
  ...props 
}) => {
  const { elementRef, hasBeenVisible } = useIntersectionObserver();
  const [LazyComponentDynamic, setLazyComponentDynamic] = useState(null);

  // Only create the lazy component when it becomes visible
  useEffect(() => {
    if (hasBeenVisible && !LazyComponentDynamic) {
      console.log(`🚀 Creating lazy component for ${componentName}`);
      const DynamicComponent = lazy(importFn);
      setLazyComponentDynamic(() => DynamicComponent);
    }
  }, [hasBeenVisible, importFn, componentName, LazyComponentDynamic]);

  // Placeholder while not visible
  const Placeholder = () => (
    <div 
      className={`${className} flex items-center justify-center`}
      style={{ minHeight }}
    >
      <div className="animate-pulse bg-gray-100 rounded-lg w-full h-full flex items-center justify-center">
        <span className="text-gray-400 text-sm">Scroll to load {componentName}</span>
      </div>
    </div>
  );

  // Loading spinner when component is loading
  const LoadingSpinner = () => (
    <div className={`${className} flex items-center justify-center py-8`}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      <span className="ml-2 text-sm text-gray-500">Loading {componentName}...</span>
    </div>
  );

  return (
    <div ref={elementRef}>
      {hasBeenVisible && LazyComponentDynamic ? (
        <Suspense fallback={<LoadingSpinner />}>
          <LazyComponentDynamic {...props} />
        </Suspense>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};

// Pre-configured components
export const LazyServicesCarousel = (props) => (
  <LazyComponent
    importFn={() => import('../app/home/content/ServicesCarousel')}
    componentName="ServicesCarousel"
    className="min-h-[500px]"
    minHeight="500px"
    {...props}
  />
);

export const LazyTestimonials = (props) => (
  <LazyComponent
    importFn={() => import('../app/home/content/Testimonials')}
    componentName="Testimonials"
    className="min-h-[400px]"
    minHeight="400px"
    {...props}
  />
);

export const LazyNextGenAI = (props) => (
  <LazyComponent
    importFn={() => import('../app/home/content/NextGenAICarousel')}
    componentName="NextGenAICarousel"
    className="min-h-[500px]"
    minHeight="500px"
    {...props}
  />
);

export const LazyFAQ = (props) => (
  <LazyComponent
    importFn={() => import('../components/FAQs')}
    componentName="FAQ"
    className="min-h-[300px]"
    minHeight="300px"
    {...props}
  />
);

export const LazyTechStack = (props) => (
  <LazyComponent
    importFn={() => import('../components/TechStack')}
    componentName="TechStack"
    className="min-h-[400px]"
    minHeight="400px"
    {...props}
  />
);

export const LazySuccessStories = (props) => (
  <LazyComponent
    importFn={() => import('../components/SuccessStories')}
    componentName="SuccessStories"
    className="min-h-[600px]"
    minHeight="600px"
    {...props}
  />
);

export const LazyServicesSection = (props) => (
  <LazyComponent
    importFn={() => import('../app/services/content/ServicesSection')}
    componentName="ServicesSection"
    className="min-h-[1000px]"
    minHeight="1000px"
    {...props}
  />
);