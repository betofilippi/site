"use client"

export default function LojasPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Nossas Lojas</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Encontre a loja ou revendedor NXT mais próximo de você. Venha conhecer nossos modelos e fazer um test-drive.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-lg">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1somc09mxlV4ELAQK6B-TkDDm__G6uAg&ehbc=2E312F&noprof=1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Lojas NXT"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
