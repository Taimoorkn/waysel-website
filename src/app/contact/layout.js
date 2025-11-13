export const metadata = {
  title: "Contact Us - Waysel | Get in Touch for AI & Cloud-Native Solutions",
  description:
    "Contact Waysel to discuss your next project. We specialize in AI-integrated web applications, healthcare EHR systems, SaaS platforms, and cloud-native development. Email us at sw@waysel.com or fill out our contact form.",
  keywords: [
    "contact waysel",
    "software development inquiry",
    "AI development consultation",
    "EHR development contact",
    "healthcare software inquiry",
    "cloud-native development contact",
    "get a quote",
    "project consultation",
    "enterprise software inquiry",
  ],
  openGraph: {
    title: "Contact Us - Waysel | Get in Touch for AI & Cloud-Native Solutions",
    description:
      "Ready to start your project? Contact Waysel for AI-integrated applications, healthcare EHR systems, and cloud-native solutions. Email: sw@waysel.com",
    url: "https://waysel.com/contact",
    images: [
      {
        url: "/waysellogo.svg",
        width: 1200,
        height: 630,
        alt: "Contact Waysel - Software Development Agency",
      },
    ],
  },
  twitter: {
    title: "Contact Us - Waysel | Get in Touch for AI & Cloud-Native Solutions",
    description:
      "Ready to start your project? Contact Waysel for AI-integrated applications, healthcare EHR systems, and cloud-native solutions.",
    card: "summary_large_image",
    images: ["/waysellogo.svg"],
  },
  alternates: {
    canonical: "https://waysel.com/contact",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
