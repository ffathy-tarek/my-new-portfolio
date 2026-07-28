import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Github,
  ExternalLink,
  Play,
  Calendar,
  Briefcase,
  Layers,
  Lightbulb,
  User,
  Zap,
  ChevronRight,
} from 'lucide-react'

/* ─── backdrop variants ──────────────────────────────────────────── */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
}

/* ─── panel variants ─────────────────────────────────────────────── */
const panelVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 16,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
}

/* ─── small helpers ──────────────────────────────────────────────── */
function SectionHeading({ icon: Icon, label, color = '#00f2fe' }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        <Icon size={14} style={{ color }} />
      </div>
      <h3 className="text-white font-bold text-sm tracking-wide uppercase"
          style={{ letterSpacing: '0.08em' }}>
        {label}
      </h3>
    </div>
  )
}

function StackBadge({ label, color }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}28`,
        color: color,
      }}
    >
      {label}
    </span>
  )
}

function BulletPoint({ text }) {
  return (
    <li className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
      <ChevronRight
        size={13}
        className="mt-0.5 flex-shrink-0"
        style={{ color: '#00f2fe' }}
      />
      <span>{text}</span>
    </li>
  )
}

function DecisionCard({ title, body, index }) {
  const colors = ['#00f2fe', '#3b82f6', '#a78bfa', '#34d399']
  const color = colors[index % colors.length]
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: `${color}07`,
        border: `1px solid ${color}1c`,
      }}
    >
      <p className="text-white font-semibold text-sm mb-1.5"
         style={{ color }}>
        {title}
      </p>
      <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
    </div>
  )
}

function LinkButton({ href, icon: Icon, label, variant = 'default' }) {
  const styles = {
    github: {
      base: 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20 hover:text-white',
    },
    demo: {
      base: 'border text-cyan-400 hover:text-white',
      style: {
        background: 'rgba(0,242,254,0.06)',
        borderColor: 'rgba(0,242,254,0.25)',
      },
      hoverStyle: { background: 'rgba(0,242,254,0.14)' },
    },
    live: {
      base: 'border text-orange-400 hover:text-white',
      style: {
        background: 'rgba(249,115,22,0.06)',
        borderColor: 'rgba(249,115,22,0.25)',
      },
    },
  }

  const s = styles[variant] || styles.github

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id={`modal-link-${variant}`}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                  transition-all duration-200 ${s.base}`}
      style={s.style}
    >
      <Icon size={15} />
      {label}
    </a>
  )
}

