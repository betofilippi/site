"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { Clock, Building, Headset, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { sendContactEmail } from "@/app/actions/send-contact-email"

const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "O título deve ter pelo menos 5 caracteres"),
  description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
})

export default function FaleConoscoPage() {
  const [charCount, setCharCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const result = await sendContactEmail(values)

      if (result.success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve.",
        })
        form.reset()
        setCharCount(0)
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto p-6 space-y-12">
        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-md border">
            <h2
              className="text-[28px] font-normal text-foreground mb-6"
              style={{ fontFamily: "'SF Pro Display', system-ui, -apple-system, sans-serif" }}
            >
              Envie sua mensagem
            </h2>

            <Form {...form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          {...field}
                          className="h-14 px-6 rounded-lg bg-input"
                          disabled={isLoading}
                        />
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
                      <FormLabel>Email para contato</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="seu@email.com"
                          type="email"
                          {...field}
                          className="h-14 px-6 rounded-lg bg-input"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título da dúvida</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: Dúvida sobre garantia"
                          {...field}
                          className="h-14 px-6 rounded-lg bg-input"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            placeholder="Descreva sua dúvida ou sugestão em detalhes"
                            {...field}
                            className="min-h-[120px] max-h-[500px] px-6 py-4 rounded-lg bg-input resize-y"
                            maxLength={700}
                            onChange={(e) => {
                              field.onChange(e)
                              setCharCount(e.target.value.length)
                            }}
                            disabled={isLoading}
                          />
                          <div className="absolute py-1 right-2 text-sm text-muted-foreground">{charCount}/700</div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Enviar Mensagem"}
              </Button>
            </Form>
          </div>
        </div>

        {/* Timeframe Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Prazo de Resposta",
              icon: <Clock className="w-5 h-5 text-primary mb-1" />,
              description:
                "Nosso time se esforça para responder todas as mensagens em até 24 horas úteis após o recebimento.",
            },
            {
              title: "Horário de Atendimento",
              icon: <Building className="w-5 h-5 text-primary mb-1" />,
              description:
                "Nossa equipe está disponível de segunda a sexta-feira, das 9h às 18h (horário de Brasília).",
            },
            {
              title: "Suporte Prioritário",
              icon: <Headset className="w-5 h-5 text-primary mb-1" />,
              description:
                "Para assuntos urgentes relacionados a produtos em garantia, oferecemos um canal de atendimento prioritário.",
            },
          ].map((item, index) => (
            <Card key={index} className="bg-secondary shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                {item.icon}
                <h4 className="text-lg font-semibold text-secondary-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
