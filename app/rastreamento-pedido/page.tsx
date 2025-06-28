"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Clock, Truck, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
  trackingCode: z.string().min(1, "O código de rastreamento é obrigatório"),
})

export default function RastreamentoPedidoPage() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      trackingCode: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values)

      toast({
        title: "Pedido localizado!",
        description: "Acompanhe o status do seu pedido abaixo.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao rastrear pedido",
        description: "Por favor, verifique o código e tente novamente.",
      })
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
              Rastrear meu pedido
            </h2>

            <Form {...form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="trackingCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Digite o código de rastreamento</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: NXT123456789" {...field} className="h-14 px-6 rounded-lg bg-input" />
                    </FormControl>
                    <FormDescription>
                      O código de rastreamento foi enviado para seu e-mail após a compra
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
              >
                Rastrear Pedido
              </Button>
            </Form>
          </div>
        </div>

        {/* Instruction Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Prazo de Atualização",
              icon: <Clock className="w-5 h-5 text-primary mb-2" />,
              description:
                "As informações de rastreamento são atualizadas a cada 24 horas. Verifique regularmente para obter o status mais recente.",
            },
            {
              title: "Entrega Estimada",
              icon: <Truck className="w-5 h-5 text-primary mb-2" />,
              description:
                "O prazo de entrega varia de acordo com sua localização. Geralmente, as entregas são realizadas em 5-10 dias úteis.",
            },
            {
              title: "Dúvidas?",
              icon: <HelpCircle className="w-5 h-5 text-primary mb-2" />,
              description:
                "Se tiver alguma dúvida sobre seu pedido, entre em contato com nossa equipe de suporte através do e-mail: suporte@nxt.com",
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
