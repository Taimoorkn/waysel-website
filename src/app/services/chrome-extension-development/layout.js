export const metadata = {
  title: 'Chrome Extension Development Services - TechiTech Solutions',
  description: 'Professional Chrome browser extension development services. Build custom extensions for productivity, automation, ecommerce, and business solutions.',
  keywords: [
    'chrome extension development',
    'browser extension development',
    'chrome extensions',
    'browser automation',
    'productivity extensions',
    'ecommerce extensions',
    'business extensions',
    'custom extensions'
  ],
  openGraph: {
    title: 'Chrome Extension Development Services - TechiTech Solutions',
    description: 'Professional Chrome browser extension development services. Build custom extensions for productivity, automation, and business.',
    type: 'website',
    url: 'https://techitech.com/services/chrome-extension-development',
    images: [{
      url: '/images/services_page/chrome/chrome-extension-dev.svg',
      width: 800,
      height: 600,
      alt: 'Chrome Extension Development Services'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chrome Extension Development Services - TechiTech Solutions',
    description: 'Professional Chrome browser extension development services. Build custom extensions for productivity, automation, and business.',
    images: ['/images/services_page/chrome/chrome-extension-dev.svg'],
  },
  alternates: {
    canonical: 'https://techitech.com/services/chrome-extension-development',
  },
};

export default function ChromeExtensionDevelopmentLayout({ children }) {
  return children;
}