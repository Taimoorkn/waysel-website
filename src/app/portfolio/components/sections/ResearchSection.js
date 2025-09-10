'use client'
import React from 'react';
import { Search, Users, Lightbulb, ChartBar, Target, AlertCircle, BarChart3, PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ResearchSection = ({ data }) => {
  const { research = {} } = data;

  // Chart data for user communication challenges
  const challengeChartData = [
    { userType: 'Business Professionals', timeWasted: 35, miscommunication: 45, anxiety: 30 },
    { userType: 'Non-Native Speakers', timeWasted: 55, miscommunication: 75, anxiety: 65 },
    { userType: 'Customer Service', timeWasted: 40, miscommunication: 50, anxiety: 45 },
    { userType: 'Remote Teams', timeWasted: 45, miscommunication: 60, anxiety: 50 }
  ];

  // Format research methods from data
  const researchMethods = research?.methods || [
    'User interviews with 50+ professionals',
    'Survey of 500+ email users globally', 
    'Competitor analysis of existing tools',
    'Email tone analysis study'
  ];

  // Format key insights from data
  const keyInsights = research?.insights || [
    '78% of users spend 20+ minutes crafting emails',
    '3x higher anxiety in non-native speakers',
    '45% report miscommunication issues',
    '92% want AI assistance for tone matching'
  ];

  // User personas data
  const userPersonas = research?.personas?.map(persona => ({
    name: persona.name,
    description: persona.description,
    percentage: persona.details?.find(d => d.includes('%'))?.replace(/.*?(\d+%).*/, '$1') || '25%',
    needs: persona.needs || []
  })) || [
    {
      name: 'Business Professionals',
      description: 'Corporate executives and managers',
      percentage: '35%',
      needs: ['Quick tone adjustments', 'Professional templates', 'Multi-language support']
    },
    {
      name: 'Non-Native Speakers',
      description: 'Global professionals using English',
      percentage: '40%',
      needs: ['Grammar assistance', 'Cultural context', 'Confidence in writing']
    },
    {
      name: 'Customer Service',
      description: 'Support and client-facing teams',
      percentage: '15%',
      needs: ['Empathetic responses', 'Quick templates', 'Consistency']
    },
    {
      name: 'Remote Teams',
      description: 'Distributed team members',
      percentage: '10%',
      needs: ['Clear communication', 'Time zone awareness', 'Async messaging']
    }
  ];

  // Key findings
  const keyFindings = research?.findings || [
    { metric: '2.5 hrs', label: 'Daily time on emails' },
    { metric: '32%', label: 'Productivity loss' },
    { metric: '$1.2M', label: 'Cost of miscommunication' }
  ];

  return (
    <section id="research" className="scroll-mt-20 section_padding">
      <h2 className="section-header border-l-4 border-blue-500 pl-4 mb-8">
        Research & Discovery
      </h2>

      {/* Research Overview */}
      <p className="font-manrope text-base leading-[21.9px] text-secondary_text mb-8">
        {research?.overview || 'Comprehensive research was conducted to understand user pain points, market opportunities, and technical requirements for developing an effective AI-powered email assistance tool.'}
      </p>

      {/* Research Methods */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <Search size={16} className="text-gray-600" />
            Research Methods
          </h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {researchMethods.map((method, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2"></span>
                <span className="text-gray-700 text-sm leading-relaxed font-manrope">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge Impact Chart */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <BarChart3 size={16} className="text-gray-600" />
            Email Communication Challenges by User Type
          </h3>
        </div>
        <div className="p-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={challengeChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="userType" 
                  angle={-20} 
                  textAnchor="end" 
                  height={80}
                  tick={{ fontSize: 11, fill: '#6b7280' }}
                  interval={0}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', style: { fontSize: 12, fill: '#6b7280' } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="rect"
                />
                <Bar dataKey="timeWasted" fill="#ef4444" name="Time Wasted" radius={[4, 4, 0, 0]} />
                <Bar dataKey="miscommunication" fill="#f97316" name="Miscommunication" radius={[4, 4, 0, 0]} />
                <Bar dataKey="anxiety" fill="#f59e0b" name="Email Anxiety" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Key Insights and Findings */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Key Insights */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <Lightbulb size={16} className="text-gray-600" />
              Key Insights
            </h3>
          </div>
          <div className="p-6 font-manrope">
            <ul className="space-y-3">
              {keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <AlertCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <ChartBar size={16} className="text-gray-600" />
              Impact Metrics
            </h3>
          </div>
          <div className="p-6 font-manrope">
            <div className="space-y-4">
              {keyFindings.map((finding, index) => (
                <div key={index} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl font-bold text-gray-900">{finding.metric}</span>
                  <span className="text-sm text-gray-600">{finding.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Personas */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <Users size={16} className="text-gray-600" />
            User Personas
          </h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {userPersonas.map((persona, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 font-clashGrotesk">{persona.name}</h4>
                    <p className="text-sm text-gray-600 font-manrope mt-1">{persona.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {persona.percentage}
                  </span>
                </div>
                
                {persona.needs && persona.needs.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Key Needs</p>
                    <div className="space-y-1">
                      {persona.needs.map((need, needIndex) => (
                        <div key={needIndex} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          <span className="text-sm text-gray-700 font-manrope">{need}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;