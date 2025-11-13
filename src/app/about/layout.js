export const metadata = {
  title: "About Us - Waysel",
  description:
    "We design with intent, build with precision, and launch with impact. Waysel is a software development agency specializing in AI-integrated applications, healthcare EHR systems, and cloud-native platforms. We spend more time figuring out what you're trying to do than most teams spend designing.",
  keywords: [
    "about waysel",
    "software development philosophy",
    "AI development agency",
    "healthcare software company",
    "cloud-native solutions",
    "EHR development company",
    "Material 3 design",
    "HIPAA compliant development",
    "enterprise software agency",
    "digital transformation",
    "outcome-based development",
  ],
  openGraph: {
    title: "About Us - Waysel | Design with Intent, Build with Precision",
    description:
      "Learn about Waysel's philosophy: We spend more time understanding your needs than most teams spend designing. Specializing in AI-integrated applications, healthcare EHR systems, and cloud-native platforms.",
    url: "https://waysel.com/about",
    images: [
      {
        url: "/waysellogo.svg",
        width: 1200,
        height: 630,
        alt: "About Waysel - Software Development Agency",
      },
    ],
  },
  twitter: {
    title: "About Us - Waysel | Design with Intent, Build with Precision",
    description:
      "We spend more time understanding your needs than most teams spend designing. Specializing in AI-integrated applications, healthcare EHR systems, and cloud-native platforms.",
    card: "summary_large_image",
    images: ["/waysellogo.svg"],
  },
  alternates: {
    canonical: "https://waysel.com/about",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
