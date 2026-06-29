import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-trilogia.jpg";
import tierraImg from "@/assets/personal-tierra.jpg";
import pilotoImg from "@/assets/piloto.jpg";
import avionImg from "@/assets/avion.jpg";
import libroImg from "@/assets/libro-tapa.png";
import { GaleriaHistorica } from "@/components/galeria-historica";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Testimonio de una Trilogía — Guerra de Malvinas 1982" },
      { name: "description", content: "Obra histórica, documental y vivencial sobre el Personal de Tierra de la Fuerza Aérea Sur en la BAM San Julián. Descarga libre y gratuita en PDF." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground paper-texture">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-background mix-blend-difference">
          BAM San Julián · 1982
        </div>
        <nav className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.25em] text-background mix-blend-difference md:flex">
          <a href="#obra" className="hover:opacity-70">La Obra</a>
          <a href="#trilogia" className="hover:opacity-70">Trilogía</a>
          <a href="#descarga" className="hover:opacity-70">Descarga</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative isolate h-[100vh] min-h-[720px] w-full overflow-hidden">
        <img src={heroImg} alt="Personal de tierra y Mirage en la BAM San Julián al amanecer" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 md:px-12 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-background/80">
              <span className="h-px w-10 bg-background/60" />
              40° Aniversario · Atlántico Sur
            </div>
            <h1 className="font-display text-5xl font-light leading-[0.95] text-background text-balance md:text-7xl lg:text-[8rem]">
              Testimonio<br />
              <span className="italic text-[var(--celeste)]">de una Trilogía</span>
            </h1>
            <p className="mt-6 max-w-2xl font-display text-xl italic text-background/90 md:text-2xl">
              Guerra de Malvinas · 1982
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-background/70">
              VGM FAA José Luis Martínez
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="obra" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="divider-ornament mb-12 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Detrás de los Halcones
          </div>
          <p className="font-display text-3xl font-light leading-[1.3] text-balance md:text-5xl">
            El conflicto bélico del Atlántico Sur no sólo se libró en las Islas y sus zonas adyacentes,
            <span className="italic text-[var(--bronce)]"> sino también en las seis Bases Continentales</span>,
            porque eran objetivo militar del enemigo.
          </p>
        </div>
      </section>

      {/* LIBRO + DESCRIPCIÓN */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-12 md:py-32">
          <div className="relative">
            <div className="sticky top-12">
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-page">
                <img src={libroImg} alt="Tapa del libro Testimonio de una Trilogía" width={800} height={1066} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Edición conmemorativa · Escuela Superior de Guerra Aérea
              </p>
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <h2 className="font-display text-4xl font-light text-balance md:text-5xl">
              Una obra <em className="text-[var(--bronce)]">documental y vivencial</em>
            </h2>
            <p>
              Nacida en el seno de la <strong className="font-medium">Escuela Superior de Guerra Aérea</strong>,
              esta obra rescata y pone en valor el rol fundamental, silencioso y profesional del
              Personal de Tierra en el Teatro de Operaciones del Atlántico Sur, detallando las
              operaciones de la BAM San Julián durante el conflicto de 1982.
            </p>
            <p>
              Desde donde operó la Fuerza Aérea Sur (FAS) se planificó, alistó y ejecutó la mayoría
              de las operaciones aéreas, para las cuales se desplegaron diferentes sistemas de armas
              que constituyeron los llamados escuadrones aeromóviles.
            </p>
            <blockquote className="my-10 border-l-2 border-[var(--ocre)] pl-6 font-display text-2xl italic leading-snug text-foreground/90">
              "Todos fuimos partícipes necesarios de las acciones bélicas y cumplimos con nuestro rol
              de combate como integrantes de los escuadrones aeromóviles."
            </blockquote>
            <p>
              Detrás de los Halcones y sus aeronaves, estaba la labor y el eficaz desempeño cumplido
              en tierra por oficiales, suboficiales, personal civil y soldados, que trabajaron
              arduamente en pos del único objetivo: lograr producirle grandes bajas y enormes daños
              al enemigo, pese a la gran diferencia tecnológica existente.
            </p>
          </div>
        </div>
      </section>

      {/* TRILOGÍA */}
      <section id="trilogia" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Una unidad indisoluble e indivisible
            </p>
            <h2 className="mt-4 font-display text-5xl font-light italic md:text-7xl">
              La Trilogía Operativa
            </h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {[
              { num: "I", title: "El Avión", img: avionImg, text: "Los sistemas de armas desplegados desde la Zona Continental. La herramienta forjada en metal que cruzó el Atlántico Sur." },
              { num: "II", title: "El Piloto", img: pilotoImg, text: "Los Halcones que llevaron adelante la misión, formados en la férrea disciplina de los institutos de la Fuerza Aérea." },
              { num: "III", title: "El Personal de Tierra", img: tierraImg, text: "Oficiales, suboficiales, personal civil y soldados. El esfuerzo técnico, logístico y armero sin el cual no habría existido vuelo posible." },
            ].map((p) => (
              <article key={p.num} className="group relative overflow-hidden bg-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.title} width={1280} height={1280} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute left-6 top-6 font-display text-6xl italic text-background mix-blend-difference">{p.num}</div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl font-light">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl italic leading-snug text-foreground/80 md:text-3xl">
            Sin el esfuerzo técnico, logístico y armero del Personal de Tierra en las bases desplegadas,
            el esfuerzo en el aire no habría sido posible.
          </p>
        </div>
      </section>

      {/* CITA HERMANDAD */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={tierraImg} alt="" width={1280} height={1280} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:px-12 md:py-40">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary-foreground/60">Consigna</p>
          <p className="mt-8 font-display text-5xl italic leading-tight md:text-7xl">
            "Dios, Patria, Hogar"
          </p>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Un vínculo muy estrecho se estableció en la trilogía: una relación de hermandad,
            forjada en la férrea disciplina de los institutos de formación de nuestra querida Fuerza Aérea.
          </p>
        </div>
      </section>

      {/* DESCARGA */}
      <section id="descarga" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Divulgación histórica
          </p>
          <h2 className="mt-4 font-display text-5xl font-light text-balance md:text-6xl">
            Acceso <em className="text-[var(--bronce)]">libre y gratuito</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Este espacio está destinado a la divulgación histórica de la obra. Descargue el libro
            completo en formato PDF y compártalo. La memoria pertenece a todos.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-[var(--bronce)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
              Descargar PDF
            </a>
            <a
              href="#obra"
              className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:border-foreground"
            >
              Compartir la obra
            </a>
          </div>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            PDF · Edición digital · 40° Aniversario
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:px-12">
          <div>
            <p className="font-display text-2xl italic">Testimonio de una Trilogía</p>
            <p className="mt-2 text-xs text-muted-foreground">Guerra de Malvinas · 1982</p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <p>Autor</p>
            <p className="mt-1 text-foreground">VGM FAA José Luis Martínez</p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:text-right">
            <p>Origen</p>
            <p className="mt-1 text-foreground">Escuela Superior de Guerra Aérea</p>
          </div>
        </div>
        <div className="border-t border-border px-6 py-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:px-12">
          En homenaje a los Veteranos de Guerra de Malvinas — Por las huellas de un héroe
        </div>
      </footer>
    </div>
  );
}
