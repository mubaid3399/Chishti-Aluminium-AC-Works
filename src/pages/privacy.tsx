import { FadeIn } from "@/components/ui/fade-in";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Privacy() {
  useDocumentMeta({
    title: "Privacy Policy | CHISHTI Aluminium & Cool Point",
    description:
      "How CHISHTI Aluminium & Cool Point collects, uses and protects the personal information of customers across Islamabad, Rawalpindi and Pakistan.",
    path: "/privacy",
  });

  const lastUpdated = "25 May 2026";

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero */}
      <section className="px-6 md:px-16 py-20 max-w-4xl mx-auto text-center border-b border-gray-100">
        <FadeIn>
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">
            Legal
          </div>
          <h1 className="font-serif text-[clamp(1.875rem,7vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-6 break-words">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            How we collect, use and safeguard your information when you visit
            our website or engage our aluminium, glass and HVAC services.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </FadeIn>
      </section>

      {/* Body */}
      <section className="px-6 md:px-16 py-20 max-w-3xl mx-auto">
        <FadeIn>
          <div className="prose-section space-y-12 text-gray-700 text-base md:text-lg leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                1. Who We Are
              </h2>
              <p>
                CHISHTI Aluminium &amp; Cool Point ("CHISHTI", "we", "us" or
                "our") is a registered architectural and HVAC services
                business based at P.W.D Street Number 1, Block A Sector A
                PWD Society, Islamabad, Pakistan. We provide aluminium
                fabrication, architectural glass, UPVC, AC installation,
                HVAC and refrigeration services across Islamabad, Rawalpindi
                and surrounding areas.
              </p>
              <p className="mt-4">
                This policy explains how we handle the information you share
                with us through our website
                {" "}
                <a
                  href="https://chishtiworks.com"
                  className="underline hover:text-black"
                >
                  chishtiworks.com
                </a>
                , WhatsApp, phone calls, email and on-site consultations.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                2. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Contact details</strong> you provide voluntarily —
                  name, phone number, email address and project location —
                  through our contact form, WhatsApp inquiries or call
                  requests.
                </li>
                <li>
                  <strong>Project information</strong> shared during
                  consultations — site measurements, photographs, design
                  preferences and budget indications used to prepare quotes
                  and execute work.
                </li>
                <li>
                  <strong>Technical data</strong> automatically collected by
                  the website — browser type, device, approximate location,
                  pages viewed and referral source — for analytics and
                  security purposes only.
                </li>
                <li>
                  <strong>Communication records</strong> of WhatsApp
                  messages, emails and call notes kept for service quality
                  and warranty support.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>To respond to inquiries, prepare quotations and schedule site visits.</li>
                <li>To deliver, install, service and warranty the work you have engaged us for.</li>
                <li>To process payments and issue invoices in compliance with Pakistani tax law.</li>
                <li>To send service reminders, maintenance updates and occasional offers — only if you have opted in.</li>
                <li>To improve our website, services and customer experience.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                4. Sharing &amp; Disclosure
              </h2>
              <p>
                We do not sell or rent your personal information. We may
                share limited information with:
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>
                  <strong>Trusted suppliers and installation partners</strong>
                  {" "}strictly to fulfil your project (e.g. glass
                  manufacturers, profile suppliers, sub-contracted HVAC
                  technicians).
                </li>
                <li>
                  <strong>Service platforms</strong> we rely on — including
                  WhatsApp Business, Google Maps and our hosting provider —
                  each governed by their own privacy policies.
                </li>
                <li>
                  <strong>Government or regulatory authorities</strong> where
                  required by law, court order or legitimate investigation.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                5. Cookies &amp; Tracking Technologies
              </h2>
              <p>
                A cookie is a small text file stored on your device that helps
                a website remember your preferences and understand how it is
                used. We use cookies and similar technologies (local storage,
                pixels) on{" "}
                <a
                  href="https://chishtiworks.com"
                  className="underline hover:text-black"
                >
                  chishtiworks.com
                </a>{" "}
                in the following categories:
              </p>

              <div className="mt-6 space-y-5">
                <div className="p-5 rounded-2xl border border-gray-200">
                  <h3 className="font-bold text-black mb-1.5">
                    Strictly Necessary
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Required for the website to function — page navigation,
                    form submissions, security and remembering your cookie
                    consent choice. These cannot be disabled.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200">
                  <h3 className="font-bold text-black mb-1.5">
                    Analytics &amp; Performance
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Help us understand which pages are popular, where visitors
                    come from, and how the site performs — so we can improve
                    content and speed. Loaded only after you click{" "}
                    <strong>Accept</strong>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200">
                  <h3 className="font-bold text-black mb-1.5">
                    Functional
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Remember choices you make (such as preferred service area
                    or recently viewed projects) to give you a smoother
                    experience.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200">
                  <h3 className="font-bold text-black mb-1.5">
                    Marketing
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    May be set by advertising partners (e.g. Meta Pixel,
                    Google Ads) to measure campaign effectiveness. Loaded only
                    if you opt in via the cookie banner.
                  </p>
                </div>
              </div>

              <p className="mt-6">
                You can change your choice anytime by clicking{" "}
                <strong>Cookie Preferences</strong> in the website footer, or
                by clearing cookies in your browser settings. Disabling
                cookies will not affect your ability to request a quote or
                contact us by phone, WhatsApp or email.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                6. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical and
                physical safeguards to protect your information from
                unauthorised access, loss or misuse. However, no method of
                transmission over the internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                7. Data Retention
              </h2>
              <p>
                We retain customer records, project files and warranty
                documentation for as long as required to honour warranties,
                meet legal obligations and resolve disputes — typically up
                to seven (7) years from project completion.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                8. Your Rights
              </h2>
              <p>You may, at any time, request to:</p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>Access the personal information we hold about you.</li>
                <li>Correct inaccurate or outdated information.</li>
                <li>Withdraw consent for marketing communications.</li>
                <li>Request deletion of records that are no longer required for warranty or legal purposes.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, email
                {" "}
                <a
                  href="mailto:info@chishtiworks.com"
                  className="underline hover:text-black"
                >
                  info@chishtiworks.com
                </a>
                {" "}or call
                {" "}
                <a href="tel:0515975105" className="underline hover:text-black">
                  051-5975105
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                9. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party sites — for
                example our Facebook, Instagram or TikTok pages. We are not
                responsible for the privacy practices of those external
                sites. Please review their privacy policies separately.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                10. Children's Privacy
              </h2>
              <p>
                Our services are intended for adults. We do not knowingly
                collect personal information from children under 18. If you
                believe a child has provided us information, please contact
                us so we can delete it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to
                reflect changes in our practices, technology or law. The
                updated date at the top of this page indicates when the
                latest revision was published. Continued use of our website
                or services after changes signals your acceptance of the
                updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                12. Contact Us
              </h2>
              <p>
                Questions, concerns or requests related to this Privacy
                Policy can be sent to:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-2xl">
                <p className="font-bold text-black">CHISHTI Aluminium &amp; Cool Point</p>
                <p>P.W.D Street Number 1, Block A Sector A PWD Society</p>
                <p>Islamabad 43000, Pakistan</p>
                <p className="mt-3">
                  Phone:{" "}
                  <a href="tel:0515975105" className="underline hover:text-black">
                    051-5975105
                  </a>
                  {" "}/{" "}
                  <a href="tel:03058645051" className="underline hover:text-black">
                    0305-8645051
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@chishtiworks.com"
                    className="underline hover:text-black"
                  >
                    info@chishtiworks.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
