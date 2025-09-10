'use client'
import React from 'react';
import { AlertTriangle, Target, CheckCircle } from 'lucide-react';

const ChallengeSection = ({ data }) => {
  const { challenge } = data;

  return (
    <section id="challenge" className="scroll-mt-20 section_padding">
      <h2 className="section-header border-l-4 border-orange-500 pl-4 mb-8">
        The Challenge
      </h2>

      {/* Main Challenge Description */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-gray-900 font-medium flex items-center gap-2 font-clashGrotesk">
            <Target size={16} className="text-gray-600" />
            Problem Statement
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed">
            {challenge?.description || "The main challenge description will appear here, outlining the core problems that needed to be solved and the context surrounding them."}
          </p>
        </div>
      </div>

      {/* Challenge Details Grid */}
      {(challenge?.coreProblems) && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Technical Challenges */}
          {challenge?.coreProblems && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h3 className="text-gray-900 font-semibold flex items-center gap-2">
                  <AlertTriangle size={16} className="text-gray-600" />
                  Key Challenges
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {challenge.coreProblems.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Requirements or Constraints */}
          {(challenge?.requirements || challenge?.constraints) && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h3 className="text-gray-900 font-semibold flex items-center gap-2">
                  <CheckCircle size={16} className="text-gray-600" />
                  {challenge?.requirements ? 'Requirements' : 'Constraints'}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {(challenge?.requirements || challenge?.constraints || []).map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ChallengeSection;