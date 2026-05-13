'use client'

import brandLogo from '../../Logo A-Negativ.png'
import ContactForm from './ContactForm'
import Footer from '../landing/Footer'
import SiteHeader from '../landing/SiteHeader'

export default function ContactPageClient() {
  return (
    <div className="min-h-[100dvh] bg-base font-sans text-white antialiased selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.05),transparent_18%),linear-gradient(180deg,#050505_0%,#090909_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(white_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <div className="relative overflow-x-hidden">
        <SiteHeader brandLogo={brandLogo} homeHref="/" showSectionLinks={false} active="contact" />

        <main className="px-4 pb-20 pt-32 sm:px-8 md:px-12 md:pb-28 md:pt-36 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5">
              <div className="rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950/90 p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-10">
                <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-300">
                  Contact White Belt
                </div>
                <h1 className="mt-5 font-display text-[clamp(3rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-[0.03em] text-white">
                  Let&apos;s get you on the mats.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                  Whether you are brand new or returning to training, send us a note and we will point you toward the right first class.
                </p>

                <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500">Email</p>
                    <p className="mt-2 text-lg text-zinc-200">hello@whitebeltclub.com</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500">Visit</p>
                    <p className="mt-2 text-lg leading-8 text-zinc-200">
                      123 Grapple Ave
                      <br />
                      Fighter City, FC 12345
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500">Training Nights</p>
                    <p className="mt-2 text-lg leading-8 text-zinc-200">
                      Monday · 6:00 PM – 7:00 PM
                      <br />
                      Wednesday · 6:00 PM – 7:00 PM
                      <br />
                      Friday · 6:00 PM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <ContactForm />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
