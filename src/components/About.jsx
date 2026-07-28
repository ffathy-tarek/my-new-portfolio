import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Database, Code2 } from 'lucide-react'

const STRENGTH_CARDS = [
  {
    id: 'backend-arch',
    icon: Server,
    title: 'Backend Architecture',
    description:
      'Designing scalable RESTful APIs and service layers using ASP.NET Core, clean architecture principles, and dependency injection patterns.',
    color: '#00f2fe',
    delay: 0.1,
    float: 'animate-float-1',
  },
  {
    id: 'database-design',
    icon: Database,
    title: 'Database Design & Optimization',
    description:
      'Building normalized relational database systems with SQL Server & Oracle, optimizing queries, and designing ERDs for long-term reliability.',
    color: '#3b82f6',
    delay: 0.2,
    float: 'animate-float-2',
  },
  {
    id: 'clean-code',
    icon: Code2,
    title: 'Clean Code & Scalable Systems',
    description:
      'Writing maintainable, well-structured code with OOP principles, design patterns, and SOLID guidelines that scale as business grows.',
    color: '#a78bfa',
    delay: 0.3,
    float: 'animate-float-3',
  },
]

function StrengthCard({ card, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = card.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group rounded-2xl p-6 transition-all duration-400 cursor-default ${card.float}`}
      style={{
        background: 'rgba(13, 20, 38, 0.8)',
        border: `1px solid rgba(${card.color === '#00f2fe' ? '0,242,254' : card.color === '#3b82f6' ? '59,130,246' : '167,139,250'}, 0.12)`,
        backdropFilter: 'blur(12px)',
      }}
      whileHover={{
        y: -8,
        borderColor: `${card.color}40`,
        boxShadow: `0 20px 50px rgba(0,0,0,0.3), 0 0 30px ${card.color}18`,
        transition: { duration: 0.3 },
      }}
    >
      {/* Icon container */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${card.color}15`, border: `1px solid ${card.color}25` }}
      >
        <Icon size={22} style={{ color: card.color }} />
      </div>

      <h3 className="text-white font-bold text-base mb-2 leading-snug">{card.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${card.color}60, transparent)` }}
      />
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="section-label mb-3">01 / About Me</p>
          <h2 className="section-heading text-white">
            Crafting Systems That{' '}
            <span className="text-gradient-blue">Scale</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-5"
          >
            <motion.p variants={textVariants} className="text-slate-300 leading-[1.85] text-base">
              I transform complex business requirements into structured,{' '}
              <span className="text-white font-medium">high-performance, database-driven systems</span>{' '}
              with clean architecture and scalable backend logic.
            </motion.p>
            <motion.p variants={textVariants} className="text-slate-300 leading-[1.85] text-base">
              I am a <span className="text-white font-medium">Full-Stack Developer</span> with strong
              foundations in Object-Oriented Programming, Data Structures, Algorithms, and Database
              Design. I specialize in building scalable, maintainable, and performance-oriented web
              applications using clean architecture principles and structured backend logic.
            </motion.p>
            <motion.p variants={textVariants} className="text-slate-300 leading-[1.85] text-base">
              My core strength lies in{' '}
              <span className="text-cyan-400 font-medium">Backend Development and Database Architecture</span>,
              where I design optimized relational database systems and implement efficient business logic
              that ensures long-term scalability and system reliability.
            </motion.p>
            <motion.p variants={textVariants} className="text-slate-300 leading-[1.85] text-base">
              Through hands-on projects, I have built applications using{' '}
              <span className="text-white font-medium">
                ASP.NET Core, C#, SQL Server, Entity Framework, React, HTML, CSS, and JavaScript
              </span>{' '}
              to deliver structured and production-ready applications.
            </motion.p>

            {/* Quick stat chips */}
            <motion.div variants={textVariants} className="flex flex-wrap gap-3 pt-4">
              {[
                { label: 'CS Student', sub: 'Cairo University' },
                { label: 'DEPI Trainee', sub: 'Full Stack .NET' },
                { label: 'Open to', sub: 'Freelance' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex flex-col px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(0, 242, 254, 0.05)',
                    border: '1px solid rgba(0, 242, 254, 0.1)',
                  }}
                >
                  <span className="text-white font-semibold text-sm">{chip.label}</span>
                  <span className="text-slate-500 text-xs">{chip.sub}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Strength Cards */}
          <div className="flex flex-col gap-5">
            {STRENGTH_CARDS.map((card, i) => (
              <StrengthCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="divider mt-24 max-w-6xl mx-auto" />
    </section>
  )
}
