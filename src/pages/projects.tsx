import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, MapPin, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

import bahria1 from "@/assets/project/Baria enclave 14 no street  Duball glass with Jorgen bar tempered glass.jpeg";
import bahria2 from "@/assets/project/Baria enclave 14 no street  Duball glass with Jorgen bar tempered glass-2.jpeg";
import layyah1 from "@/assets/project/Layyah Bhakhar Duble glass with tempered.jpeg";
import layyah2 from "@/assets/project/Layyah Bhakhar Duble glass with tempered-2.jpeg";
import layyah3 from "@/assets/project/Layyah Bhakhar Duble glass with tempered-3.jpeg";
import layyah4 from "@/assets/project/Layyah Bhakhar Duble glass with tempered-4.jpeg";
import pwdImg from "@/assets/project/Pwd Korang town.jpeg";
import g14Img from "@/assets/project/Sector G14 skylight 12mm glass.jpeg";
import proj9 from "@/assets/project/proj-9.jpeg";
import proj10 from "@/assets/project/proj-10.jpeg";

type Project = {
  id: string;
  title: string;
  location: string;
  description: string;
  category: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: "bahria",
    title: "Bahria Enclave Residence",
    location: "Bahria Enclave, Street 14, Islamabad",
    description:
      "Double-glazed facade with Jorgen-bar tempered glass system. Engineered for thermal efficiency, sound insulation, and a refined modern aesthetic.",
    category: "Residential",
    images: [bahria1, bahria2],
  },
  {
    id: "layyah",
    title: "Layyah \u2013 Bhakhar Residence",
    location: "Layyah / Bhakhar, Punjab",
    description:
      "Premium double-glazed windows with tempered glass installation across a full residential build. Delivered with precision sealing and lasting structural integrity.",
    category: "Residential",
    images: [layyah1, layyah2, layyah3, layyah4],
  },
  {
    id: "pwd",
    title: "Aluminium Frame & Frosted Glass Partition",
    location: "PWD Korang Town, Islamabad",
    description:
      "Custom under-staircase aluminium frame fitted with frosted glass panels \u2014 a bespoke interior solution that turns dead space into functional architecture.",
    category: "Interior",
    images: [pwdImg],
  },
  {
    id: "g14",
    title: "G-14 Skylight Installation",
    location: "Sector G-14, Islamabad",
    description:
      "12mm tempered glass skylight engineered for natural light optimisation, weather sealing, and long-term structural performance.",
    category: "Skylight",
    images: [g14Img],
  },
  {
    id: "proj-9",
    title: "Commercial Tower \u2013 Structural Glazing",
    location: "Commercial District, Islamabad",
    description:
      "Full-height structural glazing curtain wall on a multi-storey commercial tower \u2014 installed with safety scaffolding and precision alignment.",
    category: "Commercial",
    images: [proj9],
  },
  {
    id: "proj-10",
    title: "High-Rise Modular Glass Facade",
    location: "Faisal Tower vicinity, Islamabad",
    description:
      "Modular tempered glass facade across a premium commercial high-rise \u2014 combining cantilevered floor extensions with architectural curtain-wall detailing.",
    category: "Commercial",
    images: [proj10],
  },
];

const categories = ["All", "Residential", "Commercial", "Interior", "Skylight"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
      if (e.key === "ArrowRight")
        setCarouselIdx((i) => (i + 1) % activeProject.images.length);
      if (e.key === "ArrowLeft")
        setCarouselIdx(
          (i) => (i - 1 + activeProject.images.length) % activeProject.images.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const openProject = (p: Project) => {
    setActiveProject(p);
    setCarouselIdx(0);
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto text-center">
        <FadeIn>
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">
            Our Portfolio
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto mb-10">
            Precision In Practice
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            A curated selection of our finest commercial and residential installations across Pakistan. Engineered without compromise.
          </p>
        </FadeIn>
      </section>

      {/* Filter Chips */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-12">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-16 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj, i) => (
            <FadeIn key={proj.id} delay={(i % 3) * 0.1}>
              <button
                type="button"
                onClick={() => openProject(proj)}
                className="group w-full text-left cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-5 relative bg-gray-100">
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 group-hover:from-black/80 transition-all" />
                  {proj.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-black flex items-center gap-1.5">
                      <Images className="w-3.5 h-3.5" />
                      {proj.images.length}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">
                      {proj.category}
                    </span>
                    <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 group-hover:underline underline-offset-4 decoration-2">
                  {proj.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{proj.location}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {proj.description}
                </p>
              </button>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-gray-500 py-16">
            No projects in this category yet.
          </div>
        )}
      </section>

      {/* Lightbox */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <button
            type="button"
            onClick={() => setActiveProject(null)}
            className="fixed top-6 right-6 text-white hover:text-gray-300 transition-colors z-[110] bg-white/10 backdrop-blur-sm rounded-full p-2"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto p-6 md:p-12 gap-8 lg:gap-12 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Carousel */}
            <div className="relative flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center min-h-[300px]">
                <img
                  key={carouselIdx}
                  src={activeProject.images[carouselIdx]}
                  alt={`${activeProject.title} ${carouselIdx + 1}`}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>

              {activeProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setCarouselIdx(
                        (i) =>
                          (i - 1 + activeProject.images.length) %
                          activeProject.images.length
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5 text-black" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCarouselIdx(
                        (i) => (i + 1) % activeProject.images.length
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5 text-black" />
                  </button>

                  {/* Thumbnails */}
                  <div className="flex gap-2 mt-4 justify-center flex-wrap">
                    {activeProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCarouselIdx(idx)}
                        className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                          idx === carouselIdx
                            ? "border-white scale-105"
                            : "border-white/30 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Details */}
            <div className="lg:w-96 text-white flex-shrink-0">
              <div className="uppercase tracking-[0.2em] text-xs text-gray-400 font-bold mb-4">
                {activeProject.category}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {activeProject.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-6">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{activeProject.location}</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8">
                {activeProject.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                onClick={() => setActiveProject(null)}
              >
                Start a Similar Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-gray-50 py-24 px-6 text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
            Ready to Start Your Project?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
