import HomePageClient from '../components/landing/HomePageClient'
import { absoluteUrl, siteConfig } from './seo'

export const metadata = {
  title: 'BJJ treninzi u Puli za početnike i rekreativce',
  description:
    'White Belt Jiu Jitsu Pula je lokalni BJJ klub na adresi Šijanska cesta 1a, 52100 Pula, za početnike, rekreativce i sve koji žele kvalitetne Brazilian Jiu Jitsu treninge.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: 'BJJ treninzi u Puli za početnike i rekreativce',
    description:
      'White Belt Jiu Jitsu Pula je lokalni BJJ klub na adresi Šijanska cesta 1a, 52100 Pula, za početnike, rekreativce i sve koji žele kvalitetne Brazilian Jiu Jitsu treninge.',
    url: absoluteUrl('/'),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: 'White Belt Jiu Jitsu Pula',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BJJ treninzi u Puli za početnike i rekreativce',
    description:
      'White Belt Jiu Jitsu Pula je lokalni BJJ klub na adresi Šijanska cesta 1a, 52100 Pula, za početnike, rekreativce i sve koji žele kvalitetne Brazilian Jiu Jitsu treninge.',
    images: [absoluteUrl(siteConfig.ogImage)],
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['SportsActivityLocation', 'ExerciseGym', 'LocalBusiness'],
  '@id': absoluteUrl('/#white-belt-bjj'),
  name: siteConfig.name,
  alternateName: ['White Belt BJJ', 'White Belt Jiu Jitsu'],
  description: siteConfig.description,
  url: siteConfig.url,
  logo: absoluteUrl('/icon.png'),
  image: absoluteUrl('/og-image.png'),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  priceRange: '$$',
  sameAs: [siteConfig.socialLinks.instagram, siteConfig.socialLinks.youtube],
  sport: ['Brazilian Jiu Jitsu', 'BJJ', 'Jiu Jitsu', 'Grappling'],
  knowsAbout: ['BJJ treninzi', 'Brazilian Jiu Jitsu za početnike', 'Grappling', 'Borilački sportovi'],
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: 'HR',
      availableLanguage: ['hr'],
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: siteConfig.city,
    },
    {
      '@type': 'AdministrativeArea',
      name: siteConfig.region,
    },
    {
      '@type': 'Country',
      name: siteConfig.country,
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Monday',
      opens: '18:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Wednesday',
      opens: '18:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '18:00',
      closes: '19:00',
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HomePageClient />
    </>
  )
}
