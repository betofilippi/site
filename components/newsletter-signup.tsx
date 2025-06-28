"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { ArrowRight, Loader2 } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Conexão estabelecida.",
      description: "Você foi adicionado à nossa rede de inteligência. Bem-vindo.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex w-full items-center space-x-2">
        <Input
          type="email"
          placeholder="seu.email@dominio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-background/50 border-border focus:ring-primary/50"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <span className="hidden sm:inline">Inscrever</span>
              <ArrowRight className="h-4 w-4 sm:ml-2" />
            </>
          )}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-2">Junte-se à revolução da mobilidade.</p>
    </form>
  )
}
