import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/galeria/dagger-marinete.jpg.asset.json";
import tierraAsset from "@/assets/galeria/IMG_5336.jpeg.asset.json";
import pilotoAsset from "@/assets/galeria/pilotos.png.asset.json";
import avionAsset from "@/assets/galeria/IMG_5334.jpeg.asset.json";
import folletoAsset from "@/assets/galeria/fuerza-aerea-sur-folleto.jpeg.asset.json";
import bastaDeAgraviosAsset from "@/assets/galeria/basta-de-agravios-fuerza-aerea-sur.jpg.asset.json";
import homenajeHeroesAsset from "@/assets/galeria/homenaje-649-heroes-nacionales.png.asset.json";
import libroImg from "@/assets/libro-tapa.png";
import qrAcceso from "@/assets/qr-acceso.png";
const heroImg = heroAsset.url;
const tierraImg = tierraAsset.url;
const pilotoImg = pilotoAsset.url;
const avionImg = avionAsset.url;
const folletoImg = folletoAsset.url;
const bastaDeAgraviosImg = bastaDeAgraviosAsset.url;
const homenajeHeroesImg = homenajeHeroesAsset.url;
import trilogiaPdf from "@/assets/trilogia.pdf.asset.json";
import dossierEscolarPdf from "@/assets/La_Gesta_de_Malvinas_en_las_Aulas.pdf.asset.json";
import leyResolucionesPdf from "@/assets/ley-23118-resoluciones-faa.pdf.asset.json";
import ilustracionChicosPdf from "@/assets/ilustracion_para_chicos.pdf.asset.json";
import diapositivasPdf from "@/assets/diapositivas-malvinas.pdf.asset.json";
import malvinasEnsenaPdf from "@/assets/malvinas-tambien-se-ensena.pdf.asset.json";
import heroesSecundarioPdf from "@/assets/heroes-del-cielo-y-de-la-tierra.pdf.asset.json";
import recopiladoFasPdf from "@/assets/recopilado-comprender-fas.pdf.asset.json";
import analisisVeteranosPdf from "@/assets/analisis-juridico-veteranos-fuerza-aerea.pdf.asset.json";
import autonomiaInterfuerzasPdf from "@/assets/autonomia-tension-interfuerzas.pdf.asset.json";
import los649HeroesPdf from "@/assets/los-649-heroes-nacionales.pdf.asset.json";
import videoChicos from "@/assets/video-chicos.mp4.asset.json";
import trilogiaOperativaVideo from "@/assets/trilogia-operativa.mp4.asset.json";
import fuerzaAereaBatallaVideo from "@/assets/fuerza-aerea-sur-batalla.mp4.asset.json";
import historiaFuerzaAereaVideo from "@/assets/historia-fuerza-aerea-sur.mp4.asset.json";
import fuerzaAereaProbadaCombateVideo from "@/assets/fuerza-aerea-sur-probada-combate.mp4.asset.json";
import noFueronVideo from "@/assets/no-fueron-ni-1-ni-2-ni-3.mp4.asset.json";
import verdadIncomodaVideo from "@/assets/la-verdad-que-incomoda-fas.mp4.asset.json";
import martinezVideo from "@/assets/martinez-jose-luis.mp4.asset.json";
import fuerzaAereaSurVideo from "@/assets/fuerza-aerea-sur-video.mp4.asset.json";
import { GaleriaHistorica } from "@/components/galeria-historica";
import { LibroDeVisitas, ContadorVisitas } from "@/components/libro-de-visitas";

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
          <a href="#difundir" className="hover:opacity-70">Difundir</a>
          <a href="#comentarios" className="hover:opacity-70">Comentarios</a>
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
              Una obra documental y vivencial · Acceso 100% libre y gratuito · Fines de divulgación histórica
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
            La trilogía probada en combate
          </div>
          <p className="font-display text-2xl font-light leading-[1.3] text-balance md:text-4xl">
            El poder aéreo nace mucho antes del despegue.
          </p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Durante el <strong className="font-medium">Conflicto del Atlántico Sur de 1982</strong>, la Fuerza Aérea Sur escribió una de las páginas más extraordinarias de la historia militar argentina. Aquellas acciones que asombraron al mundo no fueron obra del azar ni del esfuerzo de un solo hombre: fueron el resultado de una <strong className="font-medium">trilogía operativa</strong>, inseparable e indispensable, forjada en el sacrificio, la disciplina y el compromiso.
            </p>
            <p className="font-display text-xl font-light italic md:text-2xl">
              AVIÓN · PILOTO · PERSONAL DE TIERRA
            </p>
            <p>
              <strong className="font-medium">Tres protagonistas. Una sola misión.</strong><br />
              Cada uno dependía del otro para cumplir su cometido.
            </p>
            <ul className="list-none space-y-2 pl-0">
              <li>Sin el personal de tierra, no hay avión operativo.</li>
              <li>Sin el avión, no hay piloto en combate.</li>
              <li>Sin el piloto, no hay misión cumplida.</li>
            </ul>
            <p className="font-display text-xl italic">
              Esta es la verdadera esencia del poder aéreo.
            </p>
            <p>
              Mucho antes de que una aeronave acelerara por la pista, existía un trabajo silencioso e incansable que rara vez ocupó los titulares. En hangares, plataformas y talleres, mecánicos, técnicos, armamentistas, electricistas, especialistas en aviónica, abastecedores y personal logístico trabajaban día y noche bajo una enorme presión, sabiendo que de la calidad de su tarea dependían el éxito de la misión y, muchas veces, la vida de quienes despegaban hacia el combate.
            </p>
            <p>
              Cada avión que regresó… y cada avión que no volvió… llevaba consigo el esfuerzo, la capacidad profesional y la entrega de hombres y mujeres que también combatieron desde tierra.
            </p>
            <p>
              Esta página nace con el propósito de preservar esa memoria, difundir documentos, testimonios, fotografías, videos y material de investigación que permitan comprender la verdadera dimensión del esfuerzo realizado por la <strong className="font-medium">Fuerza Aérea Sur</strong> durante la Guerra del Atlántico Sur.
            </p>
            <p>
              Es también un reconocimiento a quienes permanecieron durante décadas en un injusto silencio, pese a haber sido parte fundamental de una de las campañas aéreas más importantes de la historia contemporánea.
            </p>
            <p>
              Porque la historia no pertenece únicamente a quienes empuñaron los mandos de un avión. También pertenece a quienes, con sus manos, su conocimiento y su vocación de servicio, hicieron posible que cada misión pudiera despegar.
            </p>
            <p className="font-display text-xl italic">
              La Trilogía Probada en Combate no es solo un concepto. Es el reconocimiento de una verdad histórica: el avión, el piloto y el personal de tierra combatieron como una sola unidad.
            </p>
          </div>
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

          {/* FUERZA AÉREA SUR — MANIFIESTO */}
          <section id="fuerza-aerea-sur" className="mt-20 border-y border-border bg-card">
            <div className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-28">
              <div className="mb-12 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Reconocimiento operativo</p>
                <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">
                  FUERZA AÉREA SUR
                </h2>
                <p className="mt-3 font-display text-2xl font-light italic text-[var(--bronce)] md:text-3xl">
                  ESCUADRONES AEROMÓVILES DE GUERRA
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  PROBADOS EN COMBATE REAL
                </p>
              </div>

              <figure className="mx-auto mb-12 max-w-4xl">
                <img
                  src={folletoImg}
                  alt="Folleto informativo de la Fuerza Aérea Sur 1982: Escuadrones Aeromóviles de Guerra probados en combate real"
                  width={1600}
                  height={900}
                  loading="lazy"
                  className="w-full border border-border bg-background shadow-page"
                />
                <figcaption className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Folleto de difusión · Fuerza Aérea Sur 1982
                </figcaption>
              </figure>

              <div className="mb-12 border-l-2 border-[var(--ocre)] pl-6">
                <p className="font-display text-2xl italic leading-snug text-foreground/90 md:text-3xl">
                  LA DISCUSIÓN TERMINA DONDE COMIENZAN LOS HECHOS
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Basándonos en los análisis doctrinarios, las normas operativas militares y las declaraciones testimoniales y documentales emitidas por nuestros propios mandos de la época —en especial los testimonios del Brigadier Ernesto Horacio Crespo y del Comando de la Fuerza Aérea Sur—, sostenemos que existen fundamentos probatorios categóricos para demostrar por qué todos los integrantes de los Escuadrones Aeromóviles de la Fuerza Aérea Sur (FAS) debemos ser reconocidos formalmente como Veteranos de Guerra, y por qué nos constituimos en Escuadrones Aeromóviles de Guerra, probados en combate real.
                </p>
              </div>

              <div className="space-y-14 text-lg leading-relaxed text-foreground/85">
                <div>
                  <h3 className="font-display text-2xl font-light md:text-3xl">
                    1. ¿POR QUÉ DEBEMOS CONSIDERARNOS VETERANOS DE GUERRA?
                  </h3>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="font-medium">1.1. Cumplimiento directo de la misión de combate asignada</h4>
                      <p className="mt-2">
                        La legislación aplicable y la doctrina militar establecen que la condición del combatiente no puede definirse únicamente por el lugar geográfico donde se encontraba, sino por su integración, misión y participación efectiva dentro de las operaciones desarrolladas en el Teatro de Operaciones o en el espacio asignado a la confrontación bélica.
                      </p>
                      <p className="mt-2">
                        La Fuerza Aérea Sur fue formalmente activada y desplegada como la fuerza aérea responsable de las operaciones de combate en el Atlántico Sur.
                      </p>
                      <p className="mt-2">
                        Los hombres que estuvimos desplegados en las bases continentales patagónicas no estábamos en situación de paz ni cumplíamos tareas administrativas de rutina. Estábamos orgánicamente integrados a unidades de combate, bajo una estructura operacional de guerra y sometidos a las exigencias propias de una situación bélica, durante las 24 horas del día.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">1.2. Amenaza activa y riesgo de vida real</h4>
                      <p className="mt-2">
                        Las bases continentales desde las cuales operamos —Río Gallegos, San Julián, Río Grande, Comodoro Rivadavia, Trelew y Santa Cruz— constituían instalaciones estratégicas vinculadas directamente con las operaciones aéreas.
                      </p>
                      <p className="mt-2">
                        El personal de tierra y de vuelo operamos bajo una situación permanente de tensión y amenaza, incluyendo la posibilidad de incursiones de fuerzas especiales británicas, operaciones de reconocimiento y sabotaje, ataques aéreos y navales, así como la acción de submarinos enemigos.
                      </p>
                      <p className="mt-2">
                        Vivimos bajo alertas, oscurecimientos, defensas activas, vigilancia permanente y condiciones operacionales extremas. No era una simulación. Era una guerra.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">1.3. Inexistencia de una distinción operativa entre roles</h4>
                      <p className="mt-2">
                        La estructura operacional de la FAS comprendió a miles de hombres de distintas especialidades:
                      </p>
                      <ul className="mt-3 grid list-none grid-cols-2 gap-2 pl-0 sm:grid-cols-3">
                        <li>Pilotos</li>
                        <li>Mecánicos</li>
                        <li>Armeros</li>
                        <li>Radaristas</li>
                        <li>Personal de comunicaciones</li>
                        <li>Personal de sanidad</li>
                        <li>Personal de logística y abastecimiento</li>
                        <li>Defensa antiaérea</li>
                        <li>Personal de pista y reabastecimiento</li>
                        <li>Meteorología</li>
                        <li>Control de tránsito aéreo</li>
                        <li>Y todas las especialidades necesarias</li>
                      </ul>
                      <p className="mt-4">
                        Pretender dividirlos entre quienes "combatieron" y quienes simplemente "estuvieron en tierra" desconoce la realidad de una operación aérea de guerra. El ataque se planificaba, se preparaba, se armaba, se abastecía, se controlaba y se sostenía desde el continente para proyectarse sobre el Atlántico Sur. La misión era una sola. El sistema era uno solo. El riesgo era de todos.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-light md:text-3xl">
                    2. DE ESCUADRONES AEROMÓVILES A ESCUADRONES AEROMÓVILES DE GUERRA
                  </h3>
                  <p className="mt-4">
                    Antes del conflicto, los Escuadrones Aeromóviles constituían unidades destinadas al despliegue y al adiestramiento táctico. Con la activación de la Fuerza Aérea Sur y el inicio de las operaciones de guerra, esa realidad cambió radicalmente. Nos transformamos, en los hechos, en:
                  </p>
                  <p className="my-6 text-center font-display text-2xl font-light italic text-[var(--bronce)] md:text-3xl">
                    ESCUADRONES AEROMÓVILES DE GUERRA
                  </p>
                  <p className="mt-2">
                    Y no por una denominación honorífica. Por haber sido empleados en combate real.
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="font-medium">2.1. Alineación con el plan operativo de guerra</h4>
                      <p className="mt-2">
                        Dejamos de ser unidades destinadas exclusivamente al adiestramiento para convertirnos en elementos operativos integrados a la ejecución de las operaciones aéreas de combate en el Atlántico Sur.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">2.2. Operatividad bajo fuego real y adaptación táctica</h4>
                      <p className="mt-2">
                        Durante el conflicto debimos adaptar procedimientos, armamento, mantenimiento, logística y empleo operativo a las exigencias concretas de una guerra. Se modificaron procedimientos de empleo de armamento, se desarrollaron tácticas de vuelo a muy baja altura para reducir la exposición a la detección enemiga y se implementaron procedimientos de reabastecimiento en vuelo mediante los KC-130 Hércules, entre muchas otras adaptaciones realizadas en condiciones reales de combate.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">2.3. La prueba definitiva: el combate</h4>
                      <p className="mt-2">
                        Nuestros escuadrones aeromóviles —Dagger, A-4B, A-4C, A-4Q, Mirage, Pucará, Learjet, Hércules y helicópteros— participaron en las operaciones de guerra, sufrieron pérdidas humanas y materiales y mantuvieron su actividad operacional hasta el final del conflicto. Eso constituye la prueba definitiva:
                      </p>
                      <p className="mt-4 text-center font-display text-2xl italic text-foreground/90 md:text-3xl">
                        FUIMOS PROBADOS EN COMBATE REAL.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-light md:text-3xl">
                    3. LA TRILOGÍA INDIVISIBLE
                  </h3>
                  <p className="mt-4 text-center font-display text-xl italic text-[var(--bronce)] md:text-2xl">
                    AVIÓN — PILOTO — PERSONAL DE TIERRA
                  </p>
                  <p className="mt-4">
                    La Trilogía Indivisible no es para nosotros una metáfora poética. Es la expresión de una realidad operacional: el avión, su tripulación y todo el personal que sostiene técnica y operativamente el sistema de armas forman una única cadena de combate.
                  </p>
                  <p className="mt-2 text-center font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    SISTEMA DE ARMAS = PLATAFORMA + TRIPULACIÓN + SOSTÉN OPERATIVO Y TÉCNICO
                  </p>
                  <p className="mt-4">
                    No existe un sistema de armas operativo sin cada uno de esos componentes.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-medium">3.1. Sin personal de tierra no hay despegue ni ataque</h4>
                    <p className="mt-2">
                      Un A-4 o un Dagger no podía iniciar una misión de combate por sí mismo. Antes del despegue existía una cadena humana y técnica imprescindible:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>El armador y armero cargaba, configuraba y verificaba el armamento bajo condiciones extremas y con el riesgo permanente asociado a su manipulación.</li>
                      <li>El mecánico ponía a punto el motor y reparaba las averías producidas durante las misiones anteriores, muchas veces contra reloj.</li>
                      <li>El personal de pista y reabastecimiento aseguraba el combustible necesario para la misión.</li>
                      <li>El radarista y controlador contribuían al control y conducción de las operaciones.</li>
                      <li>El personal de meteorología proporcionaba la información indispensable para la planificación y ejecución.</li>
                      <li>Comunicaciones, sanidad, logística y abastecimiento garantizaban la continuidad operacional.</li>
                    </ul>
                    <p className="mt-4">
                      Cuando finalmente la aeronave despegaba, la misión ya llevaba detrás el trabajo de todo un escuadrón.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-light md:text-3xl">
                    4. LA RESPONSABILIDAD COMPARTIDA DEL RESULTADO BÉLICO
                  </h3>
                  <p className="mt-4">
                    Cuando una tripulación alcanzaba un objetivo enemigo, ese resultado no era producto exclusivamente de quienes estaban dentro de la cabina. Era el resultado final de una cadena operacional completa.
                  </p>
                  <p className="mt-4">
                    Si una aeronave lograba hundir o averiar un buque enemigo —como ocurrió con unidades de la Royal Navy y otros objetivos durante el conflicto—, ese resultado era posible porque detrás de ella existía un sistema entero trabajando para que pudiera llegar al combate.
                  </p>
                  <p className="mt-4">
                    Y cuando una aeronave no regresaba, la pérdida golpeaba a toda la unidad. Porque éramos nosotros quienes habíamos preparado esa máquina. Éramos nosotros quienes la habíamos armado. Éramos nosotros quienes la habíamos puesto en marcha. Éramos nosotros quienes la vimos despegar. Y éramos nosotros quienes la esperábamos regresar. Algunas veces, no regresó.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-light md:text-3xl">
                    5. CONCLUSIÓN PROBATORIA
                  </h3>
                  <p className="mt-4">
                    La historia operacional de la Fuerza Aérea Sur demuestra que durante la Gesta de Malvinas funcionamos como un sistema de combate integrado.
                  </p>
                  <ul className="mt-4 list-none space-y-2 pl-0 font-display text-lg italic">
                    <li>No se puede separar el avión del piloto.</li>
                    <li>No se puede separar al piloto del personal que preparó, armó, mantuvo, abasteció y sostuvo esa aeronave.</li>
                    <li>No se puede reconocer el resultado del combate y negar a quienes hicieron posible ese resultado.</li>
                  </ul>
                  <div className="my-8 space-y-2 text-center font-display text-xl italic text-foreground/90 md:text-2xl">
                    <p>SIN PERSONAL DE TIERRA, NO HAY AVIÓN.</p>
                    <p>SIN AVIÓN, NO HAY PILOTO.</p>
                    <p>SIN PILOTO, NO HAY MISIÓN.</p>
                    <p>SIN TODO EL SISTEMA, NO HAY COMBATE.</p>
                  </div>
                  <p className="mt-4">
                    Los hombres de la FAS no elegimos nuestro lugar geográfico. Cumplimos una orden. Integramos unidades desplegadas para sostener y ejecutar las operaciones aéreas de guerra. Estuvimos bajo mando operacional. Trabajamos en condiciones de combate. Sostuvimos aeronaves que fueron al combate. Sufrimos pérdidas. Y cumplimos nuestra misión.
                  </p>
                  <p className="mt-4">
                    Por eso, la discusión no puede reducirse a una cuestión de metros, kilómetros o coordenadas. La verdadera pregunta es:
                  </p>
                  <p className="my-6 text-center font-display text-xl italic text-[var(--bronce)] md:text-2xl">
                    ¿QUÉ UNIDAD INTEGRABA CADA HOMBRE, QUÉ MISIÓN CUMPLÍA Y QUÉ FUNCIÓN DESEMPEÑABA DENTRO DEL SISTEMA DE COMBATE?
                  </p>
                  <p className="mt-4">
                    Porque una cosa es indiscutible: la Fuerza Aérea Sur combatió como un todo. Y quienes integramos sus unidades operativas fuimos parte de ese sistema.
                  </p>
                  <p className="mt-4">
                    Por eso sostenemos que quienes integramos los Escuadrones Aeromóviles de Guerra, probados en combate real, merecemos el pleno reconocimiento de nuestra condición de:
                  </p>
                  <p className="mt-6 text-center font-display text-3xl italic text-foreground/90 md:text-4xl">
                    VETERANOS DE GUERRA.
                  </p>
                </div>
              </div>

              <div className="mt-16 border-t border-border pt-10 text-center">
                <p className="font-display text-2xl italic leading-snug text-foreground/90 md:text-3xl">
                  FUERZA AÉREA SUR
                </p>
                <div className="mt-4 space-y-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <p>TODOS FUIMOS UNO.</p>
                  <p>TODOS CUMPLIMOS UNA MISIÓN.</p>
                  <p>TODOS FORMAMOS PARTE DEL SISTEMA DE COMBATE.</p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl font-display text-lg italic leading-relaxed text-foreground/80">
                  No pedimos privilegios. No pedimos honores. Pedimos verdad. Porque la verdad de Malvinas no puede seguir contándose por mitades.
                </p>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  PC FAA VGM Martínez José Luis<br />
                  Integrante del II Escuadrón Aeromóvil de Guerra (EAG) M5 IAI Dagger “La Marinete”
                </p>
              </div>
            </div>
          </section>

          <div className="mx-auto mt-16 max-w-4xl">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Video de la Trilogía Operativa
            </p>
            <video
              src={trilogiaOperativaVideo.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black border border-border"
            />
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Por qué fue tan importante la Trilogía
            </p>
            <video
              src={historiaFuerzaAereaVideo.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black border border-border"
            />
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Fuerza Aérea Sur 1982 — Dando batalla
            </p>
            <video
              src={fuerzaAereaBatallaVideo.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black border border-border"
            />
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              La Fuerza Aérea Sur probada en combate
            </p>
            <video
              src={fuerzaAereaProbadaCombateVideo.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black border border-border"
            />
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              No fueron ni 1, ni 2, ni 3...
            </p>
            <video
              src={noFueronVideo.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black border border-border"
            />
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              La verdad que incomoda — Fuerza Aérea Sur
            </p>
            <video
              src={verdadIncomodaVideo.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black border border-border"
            />
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Fuerza Aérea Argentina — PC VGM Martínez José Luis
            </p>
            <video
              src={martinezVideo.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black border border-border"
            />
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

      {/* VIDEO FUERZA AÉREA SUR */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-32">
          <div className="mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Archivo audiovisual</p>
            <h2 className="mt-4 font-display text-4xl font-light italic md:text-6xl">
              Fuerza Aérea Sur
            </h2>
            <p className="mt-3 font-display text-2xl font-light italic text-[var(--bronce)] md:text-3xl">
              La historia que también se libró en tierra
            </p>
          </div>

          <div className="space-y-10 text-lg leading-relaxed text-foreground/85">
            <p className="font-display text-2xl font-light leading-snug text-foreground/90 md:text-3xl">
              Fuerza Aérea Sur: una historia de hombres, máquinas y compromiso
            </p>

            <p>
              La Guerra de Malvinas dejó una enorme cantidad de testimonios, documentos y experiencias que permiten reconstruir aquellos días de 1982. Sin embargo, toda guerra tiene diferentes protagonistas y, muchas veces, algunas de esas historias quedan relegadas detrás de las imágenes más conocidas.
            </p>

            <p>
              En el caso de la Fuerza Aérea Sur, existe una realidad que resulta fundamental comprender: cada misión aérea fue el resultado del trabajo conjunto de una verdadera estructura de combate.
            </p>

            <p className="font-display text-xl font-light italic md:text-2xl">
              El avión, el piloto y el personal de tierra conformaron una unidad inseparable.
            </p>

            <p>
              Mientras las aeronaves enfrentaban al enemigo, en las bases continentales cientos de hombres trabajaban para mantenerlas operativas. Técnicos, mecánicos, especialistas en armamento, combustible, electrónica, comunicaciones y mantenimiento asumieron jornadas interminables, muchas veces en condiciones adversas y bajo la presión de saber que aquellos aviones que preparaban regresarían al combate pocas horas después.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <p className="flex items-center justify-center border border-border bg-background p-6 font-display text-xl italic text-center">
                No eran espectadores de la guerra.
              </p>
              <p className="flex items-center justify-center border border-border bg-background p-6 font-display text-xl italic text-center">
                Eran parte de ella.
              </p>
            </div>

            <p>
              Cada inspección, cada reparación, cada componente reemplazado y cada puesta en servicio tenía una consecuencia directa: permitir que un avión pudiera volver a despegar y cumplir su misión.
            </p>

            <p>
              Por eso, cuando hablamos de los resultados obtenidos por la Fuerza Aérea Sur durante el conflicto, no alcanza con mirar solamente lo ocurrido en el aire.
            </p>

            <p>
              Hay que mirar también hacia las bases.
            </p>

            <p>
              Allí estaba el otro componente indispensable de la misión: el personal de tierra.
            </p>

            <div className="border-y border-border bg-background py-12">
              <h3 className="mb-8 text-center font-display text-3xl font-light md:text-4xl">
                La Trilogía
              </h3>

              <p className="mx-auto max-w-3xl text-center">
                La experiencia de Malvinas permite comprender una realidad que constituye uno de los ejes de este proyecto:
              </p>

              <p className="mx-auto mt-6 max-w-3xl text-center font-display text-2xl font-light italic md:text-3xl">
                AVIÓN – PILOTO – PERSONAL DE TIERRA
              </p>

              <p className="mx-auto mt-6 max-w-3xl text-center">
                Tres componentes de una misma misión.
              </p>

              <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
                <p className="font-display text-xl italic">SIN PERSONAL DE TIERRA, NO HAY AVIÓN.</p>
                <p className="font-display text-xl italic">SIN AVIÓN, NO HAY PILOTO.</p>
                <p className="font-display text-xl italic">SIN PILOTO, NO HAY MISIÓN.</p>
              </div>

              <p className="mx-auto mt-10 max-w-3xl text-center">
                Esta concepción no pretende quitar protagonismo a quienes combatieron desde las cabinas. Todo lo contrario. Busca completar la dimensión humana, técnica y operacional de aquella guerra.
              </p>

              <p className="mx-auto mt-6 max-w-3xl text-center font-display text-xl italic">
                El heroísmo de un piloto no comienza cuando cierra la cabina.
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-center">
                Comienza mucho antes, cuando un equipo de hombres prepara la máquina con la que ese piloto irá al combate.
              </p>
            </div>

            <div>
              <h3 className="mb-6 font-display text-3xl font-light md:text-4xl">
                Un testimonio para preservar
              </h3>

              <p>
                El video que acompaña esta nota forma parte de ese esfuerzo por recuperar y preservar la memoria.
              </p>

              <p>
                Un testimonio no es solamente el relato de quien estuvo allí. Es también una pieza que permite a las nuevas generaciones comprender cómo se vivió la guerra desde otro lugar, conocer el trabajo que existió detrás de cada misión y rescatar experiencias que con el paso del tiempo corren el riesgo de desaparecer.
              </p>

              <p>
                A más de cuatro décadas de Malvinas, todavía quedan historias por contar.
              </p>

              <div className="grid gap-4 py-6 sm:grid-cols-3">
                <p className="text-center font-display text-xl italic">Historias de pilotos.</p>
                <p className="text-center font-display text-xl italic">Historias de aviones.</p>
                <p className="text-center font-display text-xl italic">Historias de quienes hicieron posible que esos aviones volaran.</p>
              </div>

              <p>
                Porque la memoria de la Guerra de Malvinas debe ser completa.
              </p>

              <p>
                Y dentro de esa memoria, la historia de la Fuerza Aérea Sur ocupa un lugar que merece ser conocido, estudiado y preservado.
              </p>

              <p>
                Esta es la razón de ser de <em className="font-display text-xl not-italic">Testimonio de una Trilogía</em>: recuperar la historia completa de la misión.
              </p>

              <div className="mt-10 grid gap-4 border border-border bg-background p-8 text-center sm:grid-cols-3">
                <p className="font-display text-2xl font-light italic">AVIÓN.</p>
                <p className="font-display text-2xl font-light italic">PILOTO.</p>
                <p className="font-display text-2xl font-light italic">PERSONAL DE TIERRA.</p>
              </div>

              <div className="mt-6 space-y-2 text-center font-display text-xl italic">
                <p>Una misma misión.</p>
                <p>Un mismo compromiso.</p>
                <p>Una misma historia.</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <video
              src={fuerzaAereaSurVideo.url}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black border border-border"
            />
          </div>
          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Archivo personal · VGM FAA José Luis Martínez
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



      {/* LA VERDAD DOCUMENTADA */}
      <section id="verdad-documentada" className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--bronce)]">La verdad documentada</p>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight md:text-5xl">
            Fuerza Aérea Sur: una historia que no puede ser borrada
          </h2>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Ley 23.118 — Resoluciones 540/85, 231/2000, 855/2006, 466/2007 y 1400/2013
          </p>
          <p className="mt-4 text-lg italic text-foreground/85">
            Documentos oficiales. Una historia. Una realidad que debe ser conocida.
          </p>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Durante más de cuatro décadas, la participación de numerosos integrantes de la Fuerza Aérea Sur (FAS) y de sus Bases de Despliegue Continental ha quedado atrapada en una discusión administrativa, jurídica e histórica que todavía no ha sido resuelta de manera coherente.
            </p>
            <p>No se trata solamente de una cuestión de beneficios. No se trata de una disputa entre veteranos. Y mucho menos de quitarle méritos a quienes combatieron en las islas.</p>
            <p>Se trata de algo mucho más elemental:</p>
            <blockquote className="border-l-2 border-[var(--ocre)] pl-6 font-display text-2xl font-light italic">
              ¿Qué reconoció oficialmente el Estado argentino y qué reconoció la propia Fuerza Aérea Argentina?
            </blockquote>
            <p>
              La respuesta no debe buscarse en opiniones actuales. Debe buscarse en los documentos. Por eso ponemos a disposición de quien quiera conocer, estudiar, verificar y sacar sus propias conclusiones los textos originales en PDF de la legislación y de las resoluciones que forman parte de esta historia documental.
            </p>
            <p>Porque cuando existen documentos oficiales, la discusión debe comenzar por ellos.</p>
          </div>

          <div className="mt-14 space-y-12">
            <article>
              <h3 className="font-display text-2xl font-light">1. La guerra aérea fue un sistema</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>Una Fuerza Aérea no combate con el avión solamente: combate mediante un sistema operacional. Detrás de cada aeronave hubo hombres y mujeres.</p>
                <p>Hubo pilotos, mecánicos, especialistas, armeros, personal de comunicaciones, operadores, abastecimiento, meteorología, sanidad, seguridad, transporte, logística, mantenimiento, técnicos civiles y militares y soldados. Y hubo Bases de Despliegue desde las cuales se sostuvo diariamente la capacidad de combate.</p>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--bronce)]">Avión — Piloto — Personal de Tierra. Una trilogía operacional.</p>
                <p>Sin personal de tierra no hay avión disponible. Sin avión disponible no hay piloto que pueda cumplir la misión. Y sin piloto no hay misión aérea. No son tres historias diferentes: son tres componentes de una misma operación.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">2. La Fuerza Aérea Sur</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>La Fuerza Aérea Sur fue una estructura operacional creada para conducir las operaciones aéreas durante el conflicto del Atlántico Sur, con medios y personal desplegados en diferentes puntos del territorio continental argentino.</p>
                <p>Las Bases de Despliegue no fueron simples lugares de estacionamiento: fueron parte del dispositivo mediante el cual se sostuvo la capacidad operacional. Desde ellas se prepararon, mantuvieron, abastecieron y lanzaron medios aéreos. Allí se trabajó bajo alerta, se realizaron tareas de mantenimiento y armamento, se recibieron y procesaron órdenes, se sostuvo la logística y se esperó cada misión.</p>
                <p>La guerra aérea no comenzaba cuando el avión cruzaba la costa. La misión comenzaba mucho antes.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">3. La Ley 23.118: el Congreso de la Nación habló</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>Sancionada el 30 de septiembre de 1984 y promulgada mediante el Decreto 3522/84, la ley lleva un título inequívoco: “Condecoraciones a combatientes”.</p>
                <p>Su artículo 1.º establece la condecoración con medalla y diploma para quienes lucharon en la guerra por la reivindicación territorial de las Islas Malvinas, Georgias y Sandwich del Sur, entre el 2 de abril y el 14 de junio de 1982. El artículo 2.º establece que las condecoraciones serían de una sola y única clase para todos los combatientes. Y el artículo 3.º dispone expresamente:</p>
                <blockquote className="border-l-2 border-[var(--ocre)] pl-6 italic">
                  “Serán acreedores a la condecoración mencionada los civiles y militares que hubieren combatido en el conflicto bélico…”
                </blockquote>
                <p>El Congreso de la Nación reconoció mediante una ley una categoría de participación que comprendía tanto a militares como a civiles. Además, la propia documentación de la Fuerza Aérea conserva la Ley 23.118 dentro de su Colección Temática Malvinas.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">4. Resolución 540/85: el primer gran documento de la Fuerza Aérea</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>Dictada por el Estado Mayor General de la Fuerza Aérea, estableció los distintivos de campaña correspondientes a la participación en el conflicto. Dentro de sus anexos aparece contemplado el personal vinculado con la Fuerza Aérea Sur y sus Bases de Despliegue.</p>
                <p>El reconocimiento no quedó limitado a una única categoría profesional: comprendió personal militar, civil y soldados según las categorías establecidas por la propia resolución. No se trata de una interpretación nacida décadas después, sino de un documento producido por la institución poco tiempo después del conflicto.</p>
                <p>Existe además un antecedente parlamentario que reproduce expresamente la vinculación entre la Ley 23.118 y los reconocimientos de la Resolución 540/85, señalando que esos reconocimientos “no pueden desconocerse”.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">5. Resolución 231/2000: la palabra que cambia la discusión</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>Aquí aparece expresamente la denominación “Veterano de Guerra”. La documentación parlamentaria oficial reproduce su artículo 1.º:</p>
                <blockquote className="border-l-2 border-[var(--ocre)] pl-6 italic">
                  “Será reconocido como ‘Veterano de Guerra’ todo personal militar superior, subalterno, tropa y personal civil que participó en la Guerra del Atlántico Sur, y que se le haya otorgado algún distintivo de campaña, instituido en la Resolución 540/85 del Estado Mayor General de la Fuerza Aérea Argentina.”
                </blockquote>
                <p>Existe entonces una cadena administrativa: 540/85 establece los distintivos de campaña; 231/2000 establece el reconocimiento como “Veterano de Guerra” en función de esos distintivos.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">6. ¿Qué pasa con el personal civil?</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>La Resolución 231/2000 incluye expresamente personal militar superior, personal militar subalterno, tropa y personal civil. La propia norma administrativa de la Fuerza Aérea contempla un universo heterogéneo.</p>
                <p>El mantenimiento de una aeronave de combate no es una actividad secundaria. Tampoco el armamento, el abastecimiento o la logística. Son componentes indispensables del sistema operacional.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">7. Resolución 855/2006: la acción efectiva de combate</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>Su valor histórico y doctrinario está relacionado con las nuevas definiciones incorporadas por la Fuerza Aérea respecto del concepto de acción efectiva de combate, definida como aquella que:</p>
                <blockquote className="border-l-2 border-[var(--ocre)] pl-6 italic">
                  “realiza un combatiente cumpliendo funciones que contribuyen a lograr un resultado bélico concreto”.
                </blockquote>
                <p>Coloca el centro de la discusión en la función cumplida dentro del sistema operacional, y no solamente en la ubicación física del individuo, en quién disparó o en quién estuvo frente al enemigo. La cuestión pasa a ser: ¿esa función contribuyó a producir un resultado bélico concreto?</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">8. Resolución 466/2007: el sistema operacional</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>La documentación parlamentaria reproduce que la Acción Efectiva de Combate realizada por una Fuerza Aérea es llevada a cabo por un grupo heterogéneo de personas asignado a un Comando Estratégico Operacional, que constituye parte indivisa de un sistema capaz de producir un resultado bélico concreto —una ventaja militar— aun sin estar necesariamente en contacto directo con el enemigo.</p>
                <p>El resultado de combate es el producto de un sistema. No de un hombre. No de una especialidad. No de una sola función.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">9. El personal de tierra no fue “apoyo” ajeno al combate</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>En una Fuerza Aérea de combate, el mantenimiento, el armamento, la logística y la preparación de las aeronaves forman parte del sistema que permite producir el resultado operacional. El avión necesita mantenimiento, combustible, armamento, inspecciones, reparaciones, sistemas funcionando y personal especializado. Y necesita que todo esté listo antes de que el piloto se siente en la cabina.</p>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--bronce)]">Sin personal de tierra, no hay avión. Sin avión, no hay piloto. Sin piloto, no hay misión.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">10. Claves para entender la FAS</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>Estas normas permiten comprender la guerra aérea no como una sucesión de actos individuales, sino como un sistema de combate integrado. Una falla en mantenimiento puede impedir una misión; una falla de armamento puede impedir el empleo del avión; una falla logística puede dejar una aeronave en tierra; una falla de comunicaciones puede comprometer una operación; una demora en el abastecimiento puede alterar una salida.</p>
                <p>Por eso, cuando se analiza una operación aérea, hay que mirar el conjunto. Y eso es precisamente lo que permite comprender el concepto de acción efectiva de combate.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">11. Resolución 1400/2013: VGM</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>La documentación disponible atribuye a esta resolución la incorporación de la sigla VGM — Veterano de Guerra de Malvinas para la identificación del personal reconocido por la Fuerza Aérea. Este antecedente debe leerse junto con las resoluciones anteriores y no como un documento aislado.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">12. Reconocimiento no es lo mismo que beneficio</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>La Ley 23.118 es una ley de condecoración. Las resoluciones de la Fuerza Aérea son actos administrativos e institucionales. Las pensiones honoríficas y otros beneficios posteriores poseen legislación, reglamentaciones y requisitos propios.</p>
                <p>Esta página no pretende afirmar que una resolución de la Fuerza Aérea, por sí sola, sustituya una ley previsional. Lo que esta documentación permite demostrar es que existe un reconocimiento institucional documentado, y que ese reconocimiento no puede ser ignorado cuando se analiza históricamente la participación del personal de la Fuerza Aérea Sur.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">13. La discusión previsional existe, pero no puede borrar la historia</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>Existen antecedentes judiciales que han citado expresamente las Resoluciones 855/06 y 466/07 para explicar que una acción efectiva de combate puede ser realizada por un grupo heterogéneo de personal integrado en un sistema operacional, aun sin contacto directo con el enemigo.</p>
                <p>También existen decisiones judiciales recientes en las que se ordenó a la Fuerza Aérea emitir certificados de Veterano de Guerra en casos concretos. Es una cuestión que lleva décadas en el ámbito administrativo, parlamentario y judicial.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">14. La documentación habla de un sistema, no de una persona</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>El piloto era indispensable. El avión era indispensable. Pero también era indispensable todo aquello que hacía posible que ese avión estuviera en condiciones de cumplir una misión.</p>
                <p>Por eso la historia de Malvinas no puede reducirse a la imagen del avión despegando. Hay que contar también quién lo mantuvo, quién lo armó, quién lo abasteció, quién lo inspeccionó, quién lo reparó, quién mantuvo la base operativa, quién sostuvo la logística y quién esperó su regreso.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">15. Una cadena documental de casi tres décadas</h3>
              <ul className="mt-4 space-y-4 border-l border-border pl-6">
                {[
                  ["1984", "Ley 23.118", "El Congreso de la Nación condecora a los combatientes del conflicto."],
                  ["1985", "Resolución 540/85", "La Fuerza Aérea establece los distintivos de campaña y comprende a los distintos sectores de personal vinculados con la estructura operacional."],
                  ["2000", "Resolución 231/2000", "Establece expresamente el reconocimiento como “Veterano de Guerra” para el personal comprendido bajo los distintivos de la 540/85."],
                  ["2006", "Resolución 855/06", "Se incorpora y desarrolla el concepto de Acción Efectiva de Combate."],
                  ["2007", "Resolución 466/07", "Se profundiza el concepto como resultado de un sistema operacional integrado."],
                  ["2013", "Resolución 1400/13", "Antecedente posterior dentro de la evolución del reconocimiento institucional y de la identificación VGM."],
                ].map(([anio, norma, texto]) => (
                  <li key={norma}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--bronce)]">{anio}</p>
                    <p className="mt-1 font-display text-xl font-light">{norma}</p>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">{texto}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">16. No es una discusión entre veteranos</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>No queremos quitarle nada a nadie. Reconocer al personal de tierra no disminuye el heroísmo de los pilotos. Reconocer a los técnicos no disminuye el sacrificio de quienes estuvieron en las islas. Reconocer a los civiles no modifica el valor de los soldados. Reconocer a las Bases de Despliegue no cambia la historia de quienes murieron en combate.</p>
                <p>Al contrario: completa la historia. Porque una nación que honra a sus combatientes debe conocer cómo funcionó realmente su instrumento militar.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">17. El problema no es la memoria. Es el olvido.</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>Durante años, muchos integrantes de la Fuerza Aérea Sur quedaron fuera de los relatos más difundidos de la guerra. No porque no hubieran estado, ni porque no hubieran trabajado, ni porque sus funciones fueran irrelevantes, sino porque la historia terminó muchas veces concentrándose exclusivamente en la imagen del piloto y del avión.</p>
                <p>Detrás de cada fotografía de un avión de combate hay cientos de horas de trabajo. Y detrás de cada misión hay una cadena humana. Esa cadena también merece ser conocida.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">18. Los documentos, a disposición de todos</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>Esta página no pretende que el visitante crea simplemente en nuestra palabra. Todo lo contrario: queremos que los documentos puedan ser consultados. Por eso ponemos a disposición el texto original de la Ley 23.118 y de las Resoluciones 540/85, 231/2000, 855/06, 466/07 y 1400/13.</p>
                <p>Que cada persona pueda leer. Que cada persona pueda comprobar. Que cada persona pueda sacar sus propias conclusiones. Porque la mejor defensa de la verdad histórica no es el discurso: es el documento.</p>
              </div>
              <a
                href={leyResolucionesPdf.url}
                download="ley-23118-y-resoluciones-faa.pdf"
                className="group mt-8 inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-background transition-all hover:bg-[var(--bronce)]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Ley 23.118 y todas las resoluciones (PDF)
              </a>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Incluye RES 540/1985 · RES 231/2000 · RES 855/2006 · RES 466/2007 · RES 1400/2013 · Ley 23.118
              </p>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">19. Una invitación a investigar</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>A los veteranos, a sus familias, a investigadores, periodistas, historiadores, estudiantes, docentes y a las nuevas generaciones: los invitamos a consultar estos documentos, a leerlos completos, a comparar fechas, verificar firmas, revisar anexos y estudiar sus antecedentes. Y también a cuestionar aquello que consideren necesario.</p>
                <p>Porque preservar la memoria no significa impedir el debate: significa garantizar que el debate se produzca sobre documentos y no sobre relatos sin respaldo.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">20. La historia de la Fuerza Aérea Sur merece ser contada completa</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>La FAS existió. Sus Bases de Despliegue existieron. Sus escuadrones, sus aeronaves y sus misiones existieron. Sus pilotos, su personal técnico, sus civiles y sus soldados existieron. Y sus documentos también existen.</p>
                <p>Esta página no busca construir una nueva historia: busca recuperar la historia documentada. Una historia en la que cada componente tenga el lugar que realmente ocupó.</p>
              </div>
            </article>
          </div>

          <div className="mt-16 border border-border bg-muted/30 p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--bronce)]">Referencias institucionales · Fuerza Aérea Argentina</p>
            <ul className="mt-5 space-y-5 text-base leading-relaxed text-foreground/85">
              <li>
                La página oficial de la FAA declara que su Departamento Gesta de Malvinas tiene entre sus funciones resaltar el accionar de sus 7.164 Veteranos de Guerra de Malvinas, entre ellos oficiales, suboficiales, soldados conscriptos y personal civil convocado.{" "}
                <a href="https://www.argentina.gob.ar/sites/default/files/2020/04/nomina_del_personal_que_tuvo_participacion_en_el_conflicto_del_atlantico_sur.pdf" target="_blank" rel="noreferrer" className="underline decoration-[var(--ocre)] underline-offset-4 hover:opacity-70">
                  Nómina oficial del personal (PDF)
                </a>
              </li>
              <li>
                Los tres tomos de la obra oficial “La Fuerza Aérea en Malvinas”, de la Comisión BANIM, pueden descargarse de forma gratuita en español e inglés.{" "}
                <a href="https://www.argentina.gob.ar/fuerzaaerea/gesta-de-malvinas/fuerza-aerea-en-malvinas-libro-digital-de-la-comision-banim" target="_blank" rel="noreferrer" className="underline decoration-[var(--ocre)] underline-offset-4 hover:opacity-70">
                  Libro digital de la Comisión BANIM
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-14 border-t border-border pt-10 text-center">
            <p className="font-display text-2xl font-light italic">La historia no se borra. La historia se investiga. La historia se documenta.</p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Avión — Piloto — Personal de Tierra · Una trilogía operacional
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-[var(--bronce)]">
              PC FAA VGM Martínez José Luis
            </p>
          </div>
        </div>
      </section>



      {/* MARCO DOCTRINARIO Y NORMATIVO */}
      <section id="marco-doctrinario" className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--bronce)]">Apartado del dossier</p>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight md:text-5xl">
            Marco doctrinario y normativo de la Acción Efectiva de Combate según las Resoluciones 855/06 y 466/07
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            <h3 className="font-display text-2xl font-light">Introducción</h3>
            <p>
              El concepto de "Acción Efectiva de Combate" en el ámbito de la guerra aérea no puede analizarse desde una óptica meramente individual o geográfica. Como establece la propia doctrina de la Fuerza Aérea Argentina, cristalizada en las Resoluciones 855/06 y 466/07, una operación bélica es el producto final de un grupo heterogéneo organizado sistémicamente. A continuación, se detallan las bases doctrinarias emanadas de dichos documentos oficiales que sustentan la inseparabilidad de la trilogía "Avión - Piloto - Personal de Tierra" en el marco de la Fuerza Aérea Sur (FAS).
            </p>
          </div>

          <div className="mt-14 space-y-12">
            <article>
              <h3 className="font-display text-2xl font-light">1. El combate como resultado de un sistema integral y no individual</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground">Cita textual</p>
                <blockquote className="border-l-2 border-[var(--ocre)] pl-6 italic">
                  "La valoración del empeñamiento de los hombres de la Fuerza Aérea en un conflicto armado debe medirse, no por la cantidad de personas que entran en contacto con el enemigo, sino por los efectos alcanzados por el conjunto del sistema operativo organizado para actuar en esa situación particular."
                </blockquote>
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground">Ubicación: Resolución 855/2006, Anexo, Conclusión N° 1.</p>
                <p>
                  <strong className="font-medium">Interpretación:</strong> La Fuerza Aérea redefine normativamente qué significa el "empeñamiento" (la participación en combate). El documento prohíbe explícitamente reducir la acción de combate a quien tuvo "contacto directo" (el piloto). Por el contrario, obliga a valorar los efectos logrados por el sistema operativo en su conjunto.
                </p>
                <p>
                  <strong className="font-medium">Relación concreta con la FAS:</strong> Esto ratifica que el personal de tierra (mecánicos, armeros, radaristas, sanidad) no era un elemento accesorio, sino "parte indivisa" del sistema de armas. El misil que impactó en la flota enemiga o la bomba que alcanzó un objetivo fue el "efecto alcanzado" por la totalidad de la estructura de la FAS, haciendo de la función en tierra una Acción Efectiva de Combate inseparable del vuelo.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">2. La irrelevancia del emplazamiento geográfico en la guerra aérea</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground">Cita textual</p>
                <blockquote className="border-l-2 border-[var(--ocre)] pl-6 italic">
                  "Por consiguiente, una fuerza aérea al entrar en operaciones debe necesariamente emplear sus medios desde bases que le brinden el apoyo necesario y que, al mismo tiempo que estén favorablemente ubicadas para proyectar el poder de fuego, estén protegidas del accionar enemigo por ser sus blancos prioritarios, independientemente del emplazamiento geográfico."
                </blockquote>
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground">Ubicación: Resolución 855/2006, Anexo, Párrafo 10.</p>
                <p>
                  <strong className="font-medium">Interpretación:</strong> La doctrina aérea reconoce la "vulnerabilidad" de sus medios en superficie, por lo que el despliegue requiere operar desde bases protegidas. Lo fundamental es el concepto "independientemente del emplazamiento geográfico", destruyendo el argumento de que "estar en el continente" equivalía a "estar fuera de la guerra".
                </p>
                <p>
                  <strong className="font-medium">Relación concreta con la FAS:</strong> La FAS operó exactamente bajo este precepto estratégico doctrinal. Las bases desplegadas en la Patagonia brindaban el apoyo logístico vital y proyectaban el poder de fuego hacia las Islas. Que el personal operara desde el continente no fue una limitación de su participación bélica, sino una exigencia táctica de la doctrina aérea, cumpliendo roles de combate desde ubicaciones continentales.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">3. El reemplazo del límite geográfico por el "ámbito aéreo de interés"</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground">Cita textual</p>
                <blockquote className="border-l-2 border-[var(--ocre)] pl-6 italic">
                  "Los límites geográficos de los teatros de operaciones no son aplicables para las operaciones aéreas de la fuerza asignada a ese nivel de comando, sino que debe entenderse que existe un 'ámbito aéreo de interés' vinculado a ese teatro donde se ejecutarán las operaciones aéreas necesarias para contribuir al logro del objetivo estratégico operacional..."
                </blockquote>
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground">Ubicación: Resolución 855/2006, Anexo, Conclusión N° 2.</p>
                <p>
                  <strong className="font-medium">Interpretación:</strong> La Resolución dictamina que las tradicionales divisiones geográficas (TOM / TOAS) son conceptualmente incompatibles e inaplicables con la naturaleza de la guerra aérea. En su lugar, impone el concepto de "ámbito aéreo de interés".
                </p>
                <p>
                  <strong className="font-medium">Relación concreta con la FAS:</strong> Destruye legalmente la pregunta básica de “¿Estuvo o no estuvo en las islas?”. La jurisdicción operativa de la FAS abarcaba íntegramente este "ámbito aéreo de interés". Cualquier efectivo de la FAS que cumplía su función específica (armar un Dagger, mantener un radar, reabastecer aeronaves) estaba operando orgánicamente dentro de este ámbito vinculado al Teatro de Operaciones, aportando directamente al resultado militar.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">4. La actividad operativa debe probarse por la función y el rol</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground">Cita textual</p>
                <blockquote className="border-l-2 border-[var(--ocre)] pl-6 italic">
                  "El interesado (...) presentará ante la Dirección General de Personal (Departamento Malvinas) un expediente donde conste la actividad operativa realizada por el requirente durante el Conflicto del Atlántico Sur (...). Dicho expediente deberá ser acompañado por todos los elementos probatorios de la citada actividad operativa: (...) Documentación respaldatoria: Planillas de vuelo, resúmenes mensuales de vuelo (...) Testimonios de testigos presenciales (...) manifestando el cargo que ocupaba, la relación orgánica que lo ligaba con el causante..."
                </blockquote>
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground">Ubicación: Resolución 466/2007, Anexo "ALFA", Puntos 1 y 2.</p>
                <p>
                  <strong className="font-medium">Interpretación:</strong> La inclusión como Ex-Combatiente requiere un escrutinio minucioso basado en la función orgánica y probada ("actividad operativa", "cargo que ocupaba", "relación orgánica"), no en la mera ubicación geográfica. Se exige respaldar la actuación de cada individuo de manera particular (órdenes de operaciones, testimonios funcionales, registros de misiones).
                </p>
                <p>
                  <strong className="font-medium">Relación concreta con la FAS:</strong> Esto avala la postura fundamental: no todo el que estuvo en el continente fue combatiente, pero quienes conformaban el andamiaje orgánico y funcional de la FAS sí lo fueron. La Resolución 466 otorga la herramienta administrativa para separar a quienes hacían tareas ajenas a la misión bélica de aquellos que integraban la cadena logística-operativa directa ("Tierra → Avión → Piloto → Misión") en las bases patagónicas de la FAS.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <h3 className="font-display text-2xl font-light">Conclusión del apartado</h3>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
              <p>
                La interrelación de estas resoluciones cristaliza institucionalmente que la Acción Efectiva de Combate en la Fuerza Aérea es el resultado indivisible de un grupo heterogéneo. Desvincular al personal de tierra (preparación técnica, armamentística y táctica en el continente) de los resultados bélicos generados sobre los cielos del archipiélago atenta de forma directa contra el marco doctrinario fijado por las Resoluciones 855/06 y 466/07. La FAS combatió como un solo sistema orgánico.
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-[var(--bronce)]">
                PC FAA VGM Martínez José Luis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COROLARIO FINAL DEL DOSSIER */}
      <section id="corolario" className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--bronce)]">Corolario final del dossier</p>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight md:text-5xl">
            Basta de agravios: la guerra aérea fue una sola y se libró en equipo
          </h2>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Marco doctrinario y normativo de la Acción Efectiva de Combate según las Resoluciones 855/06 y 466/07
          </p>

          <figure className="mx-auto my-12 max-w-4xl">
            <img
              src={bastaDeAgraviosImg}
              alt="Afiche Basta de Agravios: el conflicto del Atlántico Sur e Islas Malvinas fue uno solo. Avión, Piloto, Personal de Tierra."
              width={1200}
              height={1697}
              loading="lazy"
              className="w-full border border-border bg-background shadow-page"
            />
            <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Ilustración de difusión · Fuerza Aérea Sur 1982
            </figcaption>
          </figure>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              El marco normativo, doctrinario, operacional y testimonial desarrollado en este dossier permite arribar a una conclusión que no depende de opiniones, interpretaciones personales ni relatos construidos a posteriori.
            </p>
            <p>
              La guerra no se libra solamente en el lugar donde impacta una bomba. Se libra allí donde un sistema militar desarrolla, sostiene y ejecuta efectivamente las operaciones necesarias para enfrentar al enemigo.
            </p>
            <p>
              Por eso, resulta necesario terminar con una mirada reduccionista que pretende medir la participación en la Guerra de Malvinas exclusivamente por el lugar físico donde cada hombre desempeñó su función.
            </p>
            <p>
              Decir que alguien no participó de la guerra porque «no estuvo en las islas» o porque «no pisó la turba» significa desconocer cómo funciona el poder aéreo y, fundamentalmente, desconocer la naturaleza sistémica de una guerra moderna.
            </p>
          </div>

          <div className="mt-14 space-y-12">
            <article>
              <h3 className="font-display text-2xl font-light">La guerra aérea fue una sola</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>
                  La Fuerza Aérea Sur constituyó un sistema operacional integrado. Desde sus bases continentales se planificó, condujo, sostuvo y ejecutó una campaña aérea real contra un enemigo real.
                </p>
                <p>
                  Allí estuvieron los medios aéreos, los sistemas de detección y vigilancia, las comunicaciones, la logística, el armamento, el mantenimiento, la meteorología, las operaciones, la sanidad y, fundamentalmente, los hombres que hicieron posible que cada aeronave pudiera despegar y regresar.
                </p>
                <p>El avión no combatía solo.</p>
                <p>El piloto no combatía solo.</p>
                <p>Y el personal de tierra tampoco era un elemento ajeno al combate.</p>
                <p>
                  Eran partes inseparables de una misma capacidad operacional. Cada aeronave que despegaba llevaba consigo el trabajo previo de decenas de hombres. Cada misión ejecutada era el resultado de una cadena operacional en la que cada eslabón tenía una función concreta y necesaria.
                </p>
                <p>
                  Si esa cadena se interrumpía, el avión no despegaba. Si el avión no despegaba, la misión no se cumplía. Y si la misión no se cumplía, el efecto sobre el enemigo no existía.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">La Acción Efectiva de Combate no se mide en metros</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>
                  Las Resoluciones 855/06 y 466/07, analizadas en este dossier, permiten comprender precisamente esta cuestión: la valoración de los efectivos hechos bélicos o de acciones bélicas no puede reducirse a una concepción exclusivamente geográfica del combate.
                </p>
                <p>
                  La acción militar efectiva debe analizarse en función de la misión cumplida, la función desempeñada, la contribución concreta al esfuerzo bélico y su integración dentro del sistema operacional.
                </p>
                <p>
                  Ese concepto resulta particularmente significativo para comprender la actuación de la Fuerza Aérea Sur. El personal de las bases continentales no permaneció como espectador de la guerra. Estuvo trabajando para la guerra, operando para la guerra y sosteniendo operaciones de combate durante la guerra.
                </p>
                <p>
                  Se prepararon aeronaves, se cargaron y acondicionaron armamentos, se repararon sistemas, se mantuvieron motores y estructuras, se operaron radares y comunicaciones, se procesó información, se atendieron emergencias, se sostuvo la logística y se mantuvo en funcionamiento, día tras día, una estructura sometida a las exigencias extraordinarias de un conflicto armado.
                </p>
                <p>
                  Mientras unos volaban, otros hacían posible que pudieran volar. Mientras unos enfrentaban al enemigo desde el aire, otros sostenían desde tierra la capacidad que permitía continuar haciéndolo.
                </p>
                <p className="font-display text-xl italic">Eso también fue combatir.</p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">No existió una guerra para unos y otra para otros</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>
                  No hubo una «guerra de las islas» separada de una «guerra del continente». Hubo una sola Guerra de Malvinas, con diferentes teatros, posiciones, funciones y niveles de exposición al riesgo.
                </p>
                <p>
                  El hecho de que determinados integrantes de la Fuerza Aérea Sur hayan desarrollado su misión desde las bases continentales no disminuye la naturaleza de la función que cumplieron ni convierte su participación en una actividad ajena al conflicto. Por el contrario, esa ubicación respondía precisamente a la misión asignada y a la estructura operacional mediante la cual se desarrolló la campaña aérea.
                </p>
                <p>
                  Pretender que la distancia geográfica determina por sí misma quién participó y quién no participó de una acción bélica equivale a desconocer la esencia misma de las operaciones militares modernas.
                </p>
                <p>
                  La guerra no se define por dónde estaba parado cada hombre, sino por qué misión cumplía, para quién la cumplía y qué efecto produjo su acción dentro del esfuerzo bélico.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">Una sola cadena de combate</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>
                  Durante el conflicto, la Fuerza Aérea Sur sostuvo una campaña aérea que obligó al enemigo a emplear importantes recursos para defender su flota y sus fuerzas desplegadas en el Atlántico Sur.
                </p>
                <p>
                  Ese resultado no fue obra exclusiva de quienes ocuparon una cabina. Fue producto de un sistema. Y en ese sistema estuvieron los pilotos, pero también los mecánicos, especialistas, técnicos, armeros, operadores, comunicaciones, radaristas, personal de abastecimiento, sanidad, meteorología, seguridad, logística y todos aquellos que, desde sus respectivas funciones, hicieron posible que la operación continuara.
                </p>
                <p>
                  Por eso, intentar separar artificialmente al avión del piloto o al piloto del personal de tierra no es solamente injusto. Es operacionalmente absurdo.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">El tiempo puede borrar detalles. No puede cambiar los hechos.</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>
                  Han pasado más de cuatro décadas. Los protagonistas envejecimos. Muchos ya no están. Los recuerdos pueden ser diferentes y las interpretaciones pueden discutirse.
                </p>
                <p>Pero hay algo que no puede modificarse: los hechos ocurrieron.</p>
                <p>
                  La Fuerza Aérea Sur fue creada, desplegó sus medios, operó desde sus bases, ejecutó misiones de combate y sostuvo esas operaciones hasta el final del conflicto. Quienes integramos ese sistema cumplimos las funciones que nos fueron asignadas.
                </p>
                <p>
                  No elegimos dónde combatir. No elegimos cuál sería nuestra misión. Cumplimos con nuestro deber donde la conducción militar determinó que éramos necesarios.
                </p>
                <p>Por eso, no reclamamos privilegios. Reclamamos que la historia sea analizada con rigor.</p>
                <p>
                  No pedimos que se quite mérito a nadie. Pedimos que no se quite mérito a quienes también cumplieron su misión.
                </p>
                <p>
                  No buscamos dividir a los veteranos. Buscamos terminar con una división que nunca existió durante la guerra: la división entre quienes combatían y quienes hacían posible el combate.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-display text-2xl font-light">El corolario</h3>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                <p>
                  Las Resoluciones 855/06 y 466/07 no pueden ser leídas aisladamente ni utilizadas para construir nuevas divisiones. Deben ser comprendidas dentro del marco doctrinario y operacional que reconoce que una acción bélica es el resultado de la actuación coordinada de un sistema.
                </p>
                <p>
                  Y ese sistema existió. Se llamó Fuerza Aérea Sur. Sus integrantes actuaron en diferentes lugares, con diferentes responsabilidades y distintos niveles de exposición, pero formando parte de una misma estructura operacional y de una misma misión.
                </p>
                <p>
                  Por eso, frente a quienes todavía pretenden establecer categorías de «más» o «menos» guerra según la distancia recorrida, la respuesta no necesita agravios. Necesita hechos.
                </p>
                <p>
                  Frente a quienes sostienen que la guerra comenzó y terminó únicamente donde estaba la turba, la respuesta es la doctrina.
                </p>
                <p>
                  Frente a quienes desconocen la función del personal de tierra, la respuesta es la realidad operacional.
                </p>
                <p>
                  Y frente a quienes intentan fragmentar la historia, la respuesta es una sola:
                </p>
              </div>
            </article>
          </div>

          <div className="mt-14 border-y border-border bg-background p-8 text-center md:p-12">
            <p className="font-display text-2xl font-light italic md:text-3xl">
              La guerra aérea fue una sola.<br />
              El enemigo fue uno solo.<br />
              La misión fue una sola.<br />
              Y el combate se libró en equipo.
            </p>
            <div className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              <p className="font-display text-xl font-light italic">AVIÓN</p>
              <p className="font-display text-xl font-light italic">PILOTO</p>
              <p className="font-display text-xl font-light italic">PERSONAL DE TIERRA</p>
            </div>
            <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-[var(--bronce)]">
              Una sola misión. Un solo sistema. Una sola Fuerza Aérea Sur.
            </p>
            <p className="mt-4 font-display text-xl italic">
              Cumplimos con nuestro deber. Ahora la historia debe cumplir con la verdad.
            </p>
          </div>

          <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.25em] text-[var(--bronce)]">
            PC FAA VGM Martínez José Luis
          </p>
        </div>
      </section>

      {/* HOMENAJE A LOS 649 HÉROES NACIONALES */}
      <section id="homenaje" className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Memoria permanente</p>
            <h2 className="mt-4 font-display text-4xl font-light italic md:text-6xl">
              Homenaje permanente a los Héroes del Atlántico Sur e Islas Malvinas
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85">
              Memoria, honor y gratitud. Hoy, mañana y siempre.
            </p>
          </div>

          <figure className="relative border border-border bg-background p-2 shadow-page">
            <img
              src={homenajeHeroesImg}
              alt="Homenaje permanente a los 649 Héroes Nacionales de Malvinas"
              width={1200}
              height={1697}
              loading="lazy"
              className="w-full"
            />
            <figcaption className="px-2 pb-2 pt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Ilustración de homenaje · 649 Héroes Nacionales
            </figcaption>
          </figure>

          <div className="mt-16 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>Las fechas pasan. Los aniversarios pasan. La memoria no.</p>
            <p>
              Este homenaje no nace de un aniversario ni pretende quedar limitado a una fecha del calendario. Es un reconocimiento permanente a quienes participaron en la defensa de nuestra Nación durante el Conflicto del Atlántico Sur e Islas Malvinas y, especialmente, a quienes entregaron su vida por la Patria.
            </p>
            <p className="font-display text-2xl italic text-[var(--bronce)]">Malvinas debe ser recordada todos los días.</p>
            <p>
              Porque la memoria de quienes combatieron, de quienes cumplieron su misión y de quienes quedaron para siempre en las islas y en el mar no puede depender de una efeméride. Es parte de nuestra historia, de nuestra identidad y de nuestra responsabilidad como argentinos.
            </p>

            <h3 className="mt-10 font-display text-3xl font-light italic">Malvinas es una Causa Nacional</h3>
            <p>
              Las Islas Malvinas no pertenecen únicamente al pasado ni a una generación determinada. Son una Causa Nacional que debemos conocer, comprender y transmitir a las nuevas generaciones.
            </p>
            <p>
              Por eso este espacio está destinado especialmente a nuestros estudiantes y docentes: para acercar documentos, testimonios, fotografías, experiencias y hechos históricos que permitan conocer lo ocurrido durante 1982 y comprender que detrás de cada operación, cada vuelo, cada misión y cada acción hubo hombres y mujeres que asumieron responsabilidades y cumplieron con su deber.
            </p>
            <p>La historia no debe transmitirse solamente desde los libros. También debe conservarse a través de quienes la vivieron.</p>

            <h3 className="mt-10 font-display text-3xl font-light italic">A los 649 Héroes Nacionales</h3>
            <p>
              Nuestro homenaje más profundo es para los 649 argentinos que entregaron su vida durante el Conflicto del Atlántico Sur. La Ley Nacional N.º 24.950 los reconoció como Héroes Nacionales.
            </p>
            <p>
              Sus nombres no pertenecen exclusivamente a una Fuerza Armada, a una unidad militar ni a una generación. Pertenecen para siempre a la Nación Argentina.
            </p>
            <p>
              Son 649 nombres que forman parte de nuestra historia. Son 649 vidas entregadas por la Patria. Son 649 razones para mantener viva la memoria. Y son 649 nombres que debemos enseñar a nuestros hijos y a nuestros alumnos para que nunca se conviertan simplemente en una cifra.
            </p>

            <h3 className="mt-10 font-display text-3xl font-light italic">Memoria para todos los que cumplieron con su deber</h3>
            <p>
              Este homenaje alcanza a todos los hombres y mujeres que participaron en la defensa de nuestra Nación durante el conflicto: integrantes de las Fuerzas Armadas, soldados conscriptos, personal militar, personal civil, cuadros permanentes y todos aquellos que, desde sus distintas responsabilidades, contribuyeron al esfuerzo nacional.
            </p>
            <p>Cada uno ocupó un lugar dentro de una historia que fue colectiva.</p>
            <p>
              En la Fuerza Aérea Sur, esa realidad se expresó en un sistema integrado donde pilotos y personal de tierra fueron parte de una misma misión. Porque detrás de cada avión hubo mecánicos, especialistas, técnicos, armeros, abastecedores y numerosos hombres que trabajaron silenciosamente para que una aeronave pudiera despegar y cumplir su misión.
            </p>
            <div className="my-8 border-l-2 border-[var(--ocre)] pl-6">
              <p className="font-display text-xl italic leading-relaxed">
                Sin personal de tierra, no hay avión.<br />
                Sin avión, no hay piloto.<br />
                Sin piloto, no hay misión.
              </p>
            </div>
            <p>
              La guerra también se libró desde allí: desde las plataformas, los talleres, las pistas, los puestos de comando y cada lugar donde un hombre cumplió con responsabilidad la tarea que le había sido asignada.
            </p>

            <h3 className="mt-10 font-display text-3xl font-light italic">Transmitir para no olvidar</h3>
            <p>El tiempo no debe borrar aquello que ocurrió. Al contrario: cuanto más lejos queda un acontecimiento, mayor es nuestra responsabilidad de conservar sus testimonios y transmitirlos correctamente.</p>
            <p>Por eso este dossier no pretende solamente recordar. Pretende enseñar.</p>
            <p>
              Pretende que un joven que nunca vivió 1982 pueda conocer quiénes fueron aquellos hombres y mujeres, qué hicieron, qué responsabilidades asumieron y qué significó para ellos defender a la Patria.
            </p>
            <p>
              Pretende que los 649 caídos tengan nombre, historia y memoria. Pretende que quienes regresaron puedan transmitir su experiencia. Y pretende que las nuevas generaciones comprendan que la historia de Malvinas no es una página cerrada, sino una parte viva de nuestra identidad nacional.
            </p>

            <h3 className="mt-10 font-display text-3xl font-light italic">Un homenaje que no termina</h3>
            <p>
              El 14 de junio de 1982 cesaron los combates. Pero nunca terminó nuestro deber de recordar. Mientras exista un argentino dispuesto a nombrarlos, mientras un docente explique sus historias, mientras un estudiante pregunte quiénes fueron y mientras sus nombres permanezcan en nuestra memoria, aquellos hombres seguirán presentes.
            </p>
            <p>Por eso este homenaje no tiene fecha de vencimiento.</p>
            <p>
              No es solamente para el 2 de abril. No es solamente para el 14 de junio. No es solamente para un aniversario. Es para todos los días.
            </p>
            <p>
              Porque recordar a nuestros héroes no es mirar permanentemente hacia atrás. Es enseñar a las nuevas generaciones quiénes fuimos, qué defendimos y qué valores debemos conservar.
            </p>

            <div className="my-10 border-t border-border pt-10 text-center font-display text-2xl italic leading-relaxed text-foreground/90">
              <p>Por los 649 Héroes Nacionales.</p>
              <p>Por quienes combatieron.</p>
              <p>Por quienes regresaron.</p>
              <p>Por quienes cumplieron con su deber.</p>
              <p>Por las generaciones que deben conocer la verdad.</p>
              <p className="mt-6 text-[var(--bronce)]">Memoria eterna. Honor permanente. Gratitud para siempre.</p>
              <p className="mt-4 text-3xl">Las Malvinas fueron, son y serán argentinas.</p>
              <p className="mt-4 text-xl">Prohibido olvidar.</p>
              <p className="mt-6 text-3xl text-[var(--celeste)]">¡Viva la Patria!</p>
            </div>
          </div>

          <p className="mt-12 text-center font-mono text-xs uppercase tracking-[0.25em] text-[var(--bronce)]">
            PC FAA VGM José Luis Martínez · II Escuadrón Aeromóvil M5 IAI Dagger “La Marinete” · Fuerza Aérea Sur
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
              <a
                href={malvinasEnsenaPdf.url}
                download="Malvinas_tambien_se_ensena.pdf"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Malvinas también se enseña
              </a>
              <a
                href={heroesSecundarioPdf.url}
                download="heroes-del-cielo-y-de-la-tierra.pdf"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Cuadernillo Nivel Secundario
              </a>
              <a
                href={recopiladoFasPdf.url}
                download="recopilado-comprender-fas.pdf"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Cómo funcionó la Fuerza Aérea Sur
              </a>
              <a
                href={analisisVeteranosPdf.url}
                download="analisis-juridico-veteranos-fuerza-aerea.pdf"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Análisis Jurídico e Institucional
              </a>
              <a
                href={autonomiaInterfuerzasPdf.url}
                download="autonomia-tension-interfuerzas.pdf"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Autonomía y Tensión Interfuerzas
              </a>
              <a
                href={los649HeroesPdf.url}
                download="los-649-heroes-nacionales.pdf"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
                Los 649 Héroes Nacionales
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Incluye una ilustración en formato historieta, un video pensado para los más chicos, y un PDF con imágenes de aquellos días, como así también estudios de investigación de documentación desclasificada de documentos oficiales de la Guerra de Malvinas.
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

      {/* DIFUNDIR — QR Y FOLLETO DIGITAL */}
      <section id="difundir" className="border-y border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-32">
          <div className="mb-12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Compartí la historia</p>
            <h2 className="mt-4 font-display text-4xl font-light italic md:text-6xl">
              Acceso directo a la página
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85">
              Escaneá el código QR para ingresar desde cualquier celular. Es una manera sencilla de difundir el proyecto entre chicos, jóvenes, escuelas y en redes sociales.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[auto_1fr] md:items-center">
            <div className="mx-auto flex flex-col items-center gap-4">
              <div className="rounded-sm border-4 border-white bg-white p-3 shadow-page">
                <img
                  src={qrAcceso}
                  alt="Código QR para acceder a testimoniodeunatrilogia.lovable.app"
                  width={540}
                  height={540}
                  className="h-auto w-56 max-w-full"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">
                Escaneá con la cámara de tu celular
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-[var(--ocre)] pl-6">
                <h3 className="font-display text-2xl font-light italic">Un folleto para difundir</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Este código funciona como un folleto digital: podés mostrarlo en aulas, actos escolares, charlas, encuentros de veteranos o publicarlo en redes sociales para que más personas conozcan la historia de la Trilogía Operativa.
                </p>
              </div>
              <div className="space-y-3 text-base text-foreground/85">
                <p>
                  <strong className="font-medium">¿Para qué sirve?</strong> Permite acceder al libro, los videos, el dossier escolar, la galería histórica y el blog de vivencias desde cualquier dispositivo, sin tener que escribir la dirección.
                </p>
                <p>
                  <strong className="font-medium">Ideal para:</strong> escuelas, centros de jubilados, bibliotecas, actos patrios y campañas de difusión en redes sociales.
                </p>
              </div>
              <a
                href="https://testimoniodeunatrilogia.lovable.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-[var(--bronce)]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Compartir el enlace
              </a>
            </div>
          </div>
        </div>
      </section>

      <LibroDeVisitas />
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
      {/* COLABORACIÓN VOLUNTARIA */}
      <section id="colaborar" className="bg-card">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-12 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Apoyo al proyecto</p>
          <h2 className="mt-4 font-display text-4xl font-light italic md:text-6xl">
            Colaboración voluntaria con el autor
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Todo el contenido disponible en este sitio, incluido mi libro Testimonio de una Trilogía y el material complementario, se ofrece de manera completamente gratuita con el único objetivo de difundir, preservar y mantener viva la memoria de quienes sirvieron a la Patria.
            </p>
            <p>
              Si considerás valioso este trabajo y deseás colaborar para que esta investigación continúe creciendo, incorporando nuevos documentos, testimonios y recursos educativos, podés realizar una contribución voluntaria.
            </p>
          </div>

          <div className="mt-10 inline-block border border-border bg-background p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Alias</p>
            <p className="mt-2 font-mono text-2xl tracking-wider text-foreground">1959dagger</p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:dagger1959@gmail.com"
              className="inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-[var(--bronce)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contactar al autor y administrador
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Cada aporte, por pequeño que sea, contribuye a mantener vivo este proyecto y a que la historia de la Fuerza Aérea Sur continúe llegando a las generaciones presentes y futuras.
            </p>
            <p className="text-foreground">
              José Luis Martínez<br />
              Veterano de Guerra de Malvinas – Fuerza Aérea Argentina
            </p>
            <p className="text-foreground">
              Contacto: <a href="mailto:dagger1959@gmail.com" className="underline underline-offset-4 hover:text-[var(--bronce)]">dagger1959@gmail.com</a>
            </p>
          </div>
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
        <div className="flex flex-col items-center gap-3 border-t border-border px-6 py-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:px-12">
          <p>"Las Malvinas son Argentinas: ¡Ni olvidamos, ni renunciamos!"</p>
          <ContadorVisitas />
        </div>
      </footer>
    </div>
  );
}
