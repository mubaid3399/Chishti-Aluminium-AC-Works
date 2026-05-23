import { useState } from "react";
import { Play, Pause } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  isFeatured?: boolean;
  featuredBg?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmed Raza",
    role: "Property Owner, Islamabad",
    text: "I couldn't be happier with the aluminium window and HVAC installation service. From the first consultation to the final inspection, the team was professional, efficient, and detail-oriented. My property looks fantastic and I feel confident knowing it will last for years. Their craftsmanship and attention to detail truly exceeded my expectations.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=72",
  },
  {
    name: "Fatima Noor",
    role: "Office Manager, PWD Society",
    text: "The crew did an amazing job designing and installing our corporate glass partitions. They worked quickly without compromising quality and kept everything clean and organized. I appreciated their clear communication throughout the project. The new setup not only improves the look of our building but also provides soundproofing.",
    avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=150&h=150&q=72",
  },
  {
    name: "Usman Ali",
    role: "Builder & Contractor, Rawalpindi",
    text: "",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=72",
    isFeatured: true,
    featuredBg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=800&q=72",
  },
  {
    name: "Bilal Chaudhry",
    role: "Shop Owner, Islamabad",
    text: "From minor AC adjustments to a full storefront glass replacement, this team handled everything flawlessly. Their knowledge and expertise gave me peace of mind, and they explained each step clearly. The finished installation is durable, beautiful, and built to withstand time. I highly recommend their services to anyone looking for quality work.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=72",
  },
];

export function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-[1.15] max-w-4xl tracking-tight">
            Clients share stories of trust — craftsmanship, reliability, and installations that power spaces.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {testimonials.map((t, idx) => {
            if (t.isFeatured) {
              return (
                <div
                  key={idx}
                  className="relative rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-full min-h-[420px] group flex flex-col justify-between p-8"
                >
                  {/* Background Image */}
                  <img
                    src={t.featuredBg}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />

                  {/* Top Left: Avatar */}
                  <div className="relative z-10 w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={t.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  </div>

                  {/* Bottom: Name & Control Button */}
                  <div className="relative z-10 flex items-end justify-between w-full">
                    <div className="text-white">
                      <div
                        className="text-4xl font-normal leading-none"
                        style={{ fontFamily: "'Caveat', cursive" }}
                      >
                        {t.name}
                      </div>
                      <div className="text-xs text-white/80 font-medium tracking-wide mt-1">
                        {t.role}
                      </div>
                    </div>

                    {/* Play/Pause Button */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-black hover:bg-white transition-all shadow-md focus:outline-none"
                    >
                      {isPlaying ? (
                        <Pause className="w-4.5 h-4.5 fill-current" />
                      ) : (
                        <Play className="w-4.5 h-4.5 fill-current translate-x-[1px]" />
                      )}
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[420px] border border-gray-100/50 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-500"
              >
                {/* Top Left: Avatar */}
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm mb-6">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm md:text-[14px] leading-relaxed mb-8 flex-1 font-normal italic">
                  "{t.text}"
                </p>

                {/* Bottom Signature */}
                <div>
                  <div
                    className="text-3xl text-gray-900 leading-none"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400 font-medium tracking-wide mt-1">
                    {t.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
