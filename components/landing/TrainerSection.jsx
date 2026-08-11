import trainerImage from '../../gogi.jpeg'
import { useLanguage } from '../i18n/LanguageProvider'

export default function TrainerSection() {
  const { copy } = useLanguage()
  const highlights = copy.trainer.highlights

  return (
    <section className="scroll-mt-28 px-4 pb-20 pt-8 sm:px-8 md:px-12 md:pb-28 md:pt-14 lg:px-16" id="trainer" aria-labelledby="trainer-title">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">{copy.trainer.label}</p>
        <h2
          id="trainer-title"
          className="mt-5 max-w-6xl text-balance font-display text-[clamp(3rem,6.5vw,6.25rem)] uppercase leading-[1.02] tracking-[0.025em] text-white"
        >
          {copy.trainer.title}
        </h2>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[minmax(20rem,0.82fr)_minmax(0,1.18fr)]">
          <div className="relative min-h-[32rem] overflow-hidden border-b border-white/10 lg:min-h-[44rem] lg:border-b-0 lg:border-r">
            <img
              src={trainerImage.src}
              alt={copy.trainer.imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center grayscale transition duration-700 ease-premium hover:scale-[1.025] hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-7 pt-28 sm:px-8 sm:pb-9">
              <p className="max-w-xl text-balance font-display text-2xl uppercase leading-tight tracking-[0.04em] text-white sm:text-3xl">
                {copy.trainer.quote}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="max-w-[62ch] text-pretty text-base leading-8 text-zinc-300 sm:text-lg">
              {copy.trainer.body}
            </p>

            <div className="mt-10 grid border-y border-white/10 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <article
                  key={item.value}
                  className={`group relative min-h-44 overflow-hidden py-6 transition duration-500 hover:bg-white/[0.025] sm:p-6 ${
                    index % 2 === 0 ? 'sm:border-r sm:border-white/10' : ''
                  } ${index < 2 ? 'border-b border-white/10' : ''} ${
                    item.type === 'stat'
                      ? 'bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.065)_0px,rgba(255,255,255,0.065)_1px,transparent_1px,transparent_12px)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.065)]'
                      : ''
                  }`}
                >
                  <p className={`relative text-[10px] font-semibold uppercase tracking-[0.26em] ${item.type === 'stat' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {item.eyebrow}
                  </p>
                  <p className="relative mt-4 font-display text-5xl font-semibold leading-none tracking-[0.02em] text-white">
                    {item.value}
                  </p>
                  <p className="relative mt-4 max-w-xs text-sm leading-6 text-zinc-400">{item.title}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
