import { Barlow_Condensed, Plus_Jakarta_Sans } from 'next/font/google'
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
  description: 'White Belt Jiu Jitsu landing page for a local martial arts club.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} ${barlowCondensed.variable} bg-base text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
