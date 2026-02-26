'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({ label, title, description, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 glass neon-border rounded-full text-neon-purple text-sm font-medium mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}
