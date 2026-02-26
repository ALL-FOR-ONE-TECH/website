import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { ContactForm } from '@/components/forms/ContactForm'
import { TeamIllustration } from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with AFOT. Let us discuss how we can help transform your business with our digital solutions.',
  openGraph: {
    title: 'Contact Us | AFOT',
    description: 'Start your digital transformation journey with AFOT.',
  },
}

const contactInfo = [
  {
    label: 'Email',
    value: 'hello@afot.in',
    href: 'mailto:hello@afot.in',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'India',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <div>
              <SectionHeading
                label="Get in Touch"
                title="Let us Work Together"
                description="Have a project in mind? We would love to hear about it. Send us a message and we will get back to you as soon as possible."
                centered={false}
              />

              {/* Illustration */}
              <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <div className="p-6 flex items-center justify-center">
                  <TeamIllustration className="w-full max-w-xs h-auto" />
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <GlassCard key={info.label} hover={false} className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-white hover:text-violet-400 transition-colors font-medium">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Why Choose Us */}
              <GlassCard hover={false} className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Why Choose AFOT?</h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  {[
                    'Expert team with 5+ years experience',
                    '50+ successful projects delivered',
                    '99% client satisfaction rate',
                    'Transparent communication',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            {/* Right Side - Form */}
            <div>
              <GlassCard hover={false} className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
