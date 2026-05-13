'use client'

import { useState } from 'react'
import heroImage from '../../WBHero3.png'
import promoPic1 from '../../promopic1.jpeg'
import promoPic2 from '../../promopic2.jpeg'
import wordmarkImage from '../../WB-NegativNoTM.png'
import brandLogo from '../../Logo A-Negativ.png'
import AboutSection from './AboutSection'
import ClassesSection from './ClassesSection'
import CtaSection from './CtaSection'
import Footer from './Footer'
import HeroSection from './HeroSection'
import ImageLightbox from './ImageLightbox'
import SiteHeader from './SiteHeader'

const schedule = [
  ['Monday', '6:00 PM / 7:00 PM'],
  ['Wednesday', '6:00 PM / 7:00 PM'],
  ['Friday', '6:00 PM / 7:00 PM'],
]

export default function HomePageClient() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <div className="min-h-[100dvh] bg-base font-sans text-white antialiased selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.05),transparent_18%),linear-gradient(180deg,#050505_0%,#090909_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(white_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <div className="relative overflow-x-hidden">
        <SiteHeader brandLogo={brandLogo} />

        <main className="w-full max-w-full overflow-x-hidden">
          <HeroSection wordmarkImage={wordmarkImage} heroImage={heroImage} />
          <AboutSection schedule={schedule} />
          <ClassesSection
            brandLogo={brandLogo}
            promoPic1={promoPic1}
            promoPic2={promoPic2}
            onOpenImage={setActiveImage}
          />
          <CtaSection />
        </main>

        <Footer />
        <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
      </div>
    </div>
  )
}
