'use client'
import React from 'react';
import { Lightbulb, Brain, Target, Rocket, BookOpen, TrendingUp, Zap, Globe, Shield, Award } from 'lucide-react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip, PolarGrid, PolarAngleAxis } from 'recharts';

const LearningsSection = ({ data }) => {
  const { learnings = {} } = data;

  // Data for radial chart showing challenge difficulties overcome
  const challengesOvercome = [
    { name: 'AI Training', value: 95, fill: '#8B5CF6' },
    { name: 'Integration', value: 88, fill: '#3B82F6' },
    { name: 'Performance', value: 92, fill: '#10B981' },
    { name: 'Adoption', value: 85, fill: '#F59E0B' }
  ];

  // Key learnings with visual cards
  const keyLearnings = learnings?.key || [
    {
      title: 'AI Model Training',
      insight: 'Context-aware training on diverse professional emails improved accuracy by 40%',
      icon: Brain,
      color: 'purple'
    },
    {
      title: 'User Experience',
      insight: 'One-click simplicity drove 3x higher adoption than feature-rich alternatives',
      icon: Zap,
      color: 'blue'
    },
    {
      title: 'Platform Integration',
      insight: 'Native add-in experience reduced friction and increased daily usage by 78%',
      icon: Globe,
      color: 'green'
    },
    {
      title: 'Cultural Sensitivity',
      insight: 'Regional communication patterns required specialized model fine-tuning',
      icon: Shield,
      color: 'orange'
    }
  ];

  // Technical achievements with gradient cards
  const technicalAchievements = [
    { 
      icon: Brain,
      title: 'Advanced NLP Engine',
      desc: 'Custom-trained models with 95% accuracy',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Zap,
      title: 'Real-time Processing',
      desc: 'Sub-second response times achieved',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Globe,
      title: 'Multi-Platform',
      desc: 'Seamless across all devices',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Shield,
      title: 'Enterprise Security',
      desc: 'Bank-level encryption implemented',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  // Future recommendations
  const recommendations = learnings?.recommendations || [
    {
      area: 'Product Enhancement',
      items: [
        'Add team collaboration features',
        'Implement brand voice guidelines',
        'Develop mobile applications'
      ]
    },
    {
      area: 'Market Expansion',
      items: [
        'Target specific industry verticals',
        'Expand to additional languages',
        'Partner with email platforms'
      ]
    },
    {
      area: 'Technical Evolution',
      items: [
        'Implement federated learning',
        'Add offline mode capabilities',
        'Enhance security features'
      ]
    }
  ];

  // Get color classes for learnings
  const getColorClasses = (color) => {
    const colorMap = {
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', text: 'text-purple-700' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', text: 'text-blue-700' },
      green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', text: 'text-green-700' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', text: 'text-orange-700' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="learnings" className="scroll-mt-20 section_padding">
      <h2 className="section-header border-l-4 border-yellow-500 pl-4 mb-8">
        Key Learnings & Insights
      </h2>

      {/* Learnings Overview */}
      <p className="font-manrope text-base leading-[21.9px] text-secondary_text mb-8">
        {learnings?.overview || 'Throughout the development and deployment of this AI-powered email assistant, we gained valuable insights into user behavior, technical requirements, and market opportunities that will guide future innovations.'}
      </p>

      {/* Key Learnings with Visual Cards */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <Lightbulb size={16} className="text-gray-600" />
            Key Learnings
          </h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {keyLearnings.map((learning, index) => {
              const Icon = learning.icon;
              const colors = getColorClasses(learning.color);
              return (
                <div key={index} className={`${colors.bg} ${colors.border} border rounded-lg p-5 transition-all hover:shadow-md`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <Icon size={20} className={colors.icon} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 font-clashGrotesk">{learning.title}</h4>
                      <p className={`text-sm ${colors.text} font-manrope`}>{learning.insight}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Challenges Overcome Chart and Technical Achievements */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Challenges Overcome Radial Chart */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <Award size={16} className="text-gray-600" />
              Challenges Overcome
            </h3>
          </div>
          <div className="p-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                  cx="50%" 
                  cy="50%" 
                  innerRadius="30%" 
                  outerRadius="90%" 
                  data={challengesOvercome}
                  startAngle={180}
                  endAngle={0}
                >
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                  <RadialBar 
                    dataKey="value" 
                    cornerRadius={10} 
                    fill="#8884d8"
                    label={{ position: 'insideStart', fill: '#fff' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => `${value}% Complete`}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {challengesOvercome.map((challenge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: challenge.fill }} />
                  <span className="text-xs text-gray-600 font-manrope">{challenge.name}: {challenge.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Achievements */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
              <TrendingUp size={16} className="text-gray-600" />
              Technical Achievements
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {technicalAchievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className={`w-14 h-14 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1 font-clashGrotesk">{achievement.title}</h4>
                    <p className="text-xs text-gray-600 font-manrope">{achievement.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Future Recommendations */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <Rocket size={16} className="text-gray-600" />
            Future Recommendations
          </h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-3 font-clashGrotesk flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  {rec.area}
                </h4>
                <ul className="space-y-2">
                  {rec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0 mt-2"></span>
                      <span className="text-sm text-gray-600 font-manrope">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningsSection;