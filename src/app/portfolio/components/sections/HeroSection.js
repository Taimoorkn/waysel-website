'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ExternalLink,
  Play,
  Star,
  Calendar,
  Users,
  Target,
  Globe,
  Monitor,
  TrendingUp,
  Bot
} from 'lucide-react';

const HeroSection = ({ heroRef, data }) => {
  const router = useRouter();
  const { project, theme = { primary: '#3B82F6' }, metrics } = data;

  // Hero stats to display
  const heroStats = [
    { icon: Calendar, label: 'Duration', value: project.duration },
    { icon: Users, label: 'Team', value: project.teamSize },
    { icon: Target, label: 'Industry', value: project.industry },
    { icon: Globe, label: 'Platform', value: project.platform },
  ];

  return (
    <section ref={heroRef} className="relative bg-gradient-to-br from-gray-50 to-blue-50 pt-10 pb-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot size={16} className="text-blue-700" />
              {project.subtitle}
            </div>

            <h1 className="service-header">
              {project.title}
            </h1>

            <p className="font-manrope text-sm sm:text-base md:text-lg leading-5 sm:leading-6 text-secondary_text mb-6 sm:mb-8">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {heroStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-3 font-manrope text-sm">
                    <div className="size-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon size={17} style={{ color: theme.primary }} />
                    </div>
                    <div>
                      <p className="text-gray-500">{stat.label}</p>
                      <p className="font-semibold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  style={{ backgroundColor: theme.primary }}
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink size={20} />
                  View Live Project
                </button>
              )}

              {project.demoUrl && (
                <button
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  <Play size={20} />
                  Watch Demo
                </button>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
              {project.heroImage ? (
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              ) : (
                <div className="w-full h-full bg-white rounded-lg shadow-2xl flex items-center justify-center">
                  <Monitor size={80} className="text-gray-400" />
                </div>
              )}
            </div>

            {/* Floating stats */}
            {metrics && metrics[0] && (
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{metrics[0].label}</p>
                    <p className="font-bold text-lg text-gray-900">{metrics[0].value}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;