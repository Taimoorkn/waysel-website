"use client";

import React from "react";

const OurTeam = () => {
 const teamMembers = [
 {
 role: "CEO & Founder",
 name: "Alex Johnson",
 image:
 "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
 },
 {
 role: "Senior Fullstack Developer",
 name: "Alex Johnson",
 image:
 "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
 },
 {
 role: "UI/UX Designer",
 name: "Alex Johnson",
 image:
 "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
 },
 {
 role: "DevOps Engineer",
 name: "Alex Johnson",
 image:
 "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
 },
 {
 role: "Product Manager",
 name: "Alex Johnson",
 image:
 "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
 },
 {
 role: "Junior Developer",
 name: "Alex Johnson",
 image:
 "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
 },
 ];

 return (
 <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 2xl:px-[9.5rem] bg-primary_bg relative min-h-[calc(100vh-4.5rem)] overflow-hidden">
 <div className="relative z-10 mx-auto">
 <div className="text-center mb-8 sm:mb-12 lg:mb-16">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-primary_text font-neueMontreal">
 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
 Our Team
 </span>
 </h2>
 <p className="text-base sm:text-lg lg:text-xl text-secondary_text font-neueMontreal max-w-3xl mx-auto">
 The passionate people behind every project at TechiTech Solutions.
 Meet the talented individuals who bring your ideas to life.
 </p>
 <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 sm:mt-8 rounded-full"></div>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
 {teamMembers.map((member, index) => (
 <div
 key={index}
 data-animate
 id={`team-${index}`}
 className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 animate-fade-in-up"
 style={{ animationDelay: `${index * 150}ms` }}
 >
 <div className="relative overflow-hidden">
 <img
 src={member.image}
 alt={`${member.name} - ${member.role}`}
 className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
 </div>
 <div className="p-4 sm:p-6 font-neueMontreal">
 <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 uppercase">
 {member.role}
 </div>
 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
 {member.name}
 </h3>
 <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
 <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default OurTeam;