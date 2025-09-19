"use client";
import { useState } from 'react';
import SectionHeading from "../../../components/SectionHeading";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="section relative">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <div className="font-hurme">
            <h1 className="bg-gradient-to-b from-white to-[#FFBA8F] bg-clip-text text-4xl tracking-[-3%] text-transparent sm:text-[64px] sm:leading-[80px] mb-6">
              Send Us a Message
            </h1>
            <p className="text-xl leading-[32px] text-[#ffffffe6]">
              Crafting user-friendly, cross platform solutions with efficiency
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg rounded-2xl border border-b-0 border-r-0 border-[#fed7be33] bg-[#121211] bg-opacity-80 p-8 font-hurme backdrop-blur-sm">
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#ffffffb3] text-sm font-medium mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0C] border border-[#fed7be33] rounded-xl px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] focus:outline-none focus:border-[#FFBA8F] focus:ring-1 focus:ring-[#FFBA8F]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[#ffffffb3] text-sm font-medium mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0C] border border-[#fed7be33] rounded-xl px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] focus:outline-none focus:border-[#FFBA8F] focus:ring-1 focus:ring-[#FFBA8F]/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email and Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#ffffffb3] text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E.g abc@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0C] border border-[#fed7be33] rounded-xl px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] focus:outline-none focus:border-[#FFBA8F] focus:ring-1 focus:ring-[#FFBA8F]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[#ffffffb3] text-sm font-medium mb-2">
                    Contact No.
                  </label>
                  <input
                    type="tel"
                    name="contactNo"
                    placeholder="e.g +1 254 364 5251"
                    value={formData.contactNo}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0C] border border-[#fed7be33] rounded-xl px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] focus:outline-none focus:border-[#FFBA8F] focus:ring-1 focus:ring-[#FFBA8F]/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#ffffffb3] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0D0D0C] border border-[#fed7be33] rounded-xl px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] focus:outline-none focus:border-[#FFBA8F] focus:ring-1 focus:ring-[#FFBA8F]/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-primary text-dark font-medium px-8 py-3 rounded-full hover:bg-[#e5e4e2] transition-all duration-300 transform hover:scale-105 active:scale-95 font-hurme"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient vector blur at bottom edge */}
      <div className="gradient-vector-blur bottom-0 left-1/2 z-50 -translate-x-1/2 transform" />
    </section>
  );
}