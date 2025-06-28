"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoWidget() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-0 z-50 sm:ml-[25px] w-[50%] sm:w-auto sm:max-w-[300px] md:max-w-sm mx-4 sm:mx-0">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-[#fff159]">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-600"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Fechar promoção</span>
        </Button>

        <a
          href="https://nxt.mercadoshops.com.br/MLB-5299553942-nxt-kay-1000w-autopropelido-_JM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3"
        >
          <div className="relative flex-shrink-0 w-16 h-16">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-ikSUdSydZPVSlHpMAldS85r4rHztS9.png"
              alt="Mercado Shops"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-base font-medium text-gray-900 group-hover:text-[#3483fa] transition-colors">
              Compre agora com frete grátis!
            </p>
            <p className="text-sm text-gray-500">Clique para comprar na loja oficial</p>
          </div>
        </a>
      </div>
    </div>
  )
}
