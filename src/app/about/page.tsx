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

const team = [
  { name: 'Alex Kumar', role: 'Founder & CEO', initials: 'AK', gradient: 'from-violet-500 to-purple-600' },
  { name: 'Priya Sharma', role: 'Lead Developer', initials: 'PS', gradient: 'from-blue-500 to-cyan-600' },
  { name: 'Raj Patel', role: 'Design Lead', initials: 'RP', gradient: 'from-emerald-500 to-teal-600' },
  { name: 'Maya Singh', role: 'Project Manager', initials: 'MS', gradient: 'from-orange-500 to-amber-600' },
]

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies.',
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
    description: 'We prioritize security and protect your digital assets.',
    Illustration: SecurityIllustration,
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="About AFOT"
                title="Building Digital Excellence"
                description="We are a team of passionate technologists, designers, and strategists committed to transforming businesses through innovative digital solutions."
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

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Team"
            title="Meet the Experts"
            description="A diverse team of talented individuals working together to deliver exceptional results."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <GlassCard key={member.name} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-xl`}>
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-violet-400 text-sm">{member.role}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
