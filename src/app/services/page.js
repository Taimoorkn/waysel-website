// src/app/services/page.js
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import ServicesSection from './content/ServicesSection';


export const metadata = {
 title: 'Our Services - TechiTech Solutions',
 description: 'Explore our comprehensive software development services including web development, mobile apps, custom software, cloud integration, and enterprise solutions.',
 keywords: [
 'software development services',
 'web development',
 'mobile app development',
 'custom software development',
 'cloud integration',
 'enterprise solutions',
 'ecommerce development',
 'chrome extensions'
 ],
 openGraph: {
 title: 'Our Services - TechiTech Solutions',
 description: 'Explore our comprehensive software development services including web development, mobile apps, custom software, cloud integration, and enterprise solutions.',
 type: 'website',
 url: 'https://techitech.com/services',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Our Services - TechiTech Solutions',
 description: 'Explore our comprehensive software development services including web development, mobile apps, custom software, cloud integration, and enterprise solutions.',
 },
 alternates: {
 canonical: 'https://techitech.com/services',
 },
};

const Services = () => {
 return (
 <>
 <Navbar />
 <ServicesSection />
 <Footer />
 </>
 );
};

export default Services;