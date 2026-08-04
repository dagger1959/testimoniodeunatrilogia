-- 1. Lock down SECURITY DEFINER functions not meant to be called from the API
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;

REVOKE ALL ON FUNCTION public.handle_new_user_role() FROM PUBLIC, anon, authenticated;

-- 2. registrar_visita is intentionally public (visit counter) but must be tightly scoped
REVOKE ALL ON FUNCTION public.registrar_visita() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.registrar_visita() TO anon, authenticated, service_role;

-- 3. visitas: read-only for clients, writes only through the definer function
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES ON TABLE public.visitas FROM anon, authenticated;
GRANT SELECT ON TABLE public.visitas TO anon, authenticated;
GRANT ALL ON TABLE public.visitas TO service_role;

-- 4. user_roles: no client-side role assignment at all (fail-closed, explicit)
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES ON TABLE public.user_roles FROM anon, authenticated;
REVOKE SELECT ON TABLE public.user_roles FROM anon;
GRANT SELECT ON TABLE public.user_roles TO authenticated;
GRANT ALL ON TABLE public.user_roles TO service_role;

CREATE POLICY "no client role inserts" ON public.user_roles
  FOR INSERT TO anon, authenticated WITH CHECK (false);
CREATE POLICY "no client role updates" ON public.user_roles
  FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);
CREATE POLICY "no client role deletes" ON public.user_roles
  FOR DELETE TO anon, authenticated USING (false);

CREATE POLICY "no client visit writes" ON public.visitas
  FOR INSERT TO anon, authenticated WITH CHECK (false);
CREATE POLICY "no client visit updates" ON public.visitas
  FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);
CREATE POLICY "no client visit deletes" ON public.visitas
  FOR DELETE TO anon, authenticated USING (false);