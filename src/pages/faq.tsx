import { FadeIn } from "@/components/ui/fade-in";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function FAQ() {
  const faqs = [
    {
      q: "Which areas of Islamabad and Rawalpindi do you serve?",
      a: "We work daily across Islamabad (DHA, Bahria Town, Gulberg Greens, PWD, G-13, F-10, Blue Area, E-11, B-17), Rawalpindi (Saddar, Chaklala Scheme III, Satellite Town, Bahria Phase 7/8), and surrounding areas. Larger projects across Pakistan are also handled on request."
    },
    {
      q: "What types of aluminium windows and doors do you install in Islamabad?",
      a: "We install premium aluminium sliding windows, casement and fixed windows, hinged and sliding doors, curtain walls, cladding, kitchen cabinets and custom fabrication — using architectural-grade profiles engineered for Islamabad and Rawalpindi weather conditions."
    },
    {
      q: "Do you handle both residential and commercial projects?",
      a: "Yes. We serve luxury residences, corporate offices, retail outlets and industrial facilities — from single-room aluminium and glass installations to full curtain-wall facades and commercial HVAC systems across Islamabad and Rawalpindi."
    },
    {
      q: "What is included in your AC installation and HVAC services?",
      a: "Our cooling division covers split AC installation, ducted and central HVAC systems, industrial ventilation, gas charging, AC repair and refrigeration servicing for cold storage and commercial kitchens — with 24/7 emergency response across the twin cities."
    },
    {
      q: "How long does a typical installation take?",
      a: "A standard aluminium window or door installation takes 1–2 days. Office glass partitions and shower cabins typically take 3–5 days. Full commercial facades and HVAC ducting projects are scheduled during the on-site survey."
    },
    {
      q: "Do you provide warranties on your installations?",
      a: "Yes. Every installation includes a written workmanship warranty, and materials such as aluminium profiles, tempered glass units and AC compressors carry their original manufacturer warranties."
    },
    {
      q: "How is your pricing for aluminium and glass work in Islamabad?",
      a: "Pricing depends on profile system, glass thickness, hardware grade and site complexity. We offer a free site visit and a transparent, itemised quote so you can compare honestly — no hidden charges."
    },
    {
      q: "Do you offer office glass partitions and UPVC double-glazed windows?",
      a: "Yes. We design and install frameless and framed office glass partitions, executive cabins, and UPVC double-glazed windows for soundproofing and thermal insulation — ideal for offices in Blue Area, I-9 industrial zones and PWD."
    },
    {
      q: "Can I get emergency AC or refrigeration repair in Islamabad or Rawalpindi?",
      a: "Yes. We respond to emergency AC, HVAC and commercial refrigeration breakdowns 24/7 across Islamabad and Rawalpindi — including restaurants, pharmacies and cold-storage facilities."
    }
  ];

  useDocumentMeta({
    title: "FAQ — Aluminium, Glass, AC & HVAC Questions Answered | CHISHTI Islamabad",
    description: "Answers about aluminium windows, glass partitions, UPVC, AC installation, HVAC servicing, project timelines, warranties and service areas across Islamabad & Rawalpindi.",
    path: "/faq",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  });

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero */}
      <section className="px-6 md:px-16 py-20 max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">Questions & Answers</div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our aluminium, glass, UPVC and AC / HVAC services across Islamabad, Rawalpindi and nearby sectors.
          </p>
        </FadeIn>
      </section>

      {/* Accordion List */}
      <section className="px-6 md:px-16 pb-32 max-w-4xl mx-auto">
        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200 py-4">
                <AccordionTrigger className="text-xl font-serif font-bold text-left hover:no-underline hover:text-gray-600 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg leading-relaxed pt-4 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </section>
    </div>
  );
}
