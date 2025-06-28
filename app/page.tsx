"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Wrench, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import NewsletterSignup from "@/components/newsletter-signup"
import { motos } from "@/lib/motos"
import { HelmetCampaignBanner } from "@/components/helmet-campaign-banner"

export default function HomePage() {
  const featuredMotos = [motos.kay, motos.zilla, motos.juna, motos.kimbo]

  return (
    <div className="text-foreground overflow-x-hidden">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sem%20EWET%C3%ADtulo-1.jpg-eassTrNYBVuCdFFJFrEKK4nr5Hbr3Z.jpeg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            {/* Fallback para navegadores que não suportam vídeo */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sem%20EWET%C3%ADtulo-1.jpg-eassTrNYBVuCdFFJFrEKK4nr5Hbr3Z.jpeg"
              alt="Mulher pilotando uma scooter elétrica NXT em uma cidade moderna"
              className="w-full h-full object-cover opacity-40"
            />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 p-4 flex flex-col items-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent"
          >
            A Revolução é para Todos
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90"
          >
            NXT é Liberdade Elétrica em Duas Rodas. Líder Pioneira dos Autopropelidos no Brasil.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/modelos">Explorar Modelos</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary bg-transparent"
            >
              <Link href="/franquia">Seja um Franqueado</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Helmet Campaign Banner Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <HelmetCampaignBanner />
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossos Modelos</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Cada veículo é uma fusão de engenharia de precisão e design inovador, construído para a cidade do futuro.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMotos.map((moto) => (
              <ProductCard key={moto.slug} moto={moto} />
            ))}
          </div>
        </div>
      </section>

      {/* Why NXT? Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core System NXT</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card border border-border rounded-lg p-8 flex flex-col items-center transition-all duration-300 hover:border-primary/50">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tecnologia e Inovação</h3>
              <p className="text-muted-foreground">
                Componentes de ponta para a melhor performance e uma experiência de condução conectada.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 flex flex-col items-center transition-all duration-300 hover:border-primary/50">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte Nacional</h3>
              <p className="text-muted-foreground">
                Rede de assistência em mais de 150 cidades, garantindo sua tranquilidade em todo o Brasil.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 flex flex-col items-center transition-all duration-300 hover:border-primary/50">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Presença Nacional</h3>
              <p className="text-muted-foreground">
                Encontre uma loja NXT perto de você e venha conhecer de perto a revolução da mobilidade elétrica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Acesse o Futuro.</h2>
              <p className="text-muted-foreground mb-8">
                Cadastre-se para receber em primeira mão nossos lançamentos, atualizações de sistema e notícias sobre o
                universo da mobilidade elétrica.
              </p>
            </div>
            <div className="max-w-lg mx-auto w-full">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
