// src/components/LoadingScreen.js
'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Create a separate component for search params handling
const SearchParamsWatcher = ({ onRouteChange }) => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    onRouteChange();
  }, [searchParams, onRouteChange]);
  
  return null;
};

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const handleRouteChange = () => {
    // Show loading screen on route change
    setIsVisible(true);

    // Hide loading screen after a shorter duration for better performance
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500); // Reduced from 1000ms to 500ms

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    handleRouteChange();
  }, [pathname]); // Only trigger on pathname change

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-accent flex items-center justify-center z-[100]">
      <div className="text-lg font-roboto_mono font-extralight text-white flex space-x-2">
        {'LOADING'.split('').map((letter, index) => (
          <span
            key={index}
            className="animate-pulse-opacity"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      
      {/* Wrap SearchParams in Suspense */}
      <Suspense fallback={null}>
        <SearchParamsWatcher onRouteChange={handleRouteChange} />
      </Suspense>
      
      <style jsx>{`
        @keyframes pulse-opacity {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.1;
          }
        }
        .animate-pulse-opacity {
          animation: pulse-opacity 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;