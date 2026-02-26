import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { CTA } from '@/components/sections/CTA'
import {
  WebDevIllustration,
  MobileAppIllustration,
  CloudIllustration,
  DesignIllustration,
  AIIllustration,
  SecurityIllustration,
} from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our comprehensive digital services including web development, mobile apps, cloud solutions, AI integration, and cybersecurity.',
  openGraph: {
    title: 'Our Services | AFOT',
    description: 'Comprehensive digital solutions to transform your business.',
  },
}

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'API Development'],
    Illustration: WebDevIllustration,
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
    Illustration: MobileAppIllustration,
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps solutions.',
    features: ['AWS & Azure', 'Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
    Illustration: CloudIllustration,
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    Illustration: DesignIllustration,
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence.',
    features: ['Chatbots', 'Predictive Analytics', 'Computer Vision', 'NLP Solutions'],
    Illustration: AIIllustration,
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
    Illustration: SecurityIllustration,
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Services"
            title="What We Offer"
            description="Comprehensive digital solutions tailored to your unique business needs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <GlassCard key={service.id} id={service.id} className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-40 h-32 rounded-xl bg-gradient-to-br from-violet-500/10 to-transparent flex items-center justify-center flex-shrink-0">
                    <service.Illustration className="w-full h-28" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-300 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-violet-400 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
