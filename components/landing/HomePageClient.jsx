'use client'

import { useState } from 'react'
import heroImage from '../../WBHero3.png'
import promoPic3 from '../../promopic4.JPG'
import promoPic1 from '../../promopic1.jpeg'
import promoPic2 from '../../promopic2.jpeg'
import promoPic4 from '../../2fa7fdd6-de06-47c8-a43e-3f5e3d816310.JPG'
import wordmarkImage from '../../WB-NegativNoTM.png'
import brandLogo from '../../Logo A-Negativ.png'
import AboutSection from './AboutSection'
import ClassesSection from './ClassesSection'
import CtaSection from './CtaSection'
import Footer from './Footer'
import HeroSection from './HeroSection'
import ImageLightbox from './ImageLightbox'
import SiteHeader from './SiteHeader'
import TrainerSection from './TrainerSection'

const schedule = [
  ['Ponedjeljak', '18:00 – 19:00'],
  ['Srijeda', '18:00 – 19:00'],
  ['Petak', '18:00 – 19:00'],
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
          <TrainerSection />
          <ClassesSection
            brandLogo={brandLogo}
            promoPic1={promoPic1}
            promoPic2={promoPic2}
            promoPic3={promoPic3}
            promoPic4={promoPic4}
            onOpenImage={setActiveImage}
          />
          <AboutSection schedule={schedule} />
          <CtaSection />
        </main>

        <Footer />
        <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
      </div>
    </div>
  )
}
