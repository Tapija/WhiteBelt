import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageProvider'
import { ArrowIcon } from './icons'

export default function HeroSection({ wordmarkImage, heroImage }) {
  const { copy } = useLanguage()

  return (
    <section className="relative flex min-h-[100dvh] items-center" id="top">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-32 sm:px-8 md:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] md:px-12 md:pb-24 md:pt-36 lg:gap-20 lg:px-16">
        <div className="max-w-2xl self-center">
          <h1 className="sr-only">{copy.hero.title}</h1>
          <img src={wordmarkImage.src} alt={copy.hero.wordmarkAlt} className="w-full max-w-[25rem] md:max-w-[29rem]" />
          <p className="mb-6 mt-1 text-xl font-medium tracking-[0.38em] text-zinc-300 md:text-[2rem]">
            Jiu Jitsu
          </p>
          <div className="mb-8 h-px w-20 bg-white/80" />
          <p className="max-w-[34rem] text-lg leading-relaxed text-zinc-400 md:text-xl">
            {copy.hero.body}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#offers"
              className="group relative inline-flex min-h-14 items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-sm font-bold tracking-[0.22em] text-black transition-all duration-700 ease-premium hover:-translate-y-px hover:bg-zinc-100 active:scale-[0.98] sm:justify-between"
            >
              <span>{copy.hero.apply}</span>
              <span className="absolute right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-700 ease-premium group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 sm:static sm:ml-4">
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </Link>
            <a
              href="#club"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white bg-white px-7 py-3 text-sm font-bold tracking-[0.2em] text-black transition-all duration-500 ease-premium hover:-translate-y-px hover:bg-zinc-100 active:scale-[0.98]"
            >
              {copy.hero.discover}
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-end md:-mr-6 lg:-mr-10">
          <div className="absolute right-10 top-8 hidden h-56 w-56 rounded-full bg-white/5 blur-3xl md:block" />
          <div className="relative w-full max-w-2xl">
            <img
              src={heroImage.src}
              alt={copy.hero.imageAlt}
              className="w-full scale-[1.08] object-contain grayscale transition duration-700 ease-premium hover:scale-[1.11]"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 52%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 52%, transparent 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
