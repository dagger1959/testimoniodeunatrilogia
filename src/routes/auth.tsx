import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Acceso del autor — Testimonio de una Trilogía" },
      { name: "description", content: "Acceso privado del autor para moderar los mensajes del libro de visitas." },
      { property: "og:title", content: "Acceso del autor — Testimonio de una Trilogía" },
      { property: "og:description", content: "Acceso privado del autor para moderar los mensajes del libro de visitas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [modo, setModo] = useState<"login" | "registro">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setAviso(null);
    setCargando(true);
    try {
      if (modo === "login") {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
        await navigate({ to: "/admin" });
      } else {
        const { data, error: err } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/auth" },
        });
        if (err) throw err;
        if (data.session) await navigate({ to: "/admin" });
        else setAviso("Revisá tu correo y confirmá la cuenta para poder ingresar.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo completar la operación.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 paper-texture">
      <div className="w-full max-w-md border border-border bg-card p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Área privada</p>
        <h1 className="mt-3 font-display text-3xl italic">Acceso del autor</h1>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <label className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Correo</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
            />
          </label>

          {error && <p className="text-sm text-destructive">{error}</p>}
          {aviso && <p className="text-sm text-foreground">{aviso}</p>}

          <button
            type="submit"
            disabled={cargando}
            className="border border-foreground bg-foreground px-8 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-background transition hover:opacity-80 disabled:opacity-50"
          >
            {cargando ? "Procesando…" : modo === "login" ? "Ingresar" : "Crear cuenta"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setModo(modo === "login" ? "registro" : "login");
            setError(null);
            setAviso(null);
          }}
          className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground underline underline-offset-4"
        >
          {modo === "login" ? "Primera vez: crear mi cuenta" : "Ya tengo cuenta: ingresar"}
        </button>
      </div>
    </div>
  );
}
