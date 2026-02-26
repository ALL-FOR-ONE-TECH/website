'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TeamIllustration } from '@/components/illustrations'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  { value: 50, label: 'Projects Delivered', suffix: '+' },
  { value: 30, label: 'Happy Clients', suffix: '+' },
  { value: 5, label: 'Years Experience', suffix: '+' },
  { value: 99, label: 'Client Satisfaction', suffix: '%' },
]

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[180px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main illustration */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <div className="p-8 flex items-center justify-center">
                  <TeamIllustration className="w-full max-w-md h-auto" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-violet-500/20 rounded-2xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading label="About Us" title="Innovating for Tomorrow" centered={false} />
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              AFOT is a forward-thinking technology company dedicated to helping businesses thrive in the digital age. We
              combine technical expertise with creative innovation to deliver solutions that make a real impact.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our team of passionate developers, designers, and strategists work collaboratively to transform complex
              challenges into elegant, user-friendly solutions. We believe in building long-term partnerships with our
              clients.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
