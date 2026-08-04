REVOKE ALL ON FUNCTION public.registrar_visita() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.registrar_visita() TO service_role;