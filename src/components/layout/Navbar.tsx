import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navThemeClass = isHome && !isScrolled ? "bg-transparent border-transparent text-white" : "bg-white/90 backdrop-blur-md border-black/10 text-black shadow-sm";
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-center">
          <nav className={cn("flex items-center justify-between w-full rounded-full border px-6 py-3 transition-colors duration-500", navThemeClass)}>
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 flex items-center justify-center border-2 border-current rounded-sm rotate-45">
                <div className="w-2.5 h-2.5 bg-current -rotate-45" />
              </div>
              <span className="font-serif font-bold text-lg tracking-tight uppercase">Chishti</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location === item.path;
                return (
                  <Link 
                    key={item.path} 
                    href={item.path}
                    className={cn(
                      "px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
                      isActive 
                        ? (isHome && !isScrolled ? "bg-white text-black" : "bg-black text-white") 
                        : "hover:opacity-60"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Phone */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:0515975105"
                className={cn(
                  "flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70",
                  isHome && !isScrolled ? "text-white" : "text-black"
                )}
              >
                <Phone className="w-3.5 h-3.5" />
                051-5975105
              </a>
              <Link 
                href="/contact"
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105",
                  isHome && !isScrolled ? "bg-white text-black" : "bg-black text-white"
                )}
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" className="flex items-center gap-2.5 text-black">
                <div className="w-7 h-7 flex items-center justify-center border-2 border-black rounded-sm rotate-45">
                  <div className="w-2.5 h-2.5 bg-black -rotate-45" />
                </div>
                <span className="font-serif font-bold text-lg uppercase">Chishti</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-black">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className="text-3xl font-serif font-bold text-black border-b border-black/5 pb-4"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:0515975105"
                className="mt-6 flex items-center justify-center gap-2 w-full border-2 border-black text-black py-4 rounded-full font-bold text-lg"
              >
                <Phone className="w-5 h-5" /> 051-5975105
              </a>
              <Link 
                href="/contact"
                className="mt-4 flex items-center justify-center gap-2 w-full bg-black text-white py-4 rounded-full font-bold text-lg"
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
