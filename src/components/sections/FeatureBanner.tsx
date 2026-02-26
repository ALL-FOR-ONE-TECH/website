'use client'

import { motion } from 'framer-motion'

const features = [
  'Web Development',
  'Mobile Apps',
  'Cloud Solutions',
  'AI Integration',
  'UI/UX Design',
  'Cybersecurity',
]

export function FeatureBanner() {
  return (
    <section className="relative py-5 overflow-hidden border-y border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-violet-600/90" />
      
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex whitespace-nowrap"
        >
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {features.map((feature, i) => (
                <div key={`${setIndex}-${i}`} className="flex items-center">
                  <span className="mx-6 text-white font-medium text-sm md:text-base">
                    {feature}
                  </span>
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
