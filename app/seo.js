export const siteConfig = {
  name: 'White Belt Jiu Jitsu Pula',
  shortName: 'White Belt BJJ',
  description:
    'White Belt Jiu Jitsu je BJJ klub u Puli za početnike i rekreativce. Treninzi Brazilian Jiu Jitsua održavaju se na adresi Šijanska cesta 1a.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://whitebeltbjjpula.com'),
  email: 'whitebeltbjj.pula@gmail.com',
  phone: '+385995096936',
  address: {
    streetAddress: 'Šijanska cesta 1a',
    addressLocality: 'Pula',
    addressRegion: 'Istarska županija',
    postalCode: '52100',
    addressCountry: 'HR',
  },
  keywords: [
    'BJJ Pula',
    'Brazilian Jiu Jitsu Pula',
    'Jiu Jitsu Pula',
    'White Belt Jiu Jitsu',
    'White Belt BJJ',
    'grappling Pula',
    'borilački sportovi Pula',
    'jiu jitsu za početnike',
    'BJJ treninzi Pula',
  ],
}

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return new URL(normalizedPath, siteConfig.url).toString()
}

