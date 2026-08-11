import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageProvider'
import { ArrowIcon, ClockIcon, LocationIcon } from './icons'

export default function TrainingDetailsSection({ schedule }) {
  const { copy } = useLanguage()

  return (
    <section className="scroll-mt-28 px-4 pb-20 pt-6 sm:px-8 md:px-12 md:pb-28 md:pt-10 lg:px-16" id="training">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex items-end justify-between gap-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">{copy.training.label}</p>
            <h2 className="mt-3 font-display text-[clamp(2.8rem,5vw,5rem)] uppercase leading-[0.9] tracking-[0.03em] text-white">
              {copy.training.title}
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)]">
          <article className="rounded-[2rem] border border-white/10 bg-zinc-950/90 p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] sm:p-9">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white">
                <ClockIcon />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">{copy.training.frequency}</p>
                <h3 className="mt-1 text-sm font-bold tracking-[0.22em] text-white">{copy.training.scheduleTitle}</h3>
              </div>
            </div>

            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {schedule.map((item) => (
                <div key={item.day} className="grid grid-cols-[1fr_auto] items-center gap-5 py-5 sm:grid-cols-[1fr_auto_auto]">
                  <span className="text-base font-medium text-zinc-200 sm:text-lg">{item.day}</span>
                  <span className="hidden text-sm tabular-nums text-zinc-400 sm:block">{item.time}</span>
                  <span className="inline-grid min-w-24 grid-cols-[2.25rem_auto] items-center justify-self-end border-l border-white/10 pl-4 text-left sm:min-w-28 sm:pl-5">
                    <span className="text-[1.75rem] leading-none" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.16em] text-zinc-200">{item.format}</span>
                  </span>
                  <span className="col-span-2 text-sm tabular-nums text-zinc-400 sm:hidden">{item.time}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-5">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white">
                  <LocationIcon />
                </div>
                <h3 className="text-sm font-bold tracking-[0.22em] text-white">{copy.training.location}</h3>
              </div>
              <p className="mt-7 text-base leading-8 text-zinc-400">
                {copy.training.locationIntro}
                <br />
                Šijanska cesta 1a
                <br />
                52100 Pula
              </p>
            </article>

            <article className="flex flex-col justify-between gap-7 rounded-[2rem] border border-white/10 bg-white p-7 text-black sm:flex-row sm:items-center sm:p-8 lg:flex-col lg:items-start">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">{copy.training.firstTraining}</p>
                <p className="mt-3 max-w-sm font-display text-3xl uppercase leading-[0.95] tracking-[0.03em]">
                  {copy.training.question}
                  <span className="block sm:ml-2 sm:inline">{copy.training.answer}</span>
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-bold tracking-[0.18em] text-white transition duration-500 ease-premium hover:-translate-y-px hover:bg-zinc-800 active:scale-[0.98]"
              >
                {copy.training.contact}
                <ArrowIcon />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
