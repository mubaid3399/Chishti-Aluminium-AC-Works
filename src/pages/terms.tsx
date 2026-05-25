import { FadeIn } from "@/components/ui/fade-in";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Terms() {
  useDocumentMeta({
    title: "Terms of Service | CHISHTI Aluminium & Cool Point",
    description:
      "Terms governing the use of chishtiworks.com and the aluminium, glass, UPVC and HVAC services delivered by CHISHTI across Islamabad, Rawalpindi and Pakistan.",
    path: "/terms",
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
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The agreement between you and CHISHTI Aluminium &amp; Cool Point
            for using our website and engaging our aluminium, glass, UPVC
            and HVAC services.
          </p>
          <p className="mt-6 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </FadeIn>
      </section>

      {/* Body */}
      <section className="px-6 md:px-16 py-20 max-w-3xl mx-auto">
        <FadeIn>
          <div className="space-y-12 text-gray-700 text-base md:text-lg leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By visiting{" "}
                <a
                  href="https://chishtiworks.com"
                  className="underline hover:text-black"
                >
                  chishtiworks.com
                </a>
                , requesting a quotation or engaging CHISHTI Aluminium
                &amp; Cool Point ("CHISHTI", "we", "us") for any service,
                you ("client", "you") agree to be bound by these Terms of
                Service together with our Privacy Policy. If you do not
                agree, please do not use the site or our services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                2. Services We Provide
              </h2>
              <p>
                CHISHTI offers aluminium fabrication, architectural glass,
                glass railings, UPVC windows and doors, office partitions,
                shower cabins, AC installation, HVAC ducting,
                refrigeration servicing and related architectural and
                cooling solutions. Specific deliverables, materials,
                pricing and timelines for each engagement are defined in
                the written quotation and/or work order issued to you.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                3. Quotations &amp; Pricing
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Quotations are valid for fourteen (14) days from the date
                  of issue unless otherwise stated, and are subject to a
                  physical site survey for accurate measurements.
                </li>
                <li>
                  Prices are quoted in Pakistani Rupees (PKR) and may be
                  revised in the event of significant changes in raw
                  material cost, scope of work or site conditions.
                </li>
                <li>
                  Any optional extras requested after work begins will be
                  quoted separately and added to the final invoice.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                4. Payments &amp; Advances
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Most projects require an advance deposit (typically
                  50–70%) before fabrication or material procurement
                  begins. The remaining balance is payable upon successful
                  installation and handover.
                </li>
                <li>
                  Accepted payment methods include cash, bank transfer,
                  Easypaisa and JazzCash.
                </li>
                <li>
                  Late payments may incur a service charge and entitle
                  CHISHTI to suspend ongoing work or warranty support
                  until the account is settled.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                5. Project Timelines
              </h2>
              <p>
                Estimated timelines provided in quotations are made in
                good faith. Actual completion dates may be impacted by
                client-side delays, material lead times, weather, site
                accessibility or force-majeure events. We will keep you
                informed of any material changes to the schedule.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                6. Client Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>Provide accurate site access, electricity and water during installation.</li>
                <li>Ensure structural readiness of openings, walls or ducts before our team mobilises.</li>
                <li>Obtain any building-management or society NOCs required for installation.</li>
                <li>Communicate design or scope changes in writing (WhatsApp or email) before fabrication.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                7. Workmanship Warranty
              </h2>
              <p>
                We provide a written workmanship warranty on every
                installation, the duration of which is specified in the
                final invoice or work order. Materials such as aluminium
                profiles, tempered glass units and AC compressors carry
                their own manufacturer warranties, which are passed
                through to the client.
              </p>
              <p className="mt-4">The warranty does not cover:</p>
              <ul className="list-disc pl-6 space-y-3 mt-3">
                <li>Damage caused by accidents, misuse or unauthorised modifications.</li>
                <li>Glass breakage after handover unless caused by demonstrable installation defect.</li>
                <li>Routine cleaning, lubrication or filter replacement (covered under maintenance contracts).</li>
                <li>Failure due to electrical surges, water ingress or natural disasters.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                8. Cancellations &amp; Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Cancellations made before fabrication begins are
                  refundable, less any costs already incurred for site
                  surveys or design.
                </li>
                <li>
                  Once custom fabrication, profile cutting or material
                  procurement has commenced, the advance is generally
                  non-refundable but may be partially adjusted against
                  future work at our discretion.
                </li>
                <li>
                  No refund is offered after final installation and
                  handover except as covered under the workmanship
                  warranty.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                9. Intellectual Property
              </h2>
              <p>
                All website content, photography, project designs,
                blueprints and CAD drawings produced by CHISHTI remain
                our intellectual property. You may not reproduce, modify
                or redistribute them without prior written permission.
                Project photographs may be used by CHISHTI in marketing
                materials unless you opt out in writing.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                10. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by Pakistani law,
                CHISHTI's total liability for any claim arising out of or
                related to a project shall not exceed the total amount
                paid by the client for that specific project. We shall
                not be liable for indirect, incidental or consequential
                damages, including loss of business or profits.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                11. Force Majeure
              </h2>
              <p>
                Neither party shall be held liable for delays or failures
                to perform caused by events beyond reasonable control —
                including but not limited to natural disasters, riots,
                strikes, fuel shortages, internet outages, government
                action or pandemic-related restrictions.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                12. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms are governed by the laws of the Islamic
                Republic of Pakistan. Any dispute arising out of or
                related to these Terms or our services shall be subject
                to the exclusive jurisdiction of the courts of Islamabad.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                13. Changes to These Terms
              </h2>
              <p>
                We may revise these Terms from time to time. The "Last
                updated" date at the top of this page indicates when the
                most recent changes were made. Continued use of our
                website or services after revisions are posted
                constitutes your acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                14. Contact
              </h2>
              <p>For questions about these Terms of Service, contact us:</p>
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
