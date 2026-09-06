import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/galeria/dagger-marinete.jpg.asset.json";
import tierraAsset from "@/assets/galeria/IMG_5336.jpeg.asset.json";
import pilotoAsset from "@/assets/galeria/pilotos.png.asset.json";
import avionAsset from "@/assets/galeria/IMG_5334.jpeg.asset.json";
import folletoAsset from "@/assets/galeria/fuerza-aerea-sur-folleto.jpeg.asset.json";
import libroImg from "@/assets/libro-tapa.png";
import qrAcceso from "@/assets/qr-acceso.png";
const heroImg = heroAsset.url;
const tierraImg = tierraAsset.url;
const pilotoImg = pilotoAsset.url;
const avionImg = avionAsset.url;
const folletoImg = folletoAsset.url;
import trilogiaPdf from "@/assets/trilogia.pdf.asset.json";
import dossierEscolarPdf from "@/assets/La_Gesta_de_Malvinas_en_las_Aulas.pdf.asset.json";
import ilustracionChicosPdf from "@/assets/ilustracion_para_chicos.pdf.asset.json";
import diapositivasPdf from "@/assets/diapositivas-malvinas.pdf.asset.json";
import malvinasEnsenaPdf from "@/assets/malvinas-tambien-se-ensena.pdf.asset.json";
import heroesSecundarioPdf from "@/assets/heroes-del-cielo-y-de-la-tierra.pdf.asset.json";
import recopiladoFasPdf from "@/assets/recopilado-comprender-fas.pdf.asset.json";
import analisisVeteranosPdf from "@/assets/analisis-juridico-veteranos-fuerza-aerea.pdf.asset.json";
import autonomiaInterfuerzasPdf from "@/assets/autonomia-tension-interfuerzas.pdf.asset.json";
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
          <div className="mb-10 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Archivo audiovisual</p>
            <h2 className="mt-4 font-display text-4xl font-light italic md:text-6xl">
              Fuerza Aérea Sur
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Material de difusión histórica para comprender el accionar de quienes operaron desde las bases continentales durante el Conflicto del Atlántico Sur.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
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
