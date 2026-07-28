import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Database, Building2, BrainCircuit, Users, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    id: 'fullstack',
    icon: Globe,
    title: 'Full Stack Web Development',
    description:
      'End-to-end web applications from database schema to polished UI. Built with ASP.NET Core APIs, React frontends, and SQL Server — production-ready and scalable.',
    color: '#00f2fe',
    features: ['ASP.NET Core API', 'React Frontend', 'SQL Server', 'Authentication & Auth'],
  },
  {
    id: 'database',
    icon: Database,
    title: 'Database Design & Optimization',
    description:
      'Designing normalized, high-performance relational databases. ERD modeling, query optimization, stored procedures, and long-term schema scalability planning.',
    color: '#3b82f6',
    features: ['Schema Design', 'ERD Modeling', 'Query Tuning', 'Normalization (1NF–3NF)'],
  },
  {
    id: 'business',
    icon: Building2,
    title: 'Business Website Development',
    description:
      'Professional, responsive business websites that convert visitors into customers. Fast, SEO-friendly, and built to represent your brand with modern aesthetics.',
    color: '#34d399',
    features: ['Responsive Design', 'SEO Ready', 'Fast Performance', 'Modern UI/UX'],
  },
  {
    id: 'algorithms',
    icon: BrainCircuit,
    title: 'Problem-Solving & Algorithmic Solutions',
    description:
      'Tackling complex computational challenges with efficient algorithms and data structures. From system analysis to implementation with optimal time and space complexity.',
    color: '#a78bfa',
    features: ['Algorithm Design', 'Data Structures', 'System Analysis', 'Complexity Optimization'],
  },
  {
    id: 'freelance',
    icon: Users,
    title: 'Freelance Project Collaboration',
    description:
      'Flexible collaboration on your ongoing or new projects. Whether you need an extra backend engineer, a database architect, or a full-stack partner — let\'s build it together.',
    color: '#f97316',
    features: ['Remote Collaboration', 'Flexible Engagement', 'Clean Handover', 'Documentation'],
  },
]

function ServiceCard({ service, index, inView }) {
  const Icon = service.icon

  const isLast = index === SERVICES.length - 1
  const isFeatured = index < 2

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 ${
        isLast ? 'sm:col-span-2 lg:col-span-1' : ''
      }`}
      style={{
        background: isFeatured
          ? `linear-gradient(135deg, rgba(13, 20, 38, 0.95) 0%, rgba(${service.color === '#00f2fe' ? '0,242,254' : '59,130,246'}, 0.04) 100%)`
          : 'rgba(13, 20, 38, 0.85)',
        border: `1px solid ${service.color}18`,
        backdropFilter: 'blur(12px)',
      }}
      whileHover={{
        y: -10,
        borderColor: `${service.color}50`,
        boxShadow: `0 30px 70px rgba(0,0,0,0.4), 0 0 50px ${service.color}20, 0 0 100px ${service.color}08`,
        transition: { duration: 0.3 },
      }}
    >
      {/* Icon */}
      <div className="flex items-start justify-between">
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: `${service.color}12`, border: `1.5px solid ${service.color}25` }}
          whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
        >
          <Icon size={26} style={{ color: service.color }} />
        </motion.div>

        {/* Arrow (visible on hover) */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
          >
            <ArrowRight size={16} style={{ color: service.color }} />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{service.description}</p>
      </div>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {service.features.map(feature => (
          <span
            key={feature}
            className="text-xs px-2 py-0.5 rounded-lg font-medium"
            style={{
              background: `${service.color}0c`,
              border: `1px solid ${service.color}1a`,
              color: service.color,
            }}
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 inset-x-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }}
      />
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }

  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">04 / Services</p>
          <h2 className="section-heading text-white">
            What I{' '}
            <span className="text-gradient-blue">Offer</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl text-sm leading-relaxed">
            From idea to deployment — specialized services tailored to help businesses build robust, scalable digital solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} inView={inView} />
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.6 }}
          className="mt-12 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.06) 0%, rgba(59, 130, 246, 0.04) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.12)',
          }}
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Ready to build something great?</h3>
            <p className="text-slate-400 text-sm">Let's turn your vision into a fast, scalable reality.</p>
          </div>
          <a
            href="#contact"
            id="services-contact-cta"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary flex-shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      <div className="divider mt-24 max-w-6xl mx-auto" />
    </section>
  )
}
