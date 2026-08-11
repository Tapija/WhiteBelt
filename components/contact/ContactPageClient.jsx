'use client'

import brandLogo from '../../Logo A-Negativ.png'
import { LanguageProvider, useLanguage } from '../i18n/LanguageProvider'
import Footer from '../landing/Footer'
import SiteHeader from '../landing/SiteHeader'

const email = 'whitebeltbjj.pula@gmail.com'
const phone = '+385995096936'

function ContactPageContent() {
  const { copy } = useLanguage()
  const schedule = copy.training.days.map((day, index) => [
    day,
    '18:00 – 19:00',
    index === 1 ? '👕' : '🥋',
    index === 1 ? 'NoGi' : 'Gi',
  ])

  return (
    <div className="min-h-[100dvh] bg-canvas font-sans text-white antialiased selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.05),transparent_18%),linear-gradient(180deg,#050505_0%,#090909_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(white_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <div className="relative overflow-x-hidden">
        <SiteHeader brandLogo={brandLogo} homeHref="/" showSectionLinks={false} active="contact" />

        <main className="px-3 pb-20 pt-32 sm:px-8 md:px-12 md:pb-28 md:pt-36 lg:px-16">
          <div className="mx-auto grid max-w-7xl min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
            <section className="min-w-0 rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5">
              <div className="min-w-0 rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950/90 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-10">
                <div className="inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-300 sm:text-[10px] sm:tracking-[0.28em]">
                  {copy.contact.badge}
                </div>
                <h1 className="mt-5 max-w-full break-words font-display text-[clamp(2.65rem,14vw,5.5rem)] uppercase leading-[0.9] tracking-[0.03em] text-white sm:text-[clamp(3rem,7vw,5.5rem)]">
                  {copy.contact.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                  {copy.contact.body}
                </p>

                <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
                  
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500">{copy.contact.location}</p>
                    <p className="mt-2 text-lg leading-8 text-zinc-200">
                      Šijanska cesta 1a
                      <br />
                      52100 Pula
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500">{copy.contact.schedule}</p>
                    <div className="mt-3 divide-y divide-white/10 border-y border-white/10 text-zinc-200">
                      {schedule.map(([day, time, icon, format]) => (
                        <div key={day} className="flex items-center justify-between gap-4 py-3">
                          <span>
                            <span className="block text-base">{day}</span>
                            <span className="mt-1 block text-sm tabular-nums text-zinc-500">{time}</span>
                          </span>
                          <span className="inline-grid min-w-24 shrink-0 grid-cols-[2.25rem_auto] items-center border-l border-white/10 pl-3 text-left">
                            <span className="text-[1.75rem] leading-none" aria-hidden="true">
                              {icon}
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300">{format}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="min-w-0 rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5">
              <div className="flex min-h-full min-w-0 flex-col justify-between rounded-[calc(2rem-0.375rem)] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] sm:p-10">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">{copy.contact.directLabel}</p>
                  <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.75rem)] uppercase leading-[0.9] tracking-[0.03em] text-white">
                    {copy.contact.directTitle}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                    {copy.contact.directBody}
                  </p>
                </div>

                <div className="mt-10 grid gap-4">
                  <a
                    href={`mailto:${email}`}
                    className="group min-w-0 rounded-[1.25rem] border border-white/10 bg-zinc-950/80 p-4 transition duration-500 ease-premium hover:border-white/30 hover:bg-white/[0.06] sm:rounded-[1.5rem] sm:p-6"
                  >
                    <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">{copy.contact.email}</span>
                    <span className="mt-3 block break-all text-[0.95rem] tracking-[0.015em] text-zinc-100 transition duration-500 group-hover:text-white sm:break-words sm:text-2xl sm:tracking-[0.05em]">
                      {email}
                    </span>
                  </a>

                  <a
                    href={`tel:${phone}`}
                    className="group min-w-0 rounded-[1.25rem] border border-white/10 bg-zinc-950/80 p-4 transition duration-500 ease-premium hover:border-white/30 hover:bg-white/[0.06] sm:rounded-[1.5rem] sm:p-6"
                  >
                    <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">{copy.contact.phone}</span>
                    <span className="mt-3 block text-xl tracking-[0.025em] text-zinc-100 transition duration-500 group-hover:text-white sm:text-3xl sm:tracking-[0.05em]">
                      +385 99 509 6936
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default function ContactPageClient() {
  return (
    <LanguageProvider>
      <ContactPageContent />
    </LanguageProvider>
  )
}
