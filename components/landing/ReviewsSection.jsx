import { useLanguage } from '../i18n/LanguageProvider'
import { ArrowIcon, StarIcon } from './icons'

const googleReviewsUrl =
  'https://www.google.com/maps/search/?api=1&query=JJK%20White%20Belt%2C%20%C5%A0ijanska%20cesta%201a%2C%20Pula'

function RatingStars({ label }) {
  return (
    <div className="flex items-center gap-1.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className="h-5 w-5" />
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  const { copy } = useLanguage()

  return (
    <section
      className="scroll-mt-28 px-4 pb-20 pt-8 sm:px-8 md:px-12 md:pb-28 md:pt-14 lg:px-16"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(19rem,0.55fr)] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
              {copy.reviews.label}
            </p>
            <h2
              id="reviews-title"
              className="mt-5 max-w-5xl text-balance font-display text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.96] tracking-[0.025em] text-white"
            >
              {copy.reviews.title}
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">{copy.reviews.body}</p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)]">
          <div className="flex flex-col justify-between border-b border-white/10 bg-white p-8 text-zinc-950 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {copy.reviews.scoreLabel}
              </p>
              <div className="mt-6 flex items-end gap-4">
                <span className="font-display text-8xl font-semibold leading-[0.72] tracking-[-0.03em]">5.0</span>
                <span className="pb-1 text-sm font-semibold tracking-[0.16em] text-zinc-500">/ 5</span>
              </div>
              <div className="mt-7">
                <RatingStars label={copy.reviews.starLabel} />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  {copy.reviews.count}
                </p>
              </div>
            </div>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-12 inline-flex min-h-14 items-center justify-between rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold tracking-[0.18em] text-white transition duration-500 ease-premium hover:-translate-y-px hover:bg-zinc-800 active:scale-[0.98]"
            >
              <span>{copy.reviews.cta}</span>
              <ArrowIcon className="ml-4 h-4 w-4 transition duration-500 ease-premium group-hover:translate-x-1" />
            </a>
          </div>

          <div className="divide-y divide-white/10">
            {copy.reviews.cards.map((review, index) => (
              <article
                key={review.name}
                className="group grid gap-5 p-7 transition duration-500 ease-premium hover:bg-white/[0.035] sm:grid-cols-[3rem_minmax(0,1fr)] sm:p-9"
              >
                <span className="font-display text-3xl font-semibold leading-none text-white/15">0{index + 1}</span>
                <div>
                  <RatingStars label={copy.reviews.starLabel} />
                  <p className="mt-5 max-w-3xl text-pretty text-lg leading-8 text-zinc-200 sm:text-xl">
                    {review.text}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-sm font-bold tracking-[0.14em] text-white">{review.name}</p>
                    <span className="h-px w-5 bg-white/20" aria-hidden="true" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                      {copy.reviews.source}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
