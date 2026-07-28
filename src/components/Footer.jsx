import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Concepts', href: '#concepts' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { id: 'footer-github', icon: Github, href: 'https://github.com/ffathy-tarek', label: 'GitHub' },
  { id: 'footer-linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/fathy-tarek-cs', label: 'LinkedIn' },
  { id: 'footer-email', icon: Mail, href: 'mailto:ffathy2244@gmail.com', label: 'Email' },
]

export default function Footer() {
  const handleNav = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative py-14 px-6 border-t" style={{ borderColor: 'rgba(0, 242, 254, 0.06)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-1">
              <span
                className="text-3xl font-black tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                FTS
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#f97316' }} />
            </div>
            <p className="text-slate-600 text-xs max-w-xs text-center md:text-left">
              Full-Stack Developer · Backend Specialist · Cairo, Egypt
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-slate-600 text-sm hover:text-slate-300 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(s => (
              <motion.a
                key={s.id}
                id={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                whileHover={{
                  color: '#00f2fe',
                  borderColor: 'rgba(0, 242, 254, 0.25)',
                  background: 'rgba(0, 242, 254, 0.06)',
                  y: -3,
                  transition: { duration: 0.2 },
                }}
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}
        >
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} Fathy Tarek Sanad. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs flex items-center gap-1.5">
            Built with <Heart size={11} className="text-rose-800" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
