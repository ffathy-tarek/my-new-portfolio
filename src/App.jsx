import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import LoadingScreen from './components/LoadingScreen'
import BackgroundWatermark from './components/BackgroundWatermark'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Concepts from './components/Concepts'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  // Loading: exactly 1 second
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll tracking for navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-hero-gradient overflow-x-hidden" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)' }}>
      {/* Custom glow cursor (desktop only) */}
      <CustomCursor />

      {/* Fixed animated background + watermark */}
      <BackgroundWatermark />

      {/* Loading Screen (renders on top via z-index) */}
      <LoadingScreen isLoading={isLoading} />

      {/* Main content — rendered but invisible during loading */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative z-10"
          >
            <Navbar scrolled={scrolled} />

            <main>
              <Hero />
              <About />
              <Education />
              <Skills />
              <Services />
              <Projects />
              <Concepts />
              <Contact />
            </main>

            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
