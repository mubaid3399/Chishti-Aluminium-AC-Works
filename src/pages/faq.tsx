import { FadeIn } from "@/components/ui/fade-in";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "What types of aluminium systems do you install?",
      a: "We provide complete aluminium solutions including premium window systems (sliding, casement, fixed), door systems, curtain walls, cladding, kitchen cabinets, wardrobes, and custom fabrication. All systems use high-grade aluminium profiles engineered for durability and modern aesthetics."
    },
    {
      q: "Do you handle both residential and commercial projects?",
      a: "Yes. We serve luxury residences, corporate offices, commercial buildings, retail spaces, and industrial facilities. Our team is experienced in projects ranging from single-room installations to full building facades and commercial HVAC systems."
    },
    {
      q: "What is included in your HVAC & cooling services?",
      a: "Our cooling division covers complete AC installation, maintenance, and repair — including split units, ducted systems, and commercial HVAC. We also provide industrial ventilation, gas charging, and refrigeration services for cold storage and commercial appliances."
    },
    {
      q: "How long does a typical installation take?",
      a: "Timelines vary by project scope. A standard window or door installation takes 1-2 days. Office partitions and glass cabin systems typically take 3-5 days. Full commercial facades and HVAC systems are quoted with precise timelines during our initial consultation."
    },
    {
      q: "Do you provide warranties on your installations?",
      a: "Absolutely. All our installations come with a comprehensive workmanship warranty. Additionally, materials carry their respective manufacturer warranties. We use only premium-grade profiles and tempered glass from trusted suppliers."
    },
    {
      q: "What makes CHISHTI different from other contractors?",
      a: "We approach every project with architectural precision — not just trade-level work. This means premium materials, skilled craftsmen, clean job sites, and finished results that elevate your property's value. We are a full-service provider handling aluminium, glass, HVAC, and electrical under one roof."
    },
    {
      q: "Can you provide custom fabrication for unique designs?",
      a: "Yes. Our fabrication workshop handles custom aluminium profiles, bespoke glass solutions, and non-standard architectural requirements. We work directly with architects and designers to bring unique visions to life."
    },
    {
      q: "Do you offer maintenance contracts for commercial clients?",
      a: "We offer annual maintenance agreements for HVAC systems, aluminium facades, and glass installations. These contracts include scheduled inspections, preventive maintenance, and priority service response for commercial clients."
    }
  ];

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
            Everything you need to know about our aluminium, glass, HVAC services, and project process.
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
