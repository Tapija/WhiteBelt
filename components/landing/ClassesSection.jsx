import { useLanguage } from '../i18n/LanguageProvider'

const galleryImages = [
  {
    src: '/WhatsApp%20Image%202026-08-05%20at%2015.15.37.jpeg',
    cardClass: 'sm:col-span-2 lg:col-span-6 lg:row-span-2',
    frameClass: 'aspect-[4/5] lg:h-full lg:aspect-auto',
    positionClass: 'object-center',
  },
  {
    src: '/WhatsApp%20Image%202026-08-05%20at%2015.15.37%20%282%29.jpeg',
    cardClass: 'lg:col-span-3',
    frameClass: 'aspect-[3/4] lg:h-full lg:aspect-auto',
    positionClass: 'object-center',
  },
  {
    src: '/WhatsApp%20Image%202026-08-05%20at%2015.15.37%20%281%29.jpeg',
    cardClass: 'lg:col-span-3',
    frameClass: 'aspect-[9/16] sm:aspect-[3/4] lg:h-full lg:aspect-auto',
    positionClass: 'object-[center_58%]',
  },
  {
    src: '/WhatsApp%20Image%202026-08-05%20at%2015.15.37%20%283%29.jpeg',
    cardClass: 'lg:col-span-3',
    frameClass: 'aspect-[3/4] lg:h-full lg:aspect-auto',
    positionClass: 'object-[center_54%]',
  },
  {
    src: '/WhatsApp%20Image%202026-08-05%20at%2015.15.38.jpeg',
    cardClass: 'lg:col-span-3',
    frameClass: 'aspect-[3/4] lg:h-full lg:aspect-auto',
    positionClass: 'object-[center_58%]',
  },
  {
    src: '/1000055414.jpg',
    cardClass: 'sm:col-span-2 lg:col-span-12',
    frameClass: 'aspect-[16/9]',
    positionClass: 'object-[center_42%]',
  },
]

export default function ClassesSection({ onOpenImage }) {
  const { copy } = useLanguage()
  const items = copy.gallery.items

  return (
    <section className="scroll-mt-28 px-4 pb-20 pt-8 sm:px-8 md:px-12 md:pb-28 md:pt-14 lg:px-16" id="gallery">
      <div className="mx-auto mb-10 max-w-7xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">{copy.gallery.label}</p>
        <h2 className="mt-3 font-display text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.9] tracking-[0.03em] text-white">
          {copy.gallery.title}
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className={`group relative isolate overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-700 ease-premium hover:border-white/20 lg:rounded-[2rem] ${image.cardClass}`}
          >
            <div className={`overflow-hidden ${image.frameClass}`}>
              <button
                type="button"
                onClick={() => onOpenImage({ src: image.src, alt: items[index].alt })}
                className="relative block h-full w-full cursor-zoom-in overflow-hidden transition-transform duration-500 ease-premium active:scale-[0.995]"
                aria-label={items[index].aria}
              >
                <img
                  src={image.src}
                  alt={items[index].alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full object-cover grayscale transition duration-1000 ease-premium group-hover:scale-[1.025] group-hover:grayscale-0 ${image.positionClass}`}
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-zinc-950/10 opacity-70 transition-opacity duration-700 group-hover:opacity-45"
                  aria-hidden="true"
                />
                <span className="pointer-events-none absolute left-4 top-4 inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-white/15 bg-zinc-950/60 px-2 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-md sm:left-5 sm:top-5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/15 bg-zinc-950/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-100 opacity-0 backdrop-blur-md transition duration-500 ease-premium group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-5 sm:left-5">
                  {copy.gallery.zoom}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
