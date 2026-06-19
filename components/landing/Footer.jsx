// Social links are temporarily disabled until the client provides the final URLs.
// import SocialLink from './SocialLink'
// import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 px-4 py-8 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-zinc-500">© 2024 White Belt Jiu Jitsu.</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-600">Šijanska cesta 1a · Pula</p>
        </div>
        {/* Social links will be re-enabled here once the client provides Instagram, Facebook, and YouTube URLs. */}
      </div>
    </footer>
  )
}
