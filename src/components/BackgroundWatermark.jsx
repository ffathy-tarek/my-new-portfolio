import { motion } from 'framer-motion'

export default function BackgroundWatermark() {
  const sphereStyle = {
    background: 'radial-gradient(circle at 35% 35%, rgba(0, 242, 254, 0.18) 0%, rgba(30, 41, 59, 0.25) 50%, rgba(8, 12, 20, 0.6) 100%)',
    boxShadow: 'inset -3px -3px 8px rgba(0, 0, 0, 0.8), inset 2px 2px 6px rgba(255, 255, 255, 0.15), 0 8px 20px rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40" aria-hidden="true">
      {/* Solid dark background */}
      <div className="absolute inset-0" style={{ background: '#080c14' }} />

      {/* 3D Ambient Floating Spheres - Subtle & Small */}
      <div className="absolute inset-0">
        {/* Sphere 1 - Top-right edge */}
        <motion.div
          className="absolute top-16 right-8 w-[60px] h-[60px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />

        {/* Sphere 2 - Top-right cluster */}
        <motion.div
          className="absolute top-24 right-24 w-[45px] h-[45px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-12, 12, -12],
            x: [-6, 6, -6],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />

        {/* Sphere 3 - Mid-left margin */}
        <motion.div
          className="absolute top-1/3 left-6 w-[75px] h-[75px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-18, 18, -18],
            x: [-10, 10, -10],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />

        {/* Sphere 4 - Bottom-right corner */}
        <motion.div
          className="absolute bottom-16 right-12 w-[85px] h-[85px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-20, 20, -20],
            x: [-12, 12, -12],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />

        {/* Sphere 5 - Bottom-right cluster */}
        <motion.div
          className="absolute bottom-24 right-32 w-[50px] h-[50px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-14, 14, -14],
            x: [-7, 7, -7],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />

        {/* Sphere 6 - Top-left corner */}
        <motion.div
          className="absolute top-20 left-12 w-[55px] h-[55px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-13, 13, -13],
            x: [-9, 9, -9],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />

        {/* Sphere 7 - Bottom-left margin */}
        <motion.div
          className="absolute bottom-20 left-8 w-[70px] h-[70px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-16, 16, -16],
            x: [-11, 11, -11],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />

        {/* Sphere 8 - Bottom-left cluster */}
        <motion.div
          className="absolute bottom-32 left-24 w-[40px] h-[40px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />

        {/* Sphere 9 - Mid-right margin */}
        <motion.div
          className="absolute top-2/3 right-6 w-[65px] h-[65px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-17, 17, -17],
            x: [-9, 9, -9],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />

        {/* Sphere 10 - Top-center edge */}
        <motion.div
          className="absolute top-12 left-1/2 w-[48px] h-[48px] rounded-full"
          style={sphereStyle}
          animate={{
            y: [-11, 11, -11],
            x: [-6, 6, -6],
            scale: [0.99, 1.01, 0.99],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          }}
        />
      </div>
    </div>
  )
}
