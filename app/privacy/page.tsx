import { Container } from "@/components/shared/Container"

export default function PrivacyPolicy() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">Last updated: February 12, 2025</p>

            <p className="mb-8">
              This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Sappnin application (the &quot;Service&quot;) and outlines your privacy rights and how the law protects you, in accordance with the General Data Protection Regulation (GDPR).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Interpretation and Definitions</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Account:</strong> A unique account created for you to access our Service.</li>
              <li><strong>Application:</strong> Sappnin, the software program provided by the Company.</li>
              <li><strong>Company:</strong> Sappnin, La Corniche, Nueva Andalucía, Marbella, Spain, 29604.</li>
              <li><strong>Data Controller:</strong> The entity responsible for determining the purposes and means of processing personal data.</li>
              <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual.</li>
              <li><strong>Processing:</strong> Any operation performed on personal data, including collection, storage, modification, and deletion.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Legal Basis for Processing Personal Data</h2>
            <p className="mb-4">We process your data under the following lawful bases:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Consent:</strong> When you provide explicit consent for us to process your data.</li>
              <li><strong>Contractual Necessity:</strong> When processing is necessary to fulfill a contract with you.</li>
              <li><strong>Legal Obligation:</strong> When processing is required by law.</li>
              <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business interests, provided it does not override your rights.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Data Collected</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Data</h3>
            <p className="mb-4">While using our Service, we may collect the following Personal Data:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Identity Data:</strong> First name, last name.</li>
              <li><strong>Contact Data:</strong> Email address, phone number.</li>
              <li><strong>Location Data:</strong> IP address, geographic location (if enabled).</li>
              <li><strong>Profile Data:</strong> Preferences, profile information, social media connections.</li>
              <li><strong>Usage Data:</strong> Information about how you use the App.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your GDPR Rights</h2>
            <p className="mb-4">Under the GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Right to Access:</strong> You can request a copy of your personal data.</li>
              <li><strong>Right to Rectification:</strong> You can correct inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> You can request deletion of your data.</li>
              <li><strong>Right to Restrict Processing:</strong> You can request to limit data processing.</li>
              <li><strong>Right to Data Portability:</strong> You can receive your data in a structured format.</li>
              <li><strong>Right to Object:</strong> You can object to data processing.</li>
              <li><strong>Right to Withdraw Consent:</strong> You can withdraw processing consent at any time.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p className="mb-6">
              We implement industry-standard security measures to protect your data, including encryption, access controls, and secure data storage. However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. International Data Transfers</h2>
            <p className="mb-6">
              Your data may be transferred to countries outside the European Economic Area (EEA). We ensure such transfers are protected through mechanisms like Standard Contractual Clauses (SCCs) and Data Privacy Framework agreements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
            <p className="mb-6">
              For questions about this Privacy Policy or to exercise your rights, contact us at:<br />
              Email: <a href="mailto:sappninteam@gmail.com" className="text-brand-orange hover:underline">sappninteam@gmail.com</a><br />
              Website: <a href="https://www.sappnin.io" className="text-brand-orange hover:underline">www.sappnin.io</a>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Retention</h2>
            <p className="mb-4">We retain your personal data:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>As long as your account remains active.</li>
              <li>As required by legal obligations.</li>
              <li>Until you request data deletion (see Section 9).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Data Deletion & Account Termination</h2>
            <p className="mb-6">
              You may request the deletion of your personal data by contacting us at sappninteam@gmail.com. Upon request:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Your account will be permanently deleted.</li>
              <li>Data required for legal obligations will be retained.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Cookies & Tracking Technologies</h2>
            <p className="mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Enhance user experience.</li>
              <li>Analyze usage trends.</li>
              <li>Store user preferences.</li>
            </ul>
            <p className="mb-6">You can manage cookie preferences through your browser settings.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. International Data Transfers</h2>
            <p className="mb-6">
              Your data may be transferred to countries outside the European Economic Area (EEA). We ensure such transfers are protected through mechanisms like Standard Contractual Clauses (SCCs) and Data Privacy Framework agreements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy periodically. Significant changes will be communicated via email or in-app notifications.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Information</h2>
            <p className="mb-6">
              For questions about this Privacy Policy or to exercise your rights, contact us at:<br />
              Email: <a href="mailto:sappninteam@gmail.com" className="text-brand-orange hover:underline">sappninteam@gmail.com</a><br />
              Website: <a href="https://www.sappnin.io" className="text-brand-orange hover:underline">www.sappnin.io</a>
            </p>

            <p className="mt-8 mb-6">
              By using Sappnin, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 