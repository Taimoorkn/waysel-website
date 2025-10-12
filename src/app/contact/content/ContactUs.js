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
    <main className="section relative min-h-screen bg-primary_bg text-text-primary">
      {/* Hero Section - Centered Text */}
      <motion.section
        className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center xl:pt-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="HeadingH1">
          Let&apos;s <GradientText>Start Something</GradientText> Bold
        </h1>
        <p className="BodyText mt-4 max-w-2xl">
          We collaborate with brands, founders, and teams who believe in craft. If that&apos;s you - let&apos;s build
          something that makes people stop and look twice.
        </p>
      </motion.section>

      {/* Contact Info + Form Section */}
      <section className="mx-auto mt-16 pb-32">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-16">
          {/* Left Section - Contact Info */}
          <motion.div
            className="flex w-full flex-col gap-8 px-6 xl:w-[40%] xl:gap-10 xl:p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div>
              <h2 className="HeadingH5">
                We&apos;ll ask what <GradientText>you&apos;re trying </GradientText>to do.
              </h2>
              <p className="BodyText mt-3">Then we&apos;ll build it like it was ours.</p>
            </div>
            <div className="flex flex-col gap-6">
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
                    <p className="text-sm font-medium text-text-secondary">{item.label}</p>
                    <p className="text-base text-text-tertiary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            className="z-10 flex w-full items-center justify-center xl:w-[60%]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-full rounded-2xl bg-gradient-to-br from-border-primary to-border-secondary p-px backdrop-blur-sm">
              <div className="w-full rounded-2xl bg-card px-6 py-8 sm:px-10 sm:py-10">
                <div className="space-y-8">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-text-primary">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="contact-input focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-border-primary bg-card px-4 py-3 text-text-secondary placeholder-text-tertiary focus:outline-none focus:ring-2"
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
                        className="contact-input focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-border-primary bg-card px-4 py-3 text-text-secondary placeholder-text-tertiary focus:outline-none focus:ring-2"
                      />
                    </div>
                  </div>

                  {/* Email and Contact */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-text-primary">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g user@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-border-primary bg-card px-4 py-3 text-text-secondary placeholder-text-tertiary focus:outline-none focus:ring-2"
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
                        className="contact-input focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-border-primary bg-card px-4 py-3 text-text-secondary placeholder-text-tertiary focus:outline-none focus:ring-2"
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
                      className="contact-input focus:border-primary focus:ring-primary/20 w-full border border-border-primary bg-card px-4 py-3 text-text-secondary placeholder-text-tertiary focus:outline-none focus:ring-2"
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
                      className="BodyTextMedium transform rounded-full bg-white px-6 py-2 !text-black transition-all duration-300 hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gradient vector blur at bottom edge */}
      <div className="oval-blur bottom-40 right-0 z-0 -translate-x-1/2 -translate-y-1/2 transform" />
    </main>
  );
};

export default ContactUs;
