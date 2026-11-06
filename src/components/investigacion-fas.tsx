import texto from "@/content/investigacion-fas.md?raw";

function linkify(s: string) {
  const parts = s.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((p, i) =>
    /^https?:\/\//.test(p) ? (
      <a key={i} href={p} target="_blank" rel="noreferrer" className="break-all underline">{p}</a>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export function InvestigacionFas() {
  const lines = texto.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const [titulo, ...resto] = lines;
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < resto.length) {
    const l = resto[i];
    if (l.includes("\t") && !/^(•|\d+\.)\t/.test(l)) {
      const rows: string[][] = [];
      while (i < resto.length && resto[i].includes("\t") && !/^(•|\d+\.)\t/.test(resto[i])) {
        rows.push(resto[i].split("\t")); i++;
      }
      const [head, ...body] = rows;
      out.push(
        <div key={i} className="my-8 overflow-x-auto border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-muted"><tr>{head.map((h, k) => <th key={k} className="p-3 font-mono text-[11px] uppercase tracking-wider">{h}</th>)}</tr></thead>
            <tbody>{body.map((r, k) => <tr key={k} className="border-t border-border align-top">{r.map((c, j) => <td key={j} className="p-3">{c}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }
    if (/^(•|\d+\.)\t/.test(l)) {
      const ordered = /^\d/.test(l);
      const items: string[] = [];
      while (i < resto.length && /^(•|\d+\.)\t/.test(resto[i])) { items.push(resto[i].replace(/^(•|\d+\.)\t/, "")); i++; }
      const Tag = ordered ? "ol" : "ul";
      out.push(
        <Tag key={i} className={`my-6 space-y-3 pl-6 ${ordered ? "list-decimal" : "list-disc"}`}>
          {items.map((it, k) => {
            const m = it.match(/^([^:]{3,90}):\s(.*)$/);
            return <li key={k} className="leading-relaxed">{m ? <><strong>{m[1]}:</strong> {m[2]}</> : it}</li>;
          })}
        </Tag>,
      );
      continue;
    }
    if (/^\d+\.\s/.test(l) && l.length < 140 || l === "Fuentes citadas") {
      out.push(<h3 key={i} className="mt-14 border-l-4 border-[var(--bronce)] pl-4 font-display text-2xl md:text-3xl">{l}</h3>);
    } else {
      out.push(<p key={i} className="mt-5 leading-relaxed text-foreground/85">{linkify(l)}</p>);
    }
    i++;
  }
  return (
    <section id="investigacion-fas" className="border-b border-border bg-background px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Trabajo de investigación</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl">Conflicto bélico del Atlántico Sur e Islas Malvinas — 1982</h2>
        <p className="mt-6 font-display text-xl italic text-foreground/90">{titulo}</p>
        {out}
      </div>
    </section>
  );
}
