import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

interface WhatsAppOption {
  number: string;
  label: string;
}

const options: WhatsAppOption[] = [
  { number: "923058645051", label: "" },
  { number: "923155385439", label: "" },
];

const message = "Hello, I am interested in your premium aluminium, glass, and cooling solutions.";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      if (Math.abs(difference) > 2) {
        const direction = difference > 0 ? 1 : -1;
        setRotation((prev) => prev + direction * 15);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getUrl = (num: string) =>
    `https://wa.me/${num}?text=${encodeURIComponent(message)}`;

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Options Panel */}
      {isOpen && (
        <div className="flex flex-col gap-2 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {options.map((opt) => (
            <a
              key={opt.number}
              href={getUrl(opt.number)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-gray-900 pl-4 pr-5 py-3 rounded-2xl shadow-xl border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              <div className="text-right leading-tight">
                <div className="text-sm font-bold">{opt.number.replace(/^92/, "0")}</div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ease-out group"
        style={{ transform: `rotate(${rotation}deg)` }}
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse Animation Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <FaWhatsapp className="w-8 h-8 relative z-10" />
        )}
      </button>
    </div>
  );
}
