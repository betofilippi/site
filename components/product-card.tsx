import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { MotoData } from "@/lib/motos"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  moto: MotoData
}

export function ProductCard({ moto }: ProductCardProps) {
  return (
    <Card className="bg-card border border-border backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
      <Link href={`/modelos/${moto.slug}`} className="flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={moto.heroImage || "/placeholder.svg"}
            alt={`Veículo elétrico ${moto.name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">{moto.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-2">{moto.tagline}</p>
        </CardContent>
        <CardFooter>
          <div className="text-primary text-sm font-semibold flex items-center">
            Ver Detalhes
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}
