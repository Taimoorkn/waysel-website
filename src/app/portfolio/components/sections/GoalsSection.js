'use client'
import React from 'react';
import { Target, BarChart3, CheckCircle, TrendingUp } from 'lucide-react';

const GoalsSection = ({ data }) => {
  const { goals = {} } = data;

  // Primary objectives from data or defaults
  const primaryObjectives = goals?.objectives || [
    'Reduce Email Writing Time by 90%',
    'Improve Communication Quality and Tone Accuracy',
    'Boost User Confidence for Non-Native Speakers',
    'Enable Seamless Multi-Language Support'
  ];

  // Success metrics from data or defaults
  const successMetrics = goals?.metrics || [
    { label: 'User Adoption', value: '10K+ users', target: '85%' },
    { label: 'User Satisfaction', value: '4.8/5 rating', target: '96%' },
    { label: 'Daily Active Users', value: '78%', target: '78%' },
    { label: 'Time Saved', value: '2+ hrs/day', target: '90%' }
  ];

  // Key deliverables
  const deliverables = goals?.deliverables || [
    'AI-powered tone matching algorithm',
    'Outlook add-in with seamless integration',
    'Multi-language support system',
    'Real-time tone suggestions',
    'Template library for common scenarios',
    'Analytics dashboard for insights'
  ];

  return (
    <section id="goals" className="scroll-mt-20 section_padding">
      <h2 className="section-header border-l-4 border-green-500 pl-4 mb-8">
        Goals & Objectives
      </h2>

      {/* Goals Overview */}
      <p className="font-manrope text-base leading-[21.9px] text-secondary_text mb-8">
        {goals?.overview || 'The project aimed to revolutionize professional email communication by developing an AI-powered assistant that understands context, culture, and tone to help users craft perfect emails every time.'}
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Primary Objectives */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <Target size={16} className="text-gray-600" />
              Primary Objectives
            </h3>
          </div>
          <div className="p-6 font-manrope">
            <ul className="space-y-3">
              {primaryObjectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Key Deliverables */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <BarChart3 size={16} className="text-gray-600" />
              Key Deliverables
            </h3>
          </div>
          <div className="p-6 font-manrope">
            <div className="grid grid-cols-1 gap-2">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2"></span>
                  <span className="text-gray-700 text-sm leading-relaxed">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <TrendingUp size={16} className="text-gray-600" />
            Success Metrics
          </h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="mb-3">
                  <div className="text-3xl font-bold text-gray-900 font-clashGrotesk">{metric.value}</div>
                  <div className="text-sm text-gray-600 font-manrope mt-1">{metric.label}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300" 
                    style={{width: metric.target}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;