export default function StructuredData({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Waysel",
  url: "https://waysel.com",
  logo: "https://waysel.com/waysellogo.svg",
  description:
    "Waysel is a software development agency specializing in AI-integrated web applications, next-generation EHR & SaaS platforms, digital infrastructure, OCR systems, and cloud-native solutions. We design with intent, build with precision, and launch with impact.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "sw@waysel.com",
    availableLanguage: ["English"],
  },
  sameAs: ["https://linkedin.com/company/waysel", "https://instagram.com/waysel"],
  foundingDate: "2024",
  knowsAbout: [
    "Artificial Intelligence Integration",
    "Healthcare Software Development",
    "EHR Systems",
    "SaaS Platform Development",
    "Cloud-Native Architecture",
    "AWS Cloud Services",
    "React & Next.js Development",
    "Material 3 Design",
    "HIPAA Compliance",
    "OCR Technology",
    "Digital Marketing Ecosystems",
    "DevOps & CI/CD",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI-Integrated Web & App Development",
        description:
          "Full-stack web and software builds that merge intuitive Material 3 UI with AI automation, OCR data capture, validation, and predictions.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Next-Generation EHR & SaaS Platforms",
        description:
          "Enterprise-grade platforms for healthcare and regulated industries with HIPAA compliance, FHIR/HL7 standards, and cloud-native architecture.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Digital Infrastructure & Analytics",
        description:
          "Multi-site ecosystems with analytics wired in from the start, feeding data into continuous improvement loops.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI Models & OCR Integrations",
        description:
          "AI-driven OCR systems that convert handwritten or printed forms into structured, verified records using AWS Textract and custom ML models.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cross-Platform Product Engineering",
        description:
          "Flutter Bloc architecture apps deployed across AWS for reproducibility, speed, and resilience with A/B testing and performance tuning.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cloud-Native Deployment & DevOps",
        description:
          "Serverless architecture with AWS Lambda, Amplify, Fargate, or Vercel with automated CI/CD and blue/green deployments.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Digital Marketing Ecosystems",
        description:
          "End-to-end marketing systems integrating analytics, automation, and attribution from SEO to HubSpot to Salesforce.",
      },
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Waysel",
  url: "https://waysel.com",
  description:
    "Waysel builds AI-integrated web applications, next-generation EHR & SaaS platforms, digital infrastructure, and cloud-native solutions. We design with intent, build with precision, and launch with impact.",
  publisher: {
    "@type": "Organization",
    name: "Waysel",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://waysel.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Waysel",
    url: "https://waysel.com",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: service.name,
    itemListElement:
      service.features?.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })) || [],
  },
});

export const articleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    "@type": "Organization",
    name: "Waysel",
  },
  publisher: {
    "@type": "Organization",
    name: "Waysel",
    logo: {
      "@type": "ImageObject",
      url: "https://waysel.com/waysellogo.svg",
    },
  },
});
