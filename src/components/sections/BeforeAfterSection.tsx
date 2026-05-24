import { useState, useRef, MouseEvent, TouchEvent } from "react";

// Local Before/After Images
import officeBefore from "@/assets/before-after/office-before.webp";
import officeAfter from "@/assets/before-after/office-after.webp";
import acBefore from "@/assets/before-after/ac-before.webp";
import acAfter from "@/assets/before-after/ac-after.webp";
import wallBefore from "@/assets/before-after/wall-before.webp";
import wallAfter from "@/assets/before-after/wall-after.webp";

interface BeforeAfterItem {
  title: string;
  category: string;
  before: string;
  after: string;
}

const items: BeforeAfterItem[] = [
  {
    title: "Premium Office Partition",
    category: "Custom Office & Cabin Systems",
    before: officeBefore,
    after: officeAfter,
  },
  {
    title: "Outdated AC to Premium Cooling",
    category: "HVAC System Upgrade",
    before: acBefore,
    after: acAfter,
  },
  {
    title: "Standard Glass to Curtain Wall",
    category: "Architectural Aluminium & Glass Installation",
    before: wallBefore,
    after: wallAfter,
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-24 lg:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-16">
        <div className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold mb-6">
          Real Transformations
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Witness the difference — before & after.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {items.map((item, idx) => (
          <BeforeAfterCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}

function BeforeAfterCard({ item }: { item: BeforeAfterItem }) {
  const [sliderPos, setSliderPos] = useState(50); // Default to exactly 50% split
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseLeave = () => {
    setSliderPos(50); // Reset to 50% split when mouse leaves
  };

  return (
    <div className="flex flex-col gap-4">
      {/* 1:1 Interactive Before/After Card */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-square w-full rounded-2xl overflow-hidden cursor-ew-resize select-none bg-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 group"
      >
        {/* Before Image (Always background) */}
        <img
          src={item.before}
          alt={`${item.title} - before`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* After Image (Overlaid, revealed by sliding clip-path or width) */}
        <div
          className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none"
          style={{
            width: `${100 - sliderPos}%`,
          }}
        >
          <img
            src={item.after}
            alt={`${item.title} - after`}
            className="absolute inset-y-0 right-0 h-full object-cover max-w-none pointer-events-none"
            style={{
              width: containerRef.current?.getBoundingClientRect().width || "100%",
            }}
          />
        </div>

        {/* Interactive Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
          style={{
            left: `${sliderPos}%`,
          }}
        >
          {/* Circular thumb slider handles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200/50 flex items-center justify-center pointer-events-none">
            <div className="flex gap-[2px]">
              <span className="w-[2px] h-3 bg-gray-400 rounded-full" />
              <span className="w-[2px] h-3 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Static Before Badge (top left) */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-900 pointer-events-none shadow-sm">
          Before
        </div>

        {/* Static After Badge (top right) */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white pointer-events-none shadow-sm">
          After
        </div>
      </div>

      {/* Description Below Card */}
      <div className="px-1">
        <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold text-gray-400 mb-1">
          {item.category}
        </div>
        <h3 className="font-serif font-bold text-gray-900 text-lg md:text-xl leading-tight">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
