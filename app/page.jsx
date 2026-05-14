import HomePageClient from '../components/landing/HomePageClient'
import { absoluteUrl, siteConfig } from './seo'

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
  sport: ['Brazilian Jiu Jitsu', 'BJJ', 'Jiu Jitsu', 'Grappling'],
  knowsAbout: ['BJJ treninzi', 'Brazilian Jiu Jitsu za početnike', 'Grappling', 'Borilački sportovi'],
  address: {
    '@type': 'PostalAddress',
    ...siteConfig.address,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Pula',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Istra',
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
