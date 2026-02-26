import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AFOT Terms of Service - Read our terms and conditions for using our services.',
}

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert prose-purple max-w-none prose-headings:font-display prose-p:text-gray-300">
            <p className="text-gray-400 mb-8">Last updated: December 2024</p>

            <h2>Acceptance of Terms</h2>
            <p>By accessing and using AFOT services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

            <h2>Services</h2>
            <p>AFOT provides digital solutions including web development, mobile app development, cloud solutions, and technology consulting services.</p>

            <h2>Intellectual Property</h2>
            <p>All content, designs, and materials created by AFOT remain our intellectual property until full payment is received and ownership is transferred as agreed in project contracts.</p>

            <h2>Client Responsibilities</h2>
            <p>Clients are responsible for providing accurate information, timely feedback, and necessary materials required for project completion.</p>

            <h2>Payment Terms</h2>
            <p>Payment terms are specified in individual project agreements. Late payments may result in project delays or suspension of services.</p>

            <h2>Limitation of Liability</h2>
            <p>AFOT shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>

            <h2>Modifications</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.</p>

            <h2>Contact</h2>
            <p>For questions about these Terms of Service, contact us at hello@afot.in.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
