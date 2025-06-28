import type { MetadataRoute } from "next"
import { motos } from "@/lib/motos"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nxt.eco.br"

  // Base routes
  const routes = [
    "",
    "/modelos",
    "/assistencia",
    "/montadora",
    "/legislacao",
    "/centro-distribuicao",
    "/franquia",
    "/lojas",
    "/fale-conosco",
    "/rastreamento-pedido",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Dynamic product routes
  const productRoutes = Object.keys(motos).map((slug) => ({
    url: `${baseUrl}/modelos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  return [...routes, ...productRoutes]
}
