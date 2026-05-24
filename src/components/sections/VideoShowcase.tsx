import { useState, useEffect, useRef } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Play, X, Volume2 } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import vid1 from "@/assets/project/proj-vid-1.mp4";
import vid2 from "@/assets/project/proj-vid-2.mp4";
import vid3 from "@/assets/project/proj-vid-3.mp4";
import vidLayyah from "@/assets/project/layyah-bhkhr.mp4";

type Video = { src: string; title: string; caption: string };

const videos: Video[] = [
  { src: vid1, title: "Glass Facade Install", caption: "On-site precision" },
  { src: vid2, title: "Aluminium Fabrication", caption: "Workshop to wall" },
  { src: vid3, title: "Project Walkthrough", caption: "Finished result" },
  { src: vidLayyah, title: "Layyah \u2013 Bhakhar Residence", caption: "Double-glazed tempered glass install" },
];

function PhoneVideoCard({ video, onOpen }: { video: Video; onOpen: () => void }) {
  const wrapperRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // shouldMount: defer creating <video src> until first time it enters viewport
  const [shouldMount, setShouldMount] = useState(false);
  // inView: control play/pause once mounted
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Observe wrapper; only mount video when within 200px of viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.35, rootMargin: "200px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Play/pause based on inView state once mounted
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView, shouldMount]);

  return (
    <button
      ref={wrapperRef}
      type="button"
      onClick={onOpen}
      className="group relative w-full block rounded-[2rem] overflow-hidden bg-black aspect-[9/16] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Poster placeholder always rendered — instant paint, zero bytes */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-black to-zinc-900 flex items-center justify-center">
        {!loaded && (
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
            <Play className="w-6 h-6 text-black fill-black" />
          </div>
        )}
      </div>

      {/* Mount video element only when near viewport */}
      {shouldMount && (
        <video
          ref={videoRef}
          src={video.src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => setLoaded(true)}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20 group-hover:from-black/60 transition-all pointer-events-none" />

      {/* Play badge (hover) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white/95 backdrop-blur-sm rounded-full p-5 shadow-2xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
          <Play className="w-7 h-7 text-black fill-black" />
        </div>
      </div>

      {/* Sound hint (top right) */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full p-1.5 pointer-events-none">
        <Volume2 className="w-3.5 h-3.5 text-white/80" />
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-left pointer-events-none">
        <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-1 leading-tight">
          {video.title}
        </h3>
        <p className="text-gray-300 text-xs">{video.caption}</p>
      </div>
    </button>
  );
}

export function VideoShowcase() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Close on escape
  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIdx]);

  return (
    <section className="py-24 lg:py-32 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">
            Watch Our Work
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Craftsmanship in Motion
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Step onto our active job sites — real installations, real precision, real results. Tap any reel for sound.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {videos.map((v, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <PhoneVideoCard video={v} onOpen={() => setActiveIdx(i)} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-gray-800 transition-colors"
          >
            See Full Portfolio <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveIdx(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full p-2"
            onClick={() => setActiveIdx(null)}
            aria-label="Close video"
          >
            <X className="w-7 h-7" />
          </button>
          <video
            key={activeIdx}
            src={videos[activeIdx].src}
            className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
