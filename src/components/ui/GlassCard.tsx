'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  id?: string
}

export function GlassCard({ children, className, hover = true, glow = false, id }: GlassCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? {
        y: -8,
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        transition: { duration: 0.3 }
      } : undefined}
      className={clsx(
        'glass rounded-2xl p-6 transition-all duration-300',
        hover && 'hover:border-neon-purple/30 hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]',
        glow && 'neon-glow',
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}
