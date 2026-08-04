import { createServerFn } from "@tanstack/react-start";

/**
 * Increments the public visit counter server-side.
 * The underlying SECURITY DEFINER function is not executable by anon/authenticated,
 * so the increment happens here with privileged credentials only.
 */
export const registrarVisita = createServerFn({ method: "POST" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin.rpc("registrar_visita");
  if (error) {
    console.error("registrar_visita failed:", error.message);
    return { total: null as number | null };
  }
  return { total: typeof data === "number" ? data : null };
});
