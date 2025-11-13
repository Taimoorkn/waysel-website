export const metadata = {
  title: "Services - Waysel | AI Integration, EHR Platforms & Cloud-Native Development",
  description:
    "Waysel offers 7 specialized services: AI-Integrated Web & App Development, Next-Generation EHR & SaaS Platforms, Digital Infrastructure & Analytics, AI Models & OCR Integrations, Cross-Platform Product Engineering, Cloud-Native Deployment & DevOps, and Digital Marketing Ecosystems.",
  keywords: [
    "AI web development services",
    "EHR development services",
    "SaaS platform development",
    "healthcare software services",
    "HIPAA compliant development",
    "OCR integration services",
    "digital infrastructure services",
    "cloud-native deployment",
    "AWS cloud services",
    "Flutter app development",
    "DevOps services",
    "digital marketing ecosystems",
    "React Next.js development",
    "Material 3 design services",
    "FHIR HL7 integration",
    "serverless architecture",
    "CI/CD pipeline setup",
    "enterprise software services",
  ],
  openGraph: {
    title: "Services - Waysel | AI Integration, EHR Platforms & Cloud-Native Development",
    description:
      "Comprehensive software development services: AI-Integrated Apps, Next-Gen EHR & SaaS Platforms, Digital Infrastructure, OCR Systems, Cross-Platform Engineering, Cloud-Native DevOps, and Digital Marketing Ecosystems.",
    url: "https://waysel.com/services",
    images: [
      {
        url: "/waysellogo.svg",
        width: 1200,
        height: 630,
        alt: "Waysel Services - AI Integration & Cloud-Native Development",
      },
    ],
  },
  twitter: {
    title: "Services - Waysel | AI Integration, EHR Platforms & Cloud-Native Development",
    description:
      "7 specialized services: AI Apps, EHR Platforms, Digital Infrastructure, OCR Systems, Cross-Platform Engineering, Cloud DevOps, and Marketing Ecosystems.",
    card: "summary_large_image",
    images: ["/waysellogo.svg"],
  },
  alternates: {
    canonical: "https://waysel.com/services",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
