"use client"
import Image from "next/image"
import Link from "next/link"
import { FileText, ExternalLink } from "lucide-react"

export default function Legislacao() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto p-6">
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Cards */}
          <div className="space-y-6">
            {/* CTA Section */}
            <div className="bg-card py-6 px-8 rounded-lg shadow-md border">
              <h3
                className="text-[24px] font-normal text-foreground mb-4"
                style={{ fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif" }}
              >
                Acesse o Documento Oficial
              </h3>
              <Link
                href="https://www.in.gov.br/en/web/dou/-/resolucao-contran-n-996-de-15-de-junho-de-2023-491553860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Acesse o PDF oficial
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg h-fit border">
              <h3
                className="text-[24px] font-normal text-foreground mb-4"
                style={{ fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif" }}
              >
                Resumo da Resolução
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Define veículos autopropelidos e suas características",
                  "Estabelece requisitos de segurança para circulação",
                  "Determina regras de circulação em vias públicas",
                  "Especifica a documentação necessária para regularização",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Resumo */}
          <div className="space-y-6">
            {[
              {
                tag: "Legislação",
                date: "17/02/2023",
                title: "Regras específicas para veículos autopropelidos na Res. 996/2023",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vMKFEMVJ88iSBht6oQ6EuzbwvajNwe.png",
                link: "https://regras-veiculos-autoprop-hz8iyj5.gamma.site/",
              },
              {
                tag: "Legislação",
                date: "17/02/2023",
                title: "Principais pontos da Resolução 996/2023 (relativos a veículos autopropelidos)",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QmsouFY96pAUegnx1x1QVYgV7agQZa.png",
                link: "https://regulamentacao-autoprope-t6s58wf.gamma.site/",
              },
              {
                tag: "Legislação",
                date: "17/02/2023",
                title:
                  "Impactos práticos da Resolução 996/2023 para proprietários e usuários de veículos autopropelidos",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3KtpdbSTjO3Dxsi8IrBXqqIFypEM14.png",
                link: "https://resolucao-996-2023-w1bzf7o.gamma.site/",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border"
              >
                <div className="flex h-full">
                  <div className="relative w-[120px] h-[120px] flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                        {item.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-sm font-medium text-foreground mb-2 line-clamp-2">{item.title}</h3>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <span>Leia mais</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
