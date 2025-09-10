export const metadata = {
  title: 'Cloud Integration Services - TechiTech Solutions',
  description: 'Professional cloud integration and migration services. AWS, Azure, Google Cloud solutions with DevOps, CI/CD, and serverless architecture.',
  keywords: [
    'cloud integration',
    'cloud migration',
    'AWS services',
    'Azure cloud',
    'Google Cloud Platform',
    'DevOps services',
    'CI/CD pipelines',
    'serverless architecture',
    'cloud infrastructure'
  ],
  openGraph: {
    title: 'Cloud Integration Services - TechiTech Solutions',
    description: 'Professional cloud integration and migration services. AWS, Azure, Google Cloud solutions with DevOps and CI/CD.',
    type: 'website',
    url: 'https://techitech.com/services/cloud-integration',
    images: [{
      url: '/images/services_page/cloud-dev.svg',
      width: 800,
      height: 600,
      alt: 'Cloud Integration Services'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Integration Services - TechiTech Solutions',
    description: 'Professional cloud integration and migration services. AWS, Azure, Google Cloud solutions with DevOps and CI/CD.',
    images: ['/images/services_page/cloud-dev.svg'],
  },
  alternates: {
    canonical: 'https://techitech.com/services/cloud-integration',
  },
};

export default function CloudIntegrationLayout({ children }) {
  return children;
}