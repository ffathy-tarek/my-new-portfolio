import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FolderOpen, FileText, MapPin, ChevronDown } from 'lucide-react'

const TITLES = [
  'Software Engineer',
  'Full-Stack Developer',
  'Backend Developer',
  'Database Designer',
]

function TypewriterTitle() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentTitle = TITLES[titleIndex]

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timeoutRef.current)
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false)
        setTitleIndex(i => (i + 1) % TITLES.length)
        return
      }
      timeoutRef.current = setTimeout(() => {
        setDisplayText(t => t.slice(0, -1))
      }, 40)
    } else {
      if (displayText.length === currentTitle.length) {
        setIsPaused(true)
        return
      }
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1))
      }, 75)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, isPaused, titleIndex])

  return (
    <div className="flex items-center gap-0.5 justify-center min-h-[1.2em]">
      <span
        className="font-semibold text-xl sm:text-2xl md:text-3xl tracking-wide text-cyan-400 drop-shadow-[0_0_12px_rgba(0,242,254,0.3)]"
        style={{
          background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
        className="inline-block w-0.5 h-[1em] ml-1"
        style={{ background: '#00f2fe', verticalAlign: 'middle' }}
      />
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Animated center glow */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.05) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Background Avatar Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-90 mix-blend-screen hidden lg:block">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/hero-avatar.png)',
              maskImage: 'radial-gradient(circle at center, black 50%, transparent 95%), linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 95%), linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
              filter: 'contrast(1.05) brightness(1.02)',
            }}
          />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-start text-left max-w-4xl mx-auto w-full"
      >
        {/* Location badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: 'rgba(0, 242, 254, 0.07)',
              border: '1px solid rgba(0, 242, 254, 0.15)',
            }}
          >
            <MapPin size={13} className="text-cyan-400" />
            <span className="text-slate-300 text-sm font-medium">Cairo, Egypt</span>
          </div>
        </motion.div>

        {/* Main name heading */}
        <motion.h1
          variants={itemVariants}
          className="font-extrabold leading-[1.05] tracking-tight mb-4 text-4xl sm:text-5xl md:text-6xl"
        >
          <span className="text-white">Fathy Tarek </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ff6b00 50%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Sanad
          </span>
        </motion.h1>

        {/* Dynamic Typewriter Title */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <TypewriterTitle />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 leading-relaxed max-w-2xl mb-10 text-base sm:text-lg"
        >
          Turning ideas into{' '}
          <span className="text-slate-200 font-medium">fast, scalable websites</span> and web
          applications built for{' '}
          <span className="text-slate-200 font-medium">real businesses</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 flex-wrap"
        >
          <button
            id="hero-contact-btn"
            onClick={() => handleScroll('contact')}
            className="btn-primary"
          >
            <span>Let's Work Together</span>
            <ArrowRight size={16} />
          </button>

          <button
            id="hero-projects-btn"
            onClick={() => handleScroll('projects')}
            className="btn-outlined"
          >
            <FolderOpen size={16} />
            View Projects
          </button>

          <a
            id="hero-cv-btn"
            href="https://drive.google.com/file/d/1ExxwlR8dejMHqNwGoyjDCe0jS1QccuVa/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
          >
            <FileText size={16} />
            View CV
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
          onClick={() => handleScroll('about')}
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
