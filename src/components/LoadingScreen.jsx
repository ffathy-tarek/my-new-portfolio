import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#080c14' }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0,242,254,0.08) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* FTS Text */}
            <div className="relative">
              <span
                className="text-7xl font-black tracking-tight select-none"
                style={{
                  background: 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 60%, #00f2fe 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradient-shift 2s ease infinite',
                  letterSpacing: '-0.05em',
                }}
              >
                FTS
              </span>

              {/* Glow under text */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(0,242,254,0.4), transparent)',
                  filter: 'blur(8px)',
                }}
              />
            </div>

            {/* Loader bar */}
            <div className="w-32 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,242,254,0.1)' }}>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity }}
                className="h-full w-1/2 rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, #00f2fe, transparent)' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
