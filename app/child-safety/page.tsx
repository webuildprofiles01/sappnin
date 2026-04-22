import { Container } from "@/components/shared/Container";

export default function ChildSafetyPage() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold sm:text-5xl">
            Child safety standards - Sappnin
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">Last updated: 19 April, 2026</p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">Introduction</h2>
            <p className="mb-6">
              Sappnin is committed to protecting children and young people from
              sexual abuse and exploitation on our service. These standards
              describe our approach to prevention, detection, reporting, and
              cooperation with authorities. They apply to all users and all
              features of the app.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">Zero tolerance</h2>
            <p className="mb-6">
              We do not allow child sexual abuse material (CSAM), grooming,
              sexual exploitation of minors, or any content or conduct that
              endangers children. Violations may result in immediate removal of
              content, account termination, preservation of records where
              required by law, and referral to law enforcement and/or the
              National Center for Missing &amp; Exploited Children (NCMEC) or
              other competent authorities as applicable.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              Reporting in the app
            </h2>
            <p className="mb-6">
              Users can report child safety concerns directly in the app.
              Reports are reviewed under our safety and enforcement processes.
              We treat child safety reports with priority.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              Cooperation with authorities
            </h2>
            <p className="mb-6">
              Where we are legally permitted and required to do so, we report
              apparent CSAM to appropriate regional or national authorities
              and/or designated organizations (for example, as required in the
              United States under applicable law). We may preserve and disclose
              information when we have a good-faith belief it is necessary to
              comply with legal process or to protect the safety of any person.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              Age and eligibility
            </h2>
            <p className="mb-6">
              Sappnin is intended for users aged 18+. Accounts that misrepresent
              age or are used to harm minors are prohibited.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">Enforcement</h2>
            <p className="mb-6">
              We may use a combination of user reports, automated signals where
              deployed, human review, and account restrictions to enforce these
              standards. We update our practices as our product and legal
              obligations evolve.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold">Contact</h2>
            <p className="mb-6">
              For child safety matters, contact:{" "}
              <a
                href="mailto:sappninteam@gmail.com"
                className="text-brand-orange hover:underline"
              >
                sappninteam@gmail.com
              </a>
              . We aim to respond to urgent child safety issues promptly.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
