import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AFOT Privacy Policy - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-purple max-w-none prose-headings:font-display prose-p:text-gray-300 space-y-8">
            <div className="text-center text-gray-400 border-b border-white/10 pb-8 mb-12">
              <p>Last updated: February 2026</p>
              <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.</p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Information Collection</h2>
              <p>We collect information that you provide to us voluntarily when you register, make a purchase, or communicate with us. This may include your name, email address, billing information, and any other details necessary for the completion of transactions or services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Use of Information</h2>
              <p>The information collected is used to process orders, provide customer support, send updates, and improve our services. We do not share your personal information with third parties except as necessary to fulfill your request or comply with legal obligations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Data Security</h2>
              <p>We implement robust security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We use encryption, firewalls, and other security technologies to safeguard your data. Regular audits and updates are conducted to ensure the highest level of security.</p>
              <p className="text-sm italic">Note: No method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Data Retention</h2>
              <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Data Breach Response</h2>
              <p>In the event of a data breach, we will notify affected individuals as required by law and take immediate steps to mitigate the impact and prevent future breaches.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Cookies</h2>
              <p>Our website uses cookies to enhance user experience. Cookies are small files that are stored on your device when you visit our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Ethical Standards</h2>
              <p>ALL FOR ONE TECH (AFOT) is dedicated to ethical business practices and corporate social responsibility (CSR). We maintain high ethical standards in all aspects of our business, from product development to customer relations.</p>
            </section>

            <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Gmail:</strong> allforonetech.in@gmail.com</p>
                <p><strong>Alternate Email:</strong> allforonetech.in@gmail.com</p>
                <p><strong>Location:</strong> Chennai, Tamil Nadu, India</p>
              </div>
            </section>

            <div className="text-center text-sm text-gray-500 pt-8 border-t border-white/10">
              <p>This policy is governed by the laws of India, specifically the state of Tamil Nadu.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
