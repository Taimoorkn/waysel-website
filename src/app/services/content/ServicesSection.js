"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "AI-Integrated Web & App Development",
    desc: `Full-stack web and software builds that merge intuitive Material 3 UI with automation. AI models handle the tedious parts - OCR data capture, validation, predictions - while your users get faster, smarter workflows.`,
    points: [
      "React / Next.js",
      "Node.js / Express",
      "OpenAI API / LangChain",
      "OCR / Vision AI",
      "TensorFlow / PyTorch",
    ],
    image: "/images/development.svg",
  },
  {
    id: 2,
    title: "Next-Generation EHR & SaaS Platforms",
    desc: `Enterprise-grade platforms built for healthcare and other regulated industries. Guided by Material 3, Apple HIG, and WCAG, we design with compliance at the core. Cloud-native architecture keeps everything secure and scalable, while AI automations cut administrative noise so teams can focus on real work.`,
    points: [
      "Material 3 / Apple HIG / WCAG",
      "AWS (Lambda, Cognito, DynamoDB)",
      "FHIR / HL7 Standards",
      "HIPAA-Compliant Cloud",
      "React / Angular",
    ],
    image: "/images/ehr saas.svg",
  },
  {
    id: 3,
    title: "Digital Infrastructure & Analytics",
    desc: `From single websites to complex, multi-site ecosystems - we build digital foundations with analytics wired in from the start. Every click, scroll, and journey is measurable, feeding data into continuous improvement loops that drive smarter decisions over time.`,
    points: [
      "Google Analytics / GA4",
      "AWS CloudWatch / Datadog",
      "PostgreSQL / BigQuery",
      "Tag Manager / Mixpanel",
      "CDP / CDI Systems",
    ],
    image: "/images/digital analytics.svg",
  },
  {
    id: 4,
    title: "AI Models & OCR Integrations",
    desc: `We turn paper into data - and data into decisions. Our AI-driven OCR systems convert handwritten or printed forms into structured, verified records. Originally built for banks, refined for healthcare, and now ready for any industry buried in paperwork.`,
    points: [
      "AWS Textract / Google Vision",
      "OpenAI / Custom ML Models",
      "FastAPI / Flask",
      "Pandas / Numpy for Data Validation",
      "MongoDB / DynamoDB",
    ],
    image: "/images/ocr.svg",
  },
  {
    id: 5,
    title: "Cross-Platform Product Engineering",
    desc: `Apps that work everywhere and improve with every release. We build on Flutter Bloc architecture with Cubit, deployed across AWS for reproducibility, speed, and resilience. Every build is stress-tested, A/B-tested, and tuned for performance.`,
    points: [
      "Flutter / Dart (Bloc, Cubit)",
      "AWS Amplify / Cognito / S3",
      "Firebase / Supabase",
      "Docker / CI-CD Pipelines",
      "REST / GraphQL APIs",
    ],
    image: "/images/pc.svg",
  },
  {
    id: 6,
    title: "Cloud-Native Deployment & DevOps",
    desc: `Serverless by design - AWS Lambda, Amplify, Fargate, or Vercel, depending on what the build needs. We automate CI/CD, maintain constant uptime, and manage blue/green releases and RCA visibility as standard.`,
    points: [
      "AWS Lambda / Fargate / Amplify",
      "Vercel / Netlify",
      "Docker / Kubernetes",
      "GitHub Actions / CircleCI",
      "Blue-Green Deployments / Canary Testing",
    ],
    image: "/images/cross platform product.svg",
  },
  {
    id: 7,
    title: "Digital Marketing Ecosystems",
    desc: `End-to-end marketing systems that integrate analytics, automation, and attribution. We connect every tool - from SEO to HubSpot to Salesforce - into one measurable ecosystem that grows smarter with every campaign.`,
    points: [
      "SEO / SEM / Google Ads",
      "Meta / LinkedIn Ads Manager",
      "HubSpot / Salesforce Integration",
      "Analytics & Attribution (GA4, Mixpanel)",
      "Marketing Automation (Zapier, Segment)",
    ],
    image: "/images/digital marketing.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="section">
      <h2 className="HeadingH3 py-4">Our Services</h2>

      {services.map((service, index) => (
        <div key={service.id} className="py-16 xl:py-24">
          <ServiceBlock service={service} isReversed={index % 2 !== 0} />
        </div>
      ))}
    </section>
  );
}

function ServiceBlock({ service, isReversed }) {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-16 xl:flex-row ${
        isReversed ? "xl:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="order-2 flex w-full flex-col xl:order-none xl:w-1/2">
        <div className="space-y-4">
          <h3 className="HeadingH5">{service.title}</h3>
          <p className="BodyText whitespace-pre-line !text-text-secondary">{service.desc}</p>
        </div>
        <div className="my-8 border border-border-secondary"></div>

        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
          {service.points.map((point, i) => (
            <p key={i} className="BodyTextMedium !text-text-tertiary">
              {point}
            </p>
          ))}
        </div>

        <div className={`mt-10 w-full xl:w-auto ${isReversed ? "xl:ml-auto xl:self-end" : "xl:mr-auto xl:self-start"}`}>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-2 font-medium text-black transition hover:bg-[#e5e5e5]"
          >
            Get service now
          </Link>
        </div>
      </div>

      {/* Glow Block */}
      <div className="relative order-1 h-[400px] w-full rounded-[32px] bg-gradient-to-b from-[#7A66E1]/60 via-[#FB3081]/60 to-[#F8805F]/60 p-px xl:order-none xl:h-[500px] xl:w-1/2">
        <div className="oval-blur-services absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform" />
        <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[31px] bg-card">
          <Image
            src={service.image}
            alt={service.title}
            width={300}
            height={300}
            className="h-[250px] w-[250px] scale-[0.8] object-contain xl:h-[500px] xl:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
