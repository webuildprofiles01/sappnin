import { Container } from "@/components/shared/Container"

export default function DataDeletionPolicy() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">User Data Deletion Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">Last Updated: 17-02-2025</p>

            <p className="mb-8">
              At Sappnin, we respect your privacy and provide you with control over your personal data.
              If you wish to delete your account and associated data from our platform, please follow the
              instructions below.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How to Request Data Deletion</h2>
            <p className="mb-4">You can request to delete your data in one of the following ways:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. In-App Account Deletion</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Go to Settings {'>'} Account</li>
              <li>Select Delete My Account</li>
              <li>Confirm your request</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Email Request</h3>
            <p className="mb-4">
              If you are unable to delete your account through the app, you can submit a request by emailing us:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Email: <a href="mailto:info@sappnin.io" className="text-brand-orange hover:underline">info@sappnin.io</a></li>
              <li>Subject: &quot;Request for Data Deletion&quot;</li>
              <li>Include:
                <ul className="list-disc pl-6 mt-2">
                  <li>Your registered email address</li>
                  <li>Your username (if applicable)</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What Happens After You Request Deletion?</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Your request will be processed within 7-14 days.</li>
              <li>All personal data, messages, and profile information will be permanently deleted.</li>
              <li>Once deleted, your data cannot be recovered.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Exceptions</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Some data may be retained for legal, security, or fraud prevention reasons as required by law.</li>
              <li>Anonymized data may be kept for analytics but will not be linked to your identity.</li>
            </ul>

            <p className="mt-8 mb-6">
              If you have any questions, please contact us at{" "}
              <a href="mailto:info@sappnin.io" className="text-brand-orange hover:underline">
                info@sappnin.io
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 