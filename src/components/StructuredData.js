export default function StructuredData({ data }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Waysel",
  url: "https://waysel.com",
  logo: "https://waysel.com/waysellogo.svg",
  description:
    "Start building websites people remember with Waysel's collection of components, techniques, tricks and tutorials. Your personal toolbox for web development.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://linkedin.com/company/waysel",
    "https://twitter.com/waysel",
    "https://github.com/waysel",
  ],
  foundingDate: "2024",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Components",
        description: "Ready-to-use web development components",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Development Resources",
        description: "Tools, tutorials, and documentation for web developers",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Design System",
        description: "Complete design system for building memorable websites",
      },
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Waysel",
  url: "https://waysel.com",
  description:
    "Start building websites people remember with Waysel's collection of components, techniques, tricks and tutorials.",
  publisher: {
    "@type": "Organization",
    name: "Waysel",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://waysel.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Waysel",
    url: "https://waysel.com",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: service.name,
    itemListElement:
      service.features?.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })) || [],
  },
});

export const articleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    "@type": "Organization",
    name: "Waysel",
  },
  publisher: {
    "@type": "Organization",
    name: "Waysel",
    logo: {
      "@type": "ImageObject",
      url: "https://waysel.com/waysellogo.svg",
    },
  },
});
