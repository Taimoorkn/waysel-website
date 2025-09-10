export const metadata = {
  title: "E-Commerce Development Services - TechiTech Solutions",
  description:
    "Professional e-commerce development services including Shopify, WooCommerce, and custom online stores. Build scalable, secure e-commerce platforms.",
  keywords: [
    "ecommerce development",
    "online store development",
    "shopify development",
    "woocommerce development",
    "custom ecommerce",
    "online shopping platforms",
    "e-commerce solutions",
    "retail technology",
  ],
  openGraph: {
    title: "E-Commerce Development Services - TechiTech Solutions",
    description:
      "Professional e-commerce development services including Shopify, WooCommerce, and custom online stores.",
    type: "website",
    url: "https://techitech.com/services/ecommerce-development",
    images: [
      {
        url: "/images/services_page/ecommerce-dev.svg",
        width: 800,
        height: 600,
        alt: "E-Commerce Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Services - TechiTech Solutions",
    description:
      "Professional e-commerce development services including Shopify, WooCommerce, and custom online stores.",
    images: ["/images/services_page/ecommerce-dev.svg"],
  },
  alternates: {
    canonical: "https://techitech.com/services/ecommerce-development",
  },
};

export default function EcommerceDevelopmentLayout({ children }) {
  return children;
}
