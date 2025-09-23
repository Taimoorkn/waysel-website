"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Send, AlertCircle, CheckCircle } from "lucide-react";
import {
  MapPinIcon,
  PhoneCallIcon,
  MailboxIcon,
  StarFourIcon,
  TwitterLogoIcon,
  LinkedinLogoIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const ContactItem = ({ icon: Icon, title, details }) => (
  <div className="group flex items-center space-x-4 sm:space-x-6">
    <div className="flex size-10 items-center justify-center rounded-full bg-card_bg transition-colors duration-200 group-hover:bg-hover_bg sm:size-12">
      <Icon weight="fill" className="size-5 text-accent sm:size-6" />
    </div>
    <div className="flex-1">
      {title && (
        <h3 className="text-sm font-medium text-primary_text sm:text-base">
          {title}
        </h3>
      )}
      <p className="text-sm text-secondary_text sm:text-base">{details}</p>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [csrfToken, setCsrfToken] = useState("");
  const [activeField, setActiveField] = useState(null);
  const router = useRouter();

  const validationSchema = {
    name: (value) => (!value.trim() ? "Name is required." : null),
    email: (value) => {
      if (!value.trim()) return "Email is required.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? null : "Email is invalid.";
    },
    subject: (value) => (!value.trim() ? "Subject is required." : null),
    message: (value) => (!value.trim() ? "Message is required." : null),
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const validateField = (field, value) => {
    const errorMessage = validationSchema[field](value);
    setErrors((prev) => ({ ...prev, [field]: errorMessage }));
    return !errorMessage;
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    validateField(id, value);
    setActiveField(null);
  };

  const handleFocus = (e) => {
    setActiveField(e.target.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const errorMessage = validationSchema[field](formData[field]);
      if (errorMessage) {
        isValid = false;
        newErrors[field] = errorMessage;
      }
    });

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const userMessage = `Thank you for contacting us, ${formData.name}! We have received your message and will get back to you soon.`;
      const adminMessage = `New contact form submission:\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

      const userResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        body: JSON.stringify({
          to: formData.email,
          subject: "Contact Form Submission Confirmation",
          message: userMessage,
          from: "no-reply@yourdomain.com",
        }),
      });

      const userResult = await userResponse.json();
      if (!userResult.success) {
        setSubmitStatus({
          type: "error",
          message: "An error occurred. Please refresh the page and try again.",
        });
        return;
      }

      const adminResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        body: JSON.stringify({
          to: "taimoorkn2221@gmail.com",
          subject: "New Contact Form Submission",
          message: adminMessage,
          from: "no-reply@yourdomain.com",
        }),
      });

      const adminResult = await adminResponse.json();
      if (!adminResult.success) {
        setSubmitStatus({
          type: "error",
          message: "An error occurred. Please refresh the page and try again.",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetch("/api/csrf")
      .then((res) => res.json())
      .then((data) => {
        setCsrfToken(data.csrfToken);
      })
      .catch((error) => console.error("Failed to fetch CSRF token:", error));
  }, []);

  const contactItems = [
    {
      icon: MapPinIcon,
      title: "Austin Headquarters",
      details: "701 Tillery St, Austin, Texas 78702, US",
    },
    {
      icon: MapPinIcon,
      title: "Lahore",
      details: "XX-23, Khayaban-e-Iqbal, DHA Phase 3, 1st Floor, Lahore, Punjab 54000, PK",
    },
    {
      icon: MapPinIcon,
      title: "Manchester",
      details: "The Point, 173 Cheetham Hill Rd, Cheetham Hill, Manchester, England M8 8GL, GB",
    },
    {
      icon: PhoneCallIcon,
      details: "+62 1234 8921",
    },
    {
      icon: MailboxIcon,
      details: "techitech@gmail.com",
    },
  ];

  return (
    <section className="bg-primary_bg px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 xl:px-16 2xl:px-[9.5rem]">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex items-center rounded-full bg-card_bg px-3 py-1.5 text-xs font-medium text-accent transition-all hover:bg-hover_bg sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
          <StarFourIcon weight="fill" className="mr-2 h-4 w-4" />
          CONTACT US
        </div>
        <h2 className="mb-4 text-3xl font-medium text-primary_text sm:mb-6 sm:text-4xl lg:text-5xl">
          Bring that Idea to <span className="text-accent">Life</span>
        </h2>
        <p className="mx-auto max-w-3xl text-base text-secondary_text sm:text-lg lg:text-xl">
          Explore our collection of innovative solutions and success stories that have transformed
          businesses across industries.
        </p>
      </div>

      <div className="mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left Section - Contact Info */}
          <div className="w-full rounded-2xl border border-border_primary bg-card_bg p-8 shadow-sm lg:w-2/6">
            <h3 className="mb-6  text-2xl font-medium text-primary_text">
              Get in Touch
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {contactItems.map((item, index) => (
                <ContactItem key={index} {...item} />
              ))}
            </div>

            <div className="mt-10 flex justify-between border-t border-border_secondary pt-8">
              {[
                { name: "twitter", icon: TwitterLogoIcon, url: "https://twitter.com/yourusername" },
                {
                  name: "linkedin",
                  icon: LinkedinLogoIcon,
                  url: "https://linkedin.com/in/yourusername",
                },
                {
                  name: "facebook",
                  icon: FacebookLogoIcon,
                  url: "https://facebook.com/yourusername",
                },
                {
                  name: "instagram",
                  icon: InstagramLogoIcon,
                  url: "https://instagram.com/yourusername",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-full border border-border_secondary bg-surface_bg p-3 shadow-sm transition-all duration-300 hover:border-accent hover:bg-hover_bg hover:shadow-md"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon
                    weight="fill"
                    className="size-5 text-accent transition-colors duration-300"
                  />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full lg:w-4/6">
            <div className="rounded-2xl border border-border_primary bg-card_bg p-8 shadow-sm">
              <h3 className="mb-6  text-2xl font-medium text-primary_text">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="csrfToken" value={csrfToken} />

                <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-primary_text sm:text-base"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className={`w-full rounded-xl border-2 bg-surface_bg px-4 py-3 text-primary_text transition-all duration-200 focus:outline-none ${
                          errors.name
                            ? "border-red-400 focus:border-red-500"
                            : activeField === "name"
                              ? "border-accent"
                              : "border-border_secondary hover:border-border_primary"
                        }`}
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 flex items-center text-sm text-red-500" id="name-error">
                        <AlertCircle className="mr-1 size-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-primary_text sm:text-base"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className={`w-full rounded-xl border-2 bg-surface_bg px-4 py-3 text-primary_text transition-all duration-200 focus:outline-none ${
                          errors.email
                            ? "border-red-400 focus:border-red-500"
                            : activeField === "email"
                              ? "border-accent"
                              : "border-border_secondary hover:border-border_primary"
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 flex items-center text-sm text-red-500" id="email-error">
                        <AlertCircle className="mr-1 size-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-900 sm:text-base"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className={`w-full rounded-xl border-2 bg-surface_bg px-4 py-3 text-primary_text transition-all duration-200 focus:outline-none ${
                        errors.subject
                          ? "border-red-400 focus:border-red-500"
                          : activeField === "subject"
                            ? "border-accent"
                            : "border-border_secondary hover:border-border_primary"
                      }`}
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      aria-invalid={errors.subject ? "true" : "false"}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                  </div>
                  {errors.subject && (
                    <p className="mt-2 flex items-center text-sm text-red-500" id="subject-error">
                      <AlertCircle className="mr-1 size-4" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-900 sm:text-base"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      placeholder="Tell us about your project or question..."
                      className={`h-32 w-full resize-none rounded-xl border-2 bg-surface_bg px-4 py-3 text-primary_text transition-all duration-200 focus:outline-none sm:h-40 ${
                        errors.message
                          ? "border-red-400 focus:border-red-500"
                          : activeField === "message"
                            ? "border-accent"
                            : "border-border_secondary hover:border-border_primary"
                      }`}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-2 flex items-center text-sm text-red-500" id="message-error">
                      <AlertCircle className="mr-1 size-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3.5 font-medium text-white transition-colors duration-200 hover:bg-accent_dark disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
                    disabled={isSubmitting}
                    aria-label="Send contact message"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 size-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <span className="hidden text-sm font-medium text-tertiary_text sm:block">OR</span>

                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-xl border border-border_primary bg-surface_bg px-6 py-3.5 font-medium text-primary_text transition-colors duration-200 hover:bg-hover_bg sm:flex-1"
                    //onClick={() => router.push('/appointment')}
                    aria-label="Book a meeting"
                  >
                    <Calendar className="mr-2 size-5" />
                    Book A Meeting
                  </button>
                </div>

                {submitStatus && (
                  <div
                    className={`mt-4 flex items-center rounded-xl p-4 ${
                      submitStatus.type === "success"
                        ? "border border-green-200 bg-green-50 text-green-700"
                        : "border border-red-200 bg-red-50 text-red-700"
                    }`}
                    role="alert"
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="mr-2 size-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="mr-2 size-5 flex-shrink-0" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
