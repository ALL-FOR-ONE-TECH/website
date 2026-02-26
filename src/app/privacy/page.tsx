import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AFOT Privacy Policy - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-purple max-w-none prose-headings:font-display prose-p:text-gray-300">
            <p className="text-gray-400 mb-8">Last updated: December 2024</p>

            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us.</p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and respond to your inquiries.</p>

            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>

            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>Cookies</h2>
            <p>We use cookies and similar technologies to enhance your experience on our website and analyze site traffic.</p>

            <h2>Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us at hello@afot.in for any privacy-related requests.</p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at hello@afot.in.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
