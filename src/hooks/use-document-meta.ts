import { useEffect } from "react";

interface DocumentMeta {
  title: string;
  description?: string;
}

/**
 * Tiny per-route SEO hook. Updates <title> and the global
 * description / og:title / og:description / twitter:* meta tags
 * when a page mounts, and restores the previous title on unmount.
 */
export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const setMeta = (selector: string, value?: string) => {
      if (!value) return;
      const el = document.querySelector<HTMLMetaElement>(selector);
      if (el) el.setAttribute("content", value);
    };

    const prevDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;
    const prevOgTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content;
    const prevOgDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content;
    const prevTwTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.content;
    const prevTwDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.content;

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    return () => {
      document.title = prevTitle;
      setMeta('meta[name="description"]', prevDesc);
      setMeta('meta[property="og:title"]', prevOgTitle);
      setMeta('meta[property="og:description"]', prevOgDesc);
      setMeta('meta[name="twitter:title"]', prevTwTitle);
      setMeta('meta[name="twitter:description"]', prevTwDesc);
    };
  }, [title, description]);
}
