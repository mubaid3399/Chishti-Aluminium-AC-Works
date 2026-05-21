import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppWidget() {
  const phoneNumber = "923155385439";
  const message = "Hello, I am interested in your premium aluminium, glass, and cooling solutions.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const rotateTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      if (Math.abs(difference) > 2) {
        // Scroll Down: rotate clockwise. Scroll Up: rotate counter-clockwise.
        const direction = difference > 0 ? 1 : -1;
        // Increase rotation continuously on scroll
        setRotation((prev) => prev + direction * 15);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:rotate-[360deg] active:scale-95 transition-all duration-700 ease-out group"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse Animation Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

      {/* Tooltip */}
      <span 
        className="absolute right-16 bg-white text-gray-900 border border-gray-100 shadow-xl px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 scale-75 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none"
        style={{
          // Reverse the button rotation for the tooltip text so it always remains perfectly upright
          transform: `rotate(${-rotation}deg)`,
        }}
      >
        Chat with Us
      </span>

      {/* WhatsApp Icon */}
      <FaWhatsapp className="w-8 h-8 relative z-10" />
    </a>
  );
}
