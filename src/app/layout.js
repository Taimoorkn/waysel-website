// src/app/layout.js
import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/typography.css";
import StructuredData, { organizationSchema, websiteSchema } from "../components/StructuredData";

const satoshi = localFont({
  src: [
    { path: "../../public/font/satoshi/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "../../public/font/satoshi/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://waysel.com"),
  title: {
    default: "Waysel - Web Development Components & Resources",
    template: "%s | Waysel",
  },
  description:
    "Start building websites people remember with Waysel's collection of components, techniques, tricks and tutorials. Your personal toolbox for web development.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "custom software",
    "cloud integration",
    "enterprise solutions",
    "ecommerce development",
    "chrome extensions",
    "TechiTech",
    "software company",
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
    title: "Waysel - Web Development Components & Resources",
    description:
      "Start building websites people remember with Waysel's collection of components, techniques, tricks and tutorials. Your personal toolbox for web development.",
    images: [
      {
        url: "/waysellogo.svg",
        width: 1200,
        height: 630,
        alt: "Waysel Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waysel - Web Development Components & Resources",
    description:
      "Start building websites people remember with Waysel's collection of components, techniques, tricks and tutorials.",
    images: ["/waysellogo.svg"],
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
        <link rel="icon" href="/icons/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body suppressHydrationWarning className={` ${satoshi.variable} font-satoshi antialiased`}>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />

        <div id="root">{children}</div>
      </body>
    </html>
  );
}
