import { useEffect, useRef, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/** Keeps the original content mounted and reveals nested sections for direct links. */
export function ArchivoAgrupado({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const revelar = () => {
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target || !ref.current?.contains(target)) return;
      let parent: HTMLElement | null = target;
      while (parent && parent !== ref.current) {
        if (parent instanceof HTMLDetailsElement) parent.open = true;
        parent = parent.parentElement;
      }
      requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "instant" }));
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a[href^="#"]');
      if (anchor) requestAnimationFrame(revelar);
    };
    revelar();
    window.addEventListener("hashchange", revelar);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", revelar);
      document.removeEventListener("click", onClick);
    };
  }, []);
  return <div ref={ref}>{children}</div>;
}

export function ApartadoArchivo({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <details className="group/apartado border-b border-border">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-6 text-foreground outline-offset-4 hover:bg-muted focus-visible:outline-2 focus-visible:outline-celeste md:px-12 [&::-webkit-details-marker]:hidden">
        <span className="font-display text-xl leading-snug md:text-2xl">{titulo}</span>
        <ChevronDown aria-hidden className="size-5 shrink-0 text-celeste group-open/apartado:rotate-180" />
      </summary>
      <div>{children}</div>
    </details>
  );
}