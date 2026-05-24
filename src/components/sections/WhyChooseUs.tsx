import { FadeIn } from "@/components/ui/fade-in";
import { Zap, BadgeDollarSign, Users, Gem } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Service",
    description:
      "On-time delivery with rapid response — from initial site visit to final installation, we move at the pace your project demands.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Price",
    description:
      "Premium engineering without the premium markup. Honest, transparent pricing that fits real budgets.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Skilled fabricators, HVAC engineers, and installation specialists with years of hands-on field experience.",
  },
  {
    icon: Gem,
    title: "Quality Material",
    description:
      "We source only premium-grade aluminium, tempered glass, and certified cooling components — built to last.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16 text-center">
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">
            Why Choose Us
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Built On Precision. Backed By Trust.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
            Four reasons clients across Pakistan choose CHISHTI for their aluminium, glass, and cooling projects.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-black/20 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