/* ─── main modal ─────────────────────────────────────────────────── */
export default function ProjectModal({ project, onClose }) {
  /* Escape key & body-scroll lock */
  useEffect(() => {
    if (!project) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  /* Click-outside to close */
  const handleBackdropClick = useCallback(
    (e) => { if (e.target === e.currentTarget) onClose() },
    [onClose],
  )

  const hasAnyLink = project && (
    project.links?.github || project.links?.demo || project.links?.live
  )

  return (
    <AnimatePresence>
      {project && (
        /* ── Backdrop ── */
        <motion.div
          key="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          style={{
            background: 'rgba(4, 7, 14, 0.82)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
          aria-modal="true"
          role="dialog"
          aria-label={`Project details: ${project.title}`}
        >
          {/* ── Panel ── */}
          <motion.div
            key="modal-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative flex flex-col w-full overflow-hidden"
            style={{
              maxWidth: '900px',
              maxHeight: '90vh',
              background: 'linear-gradient(160deg, #0d1426 0%, #080c14 100%)',
              border: '1px solid rgba(0, 242, 254, 0.12)',
              borderRadius: '1.25rem',
              boxShadow:
                '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,242,254,0.06), 0 0 60px rgba(0,242,254,0.04)',
            }}
          >
            {/* ─── Fixed top bar with close btn ─────────────────── */}
            <div
              className="flex items-center justify-between px-6 py-4 flex-shrink-0 border-b"
              style={{ borderColor: 'rgba(0,242,254,0.08)' }}
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Role badge */}
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold flex-shrink-0"
                  style={{
                    background: 'rgba(0,242,254,0.08)',
                    border: '1px solid rgba(0,242,254,0.15)',
                    color: '#00f2fe',
                  }}
                >
                  <Briefcase size={11} />
                  {project.role}
                </span>
                <h2
                  className="text-white font-bold text-base leading-snug truncate"
                  title={project.title}
                >
                  {project.title}
                </h2>
              </div>

              <button
                id="modal-close-btn"
                onClick={onClose}
                aria-label="Close modal"
                className="ml-4 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                           text-slate-500 hover:text-white transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* ─── Scrollable body ──────────────────────────────── */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-8 pt-6
                            scrollbar-thin space-y-8"
                 style={{
                   scrollbarWidth: 'thin',
                   scrollbarColor: 'rgba(0,242,254,0.2) transparent',
                 }}>

              {/* Hero image (16:9) */}
              <div
                className="w-full overflow-hidden rounded-xl"
                style={{
                  aspectRatio: '16 / 9',
                  background: 'linear-gradient(135deg, #0d1426 0%, #121b33 100%)',
                  border: '1px solid rgba(0,242,254,0.08)',
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                  onError={e => {
                    /* Graceful placeholder if image not found */
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.innerHTML = `
                      <div style="width:100%;height:100%;display:flex;flex-direction:column;
                                  align-items:center;justify-content:center;gap:12px;
                                  color:rgba(0,242,254,0.25);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                          <rect width="18" height="18" x="3" y="3" rx="2"/>
                          <circle cx="9" cy="9" r="2"/>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                        <span style="font-size:13px;font-family:Inter,sans-serif;">
                          Screenshot coming soon
                        </span>
                      </div>`
                  }}
                />
              </div>

              {/* Meta strip: dates + short summary */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0"
                  style={{
                    background: 'rgba(249,115,22,0.08)',
                    border: '1px solid rgba(249,115,22,0.18)',
                    color: '#f97316',
                  }}
                >
                  <Calendar size={12} />
                  {project.dates}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{project.shortSummary}</p>
              </div>

              {/* ── Technical Stack ── */}
              <div>
                <SectionHeading icon={Layers} label="Technical Stack" color="#00f2fe" />
                <div className="flex flex-wrap gap-2">
                  {project.technicalStack.map(t => (
                    <StackBadge key={t} label={t} color={project.badgeColor} />
                  ))}
                </div>
              </div>

              {/* ── Key Engineering Decisions ── */}
              <div>
                <SectionHeading icon={Lightbulb} label="Key Engineering Decisions" color="#a78bfa" />
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.engineeringDecisions.map((d, i) => (
                    <DecisionCard key={d.title} title={d.title} body={d.body} index={i} />
                  ))}
                </div>
              </div>

              {/* ── My Contributions ── */}
              <div>
                <SectionHeading icon={User} label="My Contributions" color="#34d399" />
                <ul className="space-y-2.5">
                  {project.myContributions.map(c => (
                    <BulletPoint key={c} text={c} />
                  ))}
                </ul>
              </div>

              {/* ── Technical Impact ── */}
              <div>
                <SectionHeading icon={Zap} label="Technical Impact" color="#f59e0b" />
                <ul className="space-y-2.5">
                  {project.technicalImpact.map(t => (
                    <BulletPoint key={t} text={t} />
                  ))}
                </ul>
              </div>

              {/* ── Resource Links (only if any exist) ── */}
              {hasAnyLink && (
                <div>
                  <SectionHeading icon={ExternalLink} label="Resources" color="#f97316" />
                  <div className="flex flex-wrap gap-3">
                    {project.links.github && (
                      <LinkButton
                        href={project.links.github}
                        icon={Github}
                        label="GitHub Repository"
                        variant="github"
                      />
                    )}
                    {project.links.demo && (
                      <LinkButton
                        href={project.links.demo}
                        icon={Play}
                        label="Project Demo"
                        variant="demo"
                      />
                    )}
                    {project.links.live && (
                      <LinkButton
                        href={project.links.live}
                        icon={ExternalLink}
                        label="Live Demo"
                        variant="live"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
