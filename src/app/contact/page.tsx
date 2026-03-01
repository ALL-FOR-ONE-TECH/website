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
    value: 'allforonetech.in@gmail.com',
    href: 'mailto:allforonetech.in@gmail.com',
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
    label: 'WhatsApp Support',
    value: '+91 8925667025',
    href: 'https://wa.me/918925667025?text=Hello%20AFOT%20Support,%20I%20need%20assistance%20with%20a%20project.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Call Us',
    value: '+91 9025486458',
    href: 'tel:+919025486458',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Business Hours',
    value: 'Mon-Fri: 9AM - 5PM',
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
                    '20+ projects delivered across web, mobile & AI',
                    '10+ happy clients who trust us',
                    '2+ years of focused expertise',
                    '94% client satisfaction rate',
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
