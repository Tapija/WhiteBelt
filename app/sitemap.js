import { absoluteUrl } from './seo'

export default function sitemap() {
  const lastModified = new Date()

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/contact'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

