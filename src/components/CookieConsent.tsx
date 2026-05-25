import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "chishti.cookie-consent";

type ConsentValue = "accepted" | "rejected";

/** Read current consent (or null if user hasn't decided yet). Safe on SSR. */
export function getCookieConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

/** Helper for analytics scripts: only fire if user opted in. */
export function hasAcceptedCookies(): boolean {
  return getCookieConsent() === "accepted";
}

/** Re-open the cookie banner from anywhere (e.g. a footer "Cookie Preferences" link). */
export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("cookie-consent-open"));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only when no decision has been recorded yet.
    if (getCookieConsent() === null) {
      // Tiny delay so it doesn't fight the hero animation
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    // Allow other parts of the app (e.g. footer link) to re-open the banner.
    const reopen = () => setVisible(true);
    window.addEventListener("cookie-consent-open", reopen);
    return () => window.removeEventListener("cookie-consent-open", reopen);
  }, []);

  const persist = (value: ConsentValue) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore storage errors */
    }
    // Notify the rest of the app (analytics, etc.) that consent state changed
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] px-3 sm:px-6 pb-3 sm:pb-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-4xl rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/10 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-5 md:p-6">
          <div className="flex items-start gap-3 md:gap-4 flex-1">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-black text-white items-center justify-center shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-black text-base md:text-lg leading-tight">
                We use cookies
              </h3>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mt-1.5">
                CHISHTI uses essential cookies to make this website work and
                optional analytics cookies to understand how visitors engage
                with our services. Read our{" "}
                <Link
                  href="/privacy"
                  className="underline font-medium text-black hover:text-gray-700"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-2.5 md:gap-3 md:shrink-0">
            <button
              type="button"
              onClick={() => persist("rejected")}
              className="px-5 py-2.5 rounded-full text-sm font-bold text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => persist("accepted")}
              className="px-5 py-2.5 rounded-full text-sm font-bold bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Accept All
            </button>
          </div>

          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => persist("rejected")}
            className="absolute top-3 right-3 md:hidden w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
