export default function ClassesSection({ promoPic1, promoPic2, promoPic3, promoPic4, onOpenImage }) {
  return (
    <section className="px-4 pb-14 sm:px-8 md:px-12 md:pb-20 lg:px-16" id="classes">
      <div className="mx-auto mb-10 max-w-7xl">
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-300">
          Treninzi / Kultura / Zajednica
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-1.5">
          <div className="aspect-square overflow-hidden rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
            <button
              type="button"
              onClick={() => onOpenImage({ src: promoPic3.src, alt: 'Promotivna fotografija White Belt treninga' })}
              className="relative block h-full w-full cursor-zoom-in"
              aria-label="Otvori promotivnu fotografiju treninga u punoj veličini"
            >
              <img
                src={promoPic3.src}
                alt="Promotivna fotografija White Belt treninga"
                className="h-full w-full object-cover grayscale transition duration-700 ease-premium group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-200 opacity-0 transition duration-500 ease-premium group-hover:opacity-100">
                Klikni za povećanje
              </span>
            </button>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-1.5">
          <div className="aspect-square overflow-hidden rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
            <button
              type="button"
              onClick={() => onOpenImage({ src: promoPic1.src, alt: 'Promotivna fotografija White Belt kluba' })}
              className="relative block h-full w-full cursor-zoom-in"
              aria-label="Otvori promotivnu fotografiju u punoj veličini"
            >
              <img
                src={promoPic1.src}
                alt="Promotivna fotografija White Belt kluba"
                className="h-full w-full object-cover grayscale transition duration-700 ease-premium group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-200 opacity-0 transition duration-500 ease-premium group-hover:opacity-100">
                Klikni za povećanje
              </span>
            </button>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-1.5">
          <div className="aspect-square overflow-hidden rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
            <button
              type="button"
              onClick={() =>
                onOpenImage({ src: promoPic4.src, alt: 'Promotivna fotografija White Belt Jiu Jitsu treninga' })
              }
              className="relative block h-full w-full cursor-zoom-in"
              aria-label="Otvori dodatnu promotivnu fotografiju u punoj veličini"
            >
              <img
                src={promoPic4.src}
                alt="Promotivna fotografija White Belt Jiu Jitsu treninga"
                className="h-full w-full object-cover grayscale transition duration-700 ease-premium group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-200 opacity-0 transition duration-500 ease-premium group-hover:opacity-100">
                Klikni za povećanje
              </span>
            </button>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-1.5">
          <div className="aspect-square overflow-hidden rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
            <button
              type="button"
              onClick={() =>
                onOpenImage({ src: promoPic2.src, alt: 'Promotivna fotografija White Belt Jiu Jitsu kluba' })
              }
              className="relative block h-full w-full cursor-zoom-in"
              aria-label="Otvori fotografiju treninga u punoj veličini"
            >
              <img
                src={promoPic2.src}
                alt="Promotivna fotografija White Belt Jiu Jitsu kluba"
                className="h-full w-full object-cover grayscale transition duration-700 ease-premium group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-200 opacity-0 transition duration-500 ease-premium group-hover:opacity-100">
                Klikni za povećanje
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
