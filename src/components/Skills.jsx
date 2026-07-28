import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Server, Database, Monitor, Code, BookOpen, Wrench, Languages } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    id: 'backend',
    icon: Server,
    label: 'Backend Development',
    color: '#00f2fe',
    skills: [
      'ASP.NET Core Web API',
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'RESTful APIs',
      'JWT Authentication',
      'Repository Pattern',
      'Dependency Injection',
      'Clean Architecture',
      'AutoMapper',
    ],
  },
  {
    id: 'database',
    icon: Database,
    label: 'Database',
    color: '#3b82f6',
    skills: [
      'SQL Server',
      'Oracle Database',
      'MySQL',
      'PL/SQL',
      'Database Design',
      'ERD Design',
      'Database Normalization (1NF–3NF)',
      'Query Optimization',
    ],
  },
  {
    id: 'frontend',
    icon: Monitor,
    label: 'Frontend',
    color: '#06b6d4',
    skills: [
      'React.js',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
    ],
  },
  {
    id: 'languages',
    icon: Code,
    label: 'Programming Languages',
    color: '#a78bfa',
    skills: ['C#', 'Java', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'fundamentals',
    icon: BookOpen,
    label: 'CS Fundamentals',
    color: '#34d399',
    skills: [
      'OOP',
      'Data Structures',
      'Algorithms',
      'Problem Solving',
      'System Analysis',
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    label: 'Tools & IDEs',
    color: '#f59e0b',
    skills: [
      'Visual Studio',
      'VS Code',
      'Git',
      'GitHub',
      'Postman',
      'IntelliJ IDEA',
      'CLion',
    ],
  },
  {
    id: 'languages-spoken',
    icon: Languages,
    label: 'Spoken Languages',
    color: '#f97316',
    skills: ['Arabic (Native)', 'English (Very Good)', 'German (Good)'],
  },
]

function SkillCard({ category, index, inView }) {
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl p-5 transition-all duration-300"
      style={{
        background: 'rgba(13, 20, 38, 0.85)',
        border: `1px solid rgba(${hexToRgb(category.color)}, 0.1)`,
        backdropFilter: 'blur(12px)',
      }}
      whileHover={{
        y: -6,
        borderColor: `${category.color}35`,
        boxShadow: `0 20px 50px rgba(0,0,0,0.3), 0 0 30px ${category.color}12`,
        transition: { duration: 0.25 },
      }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{ background: `${category.color}15`, border: `1px solid ${category.color}25` }}
        >
          <Icon size={18} style={{ color: category.color }} />
        </div>
        <h3 className="font-bold text-white text-sm">{category.label}</h3>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.08 + i * 0.03 + 0.2, duration: 0.3 }}
            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium cursor-default transition-all duration-200"
            style={{
              background: `${category.color}0d`,
              border: `1px solid ${category.color}20`,
              color: category.color,
            }}
            whileHover={{
              background: `${category.color}20`,
              borderColor: `${category.color}45`,
              scale: 1.05,
              transition: { duration: 0.15 },
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Skill count badge */}
      <div
        className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full font-semibold opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `${category.color}15`, color: category.color }}
      >
        {category.skills.length}
      </div>
    </motion.div>
  )
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '0,242,254'
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  }

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">03 / Skills</p>
          <h2 className="section-heading text-white">
            Technical{' '}
            <span className="text-gradient-blue">Expertise</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl text-sm leading-relaxed">
            A comprehensive toolkit spanning backend systems, database architecture, frontend development, and software engineering fundamentals.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {SKILL_CATEGORIES.map((category, i) => (
            <SkillCard
              key={category.id}
              category={category}
              index={i}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>

      <div className="divider mt-24 max-w-6xl mx-auto" />
    </section>
  )
}
