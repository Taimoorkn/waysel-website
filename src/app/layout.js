// src/app/layout.js
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/animations.css";

import StructuredData, { organizationSchema, websiteSchema } from "../components/StructuredData";
const hurme = localFont({
  src: [
    { path: "../../public/font/hurme/HurmeGeometricSans1-Regular.ttf", weight: "400" },
    { path: "../../public/font/hurme/HurmeGeometricSans1-SemiBold.ttf", weight: "500" },
    { path: "../../public/font/hurme/HurmeGeometricSans1-Bold.ttf", weight: "700" },
  ],
  variable: "--font-hurme",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const neueMontreal = localFont({
  src: [
    { path: "../../public/font/neue-montreal/ppneuemontreal-book.otf", weight: "400" },
    { path: "../../public/font/neue-montreal/ppneuemontreal-medium.otf", weight: "500" },
    { path: "../../public/font/neue-montreal/NeueMontreal-Bold.otf", weight: "700" },
  ],
  variable: "--font-neueMontreal",
  display: "swap",
});

const rmMono = localFont({
  src: [
    { path: "../../public/font/rm-mono/RMMono-Regular.woff2", weight: "400" },
    { path: "../../public/font/rm-mono/RMMono-SemiBold.woff2", weight: "600" },
    { path: "../../public/font/rm-mono/RMMono-Black.woff2", weight: "900" },
  ],
  variable: "--font-rmMono",
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
      <body
        suppressHydrationWarning
        className={`bg-black ${robotoMono.variable} ${neueMontreal.variable} ${rmMono.variable} ${hurme.variable} antialiased`}
      >
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />

        <div id="root">{children}</div>
      </body>
    </html>
  );
}
