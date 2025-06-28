import Image from "next/image"
import { Leaf, Lightbulb, CircuitBoard } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fabrica-linha-montagem-Cmq8Z-gqYgqGgYqgqGgYqgqGgYqg.jpg"
            alt="Linha de montagem da fábrica da NXT"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Nossa Missão</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white/90">
            Liderar a transformação da mobilidade urbana no Brasil através de soluções elétricas, inovadoras e
            sustentáveis.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>A Vanguarda da Eletromobilidade no Brasil</h2>
              <p>
                Fundada com a visão de um futuro mais limpo e eficiente, a NXT nasceu em Jaraguá do Sul, Santa Catarina,
                como uma montadora 100% brasileira dedicada à eletromobilidade. Nosso compromisso é com a qualidade, a
                inovação e, acima de tudo, com o meio ambiente.
              </p>
              <p>
                Cada autopropelido que sai de nossa linha de produção é um testemunho do nosso empenho em oferecer o
                melhor em tecnologia autopropelida. Acreditamos que a mobilidade elétrica não é apenas uma alternativa,
                mas o caminho para cidades mais inteligentes e um planeta mais saudável.
              </p>
              <p>
                Junte-se a nós nesta jornada e faça parte da revolução que está redefinindo a forma como nos movemos.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Sustentabilidade</h3>
                  <p className="text-muted-foreground mt-1">
                    Operamos com princípios de sustentabilidade, minimizando o impacto ambiental em todas as etapas de
                    produção.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <CircuitBoard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Tecnologia de Ponta</h3>
                  <p className="text-muted-foreground mt-1">
                    Utilizamos as mais avançadas tecnologias em nossa linha de produção para garantir veículos de alta
                    qualidade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Inovação Constante</h3>
                  <p className="text-muted-foreground mt-1">
                    Investimos continuamente em pesquisa e desenvolvimento para manter nossa liderança no setor de
                    eletromobilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
