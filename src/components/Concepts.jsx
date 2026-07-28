import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CONCEPTS } from '../data/concepts.data.js';
import { X, ExternalLink } from 'lucide-react';

function ConceptCard({ concept, index, onOpen, variants }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={variants}
      className="group relative flex flex-col gap-5"
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Mockup / Image Container */}
      <div className="relative w-full h-56 rounded-xl overflow-hidden bg-[#0a0f1d] border border-white/5 transition-all duration-500 hover:border-[#00f2fe]/30 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(0,242,254,0.15)] flex items-center justify-center p-2">
        
        {/* Mockup Frame (CSS based) - Fades out on hover */}
        <div className="absolute inset-0 border-[6px] border-b-[10px] rounded-xl border-[#121b33] pointer-events-none transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 group-hover:border-[0px]" />
        
        {/* Mockup Camera Dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black/50 transition-opacity duration-500 group-hover:opacity-0 z-10" />
        
        {/* Mockup Bottom Notch */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/5 transition-opacity duration-500 group-hover:opacity-0 z-10" />

        {/* Image / Fallback */}
        <div className="relative w-full h-full overflow-hidden rounded-[2px] transition-all duration-500 group-hover:scale-[1.08] sm:group-hover:scale-[1.12] group-hover:rounded-lg">
          {!imageError ? (
            <img 
              src={concept.image} 
              alt={concept.title}
              className="w-full h-full object-cover object-top transition-transform duration-700"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-gradient-to-br from-[#121b33] to-[#0a0f1d] border border-white/5 gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#00f2fe]/10 text-[#00f2fe] mb-1 sm:mb-2 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </div>
              <h4 className="text-white font-bold text-sm sm:text-lg leading-tight">{concept.title}</h4>
            </div>
          )}
          {/* Subtle overlay for image state */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Info Content */}
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-white font-bold text-lg leading-snug group-hover:text-white transition-colors duration-300">
          {concept.title}
        </h3>
        
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
          {concept.subtitle}
        </p>

        <div className="flex flex-wrap gap-1">
          {concept.tech.map((t, i) => (
            <span key={i} className="px-2 py-0.5 text-[10px] font-semibold text-slate-400 bg-white/5 rounded-md border border-white/5">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpen(concept)}
          className="mt-0 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#00f2fe] to-[#3b82f6] rounded-lg hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Explore Showcase
        </button>
      </div>
    </motion.div>
  );
}

function ConceptModal({ concept, onClose }) {
  if (!concept) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d1426] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,242,254,0.15)]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-300"
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Image */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0a0f1d] border border-white/5 mb-6">
              <img
                src={concept.image}
                alt={concept.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Description */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {concept.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              {concept.fullDescription}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {concept.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-semibold text-[#00f2fe] bg-[#00f2fe]/10 rounded-md border border-[#00f2fe]/20">
                  {t}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-white font-semibold text-lg mb-4">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {concept.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit Website Button */}
            <a
              href={concept.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#00f2fe] to-[#3b82f6] rounded-lg hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Visit Website
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Concepts() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedConcept, setSelectedConcept] = useState(null);

  const handleOpen = (concept) => setSelectedConcept(concept);
  const handleClose = () => setSelectedConcept(null);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const getCardVariants = (index) => {
    const column = index % 2
    const row = Math.floor(index / 2)
    const totalRows = Math.ceil(CONCEPTS.length / 2)
    
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
    <section id="concepts" className="relative py-28 px-6 bg-[#080c14]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="section-label mb-3">06 / Concepts</p>
          <h2 className="section-heading text-white">
            Website Concepts
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl text-sm leading-relaxed">
            Modern website concepts designed for various industries to demonstrate responsive design, intuitive user experience, and business-focused layouts. Each concept can be fully customized to reflect a client's brand identity, content, and functional requirements.
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
          {CONCEPTS.map((concept, index) => (
            <ConceptCard 
              key={concept.id} 
              concept={concept} 
              index={index} 
              variants={getCardVariants(index)}
              onOpen={handleOpen}
            />
          ))}
        </motion.div>
      </div>

      <div className="divider mt-28 max-w-6xl mx-auto" />

      {/* Modal */}
      <ConceptModal concept={selectedConcept} onClose={handleClose} />
    </section>
  );
}
