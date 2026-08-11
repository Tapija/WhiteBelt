import SocialLink from './SocialLink'
import { FacebookIcon, InstagramIcon, LinktreeIcon, YoutubeIcon } from './icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800/80 px-4 py-8 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-zinc-500">© {currentYear} White Belt Jiu Jitsu.</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-600">Šijanska cesta 1a · 52100 Pula</p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLink
            href="https://www.instagram.com/whitebeltbjjpula?igsh=MWk1djJwbGs3azI0eA=="
            label="Instagram"
          >
            <InstagramIcon />
          </SocialLink>
          <SocialLink href="https://youtube.com/@jjkwhitebelt?si=9snu-6M1f7cR4tTw" label="YouTube">
            <YoutubeIcon />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/share/1C4dgFsops/" label="Facebook">
            <FacebookIcon />
          </SocialLink>
          <SocialLink href="https://linktr.ee/whitebeltbjj.pula" label="Linktree">
            <LinktreeIcon />
          </SocialLink>
        </div>
      </div>
    </footer>
  )
}
