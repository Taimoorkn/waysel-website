"use client";
import { useState } from "react";
import SectionHeading from "../../../components/SectionHeading";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="section relative h-full bg-[#0D0D0C]">
      <div className="mx-auto flex h-full items-center gap-12">
        {/* Left Section */}
        <div className="flex h-full w-[40%] flex-col justify-start border p-16 font-hurme">
          <div className="w-full">
            <h1 className="mb-4 bg-gradient-to-b from-white to-[#FFBA8F] bg-clip-text text-4xl tracking-[-3%] text-transparent sm:text-[64px] sm:leading-[80px]">
              Have an Idea?
            </h1>
            <p className="text-[32px] leading-[52px] tracking-[-3%] text-[#ffffffe6]">
              Need help finishing what you started?
            </p>
          </div>
          <div className="justify-start text-xl font-normal leading-loose text-white/80">
            We'll ask what you're trying to do.
            <br />
            We'll tell you if it makes sense.
            <br />
            If it does, we'll build it like it was ours.
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex w-[60%] items-center justify-center border p-16">
          <div className="w-full rounded-2xl border border-b-0 border-r-0 border-[#fed7be33] bg-[#121211] bg-opacity-80 p-8 font-hurme backdrop-blur-sm">
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#ffffffb3]">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#fed7be33] bg-[#0D0D0C] px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] transition-all duration-300 focus:border-[#FFBA8F] focus:outline-none focus:ring-1 focus:ring-[#FFBA8F]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#ffffffb3]">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#fed7be33] bg-[#0D0D0C] px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] transition-all duration-300 focus:border-[#FFBA8F] focus:outline-none focus:ring-1 focus:ring-[#FFBA8F]/20"
                  />
                </div>
              </div>

              {/* Email and Contact */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#ffffffb3]">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E.g abc@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#fed7be33] bg-[#0D0D0C] px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] transition-all duration-300 focus:border-[#FFBA8F] focus:outline-none focus:ring-1 focus:ring-[#FFBA8F]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#ffffffb3]">
                    Contact No.
                  </label>
                  <input
                    type="tel"
                    name="contactNo"
                    placeholder="e.g +1 254 364 5251"
                    value={formData.contactNo}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#fed7be33] bg-[#0D0D0C] px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] transition-all duration-300 focus:border-[#FFBA8F] focus:outline-none focus:ring-1 focus:ring-[#FFBA8F]/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#ffffffb3]">Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-[#fed7be33] bg-[#0D0D0C] px-4 py-3 text-[#ffffffcc] placeholder-[#ffffff66] transition-all duration-300 focus:border-[#FFBA8F] focus:outline-none focus:ring-1 focus:ring-[#FFBA8F]/20"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="transform rounded-full bg-primary px-8 py-3 font-hurme font-medium text-dark transition-all duration-300 hover:scale-105 hover:bg-[#e5e4e2] active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient vector blur at bottom edge */}
      <div className="oval-blur bottom-[-10%] right-0 z-0 -translate-x-1/2 -translate-y-1/2 transform" />
    </section>
  );
}
