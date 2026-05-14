import ContactPageClient from '../../components/contact/ContactPageClient'
import { absoluteUrl, siteConfig } from '../seo'

export const metadata = {
  title: 'Kontakt za BJJ treninge u Puli',
  description:
    'Kontaktiraj White Belt Jiu Jitsu Pula za BJJ treninge, termine Brazilian Jiu Jitsua i prvi dolazak na Šijanskoj cesti 1a u Puli.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Kontakt za BJJ treninge u Puli',
    description:
      'Javi se White Belt Jiu Jitsu klubu u Puli za informacije o treninzima, terminima i prvom dolasku.',
    url: absoluteUrl('/contact'),
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Kontakt White Belt Jiu Jitsu Pula',
      },
    ],
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontakt White Belt Jiu Jitsu Pula',
  url: absoluteUrl('/contact'),
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': absoluteUrl('/#white-belt-bjj'),
    name: siteConfig.name,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <ContactPageClient />
    </>
  )
}
