export const metadata = {
  title: 'Enterprise Solutions & Software Development - TechiTech Solutions',
  description: 'Enterprise-grade software solutions and consulting services. Build scalable, secure enterprise applications with advanced architecture and infrastructure.',
  keywords: [
    'enterprise software development',
    'enterprise solutions',
    'business software',
    'enterprise applications',
    'scalable software',
    'enterprise consulting',
    'system integration',
    'enterprise architecture'
  ],
  openGraph: {
    title: 'Enterprise Solutions & Software Development - TechiTech Solutions',
    description: 'Enterprise-grade software solutions and consulting services. Build scalable, secure enterprise applications.',
    type: 'website',
    url: 'https://techitech.com/services/enterprise-solutions',
    images: [{
      url: '/images/services_page/enterprise-dev.svg',
      width: 800,
      height: 600,
      alt: 'Enterprise Solutions & Software Development'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Solutions & Software Development - TechiTech Solutions',
    description: 'Enterprise-grade software solutions and consulting services. Build scalable, secure enterprise applications.',
    images: ['/images/services_page/enterprise-dev.svg'],
  },
  alternates: {
    canonical: 'https://techitech.com/services/enterprise-solutions',
  },
};

export default function EnterpriseSolutionsLayout({ children }) {
  return children;
}