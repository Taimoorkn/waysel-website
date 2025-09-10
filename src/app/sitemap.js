export default function sitemap() {
 const baseUrl = 'https://techitech.com'
 
 // Static routes
 const routes = [
 {
 url: baseUrl,
 lastModified: new Date(),
 changeFrequency: 'monthly',
 priority: 1,
 },
 {
 url: `${baseUrl}/about`,
 lastModified: new Date(),
 changeFrequency: 'monthly',
 priority: 0.8,
 },
 {
 url: `${baseUrl}/services`,
 lastModified: new Date(),
 changeFrequency: 'weekly',
 priority: 0.9,
 },
 {
 url: `${baseUrl}/portfolio`,
 lastModified: new Date(),
 changeFrequency: 'weekly',
 priority: 0.8,
 },
 {
 url: `${baseUrl}/contact`,
 lastModified: new Date(),
 changeFrequency: 'monthly',
 priority: 0.7,
 },
 {
 url: `${baseUrl}/appointment`,
 lastModified: new Date(),
 changeFrequency: 'monthly',
 priority: 0.6,
 }
 ]

 // Service pages
 const servicePages = [
 'web-development',
 'mobile-development',
 'custom-software-development',
 'ecommerce-development',
 'enterprise-solutions',
 'cloud-integration',
 'chrome-extension-development'
 ]

 const serviceRoutes = servicePages.map(service => ({
 url: `${baseUrl}/services/${service}`,
 lastModified: new Date(),
 changeFrequency: 'weekly',
 priority: 0.8,
 }))

 // Portfolio case studies
 const portfolioSlugs = ['nimvio', 'professionally'] // Add more as needed
 const portfolioRoutes = portfolioSlugs.map(slug => ({
 url: `${baseUrl}/portfolio/${slug}`,
 lastModified: new Date(),
 changeFrequency: 'monthly',
 priority: 0.7,
 }))

 return [...routes, ...serviceRoutes, ...portfolioRoutes]
}