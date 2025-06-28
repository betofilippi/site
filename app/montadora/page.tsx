"use client"
import { CircuitBoardIcon as Circuit, Leaf, Lightbulb } from "lucide-react"
import { NativeVideoPlayer } from "@/components/native-video-player"

export default function Montadora() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto p-6 space-y-12">
        {/* About and Map Section - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-6 bg-card p-8 rounded-lg shadow-md">
          <div>
            <h2
              className="text-[28px] font-normal text-foreground mb-4"
              style={{ fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif" }}
            >
              Sobre Nossa Fábrica
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Cada veículo NXT é projetado com precisão e fabricado com um compromisso inabalável com a sustentabilidade
              e a qualidade. Nossa fábrica em Jaraguá do Sul é o coração da inovação em mobilidade elétrica no Brasil.
            </p>
          </div>

          <div className="aspect-video w-full relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1QsPbDN8cBjbqPBtZLY5gwRBEKzrgXbE&ehbc=2E312F&noprof=1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Additional Information Section */}
        <div>
          <h3
            className="text-[24px] font-normal text-foreground mb-4"
            style={{ fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif" }}
          >
            Destaques da Nossa Montadora
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-card rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Circuit className="w-6 h-6 text-foreground" />
                <h4 className="text-lg font-semibold text-foreground">Tecnologia de Ponta</h4>
              </div>
              <p className="text-muted-foreground">
                Utilizamos as mais avançadas tecnologias em nossa linha de produção para garantir veículos de alta
                qualidade.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-foreground" />
                <h4 className="text-lg font-semibold text-foreground">Sustentabilidade</h4>
              </div>
              <p className="text-muted-foreground">
                Nossa fábrica opera com princípios de sustentabilidade, minimizando o impacto ambiental em todas as
                etapas de produção.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-foreground" />
                <h4 className="text-lg font-semibold text-foreground">Inovação Constante</h4>
              </div>
              <p className="text-muted-foreground">
                Investimos continuamente em pesquisa e desenvolvimento para manter nossa liderança em inovação no setor
                de eletromobilidade.
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-card p-8 rounded-lg shadow-md">
          <h3
            className="text-[24px] font-normal text-foreground mb-6"
            style={{ fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif" }}
          >
            Vídeo Institucional
          </h3>
          <NativeVideoPlayer src="/videos/montadora-institucional.mp4" title="Vídeo Institucional NXT" />
        </div>
      </div>
    </div>
  )
}
