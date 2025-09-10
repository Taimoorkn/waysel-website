export const metadata = {
 title: 'Web Development Services - TechiTech Solutions',
 description: 'Professional web development services including frontend, backend, full-stack development, and e-commerce solutions. Build responsive, scalable websites.',
 keywords: [
 'web development services',
 'frontend development',
 'backend development',
 'full stack development',
 'responsive web design',
 'ecommerce websites',
 'custom web applications'
 ],
 openGraph: {
 title: 'Web Development Services - TechiTech Solutions',
 description: 'Professional web development services including frontend, backend, full-stack development, and e-commerce solutions.',
 type: 'website',
 url: 'https://techitech.com/services/web-development',
 images: [{
 url: '/images/services_page/web-dev.svg',
 width: 800,
 height: 600,
 alt: 'Web Development Services'
 }],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Web Development Services - TechiTech Solutions',
 description: 'Professional web development services including frontend, backend, full-stack development, and e-commerce solutions.',
 images: ['/images/services_page/web-dev.svg'],
 },
 alternates: {
 canonical: 'https://techitech.com/services/web-development',
 },
};

export default function WebDevelopmentLayout({ children }) {
 return children;
}