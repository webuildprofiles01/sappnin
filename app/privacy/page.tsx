import { Container } from "@/components/shared/Container";

export default function PrivacyPolicy() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">Last updated: April 22, 2026</p>

            <p className="mb-8">
              Sappnin (&ldquo;Sappnin&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &nbsp;&ldquo;our&rdquo;) values your privacy. This Privacy Policy
              explains what personal data we collect, how we use it, with whom
              we share it, and your rights under applicable data protection
              laws, including the GDPR where applicable.
            </p>

            <p className="mb-8">
              By using the Sappnin app (&ldquo;Service&rdquo;), you agree to
              this Privacy Policy.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">1) Who We Are</h2>
            <p className="mb-6">
              <strong>Data Controller:</strong> Sappnin
              <br />
              <strong>Address:</strong> La Corniche, Nueva Andalucia, Marbella,
              Spain, 29604
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:sappninteam@gmail.com"
                className="text-brand-orange hover:underline"
              >
                sappninteam@gmail.com
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a
                href="https://www.sappnin.io"
                className="text-brand-orange hover:underline"
              >
                https://www.sappnin.io
              </a>
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              2) Data We Collect
            </h2>
            <p className="mb-4">
              We collect the following categories of personal data:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-6">
              <li>
                <strong>Account Data:</strong> Name, email address, user ID,
                authentication provider (email/password, Google, Apple), and
                email verification status.
              </li>
              <li>
                <strong>Profile Data:</strong> Date of birth, profile details
                (bio, preferences, pronouns/relationship status if provided),
                profile photos and media you upload, and verification media
                (including verification video submissions).
              </li>
              <li>
                <strong>Location Data:</strong> Precise or approximate location
                (depending on your permission settings), location sharing
                preferences, and location updates used for nearby discovery/map
                features.
              </li>
              <li>
                <strong>Messages and Social Interaction Data:</strong> Chat
                message content and timestamps, contact requests, likes,
                notifications and related metadata, and reports/complaints
                submitted about users with moderation-related details.
              </li>
              <li>
                <strong>Device &amp; Technical Data:</strong> Push notification
                token(s) (FCM/APNs), app activity status (e.g.,
                online/offline/app active), and basic device/app diagnostic
                data, including crash/error logs.
              </li>
              <li>
                <strong>Support &amp; Contact Data:</strong> Information you
                submit through contact/suspension appeal forms (email, subject,
                message).
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              3) How We Use Your Data
            </h2>
            <p className="mb-4">We use personal data to:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Create and manage your account.</li>
              <li>
                Provide core app features (discovery, map, messaging, social
                interactions).
              </li>
              <li>Deliver push notifications.</li>
              <li>
                Operate safety and moderation workflows (reports, suspensions,
                blocks, verification).
              </li>
              <li>
                Provide support and respond to appeals/contact requests.
              </li>
              <li>Maintain app security, performance, and reliability.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              4) Legal Bases for Processing (GDPR)
            </h2>
            <p className="mb-4">
              Where GDPR applies, we rely on one or more of these legal bases:
            </p>
            <ul className="mb-6 list-disc pl-6">
              <li>
                Contractual necessity (to provide the Service you requested).
              </li>
              <li>
                Legitimate interests (service security, fraud/safety prevention,
                product reliability).
              </li>
              <li>
                Consent (e.g., location permissions, notifications where
                required).
              </li>
              <li>Legal obligation (where required by law).</li>
            </ul>
            <p className="mb-6">
              You may withdraw consent at any time where processing is based on
              consent (without affecting prior lawful processing).
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              5) Data Sharing and Processors
            </h2>
            <p className="mb-4">We do not sell your personal data.</p>
            <p className="mb-4">We may share data with:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>
                Other users as part of app functionality (e.g., profile
                visibility, messaging context).
              </li>
              <li>
                Service providers/processors, such as:
                <ul className="mt-2 list-disc pl-6">
                  <li>Firebase Authentication</li>
                  <li>Cloud Firestore</li>
                  <li>Firebase Storage</li>
                  <li>Firebase Cloud Messaging</li>
                  <li>Firebase Crashlytics</li>
                  <li>Google Sign-In / Apple Sign-In providers</li>
                  <li>Google Maps services</li>
                  <li>
                    Email delivery infrastructure used for support/admin
                    workflows
                  </li>
                </ul>
              </li>
              <li>
                Authorities or legal recipients when legally required.
              </li>
              <li>Successors in a merger/acquisition/restructuring.</li>
            </ul>
            <p className="mb-6">
              All processors are used under appropriate contractual and security
              safeguards.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              6) International Transfers
            </h2>
            <p className="mb-6">
              Your data may be processed outside your country (including outside
              the EEA). Where required, we apply appropriate safeguards such as
              Standard Contractual Clauses (SCCs) or equivalent lawful transfer
              mechanisms.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">7) Retention</h2>
            <p className="mb-4">
              We retain data only as long as necessary for the purposes above,
              including:
            </p>
            <ul className="mb-6 list-disc pl-6">
              <li>While your account is active.</li>
              <li>For safety/moderation and dispute handling where needed.</li>
              <li>As required by legal obligations.</li>
              <li>
                Until deletion/anonymization is requested and completed, except
                data we must retain by law.
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              8) Account Deletion and Data Deletion
            </h2>
            <p className="mb-4">You can request deletion by:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Using the in-app account deletion feature, or</li>
              <li>
                Contacting us at{" "}
                <a
                  href="mailto:sappninteam@gmail.com"
                  className="text-brand-orange hover:underline"
                >
                  sappninteam@gmail.com
                </a>
                .
              </li>
            </ul>
            <p className="mb-6">
              When deletion is processed, we delete or anonymize relevant
              account data, subject to legal retention requirements and limited
              technical backup windows.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">9) Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have rights to:
            </p>
            <ul className="mb-6 list-disc pl-6">
              <li>Access your personal data.</li>
              <li>Correct inaccurate data.</li>
              <li>Delete your data.</li>
              <li>Restrict or object to processing.</li>
              <li>Data portability.</li>
              <li>Withdraw consent.</li>
              <li>
                Lodge a complaint with your data protection authority.
              </li>
            </ul>
            <p className="mb-6">
              To exercise rights, contact:{" "}
              <a
                href="mailto:sappninteam@gmail.com"
                className="text-brand-orange hover:underline"
              >
                sappninteam@gmail.com
              </a>
              .
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">10) Security</h2>
            <p className="mb-6">
              We use reasonable technical and organizational safeguards to
              protect your data, including access controls and secure cloud
              infrastructure. No system can be guaranteed 100% secure.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">11) Children</h2>
            <p className="mb-6">
              Sappnin is intended only for users 18+. We do not knowingly allow
              under-18 users. If we learn an underage account exists, we may
              remove it and associated data.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              12) Changes to This Policy
            </h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will
              update the &ldquo;Last updated&rdquo; date and, where required,
              provide additional notice.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">13) Contact</h2>
            <p className="mb-6">
              For privacy questions or rights requests:
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:sappninteam@gmail.com"
                className="text-brand-orange hover:underline"
              >
                sappninteam@gmail.com
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a
                href="https://www.sappnin.io"
                className="text-brand-orange hover:underline"
              >
                https://www.sappnin.io
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}