import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/galeria/dagger-marinete.jpg.asset.json";
import tierraAsset from "@/assets/galeria/IMG_5336.jpeg.asset.json";
import pilotoAsset from "@/assets/galeria/pilotos.png.asset.json";
import avionAsset from "@/assets/galeria/IMG_5334.jpeg.asset.json";
import libroImg from "@/assets/libro-tapa.png";
const heroImg = heroAsset.url;
const tierraImg = tierraAsset.url;
const pilotoImg = pilotoAsset.url;
const avionImg = avionAsset.url;
import trilogiaPdf from "@/assets/trilogia.pdf.asset.json";
import dossierEscolarPdf from "@/assets/La_Gesta_de_Malvinas_en_las_Aulas.pdf.asset.json";
import ilustracionChicosPdf from "@/assets/ilustracion_para_chicos.pdf.asset.json";
import diapositivasPdf from "@/assets/diapositivas-malvinas.pdf.asset.json";
import malvinasEnsenaPdf from "@/assets/malvinas-tambien-se-ensena.pdf.asset.json";
import videoChicos from "@/assets/video-chicos.mp4.asset.json";
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
          <a href="#galeria" className="hover:opacity-70">Galería</a>
          <a href="#dossier" className="hover:opacity-70">Dossier</a>
          <a href="#descarga" className="hover:opacity-70">Descarga</a>
          <a href="#colaborar" className="hover:opacity-70">Colaborar</a>
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
            <h1 className="font-display text-3xl font-light leading-[1.05] text-background text-balance md:text-5xl lg:text-6xl">
              UNA OBRA DOCUMENTAL Y VIVENCIAL<br />
              <span className="italic text-[var(--celeste)]">TESTIMONIO DE UNA TRILOGÍA</span><br />
              <span className="text-2xl md:text-4xl lg:text-5xl">GUERRA DE MALVINAS (VERSIÓN DIGITAL 2.0)</span>
            </h1>
            <p className="mt-6 max-w-2xl font-display text-xl italic text-background/90 md:text-2xl">
              El testimonio de la Fuerza Aérea Sur 1982 contada desde el continente: la historia completa detrás de cada misión.
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-background/70">
              Pers. Civil Tec. Prof. FAA VGM José Luis Martínez Eyheramendi
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="obra" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="divider-ornament mb-12 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Obra documental y vivencial
          </div>
          <p className="font-display text-2xl font-light leading-[1.3] text-balance md:text-4xl">
            El testimonio de la <span className="italic text-[var(--bronce)]">Fuerza Aérea Sur 1982</span> contada desde el continente:
            la historia completa detrás de cada misión.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-foreground/85">
            Esta obra documental y vivencial, nacida en el seno de la <strong className="font-medium">Escuela Superior de Guerra Aérea (ESGA)</strong>,
            constituye un legado fundamental para la memoria institucional de nuestra Patria. Con una extensión de <strong className="font-medium">366 páginas</strong>
            y actualizada en su <strong className="font-medium">Versión 2.0 (Junio 2024)</strong>, este libro rescata el profesionalismo y la abnegación
            de quienes operaron desde las bases continentales durante el Conflicto del Atlántico Sur.
          </p>
        </div>
      </section>

      {/* LIBRO + DESCRIPCIÓN */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-12 md:py-32">
          <div className="relative">
            <div className="sticky top-12">
              <div className="relative w-full overflow-hidden bg-background shadow-page">
                <img src={libroImg} alt="Tapa y contratapa del libro Testimonio de una Trilogía" width={1600} height={1066} className="h-auto w-full object-contain" loading="lazy" />
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
              Nacida en el seno de la <strong className="font-medium">Escuela Superior de Guerra Aérea (ESGA)</strong>,
              esta obra documental y vivencial constituye un legado fundamental para la memoria institucional de nuestra Patria.
            </p>
            <p>
              Con una extensión de <strong className="font-medium">366 páginas</strong> y actualizada en su
              <strong className="font-medium"> Versión 2.0 (Junio 2024)</strong>, este libro rescata el profesionalismo
              y la abnegación de quienes operaron desde las bases continentales durante el Conflicto del Atlántico Sur.
            </p>
            <blockquote className="my-10 border-l-2 border-[var(--ocre)] pl-6 font-display text-2xl italic leading-snug text-foreground/90">
              "Manteniendo viva la causa, sus hechos y protagonistas."
            </blockquote>
            <p>
              Desde donde operó la Fuerza Aérea Sur (FAS) se planificó, alistó y ejecutó la mayoría de las operaciones aéreas,
              para las cuales se desplegaron diferentes sistemas de armas que constituyeron los llamados escuadrones aeromóviles.
            </p>
          </div>
        </div>
      </section>

      {/* TRILOGÍA */}
      <section id="trilogia" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Una unidad técnica y humana indisoluble
            </p>
            <h2 className="mt-4 font-display text-5xl font-light italic md:text-7xl">
              La Trilogía Operativa
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              En el Teatro de Operaciones, el accionar de la Fuerza Aérea Sur se cimentó en el reconocimiento conceptual
              de la "Trilogía Operativa", una unidad técnica y humana indisoluble conformada por:
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {[
              { num: "I", title: "El Avión", img: avionImg, text: "El sistema de armas IAI M-5 Dagger (Mirage V), tecnología probada en combate que fue llevada al límite de su capacidad operativa." },
              { num: "II", title: "El Piloto", img: pilotoImg, text: "El ejecutor de la misión, quien en la soledad de su cabina asumió la responsabilidad final del ataque." },
              { num: "III", title: "El Personal de Tierra", img: tierraImg, text: "Los especialistas, de diferentes especialidades, personal Militar, Civil y conscriptos — la gran mayoría perteneciente a la VI Brigada Aérea - Grupo Técnico 6 (GT6) y demás organismos necesarios para las actividades aéreas. Conocidos históricamente como 'Los Magos'." },
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
            Representaron el "último eslabón humano" antes del despegue, siendo los encargados de artillar, reparar
            y dar el saludo final con el pulgar en alto a sus pilotos.
          </p>
        </div>
      </section>

      {/* BAM SAN JULIÁN */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-32">
          <div className="mb-10 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Sacrificio en tierra</p>
            <h2 className="mt-4 font-display text-4xl font-light italic md:text-6xl">
              El Sacrificio en la BAM San Julián
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Es imperativo honrar el rol del <strong className="font-medium">II Escuadrón Aeromóvil "La Marinete"</strong> en la Base Aérea Militar San Julián.
            </p>
            <p>
              En aquel invierno de 1982, el personal de mantenimiento desafió condiciones extremas con <strong className="font-medium">vientos de 60 km/h</strong>
              y temperaturas de hasta <strong className="font-medium">19 grados bajo cero</strong>. Sin hangares, protegiendo sus herramientas en carpas
              y alineando las bombas al costado de la plataforma, estos especialistas demostraron que sin su esfuerzo técnico y logístico,
              el esfuerzo en el aire no habría sido posible.
            </p>
            <blockquote className="my-10 border-l-2 border-[var(--ocre)] pl-6 font-display text-2xl italic leading-snug text-foreground/90">
              "Sin su esfuerzo técnico y logístico, el esfuerzo en el aire no habría sido posible."
            </blockquote>
          </div>
        </div>
      </section>

      {/* VALORES Y CIERRE INSTITUCIONAL */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={tierraImg} alt="" width={1280} height={1280} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:px-12 md:py-40">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary-foreground/60">Valores y cierre institucional</p>
          <p className="mt-8 font-display text-4xl italic leading-tight md:text-6xl">
            "Honrar el pasado, defender el presente, asegurar el futuro."
          </p>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            "Gloria y Honor a nuestros Héroes."<br />
            "Las Malvinas son Argentinas: ¡Ni olvidamos, ni renunciamos!"
          </p>
        </div>
      </section>

      {/* GALERÍA HISTÓRICA */}
      <GaleriaHistorica />

      {/* DESCARGA */}
      <section id="descarga" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Acceso 100% libre y gratuito
          </p>
          <h2 className="mt-4 font-display text-5xl font-light text-balance md:text-6xl">
            Fines de <em className="text-[var(--bronce)]">divulgación histórica</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Para mantener viva la causa, sus hechos y protagonistas, esta obra está disponible de forma internacional
            para toda la ciudadanía a través de las siguientes plataformas:
          </p>

          <div className="mt-10 overflow-hidden rounded-sm border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Plataforma</th>
                  <th className="px-4 py-3">Instrucciones y enlaces</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-4 font-medium">Google Play Libros</td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Busque por título: <em>"Testimonio de una Trilogía"</em> o por autor: <em>"José Luis Martínez Eyheramendi"</em>.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">Biblioteca Histórica y Cultural</td>
                  <td className="px-4 py-4">
                    <a
                      href={trilogiaPdf.url}
                      download="testimonio-de-una-trilogia.pdf"
                      className="text-[var(--bronce)] underline underline-offset-4 hover:text-foreground"
                    >
                      Descargar Libro Gratis (PDF)
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">Dossier Escolar</td>
                  <td className="px-4 py-4">
                    <a
                      href={dossierEscolarPdf.url}
                      download="La_Gesta_de_Malvinas_en_las_Aulas.pdf"
                      className="text-[var(--bronce)] underline underline-offset-4 hover:text-foreground"
                    >
                      Descargar material para aulas (PDF)
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-10 font-display text-2xl italic text-foreground/90">
            "Manteniendo viva la causa, sus hechos y protagonistas."
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={trilogiaPdf.url}
              download="testimonio-de-una-trilogia.pdf"
              className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-[var(--bronce)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
              Descargar PDF
            </a>
            <a
              href="https://misvivenciasenlaguerrademalvinas.blogspot.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:border-foreground"
            >
              Visitar el blog
            </a>
          </div>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            PDF · Edición digital 2.0 · Escuela Superior de Guerra Aérea
          </p>
        </div>
      </section>

      {/* BLOG */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-12 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">El lado humano</p>
          <h2 className="mt-4 font-display text-4xl font-light italic md:text-6xl">
            Blog de Vivencias
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85">
            Invitamos a explorar los relatos en primera persona, documentos inéditos, fotos y videos que capturan la esencia
            del valor y el sentimiento patriótico vigente. Malvinas no es solo un hecho del pasado, sino una herida y un orgullo
            que debemos transmitir a las nuevas generaciones.
          </p>
          <a
            href="https://misvivenciasenlaguerrademalvinas.blogspot.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-[var(--bronce)]"
          >
            Enlace al Blog
          </a>
          <p className="mx-auto mt-12 max-w-2xl font-display text-2xl italic leading-snug text-foreground/90">
            "Que la entrega de nuestros 649 Héroes y el esfuerzo de cada integrante de los Escuadrones Aeromóviles no sea en vano."
          </p>
        </div>
      </section>

      {/* DOSSIER ESCOLAR */}
      <section id="dossier" className="border-y border-border bg-muted/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-12 md:py-32">
          <div className="order-2 md:order-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Material educativo</p>
            <h2 className="mt-4 font-display text-4xl font-light italic md:text-5xl">
              Dossier Escolar
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">
              Un dossier escolar es una recopilación organizada de documentos, trabajos y evidencias de aprendizaje. Sirve para evaluar el progreso de un estudiante o como material de apoyo que reúne recursos, actividades y unidades didácticas sobre un tema de la gesta de Malvinas.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Este material reúne propuestas para trabajar en el aula los fundamentos históricos, jurídicos y operativos del conflicto, con especial énfasis en la Trilogía Operativa y la experiencia de quienes operaron desde las bases continentales.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={dossierEscolarPdf.url}
                download="La_Gesta_de_Malvinas_en_las_Aulas.pdf"
                className="inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-[var(--bronce)]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Descargar Dossier Escolar
              </a>
              <a
                href={ilustracionChicosPdf.url}
                download="ilustracion_para_chicos.pdf"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Historieta para chicos
              </a>
              <a
                href={diapositivasPdf.url}
                download="diapositivas-malvinas.pdf"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Diapositivas con imágenes
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Incluye una ilustración en formato historieta, un video pensado para los más chicos, y un PDF con imágenes de aquellos días.
            </p>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="relative border border-border bg-card p-2 shadow-page">
              <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                  <span className="font-display text-4xl italic text-foreground/30">La Gesta de Malvinas</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">en las Aulas</span>
                </div>
              </div>
            </div>
            <div className="relative border border-border bg-card p-2 shadow-page">
              <p className="mb-2 px-2 pt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Video para los chicos
              </p>
              <video
                src={videoChicos.url}
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COLABORACIÓN VOLUNTARIA */}
      <section id="colaborar" className="bg-card">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-12 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Apoyo al proyecto</p>
          <h2 className="mt-4 font-display text-4xl font-light italic md:text-6xl">
            Colaboración voluntaria con el autor
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85">
            Esta obra es de distribución 100% gratuita para difundir la memoria histórica de la Fuerza Aérea Sur en el conflicto de 1982. Si deseas apoyar la continuidad de este proyecto de investigación y mantener viva la historia de nuestra Trilogía, podés realizar una contribución voluntaria a través de:
          </p>

          <div className="mt-10 inline-block border border-border bg-background p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Alias</p>
            <p className="mt-2 font-mono text-2xl tracking-wider text-foreground">1959dagger</p>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Muchas gracias por apoyar la difusión de nuestra soberanía.
            <br />
            <span className="mt-2 block text-foreground">Pers. Civil Tec. Prof. FAA VGM José Luis Martínez</span>
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
            <p className="mt-1 text-foreground">Pers. Civil Tec. Prof. FAA VGM José Luis Martínez Eyheramendi</p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:text-right">
            <p>Origen</p>
            <p className="mt-1 text-foreground">Obra Documental y Vivencial — Escuela Superior de Guerra Aérea</p>
          </div>
        </div>
        <div className="border-t border-border px-6 py-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:px-12">
          "Las Malvinas son Argentinas: ¡Ni olvidamos, ni renunciamos!"
        </div>
      </footer>
    </div>
  );
}
