import { ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Dark CTA Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 border-b border-white/10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Let's Build Something Exceptional
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg">
            From concept to installation, CHISHTI delivers precision-engineered aluminium, glass, and cooling solutions for modern spaces.
          </p>
        </div>
        <Link 
          href="/contact" 
          className="flex-shrink-0 flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          Start Your Project <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Standard Footer Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-6 text-white">
            <div className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-sm rotate-45">
              <div className="w-3 h-3 bg-white -rotate-45" />
            </div>
            <span className="font-serif font-bold text-2xl uppercase">Chishti</span>
          </div>
          <p className="text-gray-500 max-w-sm">
            Premium aluminium systems, architectural glass solutions, and industrial cooling — engineered for permanence. Serving commercial and residential clients with uncompromising quality.
          </p>
          <div className="flex gap-4 mt-6">
            <a 
              href="https://web.facebook.com/chishti.aluminium" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/40 flex items-center justify-center text-gray-400 hover:text-white hover:scale-105 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/chishti_works/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/40 flex items-center justify-center text-gray-400 hover:text-white hover:scale-105 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.tiktok.com/@chshtialuminiumcoolpoint" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/40 flex items-center justify-center text-gray-400 hover:text-white hover:scale-105 transition-all duration-300"
              aria-label="TikTok"
            >
              <FaTiktok className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Navigation</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Contact</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li><a href="tel:0515975105" className="hover:text-white transition-colors">051-5975105</a></li>
            <li><a href="tel:03058645051" className="hover:text-white transition-colors">0305-8645051</a></li>
            <li><a href="mailto:info@chishtialuminium.com" className="hover:text-white transition-colors">info@chishtialuminium.com</a></li>
            <li>P.W.D Street Number 1, Block A Sector A PWD Society<br/>Islamabad, 43000, Pakistan</li>
            <li className="flex items-start gap-2 pt-2 border-t border-white/10 mt-2">
              <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>
                <span className="block text-white font-semibold">Open 24 Hours</span>
                <span className="block text-xs uppercase tracking-wider mt-0.5">7 Days a Week</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8 border-t border-white/10 text-center md:text-left text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} CHISHTI Aluminium & Cool Point. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
