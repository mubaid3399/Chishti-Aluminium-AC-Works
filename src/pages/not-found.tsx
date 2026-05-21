import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-lg">
        <div className="font-serif text-8xl md:text-9xl font-bold text-gray-200 mb-6">404</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors"
        >
          Back to Home <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
