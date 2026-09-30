import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAsset from "@/assets/galeria/dagger-marinete.jpg.asset.json";
import tierraAsset from "@/assets/galeria/IMG_5336.jpeg.asset.json";
import pilotoAsset from "@/assets/galeria/pilotos.png.asset.json";
import avionAsset from "@/assets/galeria/IMG_5334.jpeg.asset.json";
import folletoAsset from "@/assets/galeria/fuerza-aerea-sur-folleto.jpeg.asset.json";
import bastaDeAgraviosAsset from "@/assets/galeria/basta-de-agravios-fuerza-aerea-sur.jpg.asset.json";
import homenajeHeroesAsset from "@/assets/galeria/homenaje-649-heroes-nacionales.png.asset.json";
import porQueNoOperaronAsset from "@/assets/galeria/IMG_7337.jpeg.asset.json";
import palabrasDelAutorAsset from "@/assets/galeria/palabras-del-autor.jpeg.asset.json";
import libroImg from "@/assets/libro-tapa.png";
import qrAcceso from "@/assets/qr-acceso.png";

import trilogiaPdf from "@/assets/trilogia.pdf.asset.json";
import dossierEscolarPdf from "@/assets/La_Gesta_de_Malvinas_en_las_Aulas.pdf.asset.json";
import leyResolucionesPdf from "@/assets/ley-23118-resoluciones-faa.pdf.asset.json";
import ilustracionChicosPdf from "@/assets/ilustracion para chicos.ndf.asset.json";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroImg = heroAsset.url;
  const tierraImg = tierraAsset.url;
  const pilotoImg = pilotoAsset.url;
  const avionImg = avionAsset.url;
  const folletoImg = folletoAsset.url;
  const bastaDeAgraviosImg = bastaDeAgraviosAsset.url;
  const homenajeHeroesImg = homenajeHeroesAsset.url;
  const porQueNoOperaronImg = porQueNoOperaronAsset.url;
  const palabrasDelAutorImg = palabrasDelAutorAsset.url;

  const trilogiaPdfUrl = trilogiaPdf.url;
  const dossierEscolarPdfUrl = dossierEscolarPdf.url;
  const leyResolucionesPdfUrl = leyResolucionesPdf.url;
  const ilustracionChicosPdfUrl = ilustracionChicosPdf.url;

  const navSections = [
    { id: "inicio", label: "1. Inicio" },
    { id: "fas-1982", label: "2. FAS 1982" },
    { id: "la-trilogia", label: "3. La Trilogía" },
    { id: "escuadrones", label: "4. Escuadrones Aeromóviles" },
    { id: "bases", label: "5. Bases" },
    { id: "misiones", label: "6. Misiones" },
    { id: "archivo-documental", label: "7. Archivo Documental" },
    { id: "archivo-fotografico", label: "8. Archivo Fotográfico" },
    { id: "archivo-audiovisual", label: "9. Archivo Audiovisual" },
    { id: "aula-malvinas", label: "10. Aula Malvinas" },
    { id: "expediente", label: "11. Expediente Reconocimiento" },
    { id: "el-libro", label: "12. El Libro" },
    { id: "el-autor", label: "13. El Autor" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* MENÚ NAVEGABLE FIJO COMPACTO */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-xs shadow-xl">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="font-bold text-amber-500 tracking-wider flex items-center gap-2">
            <span>FUERZA AÉREA SUR</span>
            <span className="hidden sm:inline text-slate-400">| Archivo Histórico</span>
          </div>

          {/* Menú Escritorio */}
          <div className="hidden lg:flex items-center space-x-3 overflow-x-auto py-2">
            {navSections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="px-2 py-1 rounded text-slate-300 hover:text-amber-400 hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                {sec.label}
              </a>
            ))}
          </div>

          {/* Botón Menú Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded bg-slate-800 text-amber-500 hover:bg-slate-700"
          >
            ☰
          </button>
        </div>

        {/* Desplegable Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
            {navSections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 px-3 rounded text-slate-200 hover:bg-slate-800 hover:text-amber-400"
              >
                {sec.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* 1. SECCIÓN INICIO / HERO */}
      <section id="inicio" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-semibold mb-4">
            MALVINAS 1982 — ARCHIVO DOCUMENTAL INTERACTIVO
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            LA GUERRA AÉREA TAMBIÉN SE LIBRÓ DESDE EL CONTINENTE
          </h1>
          <p className="text-lg md:text-xl text-amber-400 font-medium mb-8">
            TESTIMONIO DE UNA TRILOGÍA: AVIÓN · PILOTO · PERSONAL DE TIERRA
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-slate-400 font-mono mb-8">
            <span className="bg-slate-800/80 px-3 py-1 rounded">DOCUMENTACIÓN</span>
            <span className="bg-slate-800/80 px-3 py-1 rounded">TESTIMONIO</span>
            <span className="bg-slate-800/80 px-3 py-1 rounded">MEMORIA</span>
            <span className="bg-slate-800/80 px-3 py-1 rounded">HISTORIA</span>
            <span className="bg-slate-800/80 px-3 py-1 rounded">EDUCACIÓN</span>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            <img src={heroImg} alt="Dagger BAM San Julián" className="w-full h-auto max-h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* 2. FAS 1982 */}
      <section id="fas-1982" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-2">
          <span>2. La Fuerza Aérea Sur (FAS 1982)</span>
        </h2>
        <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 text-slate-300 leading-relaxed space-y-4">
          <p>
            Creada el 5 de abril de 1982 bajo la conducción del Brigadier Ernesto Crespo, la Fuerza Aérea Sur asumió la proyección operacional del poder aeroespacial argentino desde el continente.
          </p>
          <p>
            Desafiando las limitaciones doctrinarias de la Resolución 1/69, la FAS estructuró un dispositivo táctico autónomo e innovador que sostuvo las operaciones de combate naval y la defensa de la soberanía nacional durante 74 días de conflicto.
          </p>
        </div>
      </section>

      {/* 3. LA TRILOGÍA */}
      <section id="la-trilogia" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">3. La Trilogía Operativa</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-center">
            <img src={avionImg} alt="Avión Dagger" className="rounded-lg mb-4 h-40 w-full object-cover" />
            <h3 className="font-bold text-white text-lg mb-2">1. EL AVIÓN</h3>
            <p className="text-xs text-slate-400">El sistema de armas alistado y mantenido al límite de su capacidad técnica en suelo patagónico.</p>
          </div>
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-center">
            <img src={pilotoImg} alt="Pilotos de Caza" className="rounded-lg mb-4 h-40 w-full object-cover" />
            <h3 className="font-bold text-white text-lg mb-2">2. EL PILOTO</h3>
            <p className="text-xs text-slate-400">El ejecutor táctico en vuelo, navegando rozando las olas sin radar y bajo estricto silencio de radio.</p>
          </div>
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-center">
            <img src={tierraImg} alt="Personal Civil y Técnico de Tierra" className="rounded-lg mb-4 h-40 w-full object-cover" />
            <h3 className="font-bold text-white text-lg mb-2">3. PERSONAL DE TIERRA</h3>
            <p className="text-xs text-slate-400">Oficiales, suboficiales, personal civil técnico y soldados conscriptos: los cimientos del despegue.</p>
          </div>
        </div>
      </section>

      {/* 4. ESCUADRONES AEROMÓVILES */}
      <section id="escuadrones" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">4. Escuadrones Aeromóviles de Guerra</h2>
        <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 text-slate-300">
          <h3 className="text-lg font-bold text-white mb-2">II Escuadrón Aeromóvil M-5 Dagger "La Marinete"</h3>
          <p className="text-sm leading-relaxed mb-4">
            Desplegado en la BAM San Julián a partir del 5-6 de abril de 1982. Formado por personal civil técnico, especialistas de armamento, mecánicos, electrónica, logística y pilotos del Grupo 6 de Caza de la VI Brigada Aérea de Tandil.
          </p>
        </div>
      </section>

      {/* 5. BASES CONTINENTALES */}
      <section id="bases" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">5. Las Bases Continentales de Despliegue</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 bg-slate-900 rounded border border-slate-800"><b className="text-amber-400">BAM SAN JULIÁN:</b> Pivote estratégico de Dagger y A-4C.</div>
          <div className="p-4 bg-slate-900 rounded border border-slate-800"><b className="text-amber-400">BAM RÍO GALLEGOS:</b> Base de lanzamiento de A-4B y Mirage III.</div>
          <div className="p-4 bg-slate-900 rounded border border-slate-800"><b className="text-amber-400">BAN RÍO GRANDE:</b> Escuadrón Dagger y Super Étendard.</div>
          <div className="p-4 bg-slate-900 rounded border border-slate-800"><b className="text-amber-400">BAM COMODORO RIVADAVIA:</b> Centro logístico C-130 y rescate.</div>
          <div className="p-4 bg-slate-900 rounded border border-slate-800"><b className="text-amber-400">BAM TRELEW:</b> Asiento de los bombarderos Canberra.</div>
          <div className="p-4 bg-slate-900 rounded border border-slate-800"><b className="text-amber-400">BAM SANTA CRUZ:</b> Exploración costera y reemplazos.</div>
        </div>
      </section>

      {/* 6. MISIONES DE COMBATE */}
      <section id="misiones" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">6. Misiones de Combate y Logística</h2>
        <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 text-slate-300">
          <p className="text-sm leading-relaxed">
            Desde las inspecciones al amanecer a 15 °C bajo cero hasta el desarme de espoletas activadas de bombas no lanzadas, el alistamiento diario garantizó una disponibilidad operativa ininterrumpida frente a la flota enemiga.
          </p>
        </div>
      </section>

      {/* 7. ARCHIVO DOCUMENTAL (INCLUYE NUEVAS INVESTIGACIONES) */}
      <section id="archivo-documental" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">7. Archivo Documental e Investigaciones</h2>
        <div className="space-y-4">
          
          {/* Documento Nuevos Investigaciones */}
          <div className="bg-slate-900 p-5 rounded-xl border border-amber-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-bold uppercase">Investigación Jurídica / Doctrina</span>
              <h3 className="text-lg font-bold text-white mt-1">Dictamen Jurídico-Técnico: Reconocimiento del Personal de Tierra</h3>
              <p className="text-xs text-slate-400 mt-1">Análisis del fallo Contrera (Expte. 11251/2016), jurisprudencia CSJN Gerez y la testimonial de José Luis Martínez.</p>
            </div>
            <a href="#expediente" className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded text-xs whitespace-nowrap">
              Consultar Sección
            </a>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-bold uppercase">Investigación Estratégica</span>
              <h3 className="text-lg font-bold text-white mt-1">Fuerza Aérea Sur 1982: Estructura, Despliegue y Modos de Operar</h3>
              <p className="text-xs text-slate-400 mt-1">Esquema funcional del dispositivo continental, brigadas y el Escuadrón Fénix (GERA).</p>
            </div>
            <a href={leyResolucionesPdfUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded text-xs whitespace-nowrap">
              Descargar Documento
            </a>
          </div>

          {/* Documentos Históricos Anteriores */}
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-bold uppercase">Documentación Oficial</span>
              <h3 className="text-lg font-bold text-white mt-1">Ley 23.118 y Resoluciones de la Fuerza Aérea Argentina</h3>
              <p className="text-xs text-slate-400 mt-1">Normativas oficiales de otorgamiento de condecoraciones y reconocimientos.</p>
            </div>
            <a href={leyResolucionesPdfUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded text-xs whitespace-nowrap">
              Descargar PDF
            </a>
          </div>

        </div>
      </section>

      {/* 8. ARCHIVO FOTOGRÁFICO */}
      <section id="archivo-fotografico" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">8. Archivo Fotográfico Inédito</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src={heroImg} alt="Fotografía Histórica 1" className="rounded-lg border border-slate-800 h-44 w-full object-cover" />
          <img src={porQueNoOperaronImg} alt="Fotografía Histórica 2" className="rounded-lg border border-slate-800 h-44 w-full object-cover" />
          <img src={folletoImg} alt="Fotografía Histórica 3" className="rounded-lg border border-slate-800 h-44 w-full object-cover" />
          <img src={bastaDeAgraviosImg} alt="Fotografía Histórica 4" className="rounded-lg border border-slate-800 h-44 w-full object-cover" />
          <img src={homenajeHeroesImg} alt="Fotografía Histórica 5" className="rounded-lg border border-slate-800 h-44 w-full object-cover" />
          <img src={palabrasDelAutorImg} alt="Fotografía Histórica 6" className="rounded-lg border border-slate-800 h-44 w-full object-cover" />
        </div>
      </section>

      {/* 9. ARCHIVO AUDIOVISUAL (NUEVA CANCIÓN/VIDEO) */}
      <section id="archivo-audiovisual" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">9. Archivo Audiovisual</h2>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-2">FUERZA AÉREA SUR 1982 — PROBADA EN COMBATE (LA TRILOGÍA)</h3>
          <p className="text-xs text-slate-400 mb-4">
            Obra musical y audiovisual dedicada a los mecánicos, armeros, técnicos y personal civil de la Fuerza Aérea Sur.
          </p>
          <div className="p-4 bg-slate-950 rounded border border-slate-800 text-center text-sm text-slate-300 font-mono">
            🎬 [Video Homenaje: "La Trilogía - Fuerza Aérea Sur 1982"]
          </div>
        </div>
      </section>

      {/* 10. AULA MALVINAS */}
      <section id="aula-malvinas" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">10. Aula Malvinas (Dossier Pedagógico)</h2>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-6 items-center">
          <div className="space-y-3 flex-1">
            <h3 className="text-lg font-bold text-white">Héroes del Cielo y de la Tierra: Cuadernillo de Estudio</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Material didáctico para escuelas secundarias e institutos sobre el valor humano, la geopolítica de la pista continental y la Trilogía Operativa.
            </p>
            <div className="flex gap-3">
              <a href={dossierEscolarPdfUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded text-xs">
                Descargar Cuadernillo
              </a>
              <a href={ilustracionChicosPdfUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded text-xs">
                Guía Didáctica
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. EXPEDIENTE DEL RECONOCIMIENTO */}
      <section id="expediente" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">11. El Expediente del Reconocimiento</h2>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4 text-sm text-slate-300">
          <p className="font-semibold text-white">
            Resumen del Precedente Judicial (Juzgado Federal de la Seguridad Social N° 8, Causa Contrera):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-slate-300">
            <li><b>Testimonial Clave:</b> La declaración del Personal Civil Técnico José Luis Martínez definió jurídicamente la carga de armamento vivo como acto bélico ininterrumpido.</li>
            <li><b>Doctrina CSJN Gerez:</b> Desestimó la restricción puramente cartográfica para validar el esfuerzo real de guerra en las bases patagónicas.</li>
          </ul>
        </div>
      </section>

      {/* 12. EL LIBRO */}
      <section id="el-libro" className="py-16 max-w-5xl mx-auto px-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">12. El Libro "Testimonio de una Trilogía"</h2>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-6 items-center">
          <img src={libroImg} alt="Tapa del Libro" className="w-40 rounded shadow-lg border border-slate-700" />
          <div className="space-y-3 flex-1">
            <h3 className="text-xl font-bold text-white">Testimonio de una Trilogía – Guerra de Malvinas 1982</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Obra histórica y documental editada por la Escuela Superior de Guerra Aérea. Un testimonio imprescindible sobre el sostén técnico de los M-5 Dagger en la BAM San Julián.
            </p>
            <a href={trilogiaPdfUrl} target="_blank" rel="noreferrer" className="inline-block px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded text-xs">
              Descargar Libro Completo (PDF Gratuito)
            </a>
          </div>
        </div>
      </section>

      {/* 13. EL AUTOR */}
      <section id="el-autor" className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">13. El Autor</h2>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-white">Pers. Civil Tec. Prof. FAA VGM José Luis Martínez Eyheramendi</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Egresado como Técnico Electromecánico de ENET N°1, ingresó a la Fuerza Aérea Argentina en 1980. En 1982 prestó servicio dentro del Escuadrón Control del Grupo Técnico 6 y desplegó a la Base Aérea Militar San Julián con el II Escuadrón Aeromóvil M-5 Dagger "La Marinete". Dedicado a la preservación del archivo histórico documental de la Fuerza Aérea Sur.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <img src={qrAcceso} alt="QR Acceso Digital" className="w-20 h-20 bg-white p-1 rounded" />
            <span className="text-[10px] text-slate-400 font-mono">Acceso Libre y Gratuito a la Biblioteca Digital.</span>
          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="py-8 bg-slate-900 text-center text-xs text-slate-500 border-t border-slate-800">
        <p>FUERZA AÉREA SUR 1982 — PROBADA EN COMBATE</p>
        <p className="mt-1">Preservación Histórica e Investigación Abierta</p>
      </footer>
    </div>
  );
}