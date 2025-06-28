"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface PurchaseModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  productSlug: string
}

export function PurchaseModal({ isOpen, onOpenChange, productSlug }: PurchaseModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Comprar Kay</DialogTitle>
          <DialogDescription>
            Clique no botão abaixo para acessar a loja oficial da NXT no Mercado Livre
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            className="w-full flex items-center justify-center gap-2 h-14"
            onClick={() =>
              window.open("https://nxt.mercadoshops.com.br/MLB-5299553942-nxt-kay-1000w-autopropelido-_JM", "_blank")
            }
          >
            <ShoppingCart className="w-5 h-5" />
            Comprar no Mercado Livre
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
