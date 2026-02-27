import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AFOT Terms of Service - Read our terms and conditions for using our services.',
}

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 text-center">
            Terms and Conditions
          </h1>

          <div className="prose prose-invert prose-purple max-w-none prose-headings:font-display prose-p:text-gray-300 space-y-8">
            <div className="text-center text-gray-400 border-b border-white/10 pb-8 mb-12">
              <p>Last updated: February 2026</p>
              <p>At ALL FOR ONE TECH (AFOT), we strive to ensure that our customers are satisfied with their purchases. Below is our policy regarding refunds and cancellations.</p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Company Overview</h2>
              <p>ALL FOR ONE TECH (AFOT) is dedicated to delivering cutting-edge software tools and freelance project services that adhere to the highest standards of quality, ethics, and innovation. We operate under the laws of India, specifically the state of Tamil Nadu, and are committed to ensuring that our business practices reflect our core values of integrity, customer satisfaction, and continuous improvement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Mission Statement</h2>
              <p>Our mission is to empower individuals and businesses by providing advanced technology solutions and exceptional freelance services. We strive to be a trusted partner in the digital landscape, delivering products and services that enhance productivity, creativity, and growth.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Code of Conduct</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Integrity:</strong> All employees and partners are expected to act with honesty and integrity in all business dealings.</li>
                <li><strong>Respect:</strong> We promote a workplace that respects diversity, inclusivity, and individual rights.</li>
                <li><strong>Confidentiality:</strong> Employees must protect the confidentiality of company and client information.</li>
                <li><strong>Compliance:</strong> All employees are required to comply with applicable laws, regulations, and company policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Customer Service and Support</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Support Availability:</strong> Our customer support team is available Monday to Friday, 9 AM to 6 PM IST, excluding public holidays.</li>
                <li><strong>Response Time:</strong> We strive to respond to all inquiries within 24 hours on business days.</li>
                <li><strong>Complaint Resolution:</strong> If you have a complaint, please contact our support team. We will investigate and resolve your issue as quickly as possible.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Product and Service Delivery</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Product Delivery:</strong> Digital products are delivered via email or download link immediately upon payment confirmation. In rare cases, there may be delays due to technical issues, in which case we will notify you promptly.</li>
                <li><strong>Service Delivery:</strong> Freelance projects are delivered automatically via download upon payment. If you encounter any issues with the download, please contact us immediately, and we will resend the project.</li>
                <li><strong>Quality Assurance:</strong> We are committed to delivering products and services that meet or exceed client expectations. All products undergo rigorous testing, and services are reviewed for quality before delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Refunds and Cancellations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Freelance Projects:</strong> There are no refunds for freelance projects. Once the project is purchased, it is delivered automatically. If you encounter any issues with the download or the project is missed, please contact us, and we will resend the project. However, no refunds will be provided for freelance services.</li>
                <li><strong>Digital Products:</strong> Please refer to our Refunds/Cancellations Policy for detailed information on how refunds and cancellations for digital products are handled.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Intellectual Property</h2>
              <p>All content, trademarks, and intellectual property on our website are owned by ALL FOR ONE TECH (AFOT) unless otherwise stated.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage Rights:</strong> We do not claim any copyrights over user-uploaded content. However, we verify all content uploaded by sellers to ensure it is original and not publicly available on platforms like GitHub. Any content found to be already in use or publicly available will be rejected.</li>
                <li><strong>Third-Party Content:</strong> There is no third-party content on our website. All content is either created by our team or submitted by verified sellers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Seller Verification and Content Protection</h2>
              <p>When users upload content for sale through the seller tab, we verify the content to ensure its originality. If the content is found to be already available on platforms like GitHub or any other public domain, it will be rejected. Once approved, the content is securely stored and sold on our freelance page, ensuring that it is not leaked or misused.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Account and Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Eligibility:</strong> By using this website, you represent that you are at least 18 years old and have the legal authority to enter into a binding agreement.</li>
                <li><strong>Account Registration:</strong> To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Pricing and Payment</h2>
              <p>All prices listed on our website are in INR and are subject to change without notice. Payment must be made at the time of purchase through our secure payment gateway.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-violet-400">Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, ALL FOR ONE TECH (AFOT) will not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our website or products. AFOT makes no warranties, express or implied, regarding the accuracy, reliability, or completeness of the content on our website or the performance of our products and services.</p>
            </section>

            <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> allforonetech.in@gmail.com</p>
                <p><strong>Alternate Email:</strong> hello@afot.in</p>
                <p><strong>Location:</strong> Chennai, Tamil Nadu, India</p>
              </div>
            </section>

            <div className="text-center text-sm text-gray-500 pt-8 border-t border-white/10">
              <p>These Terms and Conditions are governed by the laws of India, specifically the state of Tamil Nadu.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
