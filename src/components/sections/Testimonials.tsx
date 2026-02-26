'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'

const testimonials = [
  {
    quote:
      'AFOT transformed our digital presence completely. Their team delivered beyond our expectations with exceptional attention to detail.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStart',
    initials: 'SJ',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    quote:
      'Working with AFOT was a game-changer for our business. They understood our vision and brought it to life beautifully.',
    author: 'Michael Chen',
    role: 'Founder, InnovateCo',
    initials: 'MC',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    quote:
      'The team expertise in modern technologies and their commitment to quality made all the difference in our project success.',
    author: 'Emily Rodriguez',
    role: 'CTO, DataFlow',
    initials: 'ER',
    gradient: 'from-emerald-500 to-teal-600',
  },
]

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-deeper to-dark" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[150px] translate-x-1/2" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Hear from the companies we have helped transform their digital presence."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">{testimonial.quote}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
