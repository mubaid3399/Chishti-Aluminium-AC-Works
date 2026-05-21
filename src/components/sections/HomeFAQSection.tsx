import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How long does an aluminium installation take?",
    a: "Timelines vary by project size. A standard window or door installation takes 1-2 days. Custom office partitions and glass cabin systems typically take 3-5 days. Full commercial facades are quoted with precise schedules during initial design phases.",
  },
  {
    q: "What types of aluminium profiles do you offer?",
    a: "We offer premium architectural-grade aluminium profiles with various finishes, including custom powder coating in any RAL color, anodizing, and wood-grain sublimation. All profiles are engineered for durability, wind resistance, and modern aesthetics.",
  },
  {
    q: "Do you provide warranties on your services?",
    a: "Yes. All our installations include a comprehensive workmanship warranty. Additionally, materials like premium profiles, glass units, and cooling compressors carry their respective manufacturer-backed warranties.",
  },
  {
    q: "How do I know if my AC needs repairs or full replacement?",
    a: "Minor cooling issues, localized leaks, or small electrical faults are easily repaired. However, if your system is over 10-12 years old, requires frequent repairs, or uses outdated refrigerant, a replacement with a modern energy-efficient system is highly recommended.",
  },
  {
    q: "Can I schedule an on-site consultation online?",
    a: "Absolutely. You can schedule a site visit by using our online consultation form or contacting us via WhatsApp/call. Our engineering team will visit your site, take precise measurements, and provide a detailed blueprint and quote.",
  },
  {
    q: "Do you handle emergency HVAC or glass repairs?",
    a: "Yes, we handle emergency service calls for both commercial and residential projects — including critical refrigeration breakdowns, commercial AC failure, or broken storefront glass replacement.",
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
