import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "NXT - Mobilidade Elétrica para o Futuro",
  description:
    "Descubra a linha de veículos elétricos da NXT. Inovação, sustentabilidade e tecnologia para a mobilidade urbana.",
  icons: {
    icon: "/icon.png?v=2",
    apple: "/apple-icon.png?v=2",
  },
  openGraph: {
    title: "NXT - Mobilidade Elétrica para o Futuro",
    description: "Veículos elétricos, autopropelidos e sustentáveis. Conheça nossos modelos.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sem%20EWET%C3%ADtulo-1.jpg-eassTrNYBVuCdFFJFrEKK4nr5Hbr3Z.jpeg",
        width: 1200,
        height: 630,
        alt: "NXT Veículos Elétricos",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </Suspense>
        <Script
          id="respondio__widget"
          src="https://cdn.respond.io/webchat/widget/widget.js?cId=de6a4909faa5544e1b5b347d83f551f"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
