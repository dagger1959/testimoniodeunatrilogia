import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type Comentario = {
  id: string;
  nombre: string;
  ciudad: string | null;
  mensaje: string;
  aprobado: boolean;
  created_at: string;
};

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Moderación de mensajes — Testimonio de una Trilogía" },
      { name: "description", content: "Panel privado para aprobar o eliminar los mensajes del libro de visitas." },
      { property: "og:title", content: "Moderación de mensajes — Testimonio de una Trilogía" },
      { property: "og:description", content: "Panel privado para aprobar o eliminar los mensajes del libro de visitas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: visitas } = useQuery({
    queryKey: ["visitas-total"],
    queryFn: async () => {
      const { data } = await supabase.from("visitas").select("total").eq("id", 1).maybeSingle();
      return data ? Number(data.total) : 0;
    },
  });

  const { data: comentarios = [], isLoading, error } = useQuery({
    queryKey: ["comentarios-admin"],
    queryFn: async (): Promise<Comentario[]> => {
      const { data, error: err } = await supabase
        .from("comentarios")
        .select("id, nombre, ciudad, mensaje, aprobado, created_at")
        .order("created_at", { ascending: false });
      if (err) throw err;
      return data ?? [];
    },
  });

  async function aprobar(id: string, aprobado: boolean) {
    await supabase.from("comentarios").update({ aprobado }).eq("id", id);
    void queryClient.invalidateQueries({ queryKey: ["comentarios-admin"] });
  }

  async function eliminar(id: string) {
    await supabase.from("comentarios").delete().eq("id", id);
    void queryClient.invalidateQueries({ queryKey: ["comentarios-admin"] });
  }

  async function salir() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    await navigate({ to: "/auth", replace: true });
  }

  const pendientes = comentarios.filter((c) => !c.aprobado);
  const publicados = comentarios.filter((c) => c.aprobado);

  return (
    <div className="min-h-screen bg-background px-6 py-16 paper-texture md:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Panel privado</p>
            <h1 className="mt-2 font-display text-4xl italic">Moderación de mensajes</h1>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Visitas · {(visitas ?? 0).toLocaleString("es-AR")}
            </p>
            <button
              onClick={salir}
              className="mt-3 border border-border px-5 py-2 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-card"
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        {isLoading && <p className="mt-10 text-sm text-muted-foreground">Cargando…</p>}
        {error && (
          <p className="mt-10 text-sm text-destructive">
            No tenés permisos para moderar con esta cuenta. Ingresá con dagger1959@gmail.com.
          </p>
        )}

        <Seccion titulo={`Pendientes (${pendientes.length})`}>
          {pendientes.length === 0 && <p className="text-sm text-muted-foreground">No hay mensajes pendientes.</p>}
          {pendientes.map((c) => (
            <Fila key={c.id} c={c} onAprobar={() => aprobar(c.id, true)} onEliminar={() => eliminar(c.id)} />
          ))}
        </Seccion>

        <Seccion titulo={`Publicados (${publicados.length})`}>
          {publicados.length === 0 && <p className="text-sm text-muted-foreground">Todavía no publicaste mensajes.</p>}
          {publicados.map((c) => (
            <Fila
              key={c.id}
              c={c}
              onOcultar={() => aprobar(c.id, false)}
              onEliminar={() => eliminar(c.id)}
            />
          ))}
        </Seccion>
      </div>
    </div>
  );
}

function Seccion({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{titulo}</h2>
      <div className="mt-6 space-y-4">{children}</div>
    </section>
  );
}

function Fila({
  c,
  onAprobar,
  onOcultar,
  onEliminar,
}: {
  c: Comentario;
  onAprobar?: () => void;
  onOcultar?: () => void;
  onEliminar: () => void;
}) {
  return (
    <article className="border border-border bg-card p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {c.nombre}
        {c.ciudad ? ` · ${c.ciudad}` : ""} · {new Date(c.created_at).toLocaleString("es-AR")}
      </p>
      <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-foreground">{c.mensaje}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {onAprobar && (
          <button
            onClick={onAprobar}
            className="border border-foreground bg-foreground px-5 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-background hover:opacity-80"
          >
            Aprobar y publicar
          </button>
        )}
        {onOcultar && (
          <button
            onClick={onOcultar}
            className="border border-border px-5 py-2 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-background"
          >
            Despublicar
          </button>
        )}
        <button
          onClick={onEliminar}
          className="border border-destructive px-5 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-destructive hover:bg-destructive/10"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}
