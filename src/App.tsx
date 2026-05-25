import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { CookieConsent } from "@/components/CookieConsent";

// Route-level code splitting: each page becomes its own chunk
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const Projects = lazy(() => import("@/pages/projects"));
const FAQ = lazy(() => import("@/pages/faq"));
const Contact = lazy(() => import("@/pages/contact"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);
  return null;
}

const queryClient = new QueryClient();

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-10 h-10 border-2 border-black/20 border-t-black rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen flex flex-col font-sans">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <CookieConsent />
            <WhatsAppWidget />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
