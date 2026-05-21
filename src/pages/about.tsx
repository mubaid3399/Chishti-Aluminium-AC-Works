import { FadeIn } from "@/components/ui/fade-in";

// Brand Logos
import b1 from "@/assets/brands-logo/pngegg.png";
import b2 from "@/assets/brands-logo/pngegg (1).png";
import b3 from "@/assets/brands-logo/pngegg (2).png";
import b4 from "@/assets/brands-logo/pngegg (3).png";
import b5 from "@/assets/brands-logo/pngegg (4).png";
import b6 from "@/assets/brands-logo/pngegg (5).png";
import b7 from "@/assets/brands-logo/pngegg (6).png";
import b8 from "@/assets/brands-logo/pngegg (7).png";

// Premium Web-Optimized Unsplash Images
const ab1 = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=1000&q=80";
const ab2 = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&h=1000&q=80";
const ab3 = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=1000&q=80";
const ab4 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=1000&q=80";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto text-center">
        <FadeIn>
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">About CHISHTI</div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto mb-10">
            Engineering Excellence Since Day One
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            We don't just install aluminium and glass. We engineer complete architectural systems designed to transform modern spaces with precision, durability, and visual elegance.
          </p>
        </FadeIn>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-16 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1} className="lg:mt-12">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img src={ab1} alt="Aluminium fabrication craftsman" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Precision Fabrication</div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img src={ab2} alt="Premium aluminium materials" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Premium Materials</div>
          </FadeIn>
          <FadeIn delay={0.3} className="lg:mt-24">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img src={ab3} alt="Architectural measurement" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Expert Engineering</div>
          </FadeIn>
          <FadeIn delay={0.4} className="lg:mt-8">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img src={ab4} alt="Modern glass installation" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Modern Systems</div>
          </FadeIn>
        </div>
      </section>

      {/* Brand Logos Automatic Ticker */}
      <section className="py-20 bg-gray-50/40 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap items-center">
              {/* First Set of Logos */}
              {[b1, b2, b3, b4, b5, b6, b7, b8].map((logo, idx) => (
                <div key={`brand-1-${idx}`} className="h-10 w-24 mx-6 flex items-center justify-center flex-shrink-0">
                  <img
                    src={logo}
                    alt={`Partner Brand Logo ${idx + 1}`}
                    className="h-full w-full object-contain grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate Set for Seamless Loop */}
              {[b1, b2, b3, b4, b5, b6, b7, b8].map((logo, idx) => (
                <div key={`brand-2-${idx}`} className="h-10 w-24 mx-6 flex items-center justify-center flex-shrink-0">
                  <img
                    src={logo}
                    alt={`Partner Brand Logo Duplicate ${idx + 1}`}
                    className="h-full w-full object-contain grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 15s linear infinite;
            }
          `}</style>
        </div>
      </section>

      {/* Story */}
      <section className="bg-gray-50 py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                CHISHTI Aluminium & Cool Point was founded with a singular vision: to bring industrial-grade precision and architectural beauty to every aluminium, glass, and cooling project we undertake. What started as a dedicated aluminium workshop has grown into a full-service architectural solutions company.
              </p>
              <p>
                Today, we serve commercial developers, residential architects, and discerning homeowners who demand excellence. Our team comprises skilled fabricators, HVAC engineers, and installation specialists — each trained in advanced techniques for curtain wall systems, frameless glass, precision aluminium work, and complete cooling infrastructure.
              </p>
              <p>
                We believe every space deserves systems that perform flawlessly and look exceptional. From corporate tower facades to intimate home interiors, CHISHTI delivers solutions that stand the test of time.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
