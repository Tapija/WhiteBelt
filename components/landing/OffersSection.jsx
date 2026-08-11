import { useLanguage } from '../i18n/LanguageProvider'
import { ArrowIcon, LinktreeIcon } from './icons'

const linktreeUrl = 'https://linktr.ee/whitebeltbjj.pula'

const offerLayouts = [
  'sm:col-span-4 sm:row-span-2',
  'sm:col-span-2 sm:row-span-3',
  'sm:col-span-4 sm:row-span-2',
  'sm:col-span-2 sm:row-span-1',
  'sm:col-span-6 sm:row-span-2',
]

export default function OffersSection() {
  const { copy } = useLanguage()

  return (
    <section
      className="scroll-mt-28 px-4 pb-20 pt-8 sm:px-8 md:px-12 md:pb-28 md:pt-14 lg:px-16"
      id="offers"
      aria-labelledby="offers-title"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[minmax(19rem,0.78fr)_minmax(0,1.22fr)]">
        <div className="flex flex-col justify-between border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
              {copy.offers.label}
            </p>
            <h2
              id="offers-title"
              className="mt-5 max-w-xl text-balance font-display text-[clamp(3rem,5.6vw,5.5rem)] uppercase leading-[0.94] tracking-[0.025em] text-white"
            >
              {copy.offers.title}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">{copy.offers.body}</p>
          </div>

          <div className="mt-12 rounded-[1.75rem] border border-white/10 bg-white p-2 text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            <div className="flex items-center gap-4 px-4 py-4 sm:px-5 sm:py-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                <LinktreeIcon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <span className="block text-[9px] font-bold uppercase tracking-[0.28em] text-zinc-400">Linktree</span>
                <p className="mt-1 text-sm font-bold uppercase leading-snug tracking-[0.13em] text-zinc-950 sm:text-base">
                  {copy.offers.linktreeLabel}
                </p>
              </div>
            </div>
            <a
              href={linktreeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${copy.offers.cta}. ${copy.offers.externalHint}`}
              className="group flex min-h-14 items-center justify-between rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold tracking-[0.2em] text-white transition duration-500 ease-premium hover:-translate-y-px hover:bg-zinc-800 active:scale-[0.98]"
            >
              <span>{copy.offers.cta}</span>
              <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-zinc-950 transition duration-500 ease-premium group-hover:translate-x-1">
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>

        <div className="grid gap-3 p-3 sm:grid-flow-dense sm:grid-cols-6 sm:grid-rows-[repeat(6,minmax(4.5rem,auto))] sm:p-4">
          {copy.offers.items.map((item, index) => (
            <article
              key={item.number}
              className={`group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/80 p-6 !text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-700 ease-premium hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055] active:scale-[0.99] sm:p-7 ${offerLayouts[index]}`}
            >
              <span
                className={`pointer-events-none absolute right-5 top-4 select-none text-right font-display font-semibold leading-[0.82] !text-white opacity-[0.045] transition duration-700 ease-premium group-hover:-translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-[0.085] ${
                  index === 1 || index === 3 ? 'text-[4.75rem] sm:text-[5.25rem]' : 'text-[5rem] sm:text-[6.25rem]'
                }`}
                aria-hidden="true"
              >
                {item.number}
              </span>

              <div className="relative flex items-center gap-3">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-white/15 px-2 text-[10px] font-bold tracking-[0.12em] !text-white">
                  {item.number}
                </span>
                <span className="h-px flex-1 bg-white/10 transition duration-700 ease-premium group-hover:bg-white/25" aria-hidden="true" />
              </div>

              <div className="relative mt-8">
                <h3
                  className={`font-display font-semibold uppercase leading-none tracking-[0.06em] !text-white ${
                    index === 0 || index === 4 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 !text-white/70 sm:text-[0.95rem]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
