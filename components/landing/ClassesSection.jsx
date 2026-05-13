export default function ClassesSection({ brandLogo, promoPic1, promoPic2, onOpenImage }) {
  return (
    <section className="px-4 pb-24 sm:px-8 md:px-12 md:pb-32 lg:px-16" id="classes">
      <div className="mx-auto mb-10 max-w-7xl">
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-300">
          Classes / Culture / Community
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-1.5">
          <div className="flex aspect-square items-center justify-center rounded-[calc(2rem-0.375rem)] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%),#111111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
            <div className="flex h-[7.5rem] w-[4rem] items-center justify-center">
              <img
                src={brandLogo.src}
                alt="White Belt logo"
                className="max-h-full max-w-full object-contain opacity-75 saturate-0 transition duration-700 ease-premium group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
              />
            </div>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-1.5">
          <div className="aspect-square overflow-hidden rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
            <button
              type="button"
              onClick={() => onOpenImage({ src: promoPic1.src, alt: 'White Belt promotional photo' })}
              className="relative block h-full w-full cursor-zoom-in"
              aria-label="Open full size promotional photo"
            >
              <img
                src={promoPic1.src}
                alt="White Belt promotional photo"
                className="h-full w-full object-cover grayscale transition duration-700 ease-premium group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-200 opacity-0 transition duration-500 ease-premium group-hover:opacity-100">
                Click to expand
              </span>
            </button>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-1.5">
          <div className="flex aspect-square items-center justify-center rounded-[calc(2rem-0.375rem)] border border-white/10 bg-[linear-gradient(180deg,#181818_0%,#101010_100%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
            <div className="flex h-[7.5rem] w-[4rem] items-center justify-center">
              <img
                src={brandLogo.src}
                alt="White Belt logo"
                className="max-h-full max-w-full object-contain opacity-75 saturate-0 transition duration-700 ease-premium group-hover:-translate-y-1 group-hover:opacity-100 group-hover:saturate-100"
              />
            </div>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-1.5">
          <div className="aspect-square overflow-hidden rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
            <button
              type="button"
              onClick={() =>
                onOpenImage({ src: promoPic2.src, alt: 'White Belt Jiu Jitsu promotional photo' })
              }
              className="relative block h-full w-full cursor-zoom-in"
              aria-label="Open full size training photo"
            >
              <img
                src={promoPic2.src}
                alt="White Belt Jiu Jitsu promotional photo"
                className="h-full w-full object-cover grayscale transition duration-700 ease-premium group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-200 opacity-0 transition duration-500 ease-premium group-hover:opacity-100">
                Click to expand
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
