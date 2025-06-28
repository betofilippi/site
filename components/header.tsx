"use client"

import { useState, useEffect, type ElementType } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Instagram,
  Sparkles,
  Bike,
  Wrench,
  Store,
  Info,
  Mail,
  ShoppingCart,
  Settings,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LogoIcon } from "./logo-icon"

const navLinks: {
  href: string
  label: string
  icon: ElementType
  disabled?: boolean
}[] = [
  { href: "/modelos", label: "Modelos", icon: Bike },
  { href: "/assistencia-tecnica", label: "Assistência", icon: Wrench },
  { href: "/lojas", label: "Lojas", icon: Store },
  { href: "/sobre", label: "Sobre", icon: Info },
  { href: "/contato", label: "Contato", icon: Mail },
  { href: "#", label: "loja.app", disabled: true, icon: ShoppingCart },
  { href: "#", label: "assistencia.app", disabled: true, icon: Settings },
  { href: "#", label: "nxt.app", disabled: true, icon: Smartphone },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    if (hasMounted) {
      window.addEventListener("scroll", handleScroll)
      handleScroll() // Set initial state
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [hasMounted])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const showTransparentHeader = !isMenuOpen && !(hasMounted && isScrolled)

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          showTransparentHeader ? "bg-transparent" : "bg-background/80 border-b border-border backdrop-blur-sm",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center gap-2">
              <LogoIcon className="h-7 text-foreground dark:text-primary" />
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                if (link.disabled) {
                  return (
                    <div key={link.label} className="relative pt-2">
                      <span className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-2 py-2 text-muted-foreground opacity-50 cursor-default">
                        <span className="flex items-center gap-1">
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </span>
                      </span>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary/20 text-primary text-[8px] font-bold px-1 py-px rounded-md whitespace-nowrap flex items-center gap-1">
                        Em breve!
                        <Sparkles className="h-2.5 w-2.5" />
                      </div>
                    </div>
                  )
                }
                return (
                  <div key={link.label} className="pt-2">
                    <Button
                      variant="ghost"
                      asChild
                      className={cn(
                        "transition-colors px-2",
                        pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary",
                      )}
                    >
                      <Link href={link.href} className="flex items-center gap-1">
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    </Button>
                  </div>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden md:inline-flex text-muted-foreground hover:text-primary"
              >
                <a
                  href="https://www.instagram.com/voudenxt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </Button>

              <Button
                asChild
                className="hidden md:inline-flex bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20 px-4 py-2 h-auto"
              >
                <Link href="/franquia">
                  <div className="flex flex-col items-center leading-tight">
                    <span>Seja um Franqueado</span>
                    <span className="text-[10px] font-normal opacity-80">franquia.app</span>
                  </div>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-24 z-40 bg-background/90 backdrop-blur-lg md:hidden">
          <div className="container mx-auto px-4 pt-8 flex flex-col h-full">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon
                if (link.disabled) {
                  return (
                    <div key={link.label} className="relative w-fit pt-3">
                      <span className="text-lg font-medium text-muted-foreground opacity-50 cursor-not-allowed flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        {link.label}
                      </span>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary/20 text-primary text-[8px] font-bold px-1 py-px rounded-md whitespace-nowrap flex items-center gap-1">
                        Em breve!
                        <Sparkles className="h-2.5 w-2.5" />
                      </div>
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary flex items-center gap-2"
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                )
              })}
              <hr className="border-border my-4" />
              <Button
                asChild
                size="lg"
                className="bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20 py-2 h-auto"
              >
                <Link href="/franquia">
                  <div className="flex flex-col items-center leading-tight">
                    <span className="text-base">Seja um Franqueado</span>
                    <span className="text-xs font-normal opacity-80">franquia.app</span>
                  </div>
                </Link>
              </Button>
            </div>
            <div className="mt-auto pb-8 flex justify-between items-center">
              <a
                href="https://www.instagram.com/voudenxt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-7 w-7" />
                <span>Siga no Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
