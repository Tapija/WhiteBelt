'use client'

import { useEffect } from 'react'

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image, onClose])

  if (!image) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-xl sm:px-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <div
        className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950/95 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-400 sm:text-xs">
              Klikni izvan slike ili pritisni Esc za zatvaranje
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-medium text-zinc-300 transition duration-500 ease-premium hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              aria-label="Zatvori pregled slike"
            >
              ✕
            </button>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/70">
            <img src={image.src} alt={image.alt} className="max-h-[78vh] w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
