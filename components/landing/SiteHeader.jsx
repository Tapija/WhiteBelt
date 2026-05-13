import Link from 'next/link'

export default function SiteHeader({
  brandLogo,
  homeHref = '#top',
  contactHref = '/contact',
  showSectionLinks = true,
  active = 'home',
}) {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-6 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 shadow-glass backdrop-blur-2xl">
        <a href={homeHref} className="flex items-center gap-4">
          <img src={brandLogo.src} alt="White Belt logo" className="h-[2.95rem] w-auto" />
          <div className="hidden border-l border-white/10 pl-4 text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400 sm:block">
            White Belt Club
          </div>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {showSectionLinks ? (
            <>
              <a href="#top" className={`pb-1 text-sm font-medium tracking-[0.24em] ${active === 'home' ? 'border-b border-white text-white' : 'text-zinc-400 transition duration-500 ease-premium hover:text-white'}`}>
                HOME
              </a>
              <a href="#about" className="text-sm font-medium tracking-[0.24em] text-zinc-400 transition duration-500 ease-premium hover:text-white">
                ABOUT
              </a>
              <a href="#classes" className="text-sm font-medium tracking-[0.24em] text-zinc-400 transition duration-500 ease-premium hover:text-white">
                CLASSES
              </a>
              <Link href={contactHref} className="text-sm font-medium tracking-[0.24em] text-zinc-400 transition duration-500 ease-premium hover:text-white">
                CONTACT
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="text-sm font-medium tracking-[0.24em] text-zinc-400 transition duration-500 ease-premium hover:text-white">
                HOME
              </Link>
              <span className="border-b border-white pb-1 text-sm font-medium tracking-[0.24em] text-white">
                CONTACT
              </span>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
