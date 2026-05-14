import { Barlow_Condensed, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
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
  title: 'White Belt Jiu Jitsu',
  description: 'White Belt Jiu Jitsu stranica lokalnog jiu jitsu kluba u Puli.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="hr" className="scroll-smooth">
      <head>
        {process.env.NODE_ENV === 'development' ? (
          <Script
            src="https://unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        ) : null}
      </head>
      <body className={`${plusJakartaSans.variable} ${barlowCondensed.variable} bg-base text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
