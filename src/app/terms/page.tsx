import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | AFOT',
  description: 'AFOT Terms of Service — Read our terms and conditions for using our digital services, freelance projects, and software solutions.',
  alternates: { canonical: 'https://afot.in/terms' },
}

const sections = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Company Overview',
    content: 'ALL FOR ONE TECH (AFOT) is a technology services company based in Chennai, Tamil Nadu, India. We deliver web development, mobile applications, cloud solutions, AI integration, UI/UX design, and cybersecurity services. By using our website or engaging our services, you agree to these terms.',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Services & Delivery',
    content: 'Project deliverables, timelines, and scope are defined during the agreement phase. Digital deliverables are provided via email or secure download. All work undergoes quality review before delivery. AFOT reserves the right to decline any project that conflicts with our values or legal requirements.',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Pricing & Payment',
    content: 'All prices are quoted in INR and confirmed in writing before project commencement. Payment terms are agreed per project. We accept bank transfer and UPI. Work begins upon receipt of the agreed deposit. Final deliveries are made upon full payment clearance.',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
    title: 'Refunds & Cancellations',
    content: 'Deposits are non-refundable once work has commenced. If AFOT fails to deliver agreed milestones within the stated timeline, a partial or full refund may be issued at our discretion. Custom freelance project fees are non-refundable after delivery. Disputes should be raised within 7 days of delivery.',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Intellectual Property',
    content: 'Upon full payment, the client owns the final deliverables. AFOT retains the right to display completed work in our portfolio unless explicitly agreed otherwise. All code, design, and content created by AFOT specifically for a project transfers to the client at handover. We do not transfer ownership of third-party libraries or open-source components.',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Confidentiality',
    content: 'AFOT treats all client project details, business information, and communications as strictly confidential. We will not share, sell, or disclose any client information to third parties without explicit written consent, except where required by law.',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by Indian law, AFOT is not liable for indirect, incidental, or consequential damages arising from use of our services. Our total liability in any dispute is limited to the amount paid for the specific service in question. We make no warranty that our services will be uninterrupted or error-free.',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Governing Law',
    content: 'These Terms are governed by the laws of India, specifically the state of Tamil Nadu. Any disputes arising from these terms shall first be addressed through good-faith negotiation, followed by mediation if needed, before proceeding to legal action in Chennai jurisdiction.',
  },
]

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-violet-400 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">Last updated: March 2026 · By engaging our services, you agree to the following terms.</p>
          </div>

          {/* Sections grid */}
          <div className="space-y-4">
            {sections.map((section, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0 text-violet-400">
                    {section.icon}
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
            <h2 className="text-xl font-bold text-white mb-3">Questions about these terms?</h2>
            <p className="text-gray-400 mb-4 text-sm">Contact us and we will clarify within one business day.</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:allforonetech.in@gmail.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                allforonetech.in@gmail.com
              </a>
              <span className="text-gray-600">·</span>
              <span className="text-gray-400">Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 pt-10 border-t border-white/5 mt-10">
            <p>Governed by the laws of India. · <Link href="/privacy" className="text-violet-400 hover:underline">Privacy Policy</Link></p>
          </div>
        </div>
      </section>
    </div>
  )
}
