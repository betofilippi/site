"use server"

import { Resend } from "resend"

interface ContactFormData {
  name: string
  email: string
  subject: string
  description: string
}

export async function sendContactEmail(data: ContactFormData) {
  if (!process.env.RESEND_CONTACT_KEY) {
    console.error("Missing RESEND_CONTACT_KEY environment variable")
    return { success: false, error: "Configuração de email não encontrada" }
  }

  try {
    const resend = new Resend(process.env.RESEND_CONTACT_KEY)

    const emailContent = `Nova mensagem de contato:

Nome: ${data.name}
E-mail: ${data.email}
Assunto: ${data.subject}

Mensagem:
${data.description}`

    await resend.emails.send({
      from: "NXT <onboarding@resend.dev>",
      to: "contato@nxt.eco.br",
      subject: `Contato via Site: ${data.subject}`,
      text: emailContent,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Falha ao enviar email" }
  }
}
