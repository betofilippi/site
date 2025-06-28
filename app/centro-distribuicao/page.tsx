"use client"
import React from "react"
import Image from "next/image"
import { Send } from "lucide-react"

export default function CentroDistribuicao() {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto p-6 space-y-12">
        {/* Benefícios Section */}
        <div className="bg-secondary p-8 rounded-lg shadow-md">
          <h2
            className="text-[28px] font-normal text-foreground mb-4"
            style={{ fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif" }}
          >
            Benefícios para os clientes
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Maior agilidade na entrega de peças",
              "Ampla disponibilidade de componentes",
              "Redução no tempo de manutenção",
              "Suporte aprimorado para toda a linha de produtos NXT",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center bg-card p-8 rounded-lg border">
          <div className="relative aspect-[16/16] shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201%20(1)-NsezgkLlCGYcPqreHqXhynf3FKq9hw.png"
              alt="NXT Vehicle Part"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h2
              className="text-[28px] font-normal text-foreground mb-4"
              style={{ fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif" }}
            >
              Fique por dentro das novidades
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Cadastre-se para receber atualizações sobre o lançamento do nosso novo centro de distribuição.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="w-full h-14 px-6 rounded-lg bg-input border text-foreground placeholder:text-muted-foreground"
                required
              />
              <button
                type="submit"
                className="w-full h-14 bg-primary hover:bg-primary/90 rounded-lg text-primary-foreground font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <span>Cadastrar</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Localização Estratégica",
              description:
                "Nosso centro de distribuição será localizado em um ponto estratégico para atender todo o país.",
            },
            {
              title: "Tecnologia de Ponta",
              description:
                "Utilizaremos sistemas avançados de gerenciamento de estoque e logística para maior eficiência.",
            },
            {
              title: "Sustentabilidade",
              description:
                "O projeto do centro incluirá práticas sustentáveis, alinhadas com nossa missão de mobilidade limpa.",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-secondary rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-secondary-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
