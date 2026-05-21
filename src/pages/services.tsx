import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

// Premium Web-Optimized Unsplash Images
const srvResImg = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80";
const srvComImg = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80";
const srvRepImg = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";

export default function Services() {
  const services = [
    {
      title: "Aluminium & Glass Systems",
      img: srvResImg,
      desc: "Complete architectural aluminium and glass solutions — from premium window systems to full curtain wall facades. Precision-engineered for durability and modern aesthetics.",
      features: [
        "Premium Aluminium Window & Door Systems",
        "Frameless Glass Installations",
        "Curtain Walls & Cladding",
        "Modern Glass Railing Systems",
        "Shower Cabins & Bathroom Glass",
      ]
    },
    {
      title: "HVAC & Cooling Solutions",
      img: srvComImg,
      desc: "Industrial-grade climate control for commercial and residential spaces. From single-unit installations to complete ducted systems — engineered for maximum efficiency.",
      features: [
        "Complete AC Installation & Maintenance",
        "Commercial HVAC & Ducting Systems",
        "Industrial Ventilation Solutions",
        "Refrigeration & Cold Storage",
        "Gas Charging & System Optimization",
      ]
    },
    {
      title: "Commercial & Office Solutions",
      img: srvRepImg,
      desc: "Transform corporate spaces with premium partition systems, architectural entrances, and professional front elevations. Designed for productivity and visual impact.",
      features: [
        "Office Glass Partitions & Cabins",
        "Corporate Entrance Systems",
        "Commercial Front Elevations",
        "Shop Front & Display Systems",
        "UPVC Soundproof Window Systems",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto text-center border-b border-gray-100">
        <FadeIn>
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">Our Services</div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto mb-10">
            Engineered for Every Space
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            From luxury residences to commercial towers, we deliver precision-engineered aluminium, glass, and cooling systems built to perform and designed to inspire.
          </p>
        </FadeIn>
      </section>

      {/* Primary Services */}
      <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto flex flex-col gap-32">
        {services.map((srv, i) => (
          <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <FadeIn direction={i % 2 === 0 ? "right" : "left"} className={i % 2 !== 0 ? 'lg:order-last' : ''}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] w-full">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{srv.title}</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {srv.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {srv.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-gray-800 font-medium">
                    <CheckCircle className="w-5 h-5 text-black" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </div>
        ))}
      </section>

      {/* Additional Services Grid */}
      <section className="bg-gray-50 py-24 lg:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">Specialized Solutions</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Additional Expertise
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "UPVC & Door Systems",
                desc: "Premium UPVC windows, soundproof double-glazed systems, and modern door installations for noise-free living.",
              },
              {
                title: "Home Interior Solutions",
                desc: "Luxury aluminium wardrobes, kitchen cabinets, decorative glass, and premium balcony railing systems.",
              },
              {
                title: "Electrical & Technical",
                desc: "Professional house and office wiring, lighting installations, security systems, and smart home electrical.",
              },
              {
                title: "Refrigeration Services",
                desc: "Complete refrigerator and deep freezer repair, commercial cold storage maintenance, and cooling diagnostics.",
              },
              {
                title: "Glass Film & Protection",
                desc: "Premium heat protection films, UV blocking, privacy solutions, and decorative glass films for commercial and residential use.",
              },
              {
                title: "Aluminium Fabrication",
                desc: "Custom aluminium kitchen cabinets, wardrobe systems, and bespoke fabrication for unique architectural requirements.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-serif text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
