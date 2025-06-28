export default function AssistenciaTecnicaPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Nossa Rede de Assistência</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Com mais de 150 pontos em todo o Brasil, a NXT garante o suporte que você precisa, onde quer que esteja.
            Encontre o ponto de assistência mais próximo no mapa abaixo.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-lg">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1SDtXyA-sl7rq8P8T6kfXa46rdd46YLo&ehbc=2E312F"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Assistências Técnicas NXT"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
