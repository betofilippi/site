"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motos } from "@/lib/motos"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageGalleryModal } from "@/components/image-gallery-modal"
import { CheckCircle, Sparkles } from "lucide-react"
import { FeatureIcon } from "@/components/feature-icon"

const specLabels: { [key: string]: string } = {
  autonomia: "Autonomia",
  velocidade: "Velocidade Máxima",
  potencia: "Potência",
  peso: "Peso",
  carregamento: "Tempo de Recarga",
  capacidade: "Capacidade de Carga",
  bateria: "Bateria",
  freios: "Freios",
  rodas: "Rodas",
}

export default function ModelPage() {
  const params = useParams()
  const slug = params.slug as string
  const moto = motos[slug]

  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!moto) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Modelo não encontrado.</p>
      </div>
    )
  }

  const openGallery = (index: number) => {
    setCurrentImageIndex(index)
    setIsGalleryOpen(true)
  }

  return (
    <>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[400px] text-white">
          <Image
            src={moto.heroImage || "/placeholder.svg"}
            alt={`Hero image for ${moto.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end container mx-auto px-4 pb-12">
            <h1 className="text-5xl md:text-7xl font-bold">{moto.name}</h1>
            <p className="mt-2 text-xl md:text-2xl text-white/90 max-w-2xl">{moto.tagline}</p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Juna 2025 Announcement */}
          {slug === "juna" && (
            <div className="mb-12 p-6 rounded-lg border border-primary/30 bg-card text-center shadow-lg">
              <div className="flex justify-center items-center gap-3 mb-3">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-primary">Vem aí: Juna 2025!</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Prepare-se! A nova versão chega em breve às lojas com a revolucionária{" "}
                <strong>bateria de Grafeno</strong>, maior autonomia e um design ainda mais moderno. Fique de olho nas
                novidades!
              </p>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Gallery & Specs */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Galeria</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {moto.gallery.map((image, index) => (
                    <button
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden group"
                      onClick={() => openGallery(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${moto.name} gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                    </button>
                  ))}
                </div>
              </section>

              {/* Specs */}
              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Especificações Técnicas</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {Object.entries(moto.specs).map(
                    ([key, value]) =>
                      value && (
                        <div key={key} className="bg-card p-4 rounded-lg border">
                          <p className="text-sm text-muted-foreground">{specLabels[key] || key}</p>
                          <p className="text-lg font-semibold">{value}</p>
                        </div>
                      ),
                  )}
                </div>
              </section>

              {/* Highlights */}
              {moto.highlights && moto.highlights.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-2xl font-bold mb-4">Destaques e Tecnologia</h2>
                  <div className="bg-card p-6 rounded-lg border">
                    <ul className="space-y-3">
                      {moto.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}
            </div>

            {/* Right Column - Details & CTA */}
            <aside className="lg:sticky top-24 h-fit">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <p className="text-base text-muted-foreground mb-6">{moto.description}</p>
                  <div className="space-y-4">
                    {moto.features.map((feature) => (
                      <div key={feature.title} className="flex items-start gap-3">
                        <FeatureIcon name={feature.icon} className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Button size="lg" className="w-full mt-6" asChild>
                <Link href="/lojas">Encontrar uma Loja</Link>
              </Button>
            </aside>
          </div>
        </div>
      </div>

      <ImageGalleryModal
        images={moto.gallery}
        currentImageIndex={currentImageIndex}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        onNavigate={setCurrentImageIndex}
        productName={moto.name}
      />
    </>
  )
}
