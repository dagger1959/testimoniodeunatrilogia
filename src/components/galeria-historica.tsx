import { useState } from "react";
import img1 from "@/assets/galeria/IMG_5515.jpeg.asset.json";
import img2 from "@/assets/galeria/IMG_5334.jpeg.asset.json";
import img3 from "@/assets/galeria/IMG_5362.jpeg.asset.json";
import img4 from "@/assets/galeria/IMG_5331.jpeg.asset.json";
import img5 from "@/assets/galeria/IMG_5709.jpeg.asset.json";
import img6 from "@/assets/galeria/IMG_5336.jpeg.asset.json";
import img7 from "@/assets/galeria/IMG_5511.jpeg.asset.json";
import img8 from "@/assets/galeria/IMG_5335.jpeg.asset.json";
import img9 from "@/assets/galeria/IMG_5348.jpeg.asset.json";
import img10 from "@/assets/galeria/IMG_4898.jpeg.asset.json";

const fotos = [
  { src: img1.url, caption: "Cabecera 07 de la BAM San Julián — Aviones Dagger alistándose, mayo 1982" },
  { src: img2.url, caption: "Despegue de Dagger desde la BAM San Julián, 1982" },
  { src: img3.url, caption: "Personal de Tierra del Escuadrón Aeromóvil Dagger — BAM San Julián" },
  { src: img4.url, caption: "Armeros preparando tanques de combustible y armamento" },
  { src: img5.url, caption: "P. Civil Martínez José Luis junto al Dagger C-420 y bombas — mayo 1982" },
  { src: img6.url, caption: "Los Héroes Silenciosos — mecánicos, armeros, técnicos e ingenieros" },
  { src: img7.url, caption: "Mecánicos alistando los tanques de 1700 litros — BAM San Julián, mayo 1982" },
  { src: img8.url, caption: "P. Civil Martínez José Luis — BAM San Julián, mayo 1982" },
  { src: img9.url, caption: "Bombas alistadas para misión — San Julián 1982" },
  { src: img10.url, caption: "Personal de Tierra alrededor del Dagger en plataforma — BAM San Julián" },
];

export function GaleriaHistorica() {
  const [activa, setActiva] = useState<number | null>(null);

  return (
    <section id="galeria" className="border-t border-border bg-card px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Archivo fotográfico · BAM San Julián 1982
          </p>
          <h2 className="mt-4 font-display text-5xl font-light italic md:text-7xl">
            Galería Histórica
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Imágenes originales del despliegue de los escuadrones aeromóviles Dagger y del Personal
            de Tierra en la Base Aérea Militar San Julián durante el conflicto del Atlántico Sur.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {fotos.map((foto, i) => (
            <button
              key={i}
              onClick={() => setActiva(i)}
              className="group relative aspect-[4/3] overflow-hidden bg-background shadow-page focus:outline-none focus:ring-2 focus:ring-[var(--bronce)]"
            >
              <img
                src={foto.src}
                alt={foto.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover sepia-[0.25] transition-all duration-700 group-hover:sepia-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-left font-mono text-[9px] uppercase tracking-[0.15em] text-background line-clamp-2">
                {foto.caption}
              </div>
            </button>
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Archivo personal · VGM FAA José Luis Martínez
        </p>
      </div>

      {activa !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8"
          onClick={() => setActiva(null)}
          role="dialog"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setActiva(activa === 0 ? fotos.length - 1 : activa - 1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-background hover:text-[var(--celeste)]"
            aria-label="Anterior"
          >
            ← Ant
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActiva((activa + 1) % fotos.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-background hover:text-[var(--celeste)]"
            aria-label="Siguiente"
          >
            Sig →
          </button>
          <button
            onClick={() => setActiva(null)}
            className="absolute right-4 top-4 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-background hover:text-[var(--celeste)]"
            aria-label="Cerrar"
          >
            Cerrar ✕
          </button>
          <div className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={fotos[activa].src} alt={fotos[activa].caption} className="max-h-[80vh] w-auto object-contain" />
            <p className="mt-4 text-center font-display text-lg italic text-background/90">
              {fotos[activa].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
