import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | AFOT',
  description: 'AFOT Privacy Policy — Learn how we collect, use, and protect your personal information. Your privacy is our priority.',
  alternates: { canonical: 'https://afot.in/privacy' },
}

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information you provide directly — such as your name, email address, company name, and project details — when you fill out our contact form or communicate with us. We do not collect payment information directly; all payments are handled by secure third-party processors.',
  },
  {
    title: 'How We Use Your Information',
    content: 'Your information is used exclusively to respond to your inquiries, deliver agreed services, send project updates, and improve our offerings. We never sell, rent, or trade your personal data to any third party.',
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard security measures including encryption, firewalls, and access controls to protect your personal information. All form submissions are processed through secured channels. While no method of internet transmission is 100% secure, we take every reasonable precaution.',
  },
  {
    title: 'Data Retention',
    content: 'We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. Project-related communications are retained for up to 3 years for audit and support purposes.',
  },
  {
    title: 'Cookies',
    content: 'Our website uses essential cookies to ensure basic functionality and performance analytics. We do not use advertising or tracking cookies. You may disable cookies in your browser settings, though some features may be affected.',
  },
  {
    title: 'Your Rights',
    content: 'You have the right to request access to, correction of, or deletion of your personal data that we hold. To exercise any of these rights, contact us at allforonetech.in@gmail.com and we will respond within 7 business days.',
  },
  {
    title: 'Third-Party Services',
    content: 'We use Web3Forms for contact form submissions and Google Fonts for typography. These services may process limited data according to their own privacy policies. We do not share personal project or client data with any third-party analytics or advertising services.',
  },
  {
    title: 'Data Breach Response',
    content: 'In the unlikely event of a data breach, we will notify affected individuals within 72 hours as required by applicable law and take immediate steps to mitigate impact and prevent recurrence.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-violet-400 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">Last updated: March 2026 · Your privacy is important to us and we are committed to protecting it.</p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-violet-400 text-xs font-bold font-mono">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-2">{section.title}</h2>
                    <p className="text-gray-400 leading-relaxed text-sm">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-10 p-8 rounded-2xl border border-violet-500/20 bg-violet-500/5">
            <h2 className="text-xl font-bold text-white mb-3">Questions about this policy?</h2>
            <p className="text-gray-400 mb-4 text-sm">Reach out and we will respond within one business day.</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:allforonetech.in@gmail.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                allforonetech.in@gmail.com
              </a>
              <span className="text-gray-600">·</span>
              <span className="text-gray-400">Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center text-sm text-gray-600 pt-10 border-t border-white/5 mt-10">
            <p>This policy is governed by the laws of India. · <Link href="/terms" className="text-violet-400 hover:underline">Terms of Service</Link></p>
          </div>
        </div>
      </section>
    </div>
  )
}
