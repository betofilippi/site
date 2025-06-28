"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { isCNPJ, isCPF } from "brazilian-values"
import { Loader2, Building, BarChart, HelpingHand } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sendFranchiseEmail } from "@/app/actions/send-franchise-email"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  document: z
    .string()
    .min(11, "CPF/CNPJ deve ter entre 11 e 14 dígitos.")
    .max(14, "CPF/CNPJ deve ter entre 11 e 14 dígitos.")
    .refine((val) => {
      const cleanedVal = val.replace(/\D/g, "")
      if (cleanedVal.length === 11) return isCPF(cleanedVal)
      if (cleanedVal.length === 14) return isCNPJ(cleanedVal)
      return false
    }, "CPF ou CNPJ inválido."),
  city: z.string().min(3, "A cidade deve ter pelo menos 3 caracteres."),
  phone: z.string().min(10, "Número de telefone inválido."),
  email: z.string().email("Email inválido."),
})

export default function FranquiaPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", document: "", city: "", phone: "", email: "" },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const result = await sendFranchiseEmail(values)
      if (result.success) {
        toast({
          title: "Formulário enviado com sucesso!",
          description: "Obrigado pelo seu interesse. Entraremos em contato em breve.",
        })
        form.reset()
      } else {
        throw new Error(result.error || "Ocorreu um erro desconhecido.")
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Por favor, tente novamente mais tarde."
      toast({
        variant: "destructive",
        title: "Erro ao enviar formulário",
        description: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Seja um Franqueado NXT</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Junte-se à marca que está liderando a revolução da mobilidade elétrica no Brasil. Preencha o formulário
            abaixo para iniciar sua jornada conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Formulário de Interesse</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="document"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CPF / CNPJ</FormLabel>
                          <FormControl>
                            <Input placeholder="Apenas números" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cidade / Estado de Interesse</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: São Paulo / SP" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone com DDD</FormLabel>
                          <FormControl>
                            <Input placeholder="(11) 99999-9999" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="seu@email.com" type="email" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Enviar Interesse"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <aside className="lg:col-span-2 space-y-8 lg:sticky lg:top-24">
            <h3 className="text-2xl font-bold">Vantagens de ser um Franqueado</h3>
            {[
              {
                icon: HelpingHand,
                title: "Suporte Completo",
                description: "Oferecemos treinamento, consultoria de campo e suporte de marketing contínuo.",
              },
              {
                icon: Building,
                title: "Marca Reconhecida",
                description: "Associe-se a uma marca forte e pioneira no mercado de eletromobilidade nacional.",
              },
              {
                icon: BarChart,
                title: "Mercado em Crescimento",
                description: "Invista em um dos setores que mais cresce no mundo, com alto potencial de retorno.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </div>
  )
}
