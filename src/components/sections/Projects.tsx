'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import {
  ShoppingIllustration,
  MobileAppIllustration,
  DataIllustration,
  WebDevIllustration,
  CloudIllustration,
} from '@/components/illustrations'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with seamless checkout and inventory management.',
    Illustration: ShoppingIllustration,
  },
  {
    title: 'FinTech Mobile App',
    category: 'Mobile Development',
    description: 'Secure banking application with real-time transactions and analytics.',
    Illustration: MobileAppIllustration,
  },
  {
    title: 'Healthcare Dashboard',
    category: 'UI/UX Design',
    description: 'Intuitive dashboard for healthcare providers to manage patient data.',
    Illustration: DataIllustration,
  },
  {
    title: 'OverDrive-DB SDK',
    category: 'Open Source',
    description: 'Official SDK for OverDrive-DB. High-performance database driver.',
    Illustration: CloudIllustration,
  },
  {
    title: 'AFOT IDE',
    category: 'Open Source',
    description: 'A powerful, lightweight IDE designed for modern web development.',
    Illustration: WebDevIllustration,
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Our Work"
          title="Featured Projects"
          description="Explore some of our recent work that showcases our expertise and creativity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full group cursor-pointer">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-violet-500/10 to-transparent mb-4 flex items-center justify-center overflow-hidden">
                  <project.Illustration className="w-full h-32 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-400 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-1 mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-violet-500/50 text-white rounded-xl transition-all hover:bg-white/5 font-medium"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
