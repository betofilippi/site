import { motos } from "@/lib/motos"
import { ProductCard } from "@/components/product-card"

export default function ModelosPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Nossos Modelos</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Encontre o veículo elétrico perfeito para o seu estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Object.values(motos).map((moto) => (
            <ProductCard key={moto.slug} moto={moto} />
          ))}
        </div>
      </div>
    </div>
  )
}
