'use client'
import React from 'react';
import { Lightbulb, Brain, Workflow, Wand2, FileText, Settings, TestTube, ArrowRight, Layers } from 'lucide-react';

const ApproachSection = ({ data }) => {
  const { approach = {} } = data;

  // Core methodology
  const methodology = approach?.methodology || [
    'AI-first development with custom NLP models',
    'User-centered design based on research insights',
    'Agile sprints with continuous user feedback',
    'Platform-native integration for seamless experience'
  ];

  // Process phases
  const processPhases = approach?.phases || [
    { 
      title: 'Data Collection & Analysis',
      description: 'Gathered and analyzed 100K+ professional emails across industries',
      duration: '2 weeks'
    },
    { 
      title: 'AI Model Training',
      description: 'Trained custom NLP models on 7 distinct tone categories',
      duration: '3 weeks'
    },
    { 
      title: 'Platform Integration',
      description: 'Built native Outlook add-in with Office.js framework',
      duration: '2 weeks'
    },
    { 
      title: 'Testing & Refinement',
      description: 'Beta tested with 500+ users and iterated based on feedback',
      duration: '2 weeks'
    }
  ];

  // Key innovations
  const innovations = approach?.innovations || [
    {
      title: 'Context-Aware AI',
      description: 'Understands recipient relationship, cultural context, and communication history'
    },
    {
      title: 'Real-Time Processing',
      description: 'Instant tone transformation with sub-second response times'
    },
    {
      title: 'Multi-Language Support',
      description: 'Seamless tone matching across 15+ languages'
    }
  ];

  return (
    <section id="approach" className="scroll-mt-20 section_padding">
      <h2 className="section-header border-l-4 border-purple-500 pl-4 mb-8">
        Approach & Methodology
      </h2>

      {/* Approach Overview */}
      <p className="font-manrope text-base leading-[21.9px] text-secondary_text mb-8">
        {approach?.overview || 'We adopted an innovative AI-first approach combined with user-centered design principles to create a solution that not only meets technical requirements but also delivers exceptional user experience.'}
      </p>

      {/* Core Methodology */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <Layers size={16} className="text-gray-600" />
            Core Methodology
          </h3>
        </div>
        <div className="p-6 font-manrope">
          <div className="grid md:grid-cols-2 gap-4">
            {methodology.map((method, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-gray-700 text-sm leading-relaxed">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <Workflow size={16} className="text-gray-600" />
            Development Process
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {processPhases.map((phase, index) => (
              <div key={index} className="relative flex items-start gap-4">
                {/* Step number */}
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Phase content */}
                <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-semibold text-gray-900 font-clashGrotesk">{phase.title}</h4>
                    <span className="text-sm text-gray-500 font-manrope">{phase.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-manrope">{phase.description}</p>
                </div>
                
                {/* Connecting line */}
                {index < processPhases.length - 1 && (
                  <div className="absolute left-4 top-10 w-0.5 h-12 bg-purple-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Innovations */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <Lightbulb size={16} className="text-gray-600" />
            Key Innovations
          </h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {innovations.map((innovation, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain size={20} className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-clashGrotesk">{innovation.title}</h4>
                <p className="text-sm text-gray-600 font-manrope">{innovation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;