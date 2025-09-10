'use client'
import React, { useState } from 'react';
import { ChevronRight, X as CloseIcon } from 'lucide-react';

const Navigation = ({ sections, activeSection, scrollToSection }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Map string icon names to emoji icons (as a simple fallback)
  const getIconComponent = (iconName) => {
    const icons = {
      'Eye': () => <span>👁️</span>,
      'Building': () => <span>🏢</span>,
      'AlertTriangle': () => <span>⚠️</span>,
      'Target': () => <span>🎯</span>,
      'BookOpen': () => <span>📖</span>,
      'Lightbulb': () => <span>💡</span>,
      'Layers': () => <span>📑</span>,
      'Code': () => <span>💻</span>,
      'Monitor': () => <span>🖥️</span>,
      'TestTube': () => <span>🧪</span>,
      'TrendingUp': () => <span>📈</span>,
      'MessageCircle': () => <span>💬</span>,
      'Sparkles': () => <span>✨</span>,
      'Quote': () => <span>💭</span>,
    };
    
    return icons[iconName] || (() => <span>📍</span>);
  };

  return (
    <nav className="fixed bottom-10 right-10 z-40 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 transition-all duration-300 overflow-hidden">
      <button
        className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium flex items-center justify-between rounded-t-2xl"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span>Case Study Navigation</span>
        {isNavOpen ? <CloseIcon size={20} /> : <ChevronRight size={20} />}
      </button>
      {isNavOpen && (
        <div className="flex flex-col space-y-1 p-2 max-h-96 overflow-y-auto">
          {sections.map((section) => {
            const IconComponent = getIconComponent(section.icon);
            return (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsNavOpen(false);
                }}
                className={`whitespace-nowrap py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 w-full text-left ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <IconComponent size={16} />
                {section.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navigation;