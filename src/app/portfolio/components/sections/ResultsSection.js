'use client'
import React from 'react';
import { TrendingUp, Award, Users, Clock, CheckCircle, X, BarChart3, LineChart } from 'lucide-react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const ResultsSection = ({ data }) => {
  const { results = {} } = data;
  
  // User growth data for line chart
  const userGrowthData = [
    { month: 'Jan', users: 120, downloads: 150 },
    { month: 'Feb', users: 280, downloads: 320 },
    { month: 'Mar', users: 450, downloads: 520 },
    { month: 'Apr', users: 720, downloads: 850 },
    { month: 'May', users: 1100, downloads: 1250 },
    { month: 'Jun', users: 1580, downloads: 1820 },
  ];

  // Tone usage data for pie chart
  const toneUsageData = [
    { name: 'Formal', value: 35, color: '#6366F1' },
    { name: 'Empathetic', value: 22, color: '#10B981' },
    { name: 'Confident', value: 18, color: '#F59E0B' },
    { name: 'Casual', value: 12, color: '#EF4444' },
    { name: 'Persuasive', value: 8, color: '#8B5CF6' },
    { name: 'Apologetic', value: 3, color: '#06B6D4' },
    { name: 'Humorous', value: 2, color: '#F97316' },
  ];

  // Key performance metrics
  const keyMetrics = results?.metrics || [
    { label: 'User Adoption', value: '10K+', description: 'Active users in 6 months' },
    { label: 'Time Saved', value: '90%', description: 'Reduction in email writing time' },
    { label: 'Satisfaction', value: '4.8/5', description: 'Average user rating' },
    { label: 'Response Rate', value: '+40%', description: 'Increase in email responses' }
  ];

  // Before/After comparison
  const beforeAfter = results?.comparison || {
    before: [
      '25+ minutes spent crafting important emails',
      'Frequent tone mismatches and misunderstandings',
      'Email anxiety affecting confidence',
      'Inconsistent brand voice across team'
    ],
    after: [
      '30-second tone transformations with AI',
      'Contextually appropriate tone every time',
      'Increased confidence in communication',
      'Consistent professional voice maintained'
    ]
  };

  // Business outcomes
  const businessOutcomes = results?.outcomes || [
    { metric: '$1.2M', label: 'Annual savings per enterprise' },
    { metric: '10K+', label: 'Users onboarded' },
    { metric: '15', label: 'Languages supported' },
    { metric: '7', label: 'Tone categories mastered' }
  ];

  return (
    <section id="results" className="scroll-mt-20 section_padding">
      <h2 className="section-header border-l-4 border-green-500 pl-4 mb-8">
        Results & Impact
      </h2>

      {/* Results Overview */}
      <p className="font-manrope text-base leading-[21.9px] text-secondary_text mb-8">
        {results?.overview || 'The AI-powered email assistant exceeded all performance targets, delivering transformative results in productivity, communication quality, and user satisfaction across global teams.'}
      </p>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* User Growth Line Chart */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <LineChart size={16} className="text-gray-600" />
              User Growth Trajectory
            </h3>
          </div>
          <div className="p-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                  />
                  <YAxis 
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '10px' }}
                    iconType="line"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#6366F1" 
                    strokeWidth={2}
                    dot={{ fill: '#6366F1', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Active Users"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="downloads" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Downloads"
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Tone Usage Pie Chart */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <BarChart3 size={16} className="text-gray-600" />
              Tone Preference Distribution
            </h3>
          </div>
          <div className="p-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={toneUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {toneUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value) => `${value}%`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {toneUsageData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    style={{ backgroundColor: entry.color }} 
                    className="w-3 h-3 rounded-full"
                  />
                  <span className="text-xs text-gray-600 font-manrope">
                    {entry.name} ({entry.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <TrendingUp size={16} className="text-gray-600" />
            Key Performance Metrics
          </h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 font-clashGrotesk mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-gray-700 font-manrope mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-500 font-manrope">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Before & After Comparison */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-red-50">
            <h3 className="text-red-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <X size={16} className="text-red-600" />
              Before Implementation
            </h3>
          </div>
          <div className="p-6 font-manrope">
            <ul className="space-y-3">
              {beforeAfter.before.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-green-50">
            <h3 className="text-green-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <CheckCircle size={16} className="text-green-600" />
              After Implementation
            </h3>
          </div>
          <div className="p-6 font-manrope">
            <ul className="space-y-3">
              {beforeAfter.after.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Business Outcomes */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-8">
        <h3 className="text-center font-semibold text-gray-900 mb-8 font-clashGrotesk">Business Outcomes</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {businessOutcomes.map((outcome, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2 font-clashGrotesk">
                {outcome.metric}
              </div>
              <div className="text-sm text-gray-700 font-manrope">
                {outcome.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;