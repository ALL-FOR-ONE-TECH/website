'use client'

import { motion } from 'framer-motion'

interface MarqueeBannerProps {
  text: string
  className?: string
}

export function MarqueeBanner({ text, className = '' }: MarqueeBannerProps) {
  return (
    <div className={`relative overflow-hidden py-4 bg-gradient-to-r from-neon-purple via-purple-600 to-neon-purple ${className}`}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 text-white font-medium flex items-center gap-4">
            {text}
            <span className="w-2 h-2 bg-white/50 rounded-full" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
