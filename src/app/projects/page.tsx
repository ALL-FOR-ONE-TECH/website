import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { CTA } from '@/components/sections/CTA'
import {
  ShoppingIllustration,
  MobileAppIllustration,
  DataIllustration,
  AIIllustration,
  WebDevIllustration,
  CloudIllustration,
} from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of successful projects across web development, mobile apps, and digital solutions.',
  openGraph: {
    title: 'Our Projects | AFOT',
    description: 'See our work and the results we deliver for our clients.',
  },
}

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with seamless checkout, inventory management, and analytics dashboard.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    Illustration: ShoppingIllustration,
  },
  {
    title: 'FinTech Mobile App',
    category: 'Mobile Development',
    description: 'Secure banking application with real-time transactions, biometric auth, and spending analytics.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    Illustration: MobileAppIllustration,
  },
  {
    title: 'Healthcare Dashboard',
    category: 'UI/UX Design',
    description: 'Intuitive dashboard for healthcare providers to manage patient data and appointments.',
    tech: ['React', 'D3.js', 'Firebase'],
    Illustration: DataIllustration,
  },
  {
    title: 'AI Chatbot Platform',
    category: 'AI/ML',
    description: 'Intelligent customer service chatbot with natural language processing capabilities.',
    tech: ['Python', 'TensorFlow', 'AWS'],
    Illustration: AIIllustration,
  },
  {
    title: 'Real Estate Portal',
    category: 'Web Development',
    description: 'Property listing platform with virtual tours, map integration, and lead management.',
    tech: ['Next.js', 'Mapbox', 'Prisma'],
    Illustration: WebDevIllustration,
  },
  {
    title: 'Cloud Infrastructure',
    category: 'DevOps',
    description: 'Scalable cloud infrastructure with automated deployments and monitoring.',
    tech: ['AWS', 'Terraform', 'Kubernetes'],
    Illustration: CloudIllustration,
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Portfolio"
            title="Featured Projects"
            description="A showcase of our work across various industries and technologies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <GlassCard key={project.title} className="group cursor-pointer">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-violet-500/10 to-transparent mb-4 flex items-center justify-center overflow-hidden">
                  <project.Illustration className="w-full h-28 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-400 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
