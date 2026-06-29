import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">Página no encontrada.</p>
        <Link to="/" className="mt-6 inline-block underline">Volver al inicio</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Esta página no cargó</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground">Reintentar</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Testimonio de una Trilogía — Guerra de Malvinas 1982" },
      { name: "description", content: "Obra histórica y vivencial sobre el Personal de Tierra en la BAM San Julián durante el conflicto del Atlántico Sur. Acceso libre y gratuito." },
      { property: "og:title", content: "Testimonio de una Trilogía — Guerra de Malvinas 1982" },
      { property: "og:description", content: "Obra histórica y vivencial sobre el Personal de Tierra en la BAM San Julián durante el conflicto del Atlántico Sur. Acceso libre y gratuito." },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Testimonio de una Trilogía — Guerra de Malvinas 1982" },
      { name: "twitter:description", content: "Obra histórica y vivencial sobre el Personal de Tierra en la BAM San Julián durante el conflicto del Atlántico Sur. Acceso libre y gratuito." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/d94eee0b-e387-4c61-898b-cf1b1728b11f" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/d94eee0b-e387-4c61-898b-cf1b1728b11f" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
