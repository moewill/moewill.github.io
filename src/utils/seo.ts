import { Metadata } from 'next';

// Base SEO configuration
export const baseSEO = {
  siteName: 'Maurice Rashad Tech Services',
  siteUrl: 'https://moewill.github.io',
  defaultTitle: 'Maurice Rashad Tech Services - Strategic Technology Leadership',
  defaultDescription: 'Strategic technology consulting, implementation, and training services for sophisticated SMB leaders. Transform your business through proven technology solutions.',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@mauricerashad',
  linkedInProfile: 'https://linkedin.com/in/mauricerashad',
};

// Generate metadata for pages
export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}): Metadata {
  const metaTitle = title ? `${title} | ${baseSEO.siteName}` : baseSEO.defaultTitle;
  const metaDescription = description || baseSEO.defaultDescription;
  const metaImage = image || baseSEO.defaultImage;
  const metaUrl = url ? `${baseSEO.siteUrl}${url}` : baseSEO.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    applicationName: baseSEO.siteName,
    authors: [{ name: 'Maurice Rashad', url: baseSEO.siteUrl }],
    creator: 'Maurice Rashad',
    publisher: 'Maurice Rashad Tech Services',
    keywords: [
      'technology consulting',
      'strategic consulting',
      'digital transformation',
      'SMB technology solutions',
      'AI implementation',
      'technical leadership',
      'software development',
      'cloud computing',
      'business automation',
      'technology training',
    ],
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      type,
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: baseSEO.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: title || baseSEO.defaultTitle,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: baseSEO.twitterHandle,
      site: baseSEO.twitterHandle,
    },
    alternates: {
      canonical: metaUrl,
    },
    other: {
      'linkedin:owner': baseSEO.linkedInProfile,
    },
  };
}

// Structured data schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseSEO.siteUrl}#organization`,
  name: baseSEO.siteName,
  url: baseSEO.siteUrl,
  logo: `${baseSEO.siteUrl}/images/logo.png`,
  description: baseSEO.defaultDescription,
  founder: {
    '@type': 'Person',
    name: 'Maurice Rashad',
    jobTitle: 'Principal Technology Consultant',
    url: `${baseSEO.siteUrl}/about`,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@mauricerashad.com',
    url: `${baseSEO.siteUrl}/contact`,
  },
  sameAs: [
    baseSEO.linkedInProfile,
    'https://github.com/mauricerashad',
    'https://twitter.com/mauricerashad',
  ],
  areaServed: {
    '@type': 'Place',
    name: 'United States',
  },
  serviceArea: {
    '@type': 'Place',
    name: 'Worldwide',
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${baseSEO.siteUrl}/about#person`,
  name: 'Maurice Rashad',
  givenName: 'Maurice',
  familyName: 'Rashad',
  url: `${baseSEO.siteUrl}/about`,
  image: `${baseSEO.siteUrl}/images/maurice-rashad.jpg`,
  jobTitle: 'Principal Technology Consultant',
  worksFor: {
    '@type': 'Organization',
    name: baseSEO.siteName,
    url: baseSEO.siteUrl,
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Technology University',
  },
  knowsAbout: [
    'Strategic Technology Consulting',
    'Digital Transformation',
    'Software Development',
    'Cloud Computing',
    'AI Implementation',
    'Business Process Automation',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Technology Consultant',
    occupationLocation: {
      '@type': 'Place',
      name: 'United States',
    },
    skills: [
      'Strategic Planning',
      'Technology Leadership',
      'Software Architecture',
      'Project Management',
      'Business Analysis',
    ],
  },
  sameAs: [
    baseSEO.linkedInProfile,
    'https://github.com/mauricerashad',
    'https://twitter.com/mauricerashad',
  ],
};

export const serviceSchema = (service: {
  name: string;
  description: string;
  price?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${baseSEO.siteUrl}${service.url}#service`,
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    '@id': `${baseSEO.siteUrl}#organization`,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Technology Consulting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        ...(service.price && {
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: service.price,
            priceCurrency: 'USD',
          },
        }),
      },
    ],
  },
  url: `${baseSEO.siteUrl}${service.url}`,
});

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseSEO.siteUrl}#website`,
  url: baseSEO.siteUrl,
  name: baseSEO.siteName,
  description: baseSEO.defaultDescription,
  publisher: {
    '@type': 'Organization',
    '@id': `${baseSEO.siteUrl}#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseSEO.siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  mainEntity: {
    '@type': 'Organization',
    '@id': `${baseSEO.siteUrl}#organization`,
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${baseSEO.siteUrl}${item.url}`,
  })),
});

// FAQ Schema
export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Review/Rating Schema
export const reviewSchema = (reviews: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseSEO.siteUrl}#organization`,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
    reviewCount: reviews.length,
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  })),
});

// Generate JSON-LD script tag
export function generateJsonLd(schema: object | object[]) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];
  return {
    __html: JSON.stringify(schemaArray.length === 1 ? schemaArray[0] : schemaArray),
  };
}