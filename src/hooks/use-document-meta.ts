import { useEffect } from "react";

export const SITE_ORIGIN = "https://chishtiworks.com";

interface DocumentMeta {
  title: string;
  description?: string;
  /** Path-only, e.g. "/about". Used to build canonical + og:url. */
  path?: string;
  /** Optional JSON-LD schema objects to inject for this route. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const ROUTE_LDJSON_ID = "route-jsonld";

/**
 * Per-route SEO hook. Updates <title>, description, og:*, twitter:*,
 * canonical URL, og:url and (optionally) injects route-scoped JSON-LD.
 * Restores all values on unmount so SPA navigation stays clean.
 */
export function useDocumentMeta({ title, description, path, jsonLd }: DocumentMeta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const setMeta = (selector: string, value?: string) => {
      if (!value) return;
      const el = document.querySelector<HTMLMetaElement>(selector);
      if (el) el.setAttribute("content", value);
    };

    const ensureLink = (rel: string): HTMLLinkElement => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      return el;
    };

    const prevDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;
    const prevOgTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content;
    const prevOgDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content;
    const prevOgUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.content;
    const prevTwTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.content;
    const prevTwDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.content;
    const canonicalEl = ensureLink("canonical");
    const prevCanonical = canonicalEl.getAttribute("href") ?? undefined;

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    if (path) {
      const fullUrl = `${SITE_ORIGIN}${path}`;
      canonicalEl.setAttribute("href", fullUrl);
      // og:url tag may not exist in the static HTML; create on demand
      let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement("meta");
        ogUrl.setAttribute("property", "og:url");
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute("content", fullUrl);
    }

    // Inject route-scoped JSON-LD (FAQ, Service, Breadcrumb, etc.)
    let ldScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.id = ROUTE_LDJSON_ID;
      ldScript.textContent = JSON.stringify(jsonLd);
      // Remove any stale instance first
      document.querySelectorAll(`script#${ROUTE_LDJSON_ID}`).forEach((n) => n.remove());
      document.head.appendChild(ldScript);
    }

    return () => {
      document.title = prevTitle;
      setMeta('meta[name="description"]', prevDesc);
      setMeta('meta[property="og:title"]', prevOgTitle);
      setMeta('meta[property="og:description"]', prevOgDesc);
      setMeta('meta[name="twitter:title"]', prevTwTitle);
      setMeta('meta[name="twitter:description"]', prevTwDesc);
      if (prevCanonical) {
        canonicalEl.setAttribute("href", prevCanonical);
      } else {
        canonicalEl.removeAttribute("href");
      }
      if (prevOgUrl) setMeta('meta[property="og:url"]', prevOgUrl);
      if (ldScript) ldScript.remove();
    };
  }, [title, description, path, jsonLd]);
}

