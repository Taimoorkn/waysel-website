export const metadata = {
  title: 'Mobile App Development Services - TechiTech Solutions',
  description: 'Professional mobile app development for iOS and Android. Build native and cross-platform mobile applications with expert developers.',
  keywords: [
    'mobile app development',
    'iOS development',
    'android development',
    'cross platform development',
    'mobile applications',
    'react native',
    'flutter development',
    'native mobile apps'
  ],
  openGraph: {
    title: 'Mobile App Development Services - TechiTech Solutions',
    description: 'Professional mobile app development for iOS and Android. Build native and cross-platform mobile applications with expert developers.',
    type: 'website',
    url: 'https://techitech.com/services/mobile-development',
    images: [{
      url: '/images/services_page/mobile-dev.svg',
      width: 800,
      height: 600,
      alt: 'Mobile App Development Services'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Services - TechiTech Solutions',
    description: 'Professional mobile app development for iOS and Android. Build native and cross-platform mobile applications.',
    images: ['/images/services_page/mobile-dev.svg'],
  },
  alternates: {
    canonical: 'https://techitech.com/services/mobile-development',
  },
};

export default function MobileDevelopmentLayout({ children }) {
  return children;
}