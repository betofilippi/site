"use client"

import { ShieldCheck, PartyPopper } from "lucide-react"
import Image from "next/image"

export function HelmetCampaignBanner() {
  return (
    <div className="bg-card border border-primary/30 rounded-2xl p-8 shadow-2xl shadow-primary/10 overflow-hidden relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 blur-xl animate-pulse" />
      <div className="relative grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div
            className="relative bg-black rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20 flex items-center justify-center"
            style={{ width: "13.5rem", height: "13.5rem" }}
          >
            <div className="w-48 h-48 relative">
              <Image
                src="/images/helmet-campaign.gif"
                alt="Capacete de segurança NXT"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <PartyPopper className="w-4 h-4" />
            <span>GRANDE NOVIDADE!</span>
          </div>
          <h2 className="font-bold text-foreground bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent mt-0 mb-1.5 text-4xl leading-[3rem]">
            10 mil capacetes grátis!
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Uma campanha de conscientização para <strong>todos os proprietários NXT</strong>, de qualquer modelo ou ano.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Sua segurança é nossa prioridade. Fique ligado!</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center md:text-left">Mais informações em breve.</p>
        </div>
      </div>
    </div>
  )
}
