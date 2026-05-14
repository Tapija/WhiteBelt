'use client'

import Link from 'next/link'
import { useState } from 'react'

const desktopLinkClass = 'text-sm font-medium tracking-[0.24em] text-zinc-400 transition duration-500 ease-premium hover:text-white'
const mobileLinkClass = 'block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-200 transition duration-300 hover:bg-white/[0.08] hover:text-white'

export default function SiteHeader({
  brandLogo,
  homeHref = '#top',
  contactHref = '/contact',
  showSectionLinks = true,
  active = 'home',
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  const menuItems = showSectionLinks
    ? [
        { label: 'POČETNA', href: '#top', type: 'anchor', active: active === 'home' },
        { label: 'TRENINZI', href: '#about', type: 'anchor' },
        { label: 'O NAMA', href: '#trainer', type: 'anchor' },
        { label: 'KONTAKT', href: contactHref, type: 'link' },
      ]
    : [
        { label: 'POČETNA', href: '/', type: 'link' },
        { label: 'KONTAKT', href: '/contact', type: 'span', active: true },
      ]

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-6 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 shadow-glass backdrop-blur-2xl">
        <a href={homeHref} className="flex items-center gap-4" onClick={closeMenu}>
          <img src={brandLogo.src} alt="White Belt logo" className="h-[2.95rem] w-auto" />
          <div className="hidden border-l border-white/10 pl-4 text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400 sm:block">
            White Belt Club
          </div>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {showSectionLinks ? (
            <>
              <a href="#top" className={`pb-1 text-sm font-medium tracking-[0.24em] ${active === 'home' ? 'border-b border-white text-white' : 'text-zinc-400 transition duration-500 ease-premium hover:text-white'}`}>
                POČETNA
              </a>
              <a href="#about" className="text-sm font-medium tracking-[0.24em] text-zinc-400 transition duration-500 ease-premium hover:text-white">
                TRENINZI
              </a>
              <a href="#trainer" className="text-sm font-medium tracking-[0.24em] text-zinc-400 transition duration-500 ease-premium hover:text-white">
                O NAMA
              </a>
              <Link href={contactHref} className={desktopLinkClass}>
                KONTAKT
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className={desktopLinkClass}>
                POČETNA
              </Link>
              <span className="border-b border-white pb-1 text-sm font-medium tracking-[0.24em] text-white">
                KONTAKT
              </span>
            </>
          )}
        </nav>

        <button
          type="button"
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition duration-300 hover:bg-white/[0.1] md:hidden"
          aria-label={isMenuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2 h-px w-5 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 top-4 h-px w-5 bg-current transition duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/95 shadow-glass backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="space-y-2 p-3" aria-label="Mobilna navigacija">
          {menuItems.map((item) => {
            const className = `${mobileLinkClass} ${item.active ? 'border-white/40 bg-white/[0.1] text-white' : ''}`

            if (item.type === 'span') {
              return (
                <span key={item.label} className={className}>
                  {item.label}
                </span>
              )
            }

            if (item.type === 'link') {
              return (
                <Link key={item.label} href={item.href} className={className} onClick={closeMenu}>
                  {item.label}
                </Link>
              )
            }

            return (
              <a key={item.label} href={item.href} className={className} onClick={closeMenu}>
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
