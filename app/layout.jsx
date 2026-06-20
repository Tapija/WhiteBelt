import { Barlow_Condensed, Inter } from 'next/font/google'
import Script from 'next/script'
import { absoluteUrl, siteConfig } from './seo'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  manifest: '/manifest.webmanifest',
  title: {
    default: 'White Belt Jiu Jitsu Pula | BJJ treninzi u Puli',
    template: '%s | White Belt Jiu Jitsu Pula',
  },
  description: siteConfig.description,
  category: siteConfig.category,
  classification: 'Sports club',
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'White Belt Jiu Jitsu Pula | BJJ treninzi u Puli',
    description: siteConfig.description,
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
    title: 'White Belt Jiu Jitsu Pula | BJJ treninzi u Puli',
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: siteConfig.themeColor,
}

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.language} className="scroll-smooth">
      <head>
        {process.env.NODE_ENV === 'development' ? (
          <Script
            src="https://unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        ) : null}
      </head>
      <body className={`${inter.variable} ${barlowCondensed.variable} bg-base text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
