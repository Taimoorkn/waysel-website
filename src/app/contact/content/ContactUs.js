"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    message: "",
  });
  const [csrfToken, setCsrfToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    // Get CSRF token on component mount
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch("/api/csrf");
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };
    fetchCsrfToken();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const emailContent = `
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Contact No: ${formData.contactNo}

        Message:
        ${formData.message}
      `;

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        body: JSON.stringify({
          to: "taimoorkn2221@gmail.com",
          subject: `Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          message: emailContent,
          from: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNo: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        console.error("Email sending failed:", result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-primary_bg text-text-primary">
      {/* background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[15%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#7A66E1]/25 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-[#FB3081]/25 blur-[140px]" />
      </div>

      {/* Hero Section */}
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center xl:pt-40">
        <motion.h1
          className="HeadingH2 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Let’s <GradientText>Start Something</GradientText> Bold
        </motion.h1>

        <motion.p
          className="max-w-[720px] text-lg leading-8 text-text-secondary xl:text-[22px] xl:leading-[36px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We collaborate with brands, founders, and teams who believe in craft. If that’s you — let’s build something
          that makes people stop and look twice.
        </motion.p>
      </section>

      {/* Info + Form Layout */}
      <section className="mx-auto mt-20 flex max-w-7xl flex-col-reverse gap-16 px-6 pb-32 xl:flex-row xl:items-stretch xl:gap-20">
        {/* Contact Info Side */}
        <motion.div
          className="relative flex w-full flex-col justify-between rounded-[40px] bg-gradient-to-b from-[#FB3081]/20 to-[#7A66E1]/20 p-px xl:w-[45%]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex h-full flex-col justify-between rounded-[39px] bg-card px-10 py-12 xl:px-14 xl:py-16">
            <div className="flex flex-col gap-8">
              <h2 className="HeadingH4">
                Reach <GradientText>Out</GradientText>
              </h2>
              <p className="BodyText max-w-[400px] text-text-tertiary">
                Let’s talk timelines, tech, and ambition. Whether you’re building your first MVP or scaling your 100th
                product, we’ll meet you where you are.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@waysel.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (555) 234-7765",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Remote-first. Available worldwide.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <item.icon size={24} className="text-text-secondary" />
                  <div>
                    <p className="BodyTextBold text-text-secondary">{item.label}</p>
                    <p className="BodyText text-text-tertiary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <div className="z-10 flex w-full items-center justify-center xl:w-[60%] xl:p-16">
          <div className="w-full rounded-2xl bg-opacity-80 bg-gradient-to-br from-border-primary to-border-secondary p-px backdrop-blur-sm">
            <div className="w-full rounded-2xl bg-card px-6 py-6 xl:px-10 xl:py-8">
              <div className="space-y-6 xl:space-y-8">
                {/* Name Fields */}
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text-primary">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="contact-input text-text-secondary placeholder-text-tertiary"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text-primary">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="contact-input text-text-secondary placeholder-text-tertiary"
                    />
                  </div>
                </div>

                {/* Email and Contact */}
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text-primary">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="E.g abc@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input text-text-secondary placeholder-text-tertiary"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text-primary">Contact No.</label>
                    <input
                      type="tel"
                      name="contactNo"
                      placeholder="e.g +1 254 364 5251"
                      value={formData.contactNo}
                      onChange={handleChange}
                      className="contact-input text-text-secondary placeholder-text-tertiary"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">Message</label>
                  <textarea
                    name="message"
                    placeholder="Enter your message here"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-input contact-textarea text-text-secondary placeholder-text-tertiary"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col items-end pt-4">
                  {submitStatus === "success" && (
                    <div className="mb-4 text-sm text-green-500">
                      Message sent successfully! We&apos;ll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mb-4 text-sm text-red-500">Failed to send message. Please try again.</div>
                  )}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.firstName || !formData.email || !formData.message}
                    className="BodyTextMedium transform rounded-full bg-white px-8 py-3 !text-black transition-all duration-300 hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
