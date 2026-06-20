export const siteConfig = {
  name: 'White Belt Jiu Jitsu Pula',
  shortName: 'White Belt BJJ',
  locale: 'hr_HR',
  language: 'hr',
  category: 'sports',
  themeColor: '#050505',
  description:
    'White Belt Jiu Jitsu Pula je BJJ klub u Puli za početnike, rekreativce i iskusne vježbače. Treninzi Brazilian Ju Jitsu-a održavaju se na adresi Šijanska cesta 1a, 52100 Pula.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://whitebeltbjjpula.com'),
  email: 'whitebeltbjj.pula@gmail.com',
  phone: '+385995096936',
  city: 'Pula',
  region: 'Istarska županija',
  country: 'Hrvatska',
  address: {
    streetAddress: 'Šijanska cesta 1a',
    addressLocality: 'Pula',
    addressRegion: 'Istarska županija',
    postalCode: '52100',
    addressCountry: 'HR',
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/whitebeltbjjpula?igsh=MWk1djJwbGs3azI0eA==',
    youtube: 'https://youtube.com/@jjkwhitebelt?si=9snu-6M1f7cR4tTw',
  },
  keywords: [
    'BJJ Pula',
    'BJJ klub Pula',
    'Brazilian Jiu Jitsu Pula',
    'Brazilian Jiu Jitsu treninzi Pula',
    'Jiu Jitsu Pula',
    'White Belt Jiu Jitsu',
    'White Belt BJJ',
    'grappling Pula',
    'grappling Istra',
    'borilački sportovi Pula',
    'jiu jitsu za početnike',
    'BJJ treninzi Pula',
    'rekreativni BJJ Pula',
  ],
  ogImage: '/og-image.png',
}

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return new URL(normalizedPath, siteConfig.url).toString()
}

