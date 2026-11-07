import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function AyudasNavegacion() {
  const [progreso, setProgreso] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgreso(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    window.addEventListener("resize", f);
    return () => { window.removeEventListener("scroll", f); window.removeEventListener("resize", f); };
  }, []);
  return (
    <>
      <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
        <div className="h-full bg-[var(--celeste)]" style={{ width: `${progreso}%` }} />
      </div>
      {progreso > 3 && (
        <a
          href="#inicio"
          aria-label="Volver arriba"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 border-2 border-foreground bg-foreground px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-background shadow-page hover:bg-foreground/85"
        >
          <ArrowUp className="size-4" aria-hidden /> Volver arriba
        </a>
      )}
    </>
  );
}
