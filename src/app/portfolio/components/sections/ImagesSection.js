'use client'
import React, { useState } from 'react';
import { Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImagesSection = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Get images from different data sources
  const projectImages = [
    ...(data?.design?.mockups || []),
    ...(data?.screenshots || []),
    ...(data?.gallery || [])
  ].filter(Boolean);

  // If no images provided, use default placeholders
  const images = projectImages.length > 0 ? projectImages : [
    { title: 'Main Dashboard', image: '/images/case-studies/placeholder-dashboard.png', description: 'Primary user interface showcasing the main features' },
    { title: 'Mobile Interface', image: '/images/case-studies/placeholder-mobile.png', description: 'Responsive mobile design optimized for touch interaction' },
    { title: 'Analytics View', image: '/images/case-studies/placeholder-analytics.png', description: 'Data visualization and reporting dashboard' },
    { title: 'User Profile', image: '/images/case-studies/placeholder-profile.png', description: 'Personalized user experience and settings' }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % images.length 
      : (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedImage, selectedIndex]);

  return (
    <section id="gallery" className="scroll-mt-20 section_padding">
      <h2 className="section-header border-l-4 border-blue-500 pl-4 mb-8">
        Project Gallery
      </h2>

      <p className="font-manrope text-base leading-[21.9px] text-secondary_text mb-8">
        Explore the visual design and user interface of {data?.project?.title || 'this project'}, showcasing key screens, interactions, and design details.
      </p>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {images.map((item, index) => (
          <div 
            key={index}
            className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(item, index)}
          >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  if (!e.target.dataset.errorHandled) {
                    e.target.dataset.errorHandled = 'true';
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDI0MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA5MEw5MCA4MEwxMDAgOTBMMTEwIDgwTDEyMCA5MEwxMzAgODBMMTQwIDkwTDE1MCA4MEwxNjAgOTBMMTcwIDEwMCIgc3Ryb2tlPSIjOUI5QkEzIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTkwIiBjeT0iNDAiIHI9IjEwIiBmaWxsPSIjOUI5QkEzIi8+CjwvZz4KICA8dGV4dCB4PSIxMjAiIHk9IjEwNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjdCODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIFVuYXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K';
                  }
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 font-clashGrotesk">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-gray-600 font-manrope">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Key Features Visual Showcase */}
      {data?.keyFeatures && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <ImageIcon size={16} className="text-gray-600" />
              Key Features Showcase
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.keyFeatures.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ImageIcon size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 font-clashGrotesk">
                    {category.category}
                  </h4>
                  <ul className="text-sm text-gray-600 font-manrope space-y-1">
                    {category.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 justify-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative max-w-full max-h-full">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  if (!e.target.dataset.errorHandled) {
                    e.target.dataset.errorHandled = 'true';
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDI0MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA5MEw5MCA4MEwxMDAgOTBMMTEwIDgwTDEyMCA5MEwxMzAgODBMMTQwIDkwTDE1MCA4MEwxNjAgOTBMMTcwIDEwMCIgc3Ryb2tlPSIjOUI5QkEzIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTkwIiBjeT0iNDAiIHI9IjEwIiBmaWxsPSIjOUI5QkEzIi8+CjwvZz4KICA8dGV4dCB4PSIxMjAiIHk9IjEwNSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjdCODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIFVuYXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K';
                  }
                }}
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <h3 className="font-semibold mb-1 font-clashGrotesk">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="text-sm opacity-90 font-manrope">
                    {selectedImage.description}
                  </p>
                )}
                <div className="text-xs opacity-70 mt-2 font-manrope">
                  {selectedIndex + 1} of {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImagesSection;