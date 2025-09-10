export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechiTech Solutions",
  "url": "https://techitech.com",
  "logo": "https://techitech.com/images/TechiTechLogo.svg",
  "description": "Professional software development services including web development, mobile apps, custom software, and cloud solutions.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Austin, Texas",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "Customer Service",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://linkedin.com/company/techitech-solutions",
    "https://twitter.com/techitech",
    "https://github.com/techitech"
  ],
  "foundingDate": "2020",
  "employees": {
    "@type": "QuantitativeValue",
    "value": "10-50"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web Development",
        "description": "Custom web development services"
      }
    },
    {
      "@type": "Offer", 
      "itemOffered": {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "iOS and Android app development"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service", 
        "name": "Custom Software Development",
        "description": "Tailored software solutions"
      }
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TechiTech Solutions",
  "url": "https://techitech.com",
  "description": "Professional software development company offering web development, mobile apps, and custom solutions.",
  "publisher": {
    "@type": "Organization",
    "name": "TechiTech Solutions"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://techitech.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "TechiTech Solutions",
    "url": "https://techitech.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": service.name,
    "itemListElement": service.features?.map((feature, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": feature
      }
    })) || []
  }
});

export const articleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Organization",
    "name": "TechiTech Solutions"
  },
  "publisher": {
    "@type": "Organization", 
    "name": "TechiTech Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://techitech.com/images/TechiTechLogo.svg"
    }
  }
});