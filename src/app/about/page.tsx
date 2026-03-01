import type { Metadata } from 'next'
import { CTA } from '@/components/sections/CTA'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { TeamIllustration, SuccessIllustration, AIIllustration, SecurityIllustration } from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about AFOT - a forward-thinking technology company dedicated to helping businesses thrive in the digital age.',
  openGraph: {
    title: 'About AFOT',
    description: 'Learn about our mission, values, and the team behind AFOT.',
  },
}

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to stay ahead.',
    Illustration: AIIllustration,
  },
  {
    title: 'Collaboration',
    description: 'We work closely with clients as true partners in their success.',
    Illustration: TeamIllustration,
  },
  {
    title: 'Excellence',
    description: 'We deliver nothing less than exceptional quality in everything we do.',
    Illustration: SuccessIllustration,
  },
  {
    title: 'Security',
    description: 'We prioritize security and protect your digital assets at every step.',
    Illustration: SecurityIllustration,
  },
]

const whyUs = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Experienced Team',
    description: 'Skilled professionals across multiple domains with years of real-world expertise.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: 'Research-Backed',
    description: 'Innovative solutions rooted in deep research and industry best practices.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Secure & Scalable',
    description: 'We prioritize security, scalability, and innovation in every product we build.',
  },
]

const processSteps = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Delivery',
    description: 'We ship production-ready products rapidly without sacrificing code quality or security standards.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: 'Client-First Communication',
    description: 'Dedicated project managers keep you informed at every milestone with clear, jargon-free updates.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Global Reach',
    description: 'Serving clients worldwide with distributed teams that operate across time zones seamlessly.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'On-Time Guarantee',
    description: 'We commit to delivery windows and honour them — no hidden delays, no last-minute surprises.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'Clear quotes upfront with no surprise invoices — you know exactly what you pay and why.',
  },
]

const timeline = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description: 'We invest time understanding your industry, competitors, and unique business challenges before writing a single line of code.',
    side: 'left',
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description: 'Our architects sketch a scalable system design while UI/UX experts craft pixel-perfect wireframes aligned with your brand.',
    side: 'right',
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'Engineering happens in short sprints with code reviews, daily stand-ups, and continuous integration built in from day one.',
    side: 'left',
  },
  {
    step: '04',
    title: 'Quality Assurance',
    description: 'Automated and manual testing across real devices ensures performance, security, and accessibility before anything ships.',
    side: 'right',
  },
  {
    step: '05',
    title: 'Deployment & Handover',
    description: 'We deploy your project to a live environment and ensure a smooth, successful launch.',
    side: 'left',
  },
  {
    step: '06',
    title: 'Support & Maintenance',
    description: "Our support doesn't end at launch. We provide ongoing monitoring and technical support.",
    side: 'right',
  },
]

const stats = [
  { value: '20+', label: 'projects delivered' },
  { value: '10+', label: 'happy clients' },
  { value: '2+', label: 'years of experience' },
  { value: '94%', label: 'client satisfaction' },
]

export default function AboutPage() {
  return (
    <div className="pt-24">

      {/* Hero + Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="About AFOT"
                title="Built to Build Great Things"
                description="AFOT is a growing technology company founded by engineers who believe that quality software shouldn't be a luxury. We build digital products that are fast, reliable, and genuinely useful."
                centered={false}
              />
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <div className="p-8 flex items-center justify-center">
                  <TeamIllustration className="w-full max-w-md h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story + Vision + Mission */}
      <section className="section-padding bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Company Story</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                AFOT was founded with the mission to empower businesses through innovative digital solutions. We combine deep research, industry experience, and technical expertise to deliver value-driven results.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From startups to enterprises, we partner with organizations of all sizes to craft tailored digital strategies that drive growth, efficiency, and long-term success in a rapidly evolving technological landscape.
              </p>
            </div>
            <div className="grid gap-6">
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Vision</h3>
                    <p className="text-gray-400">Democratize cutting-edge technology for every business and industry across the world.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Mission</h3>
                    <p className="text-gray-400">Deliver secure, scalable, and intelligent digital solutions that transform how businesses operate.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Values</h3>
                    <p className="text-gray-400">Integrity, transparency, and client-first thinking in every project and partnership.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Why AFOT"
            title="Why Choose Us?"
            description="We're not just a vendor — we're your long-term digital partner."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <GlassCard key={item.title} className="text-center group hover:border-violet-500/40 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-transparent via-violet-950/5 to-transparent">
        <div className="container-custom">
          <SectionHeading label="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <GlassCard key={value.title}>
                <div className="h-24 mb-4 flex items-center justify-center">
                  <value.Illustration className="w-full h-20" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Process"
            title="How We Work & Deliver Projects"
            description="Our process ensures efficient, high-quality, and timely project delivery every time."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {processSteps.map((step) => (
              <GlassCard key={step.title} className="group hover:border-violet-500/40 transition-all duration-300">
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="section-padding bg-gradient-to-b from-transparent via-violet-950/5 to-transparent">
        <div className="container-custom">
          <SectionHeading
            label="Our Timeline"
            title="Our Project Timeline"
            description="A clear, structured process from discovery to post-launch support."
          />
          <div className="relative">
            {/* Center line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.step}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${item.side === 'right' ? 'lg:flex-row-reverse' : ''
                    }`}
                >
                  {/* Content */}
                  <div className={`lg:w-5/12 ${item.side === 'right' ? 'lg:text-left' : 'lg:text-right'}`}>
                    <GlassCard className="group hover:border-violet-500/40 transition-all duration-300">
                      <div className="text-violet-400 text-sm font-bold mb-2">Step {item.step}</div>
                      <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </GlassCard>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-violet-600 border-4 border-dark flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden lg:block lg:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
