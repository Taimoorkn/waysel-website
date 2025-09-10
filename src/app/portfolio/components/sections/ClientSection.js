'use client'
import React from 'react';
import { Building, MapPin, Globe, DollarSign, BarChart3 } from 'lucide-react';

const ClientSection = ({ data }) => {
  const { project, research } = data;
  
  const clientDetails = [
    { icon: MapPin, label: 'Industry', value: project.industry },
    { icon: Globe, label: 'Target Market', value: 'Global Professionals' },
    { icon: DollarSign, label: 'Budget Range', value: project.budget },
  ];

  // Format user persona percentages for display
  const targetUsers = research?.personas?.map(persona => ({
    label: persona.name,
    percentage: persona.details.find(d => d.includes('%'))?.replace(/.*?(\d+%).*/, '$1') || '25%'
  })) || [];

  return (
    <section id="client-background" className="scroll-mt-20 section_padding">
      <h2 className="section-header border-l-4 border-emerald-500 pl-4 mb-8">
        Client Background
      </h2>
      
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Building size={20} className="text-emerald-600" />
              About {project.client}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {project.client} is an innovative AI technology company focused on enhancing professional communication through intelligent software solutions. They identified a critical gap in email communication tools and needed a comprehensive {project.platform} to solve tone-matching challenges for global professionals.
            </p>
            <div className="space-y-3">
              {clientDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-center justify-between py-2 px-4 bg-white/60 rounded-lg">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Icon size={16} />
                      {detail.label}
                    </span>
                    <span className="font-medium text-gray-900">{detail.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 size={20} className="text-emerald-600" />
              Market Opportunity
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              With remote work becoming the norm and global business communication increasing, there's a growing demand for AI-powered writing assistance that goes beyond basic grammar checking to include cultural and contextual tone optimization.
            </p>
            
            <div className="bg-white/60 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4">Target User Groups</h4>
              <div className="space-y-3">
                {targetUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{user.label}</span>
                    <span className="font-medium text-emerald-600">{user.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;