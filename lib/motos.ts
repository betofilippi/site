export interface Feature {
  icon: string // Changed from LucideIcon to string
  title: string
  description: string
}

export interface Specs {
  autonomia: string
  velocidade: string
  potencia: string
  peso: string
  carregamento: string
  capacidade: string
  bateria: string
  freios: string
  rodas?: string
}

export interface MotoData {
  slug: string
  name: string
  tagline: string
  description: string
  heroImage: string
  gallery: string[]
  specs: Specs
  features: Feature[]
  highlights?: string[]
}

export const motos: { [key: string]: MotoData } = {
  kimbo: {
    slug: "kimbo",
    name: "Kimbo",
    tagline: "O equilíbrio perfeito entre conforto e tecnologia de Grafeno",
    description:
      "A Kimbo oferece uma experiência de condução suave e confortável, ideal para o dia a dia urbano, com assento espaçoso e a durabilidade da bateria de Grafeno.",
    heroImage: "/images/motos/kimbo-hero.jpg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.png-6OOm0DBLVRSJTPPZwK6GaEWenFi1gl.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.png-LuXwX1YP78yvRpldb191cH8vxUwVA8.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.png-b6vajha0abYtAx0LCqeFsfPtFfLneA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.png-BieC4dfuG8xRUEwlG9z9iD52gzjNyJ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-5ioJhJgky2Qki9nUm13FAgCjMMv8xS.jpeg",
    ],
    specs: {
      autonomia: "até 100 km",
      velocidade: "até 32 km/h",
      potencia: "1000W",
      peso: "75 kg",
      carregamento: "até 5 horas",
      capacidade: "até 150kg",
      bateria: "72V 23Ah Grafeno",
      freios: "Disco (diant.) e Tambor (tras.)",
      rodas: "Aro 10 (sem câmara)",
    },
    features: [
      {
        icon: "Battery",
        title: "Bateria de Grafeno",
        description: "Tecnologia de ponta para maior durabilidade, performance e recargas mais rápidas.",
      },
      {
        icon: "Star",
        title: "Conforto Superior",
        description: "Assento amplo e suspensão hidráulica ajustada para uma pilotagem suave.",
      },
      {
        icon: "Timer",
        title: "Carregamento Otimizado",
        description: "Carga completa em até 5 horas para você passar mais tempo na rua.",
      },
      {
        icon: "Shield",
        title: "Segurança Completa",
        description: "Freios responsivos, alarme com controle remoto e pneus sem câmara.",
      },
    ],
    highlights: [
      "Suspensão hidráulica para máximo conforto",
      "Alarme com acionamento por controle remoto",
      "Display digital com 3 modos de velocidade",
      "Função 'Reparo de um botão' e modo ré",
      "Pneus sem câmara (tubeless) para maior segurança",
    ],
  },
  kay: {
    slug: "kay",
    name: "Kay",
    tagline: "Autonomia estendida e design moderno com bateria de Grafeno",
    description:
      "A Kay representa o futuro da mobilidade urbana, combinando estilo sofisticado com a incrível autonomia de até 140km da sua bateria de Grafeno.",
    heroImage: "/images/motos/kay-hero.jpg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.png-nEJ0bOmSaE9RyYI2R4f1RdmYrnLyGI.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-B5QOi17nKjCLN3I0zHt8KorkvLFXGZ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.png-DKYyE3OQ9DZZMKtVmRrth2zBx5yvSE.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.png-DmKyrxGn3IlKOtzPBcoHaLTBnKtv15.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-eA9W7FBRdRZ9UMq0GWZ3ckLuFLgFKm.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.png-o6GNr4i7hlR0pLq15DIIBxYUrbjxVo.jpeg",
    ],
    specs: {
      autonomia: "até 140 km",
      velocidade: "até 32 km/h",
      potencia: "1000W",
      peso: "70 kg",
      carregamento: "até 5 horas",
      capacidade: "até 150kg",
      bateria: "72V 35Ah Grafeno",
      freios: "Disco (diant.) e Tambor (tras.)",
      rodas: "Aro 10 (sem câmara)",
    },
    features: [
      {
        icon: "Battery",
        title: "Bateria de Grafeno",
        description: "Máxima autonomia e vida útil com a tecnologia de grafeno de alta capacidade.",
      },
      {
        icon: "Zap",
        title: "Performance e Eficiência",
        description: "Motor de 1000W com 3 modos de velocidade para se adaptar ao seu estilo de pilotagem.",
      },
      {
        icon: "Timer",
        title: "Carregamento Rápido",
        description: "Sistema de carregamento otimizado para carga completa em até 5 horas.",
      },
      {
        icon: "Usb",
        title: "Conectividade",
        description: "Mantenha-se conectado com a porta USB integrada e o suporte para celular.",
      },
    ],
    highlights: [
      "Suspensão hidráulica dianteira e traseira",
      "Pneus sem câmara (tubeless) para maior segurança",
      "Alarme com acionamento por controle remoto",
      "Função 'Reparo de um botão' e modo ré",
      "Iluminação de logo e farol Full LED",
    ],
  },
  zilla: {
    slug: "zilla",
    name: "Zilla",
    tagline: "Design arrojado e performance ágil para a selva urbana",
    description:
      "A Zilla combina estilo agressivo com tecnologia de ponta, oferecendo uma experiência de pilotagem ágil e divertida para a cidade.",
    heroImage: "/images/motos/zilla-hero.jpg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0903_Amarelo.jpg-aOTetehlLV4iahY6eA6ZRNeLm8nuEp.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0926_Amarelo.jpg-PQA1YRMUxGzPERCBm8w7vWoa3osS01.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0900_Amarelo.jpg-BxEJn0zJcQeqGyppNL5AO1CiTP2WVx.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0944.jpg-Jd0uCeVsTTLX4PbsiuhfeGvId0tud9.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0913.jpg-hUmjDPRCTAgdDKLOd6qFM5fPFGnOqs.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0894_Amarelo.jpg-ZFrQpseemt9pLMDp8i9ebZ1Cr9yaAB.jpeg",
    ],
    specs: {
      autonomia: "até 40 km",
      velocidade: "até 32 km/h",
      potencia: "800W",
      peso: "45 kg",
      carregamento: "6-8 horas",
      capacidade: "até 120kg",
      bateria: "48V 12Ah Chumbo-Ácido",
      freios: "Não especificado",
      rodas: "Aro 10",
    },
    features: [
      {
        icon: "Star",
        title: "Design Esportivo",
        description: "Linhas agressivas e visual moderno que se destaca na multidão.",
      },
      {
        icon: "Gauge",
        title: "Painel Digital Completo",
        description: "Display com velocímetro, odômetro e indicador de consumo de bateria.",
      },
      {
        icon: "AlarmClock",
        title: "Segurança com Alarme",
        description: "Acionamento por chave ou controle remoto com sistema de alarme integrado.",
      },
      {
        icon: "Zap",
        title: "Motor Ágil",
        description: "Motor de 800W que proporciona aceleração rápida e pilotagem divertida.",
      },
    ],
    highlights: [
      "Iluminação Full LED com farol de longo alcance (alto e baixo)",
      "Suspensão dupla (dianteira e traseira) para maior conforto",
      "Suporte para celular integrado ao painel",
      "Suporte para bagageiro traseiro incluso",
    ],
  },
  juna: {
    slug: "juna",
    name: "Juna",
    tagline: "Conforto, tecnologia e segurança em perfeita harmonia",
    description:
      "A Juna é a escolha perfeita para quem busca conforto e praticidade, com um design clássico e um pacote completo de tecnologia e segurança.",
    heroImage: "/images/motos/juna-hero.jpg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juna_1000W_2024_Cinza_04.jpg-JDKkTjBntYORG5lrX1aGBXJigJkquY.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juna_1000W_2024_Azul_RedBull_03.jpg-8CeK8ndp12K2UV0bqCmjzqwC3MXhwR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juna_1000W_2024_Cinza_03.jpg-GiG9ph96fSlRYmNpOMvBcZXXn99RKT.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juna_1000W_2024_Branco_02.jpg-wM252FGh2jYJ6YPxzEhWoppkGMw537.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juna_1000W_2024_Verde_Militar_01.jpg-L5Zno7svvOJczXET0hNG48PlxfrsKU.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Juna_1000W_2024_Laranja_01.jpg-NHv3ZKRwqwuYVeEZVtQXaDFrA44oLV.jpeg",
    ],
    specs: {
      autonomia: "até 70 km",
      velocidade: "até 32 km/h",
      potencia: "1000W",
      peso: "55 kg",
      carregamento: "6-10 horas",
      capacidade: "até 150kg",
      bateria: "Chumbo-Ácido Ciclo Profundo",
      freios: "Disco (diant.) e Tambor (tras.)",
      rodas: "Aro 12",
    },
    features: [
      {
        icon: "Shield",
        title: "Segurança Avançada",
        description: "Modo 'P' (Parking), alarme, trava de guidão e disjuntor geral de segurança.",
      },
      {
        icon: "Gauge",
        title: "Controle Total",
        description: "Display digital com 3 modos de pilotagem, velocímetro e odômetro.",
      },
      {
        icon: "Usb",
        title: "Conveniência",
        description: "Porta USB para carregar seu celular, porta-objetos e suporte para bolsa.",
      },
      {
        icon: "CheckCircle",
        title: "Garantia Estendida",
        description: "2 anos de garantia no motor e 6 meses no veículo para sua tranquilidade.",
      },
    ],
    highlights: [
      "Acionamento por chave ou controle remoto",
      "Farol Full LED com luz alta e baixa",
      "Freio a disco dianteiro para maior precisão",
      "Resistente à chuva para uso em diversas condições",
      "Assento confortável para piloto e garupa",
    ],
  },
}
