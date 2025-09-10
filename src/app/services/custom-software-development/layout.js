export const metadata = {
  title: 'Custom Software Development Services - TechiTech Solutions',
  description: 'Tailored custom software development solutions for businesses. Build scalable, enterprise-grade software applications designed for your specific needs.',
  keywords: [
    'custom software development',
    'bespoke software solutions',
    'enterprise software development',
    'tailored applications',
    'business software',
    'custom applications',
    'software consulting',
    'scalable software'
  ],
  openGraph: {
    title: 'Custom Software Development Services - TechiTech Solutions',
    description: 'Tailored custom software development solutions for businesses. Build scalable, enterprise-grade software applications.',
    type: 'website',
    url: 'https://techitech.com/services/custom-software-development',
    images: [{
      url: '/images/services_page/custom-dev.svg',
      width: 800,
      height: 600,
      alt: 'Custom Software Development Services'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Services - TechiTech Solutions',
    description: 'Tailored custom software development solutions for businesses. Build scalable, enterprise-grade software applications.',
    images: ['/images/services_page/custom-dev.svg'],
  },
  alternates: {
    canonical: 'https://techitech.com/services/custom-software-development',
  },
};

export default function CustomSoftwareDevelopmentLayout({ children }) {
  return children;
}