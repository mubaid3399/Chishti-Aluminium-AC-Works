import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Premium Web-Optimized Unsplash Images
const p1 = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80";
const p2 = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&h=600&q=80";
const p3 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&h=600&q=80";
const p4 = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&h=600&q=80";
const p5 = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=600&q=80";
const p6 = "https://images.unsplash.com/photo-1583258292688-d0213df4a3a8?auto=format&fit=crop&w=800&h=600&q=80";

export default function Projects() {
  const projects = [
    { img: p1, title: "Horizon Tower Curtain Wall", category: "Commercial Aluminium" },
    { img: p2, title: "Al-Rashid Corporate Office", category: "Glass Partitions" },
    { img: p3, title: "Metro Plaza HVAC System", category: "Commercial Cooling" },
    { img: p4, title: "Gulberg Luxury Residence", category: "Aluminium & Glass" },
    { img: p5, title: "City Center Mall Facade", category: "Shop Front Systems" },
    { img: p6, title: "Industrial Zone Cold Storage", category: "Refrigeration" },
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto text-center">
        <FadeIn>
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">Our Portfolio</div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto mb-10">
            Precision In Practice
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            A curated selection of our finest commercial and residential installations. Engineered without compromise.
          </p>
        </FadeIn>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-16 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((proj, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 relative">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{proj.category}</div>
                <h3 className="font-serif text-2xl font-bold">{proj.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-24 px-6 text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Project?</h2>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors">
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
