import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Which areas do you serve in Islamabad and Rawalpindi?",
    a: "We work daily across Islamabad (DHA, Bahria Town, Gulberg Greens, PWD, G-13, F-10, Blue Area, E-11) and Rawalpindi (Saddar, Chaklala, Satellite Town, Bahria Phase 7/8). Larger projects across Pakistan are handled on request.",
  },
  {
    q: "How long does an aluminium window or door installation take?",
    a: "Timelines vary by project size. A standard aluminium window or door installation in Islamabad or Rawalpindi takes 1–2 days. Custom office glass partitions and shower cabins typically take 3–5 days. Full commercial facades are scheduled after the on-site survey.",
  },
  {
    q: "What aluminium profiles and finishes are available?",
    a: "We supply architectural-grade aluminium profiles with custom powder coating in any RAL colour, anodised finishes and wood-grain sublimation — engineered for durability and wind resistance suited to twin-city weather.",
  },
  {
    q: "Do you provide a written warranty?",
    a: "Yes. Every installation includes a written workmanship warranty. Aluminium profiles, tempered glass units and AC compressors also carry their original manufacturer warranties.",
  },
  {
    q: "Should I repair or replace my old AC?",
    a: "Minor leaks or small electrical faults are easily repaired. If your unit is 10+ years old, needs frequent gas top-ups or runs on outdated refrigerant, a modern inverter replacement usually pays for itself in lower bills.",
  },
  {
    q: "Can I book a free site visit in Islamabad or Rawalpindi?",
    a: "Yes. Book via WhatsApp, our contact form or a quick call. Our engineering team will visit your site, take precise measurements and share a detailed blueprint and itemised quote — at no cost.",
  },
];

export function HomeFAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#0a0e12] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side: Header */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-[0.2em] text-gray-300 mb-6 select-none">
              FAQs
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white max-w-lg">
              Clear answers you can trust — find what you need about your project.
            </h2>
          </div>

          {/* Right Side: Accordion Boxes */}
          <div className="w-full space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border transition-all duration-300 overflow-hidden"
                  style={{
                    backgroundColor: isOpen ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)",
                    borderColor: isOpen ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Trigger Button */}
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <span className="font-serif text-base md:text-lg font-bold text-gray-100 group-hover:text-white transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 shrink-0 ml-4"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>

                  {/* Expandable Content container */}
                  <div
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
