"use client";
import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import GradientText from "@/components/GradientText";
import Button from "@/components/Button";

export default function Contact() {
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
    <section className="section relative bg-primary_bg">
      <div className="mx-auto flex flex-col items-stretch gap-8 xl:flex-row xl:gap-12">
        {/* Left Section - Changed to items-stretch on parent and removed !h-full */}
        <div className="flex w-full flex-col gap-8 p-6 xl:w-[40%] xl:gap-12 xl:p-16">
          <div className="w-full">
            <h1 className="HeadingH3 mb-4">
              <GradientText>Have an Idea?</GradientText>
            </h1>
            <p className="text-lg tracking-[-3%] text-text-secondary xl:text-[32px] xl:leading-[52px]">
              Need help finishing what you started?
            </p>
          </div>
          <div className="BodyText">
            We&apos;ll ask what you&apos;re trying to do.
            <br />
            We&apos;ll tell you if it makes sense.
            <br />
            If it does, we&apos;ll build it like it was ours.
          </div>
        </div>

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
      </div>
      {/* Gradient vector blur at bottom edge */}
      <div className="oval-blur bottom-20 right-0 z-0 -translate-x-1/2 -translate-y-1/2 transform" />
    </section>
  );
}
