import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HomeFAQSection } from "@/components/sections/HomeFAQSection";
import { VideoShowcase } from "@/components/sections/VideoShowcase";

// Brand Logos
import b1 from "@/assets/brands-logo/pngegg.webp";
import b2 from "@/assets/brands-logo/pngegg (1).webp";
import b3 from "@/assets/brands-logo/pngegg (2).webp";
import b4 from "@/assets/brands-logo/pngegg (3).webp";
import b5 from "@/assets/brands-logo/pngegg (4).webp";
import b6 from "@/assets/brands-logo/pngegg (5).webp";
import b7 from "@/assets/brands-logo/pngegg (6).webp";
import b8 from "@/assets/brands-logo/pngegg (7).webp";

// Premium Web-Optimized Unsplash Images (non-LCP only)
const aboutImg = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=1000&q=72";
const srvResImg = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=72";
const srvComImg = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=72";
const srvRepImg = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=72";

// Local Hero Background Images (LCP — kept local for fastest paint)
import heroB1 from "@/assets/hero-img/heroB-1 (1).webp";
import heroB2 from "@/assets/hero-img/heroB-2 (1).webp";

const heroBackgrounds = [heroB1, heroB2];

// Professional Slot-Machine / Clock Rolling Digit Counter
function RollingDigit({ value, hoverKey }: { value: string; hoverKey: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });
  const [animateTrigger, setAnimateTrigger] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimateTrigger(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (hoverKey > 0) {
      setAnimateTrigger(false);
      const timer = setTimeout(() => setAnimateTrigger(true), 50);
      return () => clearTimeout(timer);
    }
  }, [hoverKey]);

  const chars = value.split("");

  return (
    <div ref={ref} className="inline-flex overflow-hidden h-[1.1em] items-center justify-center font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-md">
      {chars.map((char, charIdx) => {
        if (!/^\d$/.test(char)) {
          return (
            <span key={charIdx} className="select-none leading-none px-0.5">
              {char}
            </span>
          );
        }

        const digit = parseInt(char, 10);
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        return (
          <div key={charIdx} className="relative w-[1.1ch] h-[1.1em] overflow-hidden select-none">
            <motion.div
              initial={{ y: "0%" }}
              animate={{ 
                y: animateTrigger 
                  ? `-${digit * 10}%` 
                  : "0%" 
              }}
              transition={{
                duration: 1.5 + charIdx * 0.15,
                ease: [0.16, 1, 0.3, 1], // Ultra smooth premium cubic bezier
              }}
              className="absolute left-0 right-0 flex flex-col items-center"
            >
              {numbers.map((num) => (
                <span key={num} className="h-[1.1em] flex items-center justify-center leading-none">
                  {num}
                </span>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  useDocumentMeta({
    title: "CHISHTI Aluminium & Cool Point — Aluminium, Glass, AC & HVAC in Islamabad & Rawalpindi",
    description: "Premium aluminium windows, architectural glass, UPVC, office partitions and 24/7 AC / HVAC servicing in Islamabad, Rawalpindi & nearby sectors. Free site visit. Call 0305-8645051.",
    path: "/",
  });
  const [hoverKeys, setHoverKeys] = useState([0, 0, 0, 0]);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000); // Transitions every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleCardHover = (index: number) => {
    setHoverKeys((prev) => {
      const updated = [...prev];
      updated[index] += 1;
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex items-end pb-24 lg:pb-32 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((bgSrc, idx) => (
            <img
              key={idx}
              src={bgSrc}
              alt="Aluminium windows, glass work and HVAC services in Islamabad & Rawalpindi by CHISHTI"
              className="absolute inset-0 w-full h-full object-cover object-center scale-105 transform-gpu transition-opacity duration-1000 ease-in-out"
              style={{ opacity: bgIndex === idx ? 1 : 0 }}
              fetchPriority={idx === 0 ? "high" : "low"}
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="max-w-4xl">
              <h1 className="font-serif text-[clamp(1.875rem,7vw,5rem)] md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg break-words">
                Aluminium, Glass & HVAC Specialists in Islamabad & Rawalpindi
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md">
                Premium aluminium windows, architectural glass, UPVC systems and 24/7 AC / HVAC servicing — engineered for homes, offices and commercial projects across Islamabad, Rawalpindi and nearby sectors.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-5 text-gray-400 text-sm drop-shadow-sm">
                Prefer to call?{" "}
                <a href="tel:0515975105" className="text-white font-semibold hover:underline">051-5975105</a>
                {" / "}
                <a href="tel:03058645051" className="text-white font-semibold hover:underline">0305-8645051</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 lg:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">About Us</div>
              <h2 className="font-serif text-[clamp(1.625rem,6vw,3.75rem)] font-bold leading-[1.1] mb-8 break-words">
                Crafting Modern Spaces With Industrial Precision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                CHISHTI Aluminium & Cool Point is more than a local contractor. We are an architectural solutions firm based in PWD Islamabad, specialising in premium aluminium fabrication, modern glass systems, UPVC and complete AC / HVAC installations across Islamabad and Rawalpindi. Every project is engineered for lasting performance and visual excellence.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["Premium Aluminium Systems", "Architectural Glass Solutions", "Complete HVAC & Cooling"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-800 font-medium">
                    <CheckCircle className="w-6 h-6 text-black" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="inline-flex items-center gap-2 border-b-2 border-black pb-1 font-bold hover:opacity-70 transition-opacity">
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.2} className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
              <img src={aboutImg} alt="CHISHTI precision aluminium fabrication workshop in PWD Islamabad" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Brand Logos Automatic Ticker constrained to site container */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap items-center">
              {/* First Set of Logos */}
              {[b1, b2, b3, b4, b5, b6, b7, b8].map((logo, idx) => (
                <div key={`brand-1-${idx}`} className="h-10 w-24 mx-6 flex items-center justify-center flex-shrink-0">
                  <img
                    src={logo}
                    alt={`Partner Brand Logo ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
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
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
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

      {/* Stats Row with Background Image Overlay constrained and rounded */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="relative py-24 md:py-32 px-8 md:px-16 rounded-3xl overflow-hidden shadow-sm">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=72" 
                alt="Premium architectural glass and aluminium facade project by CHISHTI in Islamabad" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/45" />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Centered Subheading / Description */}
              <div className="text-center max-w-2xl mx-auto mb-16">
                <FadeIn delay={0.1}>
                  <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed drop-shadow-sm">
                    From luxury residences to commercial estates, we engineer solutions that endure — combining structural precision with refined architectural craftsmanship.
                  </p>
                </FadeIn>
              </div>

              {/* Stats Grid with dynamic clock roll on viewport view & hover */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "1200+", label: "Projects Delivered" },
                  { value: "15+", label: "Years Experience" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "500+", label: "Commercial Clients" }
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    onMouseEnter={() => handleCardHover(i)} 
                    className="cursor-default group select-none"
                  >
                    <FadeIn delay={i * 0.1} direction="up" className="px-2">
                      <div className="mb-2">
                        <RollingDigit value={stat.value} hoverKey={hoverKeys[i]} />
                      </div>
                      <div className="text-gray-300 uppercase tracking-widest text-[10px] md:text-xs font-bold drop-shadow-sm transition-colors duration-300 group-hover:text-white">
                        {stat.label}
                      </div>
                    </FadeIn>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section — GSAP Scroll-Pinned */}
      <ProcessSection />

      {/* Services Teaser — Numbered Bento Grid */}
      <section className="py-24 lg:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">Our Expertise</div>
          <h2 className="font-serif text-[clamp(1.625rem,6vw,3.75rem)] font-bold leading-[1.1] max-w-3xl break-words">
            Engineered for Modern Architecture in Islamabad & Rawalpindi
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[300px]">
          {/* Large Featured Card — spans 2 rows */}
          <Link href="/services" className="group relative block rounded-2xl overflow-hidden md:row-span-2">
            <img 
              src={srvResImg} 
              alt="Aluminium windows and architectural glass systems installed in Islamabad" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
              <div className="font-serif text-7xl md:text-8xl font-bold text-white/20 select-none">01</div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                  Aluminium Windows & Glass Systems
                </h3>
                <p className="text-gray-300 text-sm md:text-base max-w-sm mb-4">
                  Premium aluminium windows, curtain walls, glass railings and architectural fabrication for residential and commercial buildings in Islamabad & Rawalpindi.
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Top Right Card */}
          <Link href="/services" className="group relative block rounded-2xl overflow-hidden">
            <img 
              src={srvComImg} 
              alt="AC installation and HVAC ducting services in Rawalpindi" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-8">
              <div className="font-serif text-6xl md:text-7xl font-bold text-white/20 select-none">02</div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
                  AC, HVAC & Cooling Solutions
                </h3>
                <p className="text-gray-300 text-xs md:text-sm max-w-xs">
                  AC installation, repair, ducted HVAC and commercial cooling — 24/7 service across Islamabad & Rawalpindi.
                </p>
              </div>
            </div>
          </Link>

          {/* Bottom Right Card */}
          <Link href="/services" className="group relative block rounded-2xl overflow-hidden">
            <img 
              src={srvRepImg} 
              alt="Office glass partitions and commercial interior solutions in Blue Area Islamabad" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-8">
              <div className="font-serif text-6xl md:text-7xl font-bold text-white/20 select-none">03</div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
                  Office Partitions & Commercial Interiors
                </h3>
                <p className="text-gray-300 text-xs md:text-sm max-w-xs">
                  Office glass partitions, corporate entrances and shop fronts for Blue Area, I-8/I-9 and DHA offices.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-gray-800 transition-colors"
          >
            Explore All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Video Showcase — Real Job-Site Reels */}
      <VideoShowcase />

      {/* Before & After Transformations */}
      <BeforeAfterSection />

      {/* Testimonials section */}
      <TestimonialsSection />

      {/* FAQs section */}
      <HomeFAQSection />
    </div>
  );
}
