import ContactPageClient from '../../components/contact/ContactPageClient'
import { absoluteUrl, siteConfig } from '../seo'

export const metadata = {
  title: 'Kontakt za BJJ treninge u Puli',
  description:
    'Kontaktiraj White Belt Jiu Jitsu Pula za BJJ treninge, termine Brazilian Ju Jitsu-a i prvi dolazak na adresu Šijanska cesta 1a, 52100 Pula.',
  keywords: [...siteConfig.keywords, 'kontakt White Belt Jiu Jitsu Pula', 'telefon BJJ Pula'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: 'Kontakt za BJJ treninge u Puli',
    description:
      'Javi se White Belt Jiu Jitsu klubu u Puli za informacije o treninzima, terminima i prvom dolasku na adresu Šijanska cesta 1a, 52100 Pula.',
    url: absoluteUrl('/contact'),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: 'Kontakt White Belt Jiu Jitsu Pula',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt za BJJ treninge u Puli',
    description:
      'Javi se White Belt Jiu Jitsu klubu u Puli za informacije o treninzima, terminima i prvom dolasku na adresu Šijanska cesta 1a, 52100 Pula.',
    images: [absoluteUrl(siteConfig.ogImage)],
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
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.socialLinks.instagram, siteConfig.socialLinks.youtube],
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    areaServed: siteConfig.city,
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
