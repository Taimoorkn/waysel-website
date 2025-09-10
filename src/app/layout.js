// src/app/layout.js
import { Manrope, Roboto_Mono} from "next/font/google";
import localFont from "next/font/local";
import "./styles/globals.css";
import StructuredData, { organizationSchema, websiteSchema } from "../components/StructuredData";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

const clashGrotesk = localFont({
  src: [
    { path: "../../public/font/ClashGrotesk/ClashGrotesk-Regular.otf", weight: "400" },
    { path: "../../public/font/ClashGrotesk/ClashGrotesk-Medium.otf", weight: "500" },
    { path: "../../public/font/ClashGrotesk/ClashGrotesk-Semibold.otf", weight: "600" },
    { path: "../../public/font/ClashGrotesk/ClashGrotesk-Bold.otf", weight: "700" },
  ],
  variable: "--font-clashGrotesk",
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://techitech.com'),
  title: {
    default: "TechiTech Solutions - Software Development Company",
    template: "%s | TechiTech Solutions"
  },
  description: "Professional software development services including web development, mobile apps, custom software, and cloud solutions. Transform your business with our expert team.",
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
    "software company"
  ],
  authors: [{ name: "TechiTech Solutions" }],
  creator: "TechiTech Solutions",
  publisher: "TechiTech Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techitech.com',
    siteName: 'TechiTech Solutions',
    title: 'TechiTech Solutions - Software Development Company',
    description: 'Professional software development services including web development, mobile apps, custom software, and cloud solutions. Transform your business with our expert team.',
    images: [
      {
        url: '/images/TechiTechLogo.svg',
        width: 1200,
        height: 630,
        alt: 'TechiTech Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechiTech Solutions - Software Development Company',
    description: 'Professional software development services including web development, mobile apps, custom software, and cloud solutions.',
    images: ['/images/TechiTechLogo.svg'],
    creator: '@techitech',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://techitech.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body suppressHydrationWarning className={`pt-[3.5rem] xl:pt-[4.5rem] ${clashGrotesk.variable} ${manrope.variable} ${robotoMono.variable} antialiased`}>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}