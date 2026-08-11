'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageProvider'

const desktopLinkClass = 'text-[11px] font-medium tracking-[0.18em] text-zinc-400 transition duration-500 ease-premium hover:text-white xl:text-xs xl:tracking-[0.22em]'
const mobileLinkClass = 'block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium uppercase tracking-[0.22em] text-zinc-200 transition duration-300 hover:bg-white/[0.08] hover:text-white'

function LanguageSwitch({ compact = false }) {
  const { language, setLanguage, copy } = useLanguage()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 bg-zinc-950/70 p-1 ${compact ? '' : 'ml-1'}`}
      role="group"
      aria-label={copy.nav.languageLabel}
    >
      {['hr', 'en'].map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          className={`rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition duration-300 active:scale-[0.98] ${
            language === option ? 'bg-white text-zinc-950' : 'text-zinc-500 hover:text-white'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default function SiteHeader({
  brandLogo,
  homeHref = '#top',
  contactHref = '/contact',
  showSectionLinks = true,
  active = 'home',
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { copy } = useLanguage()

  const closeMenu = () => setIsMenuOpen(false)

  const menuItems = showSectionLinks
    ? [
        { label: copy.nav.home, href: '#top', type: 'anchor', active: active === 'home' },
        { label: copy.nav.club, href: '#club', type: 'anchor' },
        { label: copy.nav.training, href: '#training', type: 'anchor' },
        { label: copy.nav.offers, href: '#offers', type: 'anchor' },
        { label: copy.nav.trainer, href: '#trainer', type: 'anchor' },
        { label: copy.nav.reviews, href: '#reviews', type: 'anchor' },
        { label: copy.nav.gallery, href: '#gallery', type: 'anchor' },
        { label: copy.nav.contact, href: contactHref, type: 'link' },
      ]
    : [
        { label: copy.nav.home, href: '/', type: 'link' },
        { label: copy.nav.contact, href: '/contact', type: 'span', active: true },
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
        <nav className="hidden items-center gap-4 lg:flex xl:gap-5">
          {menuItems.map((item) => {
            const className = item.active
              ? 'border-b border-white pb-1 text-[11px] font-medium tracking-[0.18em] text-white xl:text-xs xl:tracking-[0.22em]'
              : desktopLinkClass

            if (item.type === 'span') {
              return (
                <span key={item.label} className={className}>
                  {item.label}
                </span>
              )
            }

            if (item.type === 'link') {
              return (
                <Link key={item.label} href={item.href} className={className}>
                  {item.label}
                </Link>
              )
            }

            return (
              <a key={item.label} href={item.href} className={className}>
                {item.label}
              </a>
            )
          })}
          <LanguageSwitch />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch compact />
          <button
            type="button"
            className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition duration-300 hover:bg-white/[0.1]"
            aria-label={isMenuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
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
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={isMenuOpen ? undefined : ''}
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/95 shadow-glass backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-[44rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="space-y-2 p-3" aria-label={copy.nav.mobileLabel}>
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
