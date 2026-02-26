'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Inline SVG illustration for CTA
function RocketIllustration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rocket body */}
      <path d="M100 30L70 100L100 120L130 100L100 30Z" fill="#1a1a2e" stroke="#8b5cf6" strokeWidth="2"/>
      <path d="M85 100L75 130L100 120L125 130L115 100" fill="#0f0f1a" stroke="#8b5cf6" strokeWidth="2"/>
      
      {/* Rocket window */}
      <circle cx="100" cy="70" r="15" fill="#0f0f1a" stroke="#8b5cf6" strokeWidth="2"/>
      <circle cx="100" cy="70" r="8" fill="#8b5cf6" opacity="0.3"/>
      
      {/* Flames */}
      <path d="M90 130L100 160L110 130" fill="#8b5cf6" opacity="0.6"/>
      <path d="M95 130L100 150L105 130" fill="#a855f7" opacity="0.8"/>
      
      {/* Stars around */}
      <circle cx="50" cy="50" r="2" fill="#8b5cf6" opacity="0.6"/>
      <circle cx="150" cy="60" r="2" fill="#8b5cf6" opacity="0.5"/>
      <circle cx="40" cy="120" r="1.5" fill="#a855f7" opacity="0.4"/>
      <circle cx="160" cy="130" r="1.5" fill="#a855f7" opacity="0.5"/>
      <circle cx="60" cy="160" r="2" fill="#8b5cf6" opacity="0.3"/>
      <circle cx="140" cy="170" r="2" fill="#8b5cf6" opacity="0.4"/>
      
      {/* Orbit rings */}
      <ellipse cx="100" cy="100" rx="60" ry="20" stroke="#4c1d95" strokeWidth="1" opacity="0.3" fill="none"/>
      <ellipse cx="100" cy="100" rx="80" ry="30" stroke="#4c1d95" strokeWidth="1" opacity="0.2" fill="none"/>
      
      {/* Decorative dots */}
      <circle cx="30" cy="80" r="3" fill="#8b5cf6" opacity="0.2"/>
      <circle cx="170" cy="90" r="3" fill="#8b5cf6" opacity="0.2"/>
    </svg>
  )
}

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-transparent to-violet-950/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-dark-card to-dark-card" />
          <div className="absolute inset-0 border border-white/10 rounded-3xl" />

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                    <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                    Ready to start?
                  </span>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                    Ready to <span className="gradient-text">Transform</span> Your Business?
                  </h2>

                  <p className="text-gray-400 text-lg max-w-xl mb-8">
                    Let us discuss how we can help you achieve your digital goals. Get in touch for a free consultation.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      Start a Project
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <a
                      href="mailto:hello@afot.in"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
                    >
                      hello@afot.in
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="hidden lg:flex items-center justify-center"
              >
                <RocketIllustration className="w-full max-w-xs h-auto" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
