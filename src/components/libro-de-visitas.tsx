import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type Comentario = {
  id: string;
  nombre: string;
  ciudad: string | null;
  mensaje: string;
  created_at: string;
};

function formatFecha(iso: string) {
  return new Date(iso).toLocaleDateString("es-AR", { day: "2-digit", month: "long", year: "numeric" });
}

export function ContadorVisitas() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelado = false;
    async function run() {
      const yaContada = sessionStorage.getItem("visita-registrada") === "1";
      if (!yaContada) {
        const { data, error } = await supabase.rpc("registrar_visita");
        if (!cancelado && !error && typeof data === "number") {
          sessionStorage.setItem("visita-registrada", "1");
          setTotal(data);
          return;
        }
      }
      const { data } = await supabase.from("visitas").select("total").eq("id", 1).maybeSingle();
      if (!cancelado && data) setTotal(Number(data.total));
    }
    void run();
    return () => {
      cancelado = true;
    };
  }, []);

  if (total === null) return null;

  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
      Visitas al sitio · {total.toLocaleString("es-AR")}
    </p>
  );
}

export function LibroDeVisitas() {
  const queryClient = useQueryClient();
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { data: comentarios = [] } = useQuery({
    queryKey: ["comentarios-aprobados"],
    queryFn: async (): Promise<Comentario[]> => {
      const { data, error: err } = await supabase
        .from("comentarios")
        .select("id, nombre, ciudad, mensaje, created_at")
        .eq("aprobado", true)
        .order("created_at", { ascending: false })
        .limit(100);
      if (err) throw err;
      return data ?? [];
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const { error: err } = await supabase.from("comentarios").insert({
        nombre: nombre.trim(),
        ciudad: ciudad.trim() || null,
        mensaje: mensaje.trim(),
      });
      if (err) throw err;
    },
    onSuccess: () => {
      setEnviado(true);
      setNombre("");
      setCiudad("");
      setMensaje("");
      void queryClient.invalidateQueries({ queryKey: ["comentarios-aprobados"] });
    },
    onError: () => setError("No pudimos enviar tu mensaje. Revisá los datos e intentá de nuevo."),
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (nombre.trim().length < 2) return setError("Ingresá tu nombre.");
    if (mensaje.trim().length < 5) return setError("Escribí un mensaje un poco más largo.");
    if (mensaje.trim().length > 2000) return setError("El mensaje es demasiado largo.");
    mutation.mutate();
  }

  return (
    <section id="comentarios" className="border-t border-border bg-card px-6 py-24 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Libro de visitas</p>
        <h2 className="mt-4 font-display text-4xl italic md:text-5xl">Dejá tu testimonio</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Los mensajes se publican una vez revisados por el autor. Gracias por acompañar la memoria de quienes
          sirvieron a la Patria.
        </p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 border border-border bg-background p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Nombre</span>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                maxLength={80}
                required
                className="border border-border bg-card px-4 py-3 text-sm outline-none focus:border-foreground"
              />
            </label>
            <label className="grid gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Ciudad (opcional)
              </span>
              <input
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                maxLength={80}
                className="border border-border bg-card px-4 py-3 text-sm outline-none focus:border-foreground"
              />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Mensaje</span>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              maxLength={2000}
              rows={5}
              required
              className="border border-border bg-card px-4 py-3 text-sm outline-none focus:border-foreground"
            />
          </label>

          {error && <p className="text-sm text-destructive">{error}</p>}
          {enviado && (
            <p className="text-sm text-foreground">
              ¡Gracias! Tu mensaje fue enviado y se publicará una vez que el autor lo apruebe.
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="border border-foreground bg-foreground px-8 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-background transition hover:opacity-80 disabled:opacity-50"
            >
              {mutation.isPending ? "Enviando…" : "Enviar mensaje"}
            </button>
          </div>
        </form>

        {comentarios.length > 0 && (
          <div className="mt-14 space-y-8">
            {comentarios.map((c) => (
              <article key={c.id} className="border-l-2 border-border pl-6">
                <p className="font-display text-xl italic leading-relaxed text-foreground">“{c.mensaje}”</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {c.nombre}
                  {c.ciudad ? ` · ${c.ciudad}` : ""} · {formatFecha(c.created_at)}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
