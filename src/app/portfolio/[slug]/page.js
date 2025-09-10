// src/app/portfolio/[slug]/page.js
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { caseStudies } from '../components/case-studies';

// Generate static params for all case studies (for build optimization)
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params; // Await params before accessing properties
  const caseStudyData = caseStudies[slug];

  if (!caseStudyData) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudyData.project.title} - Case Study | TechiTech`,
    description: caseStudyData.project.description,
    openGraph: {
      title: caseStudyData.project.title,
      description: caseStudyData.project.description,
      images: [caseStudyData.project.heroImage],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params; // Await params before accessing properties
  const caseStudyData = caseStudies[slug];

  // If case study doesn't exist, show 404
  if (!caseStudyData) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <CaseStudyTemplate data={caseStudyData} />
      <Footer />
    </>
  );
}