// src/app/layout.js
import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/typography.css";
import StructuredData, { organizationSchema, websiteSchema } from "../components/StructuredData";
import LoadingScreen from "@/components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";

const satoshi = localFont({
  src: [
    { path: "../../public/font/Satoshi/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "../../public/font/Satoshi/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const hurme = localFont({
  src: [{ path: "../../public/font/Hurme/HurmeGeometricSans1-SemiBoldObl.ttf", weight: "300 900", style: "normal" }],
  variable: "--font-hurme",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://waysel.com"),
  title: {
    default: "Waysel - AI-Integrated Web Development & Cloud-Native Solutions",
    template: "%s | Waysel",
  },
  description:
    "Waysel builds AI-integrated web applications, next-generation EHR & SaaS platforms, digital infrastructure, and cloud-native solutions. We design with intent, build with precision, and launch with impact.",
  keywords: [
    "AI web development",
    "AI integration",
    "cloud-native development",
    "EHR development",
    "SaaS platforms",
    "healthcare software",
    "OCR integration",
    "digital infrastructure",
    "cross-platform development",
    "Next.js development",
    "React development",
    "AWS cloud integration",
    "enterprise software",
    "HIPAA compliant software",
    "Material 3 design",
    "digital marketing ecosystems",
    "Waysel",
    "software development agency",
  ],
  authors: [{ name: "Waysel" }],
  creator: "Waysel",
  publisher: "Waysel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waysel.com",
    siteName: "Waysel",
    title: "Waysel - AI-Integrated Web Development & Cloud-Native Solutions",
    description:
      "We build AI-integrated web applications, next-generation EHR & SaaS platforms, and cloud-native solutions. Specializing in healthcare software, digital infrastructure, and enterprise-grade platforms.",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Waysel - AI-Integrated Development & Cloud Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waysel - AI-Integrated Web Development & Cloud-Native Solutions",
    description:
      "Building AI-integrated web applications, EHR & SaaS platforms, and cloud-native solutions for healthcare, enterprise, and beyond.",
    images: ["/favicon.svg"],
    creator: "@waysel",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://waysel.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#7A66E1" />
        <meta name="description" content="Waysel builds AI-integrated web applications, next-generation EHR & SaaS platforms, digital infrastructure, and cloud-native solutions. We design with intent, build with precision, and launch with impact." />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        suppressHydrationWarning
        className={` ${satoshi.variable} ${hurme.variable} bg-primary_bg font-satoshi antialiased`}
      >
        <noscript>
          <style>{`
            body { visibility: visible !important; }
          `}</style>
        </noscript>

        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
 
          <div id="root">{children}</div> 
        <Analytics />
      </body>
    </html>
  );
}
