import Link from 'next/link'
import { ArrowIcon } from './icons'

export default function CtaSection() {
  return (
    <section className="px-4 pb-24 sm:px-8 md:px-12 md:pb-32 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5 md:flex-row md:items-end md:justify-between">
        <div className="rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950/90 p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] md:flex-1 md:p-12">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-300">
            Disciplina / Fokus / Napredak
          </div>
          <h2 className="max-w-3xl font-display text-[clamp(2.75rem,6vw,5rem)] uppercase leading-[0.92] tracking-[0.03em] text-white">
            Treniraj s nama i postani najsnažnija verzija sebe.
          </h2>
         
        </div>
        <div className="px-6 pb-6 md:px-8 md:pb-8">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-between rounded-full border border-white bg-white px-6 py-3 text-sm font-bold tracking-[0.22em] text-black transition-all duration-700 ease-premium hover:-translate-y-px hover:bg-zinc-100 active:scale-[0.98]"
          >
            <span>KONTAKTIRAJ NAS</span>
            <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-700 ease-premium group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
              <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
