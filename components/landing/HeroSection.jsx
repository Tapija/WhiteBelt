import Link from 'next/link'
import { ArrowIcon } from './icons'

export default function HeroSection({ wordmarkImage, heroImage }) {
  return (
    <section className="relative flex min-h-[100dvh] items-center" id="top">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-32 sm:px-8 md:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] md:px-12 md:pb-24 md:pt-36 lg:gap-20 lg:px-16">
        <div className="max-w-2xl self-center">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-300">
            BJJ i Brazilian Jiu Jitsu u Puli
          </div>
          <img src={wordmarkImage.src} alt="White Belt" className="w-full max-w-[25rem] md:max-w-[29rem]" />
          <p className="mb-6 mt-1 text-xl font-medium tracking-[0.38em] text-zinc-300 md:text-[2rem]">
            Jiu Jitsu
          </p>
          <div className="mb-8 h-px w-20 bg-white/80" />
          <p className="max-w-[34rem] text-lg leading-relaxed text-zinc-400 md:text-xl">
            Lokalni BJJ klub u Puli za početnike i rekreativce — gradimo čvrste temelje, disciplinu i
            samopouzdanje koje ostaje na strunjači i izvan nje.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between rounded-full border border-white bg-white px-6 py-3 text-sm font-bold tracking-[0.22em] text-black transition-all duration-700 ease-premium hover:-translate-y-px hover:bg-zinc-100 active:scale-[0.98]"
            >
              <span>PRIJAVI SE</span>
              <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-700 ease-premium group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </Link>
            <a href="#trainer" className="pl-6 text-sm font-medium tracking-[0.2em] text-zinc-400 transition duration-500 ease-premium hover:text-white sm:pl-0">
              UPOZNAJ KLUB
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-end md:-mr-6 lg:-mr-10">
          <div className="absolute right-10 top-8 hidden h-56 w-56 rounded-full bg-white/5 blur-3xl md:block" />
          <div className="relative w-full max-w-2xl">
            <img
              src={heroImage.src}
              alt="Jiu Jitsu borci u sparingu"
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
