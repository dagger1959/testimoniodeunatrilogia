import { useId, useState, type ReactNode } from "react";

/** Muestra el comienzo del texto y un botón "Leer completo". El texto íntegro siempre está en la página. */
export function Plegable({ children, alto = "26rem" }: { children: ReactNode; alto?: string }) {
  const [abierto, setAbierto] = useState(false);
  const id = useId();
  return (
    <div>
      <div
        id={id}
        className="relative overflow-hidden"
        style={abierto ? undefined : { maxHeight: alto }}
      >
        {children}
        {!abierto && (
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
        )}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          aria-expanded={abierto}
          aria-controls={id}
          onClick={() => setAbierto((v) => !v)}
          className="border-2 border-foreground bg-foreground px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/85"
        >
          {abierto ? "Plegar texto" : "Leer completo"}
        </button>
      </div>
    </div>
  );
}
