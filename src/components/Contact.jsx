import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const name = document.getElementById('contact-name')?.value || ''
    const email = document.getElementById('contact-email')?.value || ''
    const subject = document.getElementById('contact-subject')?.value || ''
    const message = document.getElementById('contact-message')?.value || ''
    
    const waText = encodeURIComponent(`*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`)
    const waUrl = `https://wa.me/201091353719?text=${waText}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      window.open(waUrl, '_blank', 'noopener,noreferrer')
      e.target.reset()
      setTimeout(() => setIsSuccess(false), 5000)
    }, 800)
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">07 / Contact</p>
          <h2 className="section-heading text-white">
            Let's{' '}
            <span className="text-gradient-blue">Work Together</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Have a project in mind? Whether it's a full web app, a database overhaul, or a freelance collab — I'd love to hear about it.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-5 gap-8"
        >
          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {/* Info cards */}
            {[
              { id: 'contact-email', icon: Mail, label: 'Email', value: 'ffathy2244@gmail.com', color: '#00f2fe' },
              { id: 'contact-location', icon: MapPin, label: 'Location', value: 'Cairo, Egypt', color: '#3b82f6' },
            ].map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="flex items-center gap-4 p-4 rounded-2xl transition-colors duration-300 hover:border-white/10"
                style={{ background: 'rgba(13,20,38,0.85)', border: `1px solid ${item.color}15` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-slate-500 text-xs">{item.label}</p>
                  <p className="text-slate-200 text-sm font-medium truncate block">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { id: 'contact-email-btn', icon: Mail, href: 'mailto:ffathy2244@gmail.com', label: 'Email Me', color: '#00f2fe' },
                { id: 'contact-github', icon: Github, href: 'https://github.com/ffathy-tarek', label: 'GitHub', color: '#00f2fe' },
                { id: 'contact-linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/fathy-tarek-cs', label: 'LinkedIn', color: '#3b82f6' },
              ].map(s => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target={s.href.startsWith('http') ? "_blank" : "_self"}
                  {...(s.href.startsWith('http') ? { rel: "noopener noreferrer" } : {})}
                  aria-label={s.label}
                  className="group flex-1 min-w-[110px] flex items-center justify-center gap-2 p-3 rounded-xl text-slate-400 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(13,20,38,0.85)', border: `1px solid rgba(255,255,255,0.06)` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.color
                    e.currentTarget.style.borderColor = `${s.color}30`
                    e.currentTarget.style.backgroundColor = `${s.color}08`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ''
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.backgroundColor = 'rgba(13,20,38,0.85)'
                  }}
                >
                  <s.icon size={16} />
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="md:col-span-3 rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden"
            style={{ background: 'rgba(13,20,38,0.85)', border: '1px solid rgba(0,242,254,0.08)' }}
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {['Name', 'Email'].map(field => (
                <div key={field} className="flex flex-col gap-1.5 relative group">
                  <label className="text-slate-400 text-xs font-medium uppercase tracking-wide group-focus-within:text-[#00f2fe] transition-colors duration-200">{field}</label>
                  <input
                    required
                    id={`contact-${field.toLowerCase()}`}
                    type={field === 'Email' ? 'email' : 'text'}
                    placeholder={field === 'Name' ? 'John Doe' : 'john@example.com'}
                    className="w-full px-4 py-3 rounded-xl text-slate-200 text-sm outline-none transition-all duration-300 placeholder:text-slate-600 focus:shadow-[0_0_15px_rgba(0,242,254,0.15)] focus:border-[#00f2fe]/40 focus:bg-[#00f2fe]/5"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5 relative group">
              <label className="text-slate-400 text-xs font-medium uppercase tracking-wide group-focus-within:text-[#00f2fe] transition-colors duration-200">Subject</label>
              <input
                required
                id="contact-subject"
                type="text"
                placeholder="Project Inquiry / Collaboration"
                className="w-full px-4 py-3 rounded-xl text-slate-200 text-sm outline-none transition-all duration-300 placeholder:text-slate-600 focus:shadow-[0_0_15px_rgba(0,242,254,0.15)] focus:border-[#00f2fe]/40 focus:bg-[#00f2fe]/5"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5 relative group">
              <label className="text-slate-400 text-xs font-medium uppercase tracking-wide group-focus-within:text-[#00f2fe] transition-colors duration-200">Message</label>
              <textarea
                required
                id="contact-message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl text-slate-200 text-sm outline-none transition-all duration-300 placeholder:text-slate-600 resize-none focus:shadow-[0_0_15px_rgba(0,242,254,0.15)] focus:border-[#00f2fe]/40 focus:bg-[#00f2fe]/5"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              />
            </div>

            <motion.button
              id="contact-submit"
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary self-end ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && <Send size={16} />}
            </motion.button>
            
            {/* Success Banner Overlay */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-[rgba(13,20,38,0.95)] backdrop-blur-md rounded-2xl border border-[#34d399]/30"
                >
                  <motion.div 
                    initial={{ scale: 0.5 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-16 h-16 rounded-full bg-[#34d399]/10 flex items-center justify-center mb-4 border border-[#34d399]/30"
                  >
                    <CheckCircle2 size={32} className="text-[#34d399]" />
                  </motion.div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm text-center max-w-[250px]">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
