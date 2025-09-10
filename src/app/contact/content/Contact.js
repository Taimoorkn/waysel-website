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
 InstagramLogoIcon
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const ContactItem = ({ icon: Icon, title, details }) => (
 <div className="flex items-center space-x-4 sm:space-x-6 group">
 <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-light_blue_bg transition-colors duration-200 group-hover:bg-blue-100">
 <Icon weight="fill" className="text-accent size-5 sm:size-6" />
 </div>
 <div className="flex-1">
 {title && (
 <h3 className="font-neueMontreal text-sm sm:text-base text-primary_text font-medium">
 {title}
 </h3>
 )}
 <p className="font-neueMontreal text-sm sm:text-base text-secondary_text">
 {details}
 </p>
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
 details:
 "XX-23, Khayaban-e-Iqbal, DHA Phase 3, 1st Floor, Lahore, Punjab 54000, PK",
 },
 {
 icon: MapPinIcon,
 title: "Manchester",
 details:
 "The Point, 173 Cheetham Hill Rd, Cheetham Hill, Manchester, England M8 8GL, GB",
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
 <section className="bg-primary_bg px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[9.5rem] py-6 sm:py-8 md:py-10">
 <div className="text-center mb-8">
 <div className="font-neueMontreal inline-flex items-center bg-blue-50 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-all hover:bg-blue-100">
 <StarFourIcon weight="fill" className="w-4 h-4 mr-2" />
 CONTACT US
 </div>
 <h2 className="font-neueMontreal text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-primary_text">
 Bring that Idea to <span className="text-accent">Life</span>
 </h2>
 <p className="text-base sm:text-lg lg:text-xl text-secondary_text mx-auto font-neueMontreal max-w-3xl">
 Explore our collection of innovative solutions and success stories
 that have transformed businesses across industries.
 </p>
 </div>

 <div className=" mx-auto">
 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-16">
 {/* Left Section - Contact Info */}
 <div className="w-full lg:w-2/6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
 <h3 className="font-neueMontreal text-2xl font-semibold mb-6 text-primary_text">
 Get in Touch
 </h3>
 <div className="space-y-6 sm:space-y-8">
 {contactItems.map((item, index) => (
 <ContactItem key={index} {...item} />
 ))}
 </div>

 <div className="flex justify-between mt-10 pt-8 border-t border-gray-100">
 {[
 { name: 'twitter', icon: TwitterLogoIcon, url: 'https://twitter.com/yourusername' },
 { name: 'linkedin', icon: LinkedinLogoIcon, url: 'https://linkedin.com/in/yourusername' },
 { name: 'facebook', icon: FacebookLogoIcon, url: 'https://facebook.com/yourusername' },
 { name: 'instagram', icon: InstagramLogoIcon, url: 'https://instagram.com/yourusername' }
 ].map((social) => (
 <a
 key={social.name}
 href={social.url}
 target="_blank"
 rel="noopener noreferrer"
 className="group relative bg-white hover:bg-blue-50 p-3 rounded-full shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-200"
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
 <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
 <h3 className="font-neueMontreal text-2xl font-semibold mb-6 text-primary_text">
 Send Us a Message
 </h3>

 <form onSubmit={handleSubmit} className="space-y-6">
 <input type="hidden" name="csrfToken" value={csrfToken} />

 <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
 <div className="w-full sm:w-1/2">
 <label
 htmlFor="name"
 className="font-medium text-sm sm:text-base text-gray-900 mb-2 block"
 >
 Name
 </label>
 <div className="relative">
 <input
 id="name"
 type="text"
 placeholder="Your full name"
 className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 bg-white focus:outline-none ${errors.name
 ? "border-red-400 focus:border-red-500"
 : activeField === 'name'
 ? "border-blue-600"
 : "border-gray-200 hover:border-gray-300"
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
 <p className="text-red-500 text-sm mt-2 flex items-center" id="name-error">
 <AlertCircle className="size-4 mr-1" />
 {errors.name}
 </p>
 )}
 </div>

 <div className="w-full sm:w-1/2">
 <label
 htmlFor="email"
 className="font-medium text-sm sm:text-base text-gray-900 mb-2 block"
 >
 Email
 </label>
 <div className="relative">
 <input
 id="email"
 type="email"
 placeholder="your.email@example.com"
 className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 bg-white focus:outline-none ${errors.email
 ? "border-red-400 focus:border-red-500"
 : activeField === 'email'
 ? "border-blue-600"
 : "border-gray-200 hover:border-gray-300"
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
 <p className="text-red-500 text-sm mt-2 flex items-center" id="email-error">
 <AlertCircle className="size-4 mr-1" />
 {errors.email}
 </p>
 )}
 </div>
 </div>

 <div>
 <label
 htmlFor="subject"
 className="font-medium text-sm sm:text-base text-gray-900 mb-2 block"
 >
 Subject
 </label>
 <div className="relative">
 <input
 id="subject"
 type="text"
 placeholder="What's this about?"
 className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 bg-white focus:outline-none ${errors.subject
 ? "border-red-400 focus:border-red-500"
 : activeField === 'subject'
 ? "border-blue-600"
 : "border-gray-200 hover:border-gray-300"
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
 <p className="text-red-500 text-sm mt-2 flex items-center" id="subject-error">
 <AlertCircle className="size-4 mr-1" />
 {errors.subject}
 </p>
 )}
 </div>

 <div>
 <label
 htmlFor="message"
 className="font-medium text-sm sm:text-base text-gray-900 mb-2 block"
 >
 Message
 </label>
 <div className="relative">
 <textarea
 id="message"
 placeholder="Tell us about your project or question..."
 className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 bg-white focus:outline-none h-32 sm:h-40 resize-none ${errors.message
 ? "border-red-400 focus:border-red-500"
 : activeField === 'message'
 ? "border-blue-600"
 : "border-gray-200 hover:border-gray-300"
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
 <p className="text-red-500 text-sm mt-2 flex items-center" id="message-error">
 <AlertCircle className="size-4 mr-1" />
 {errors.message}
 </p>
 )}
 </div>

 <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
 <button
 type="submit"
 className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
 disabled={isSubmitting}
 aria-label="Send contact message"
 >
 {isSubmitting ? (
 <>
 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
 Sending...
 </>
 ) : (
 <>
 <Send className="size-5 mr-2" />
 Send Message
 </>
 )}
 </button>

 <span className="text-sm font-medium text-gray-500 hidden sm:block">OR</span>

 <button
 type="button"
 className="w-full sm:flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center"
 //onClick={() => router.push('/appointment')}
 aria-label="Book a meeting"
 >
 <Calendar className="size-5 mr-2" />
 Book A Meeting
 </button>
 </div>

 {submitStatus && (
 <div
 className={`flex items-center p-4 rounded-xl mt-4 ${submitStatus.type === "success"
 ? "bg-green-50 text-green-700 border border-green-200"
 : "bg-red-50 text-red-700 border border-red-200"
 }`}
 role="alert"
 >
 {submitStatus.type === "success" ? (
 <CheckCircle className="size-5 mr-2 flex-shrink-0" />
 ) : (
 <AlertCircle className="size-5 mr-2 flex-shrink-0" />
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