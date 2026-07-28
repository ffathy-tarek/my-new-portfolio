import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Briefcase, Calendar } from 'lucide-react'

const EDUCATION_DATA = {
  academic: {
    id: 'academic',
    icon: GraduationCap,
    label: 'Academic',
    type: 'University',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Faculty of Science, Cairo University',
    period: '2023 – Present',
    graduation: 'Expected Graduation: 2027',
    color: '#00f2fe',
    topics: [
      {
        title: 'Key Coursework & Focus Areas:',
        items: [
          'Advanced Software Engineering & Clean Architecture',
          'Data Structures, Algorithms & Problem Solving',
          'Object-Oriented Programming (OOP) & System Design',
          'Database Systems & Relational Architecture (SQL)',
          'Operating Systems & Computer Graphics'
        ]
      }
    ],
  },
  certifications: {
    id: 'certifications',
    icon: Award,
    label: 'Certifications',
    type: 'Cisco Networking Academy',
    period: 'July 2025 – Sep 2025',
    color: '#a78bfa',
    topics: [
      {
        title: 'Operating Systems Basics:',
        items: ['Operating System Fundamentals', 'Process & Memory Management', 'File Systems & System Security']
      },
      {
        title: 'Introduction to Cybersecurity:',
        items: ['Cybersecurity Fundamentals', 'Network Security Basics', 'Digital Threat Awareness']
      },
      {
        title: 'Digital Awareness:',
        items: ['Digital Safety & Responsible Technology Usage']
      }
    ],
  },
  training: {
    id: 'training',
    icon: Briefcase,
    label: 'Professional Training',
    type: 'DEPI — Digital Egypt Pioneers Initiative',
    period: 'Nov 2025 – Jul 2026',
    color: '#f97316',
    topics: [
      {
        title: 'Full Stack .NET Developer Trainee (Hybrid)',
        items: [
          'Full-Stack Web Development using ASP.NET Core and React',
          'Backend Development with ASP.NET Core Web API',
          'Database Design & Development using SQL Server',
          'Object-Oriented Programming (OOP) with C#',
          'Team-based Software Development using Agile Methodology',
          'Graduation Project Development in a Collaborative Team Environment'
        ]
      }
    ],
  },
}

function AcademicCard({ data, inView }) {
  const Icon = data.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl p-5 transition-all duration-300 flex flex-col"
      style={{
        background: 'rgba(13, 20, 38, 0.85)',
        border: `1px solid rgba(0, 242, 254, 0.1)`,
        backdropFilter: 'blur(12px)',
      }}
      whileHover={{
        borderColor: 'rgba(0, 242, 254, 0.25)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.25), 0 0 35px rgba(0,242,254,0.08)',
        y: -4,
        transition: { duration: 0.25 },
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${data.color}15`, border: `1px solid ${data.color}25` }}
          >
            <Icon size={20} style={{ color: data.color }} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: data.color }}>
              {data.label}
            </p>
            <p className="text-slate-500 text-xs mt-0.5">{data.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full flex-shrink-0" style={{ background: `${data.color}10`, border: `1px solid ${data.color}20` }}>
          <Calendar size={11} style={{ color: data.color }} />
          <span className="text-xs" style={{ color: data.color }}>{data.period}</span>
        </div>
      </div>

      <h3 className="text-white font-bold text-base mb-1">{data.degree}</h3>
      <p className="text-slate-400 text-sm mb-1">{data.institution}</p>
      <p className="text-cyan-400/70 text-xs font-medium mb-2">{data.graduation}</p>

      <div className="flex-1">
        {data.topics.map((topic, i) => (
          <div key={i}>
            <h4 className="text-slate-200 text-sm font-semibold mb-1.5">{topic.title}</h4>
            <ul className="space-y-1 ml-1">
              {topic.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-slate-400 text-[13px] leading-relaxed">
                  <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: `${data.color}80` }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function CertsCard({ data, inView }) {
  const Icon = data.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl p-5 transition-all duration-300 flex flex-col"
      style={{
        background: 'rgba(13, 20, 38, 0.85)',
        border: '1px solid rgba(167, 139, 250, 0.1)',
        backdropFilter: 'blur(12px)',
      }}
      whileHover={{
        borderColor: 'rgba(167, 139, 250, 0.25)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.25), 0 0 35px rgba(167,139,250,0.08)',
        y: -4,
        transition: { duration: 0.25 },
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: '#a78bfa15', border: '1px solid #a78bfa25' }}
          >
            <Icon size={20} style={{ color: '#a78bfa' }} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">{data.label}</p>
            <p className="text-slate-500 text-xs mt-0.5">{data.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full flex-shrink-0" style={{ background: '#a78bfa10', border: '1px solid #a78bfa20' }}>
          <Calendar size={11} className="text-violet-400" />
          <span className="text-xs text-violet-400">{data.period}</span>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {data.topics.map((topic, i) => (
          <div key={i}>
            <h4 className="text-slate-200 text-sm font-semibold mb-1.5">{topic.title}</h4>
            <ul className="space-y-1 ml-1">
              {topic.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-slate-400 text-[13px] leading-snug">
                  <span className="w-1 h-1 rounded-full bg-violet-400/50 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function TrainingCard({ data, inView }) {
  const Icon = data.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl p-5 transition-all duration-300 flex flex-col"
      style={{
        background: 'rgba(13, 20, 38, 0.85)',
        border: '1px solid rgba(249, 115, 22, 0.1)',
        backdropFilter: 'blur(12px)',
      }}
      whileHover={{
        borderColor: 'rgba(249, 115, 22, 0.25)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.25), 0 0 35px rgba(249,115,22,0.08)',
        y: -4,
        transition: { duration: 0.25 },
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: '#f9731615', border: '1px solid #f9731625' }}
          >
            <Icon size={20} style={{ color: '#f97316' }} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">{data.label}</p>
            <p className="text-slate-500 text-xs mt-0.5">{data.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full flex-shrink-0" style={{ background: '#f9731610', border: '1px solid #f9731620' }}>
          <Calendar size={11} className="text-orange-400" />
          <span className="text-xs text-orange-400">{data.period}</span>
        </div>
      </div>

      <div className="flex-1">
        {data.topics.map((topic, i) => (
          <div key={i}>
            <h4 className="text-slate-200 text-sm font-semibold mb-1.5">{topic.title}</h4>
            <ul className="space-y-1 ml-1">
              {topic.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-slate-400 text-[13px] leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-orange-400/50 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }

  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">02 / Education</p>
          <h2 className="section-heading text-white">
            Academic{' '}
            <span className="text-gradient-blue">Background</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl text-sm leading-relaxed">
            Continuous learning through formal education, industry certifications, and professional training programs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch"
        >
          <AcademicCard data={EDUCATION_DATA.academic} inView={inView} />
          <CertsCard data={EDUCATION_DATA.certifications} inView={inView} />
          <TrainingCard data={EDUCATION_DATA.training} inView={inView} />
        </motion.div>
      </div>

      <div className="divider mt-24 max-w-7xl mx-auto" />
    </section>
  )
}
