import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/projects.data.js'
import ProjectModal from './ProjectModal'

function ProjectCard({ project, index, onClick, variants }) {
  return (
    <motion.div
      variants={variants}
      className="group relative rounded-2xl overflow-hidden flex flex-col bg-[rgba(13,20,38,0.85)] border border-white/5 backdrop-blur-md transition-all duration-300"
      whileHover={{
        y: -8,
        borderColor: 'rgba(0,242,254,0.5)',
        boxShadow: '0 30px 60px -15px rgba(0,0,0,0.6), 0 0 40px rgba(0,242,254,0.15), 0 0 80px rgba(0,242,254,0.05)'
      }}
    >
      {/* Image container */}
      <div className="relative w-full h-56 overflow-hidden bg-[#0a0f1d] border-b border-white/5">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.innerHTML = `
              <div class="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-[#0a0f1d] border-b border-white/5 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                <span class="text-xs">Image Placeholder</span>
              </div>
            `;
          }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/80 to-transparent opacity-60" />
      </div>

      <div className="p-3.5 flex flex-col flex-1 gap-1.5">
        <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#00f2fe] transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed flex-1">
          {project.shortSummary}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techBadges.slice(0, 4).map((tech, i) => (
            <span 
              key={i} 
              className="text-[10px] font-semibold px-2 py-0.5 rounded-md tracking-wide"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#94a3b8'
              }}
            >
              {tech}
            </span>
          ))}
          {project.techBadges.length > 4 && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md text-slate-500" style={{ background: 'rgba(255,255,255,0.02)' }}>
              +{project.techBadges.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <button 
          onClick={() => onClick(project)}
          className="w-full py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold transition-all duration-300 bg-white/5 text-white border border-white/10 group-hover:bg-[#00f2fe]/10 group-hover:border-[#00f2fe]/30 group-hover:text-[#00f2fe]"
        >
          Explore Project
          <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }

  const getCardVariants = (index) => {
    const column = index % 2
    const row = Math.floor(index / 2)
    const totalRows = Math.ceil(PROJECTS.length / 2)
    
    const xOffset = column === 0 ? '100%' : '-100%'
    const yOffset = row < totalRows / 2 ? '100%' : '-100%'

    return {
      hidden: {
        opacity: 0.1,
        x: xOffset,
        y: yOffset,
        scale: 0.8,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 40,
          damping: 18,
          delay: index * 0.12,
        },
      },
    }
  }

  return (
    <>
      <section id="projects" className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="mb-16"
          >
            <p className="section-label mb-3">05 / Projects</p>
            <h2 className="section-heading text-white">
              Featured <span className="text-gradient-blue">Work</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl text-sm leading-relaxed">
              A selection of my best technical projects, demonstrating backend architecture, database design, and full-stack development.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                variants={getCardVariants(index)}
                onClick={setSelectedProject}
              />
            ))}
          </motion.div>
        </div>

        <div className="divider mt-24 max-w-6xl mx-auto" />
      </section>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  )
}
