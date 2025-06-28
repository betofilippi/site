"use server"

import { Resend } from "resend"

interface FranchiseFormData {
  name: string
  document: string
  city: string
  phone: string
  email: string
}

export async function sendFranchiseEmail(data: FranchiseFormData) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable")
    return { success: false, error: "Configuração de email não encontrada" }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const emailContent = `Olá, me chamo ${data.name}! 

Gostaria de adquirir uma franquia da NXT, segue minhas informacoes pessoais para contato

Nome: ${data.name} 
Documento: ${data.document}
Local: ${data.city}
Número: ${data.phone}
E-mail: ${data.email}`

    await resend.emails.send({
      from: "NXT <onboarding@resend.dev>",
      to: "adm@nxt.eco.br",
      subject: "Novo Interesse em Franquia",
      text: emailContent,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Falha ao enviar email" }
  }
}
