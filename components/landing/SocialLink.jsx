export default function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-white/[0.02] text-zinc-400 transition duration-500 ease-premium hover:-translate-y-px hover:border-zinc-600 hover:text-white"
      aria-label={label}
    >
      {children}
    </a>
  )
}
