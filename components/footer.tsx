import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { LogoIcon } from "./logo-icon"

export function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <LogoIcon className="h-8" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Revolucionando a mobilidade urbana com veículos elétricos inovadores e sustentáveis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Modelos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/modelos/kay" className="text-sm text-muted-foreground hover:text-primary">
                  Kay
                </Link>
              </li>
              <li>
                <Link href="/modelos/zilla" className="text-sm text-muted-foreground hover:text-primary">
                  Zilla
                </Link>
              </li>
              <li>
                <Link href="/modelos/juna" className="text-sm text-muted-foreground hover:text-primary">
                  Juna
                </Link>
              </li>
              <li>
                <Link href="/modelos/kimbo" className="text-sm text-muted-foreground hover:text-primary">
                  Kimbo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/assistencia-tecnica" className="text-sm text-muted-foreground hover:text-primary">
                  Assistência Técnica
                </Link>
              </li>
              <li>
                <Link href="/rastreamento-pedido" className="text-sm text-muted-foreground hover:text-primary">
                  Rastrear Pedido
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground hover:text-primary">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="/legislacao" className="text-sm text-muted-foreground hover:text-primary">
                  Legislação
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/montadora" className="text-sm text-muted-foreground hover:text-primary">
                  Nossa Fábrica
                </Link>
              </li>
              <li>
                <Link href="/franquia" className="text-sm text-muted-foreground hover:text-primary">
                  Seja um Franqueado
                </Link>
              </li>
              <li>
                <a
                  href="https://autopropelidos.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NXT Indústria e Comércio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/voudenxt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
