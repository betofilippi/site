"use client"

import { useEffect, useState } from "react"

interface Lightning {
  id: number
  x: number
  y: number
  delay: number
  path: string
  duration: number
}

interface Spark {
  id: number
  x: number
  y: number
  delay: number
  size: number
}

export function LightningEffects() {
  const [lightnings, setLightnings] = useState<Lightning[]>([])
  const [sparks, setSparks] = useState<Spark[]>([])

  // Função para gerar um caminho de raio natural
  const generateLightningPath = (startX: number, startY: number, endX: number, endY: number) => {
    const segments = 8 + Math.floor(Math.random() * 6)
    let path = `M${startX} ${startY}`

    for (let i = 1; i < segments; i++) {
      const progress = i / segments
      const x = startX + (endX - startX) * progress + (Math.random() - 0.5) * 30
      const y = startY + (endY - startY) * progress + (Math.random() - 0.5) * 20
      path += ` L${x} ${y}`
    }

    path += ` L${endX} ${endY}`
    return path
  }

  useEffect(() => {
    // Criar raios naturais
    const createLightning = () => {
      const startX = Math.random() * 200
      const startY = 0
      const endX = startX + (Math.random() - 0.5) * 100
      const endY = 250 + Math.random() * 50

      const newLightning: Lightning = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        path: generateLightningPath(startX, startY, endX, endY),
        duration: 0.3 + Math.random() * 0.4,
      }

      setLightnings((prev) => [...prev, newLightning])

      setTimeout(() => {
        setLightnings((prev) => prev.filter((l) => l.id !== newLightning.id))
      }, 4000)
    }

    // Criar faíscas elétricas
    const createSpark = () => {
      const newSpark: Spark = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        size: 1 + Math.random() * 3,
      }

      setSparks((prev) => [...prev, newSpark])

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id))
      }, 2000)
    }

    // Intervalos para criar efeitos
    const lightningInterval = setInterval(createLightning, 6000)
    const sparkInterval = setInterval(createSpark, 800)

    // Criar alguns efeitos iniciais
    setTimeout(createLightning, 2000)
    setTimeout(createSpark, 500)

    return () => {
      clearInterval(lightningInterval)
      clearInterval(sparkInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Raios elétricos naturais */}
      {lightnings.map((lightning) => (
        <div
          key={lightning.id}
          className="absolute"
          style={{
            left: `${lightning.x}%`,
            top: `${lightning.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            width="200"
            height="300"
            viewBox="0 0 200 300"
            className="lightning-bolt"
            style={{
              filter: "drop-shadow(0 0 8px #deff03) drop-shadow(0 0 15px #deff03)",
              animation: `lightning-flash ${lightning.duration}s ease-in-out infinite`,
              animationDelay: `${lightning.delay}s`,
            }}
          >
            {/* Raio principal */}
            <path d={lightning.path} stroke="#deff03" strokeWidth="3" fill="none" opacity="0.9" strokeLinecap="round" />
            {/* Raio secundário mais fino */}
            <path d={lightning.path} stroke="#fff159" strokeWidth="1" fill="none" opacity="1" strokeLinecap="round" />
          </svg>
        </div>
      ))}

      {/* Faíscas elétricas */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute spark"
          style={{
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            animation: `spark-flash ${1 + Math.random()}s linear infinite`,
            animationDelay: `${spark.delay}s`,
          }}
        />
      ))}

      {/* Choques elétricos sutis */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute electric-shock"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `electric-shock ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes lightning-flash {
          0%, 95%, 100% { 
            opacity: 0; 
            filter: drop-shadow(0 0 0 transparent);
          }
          5% { 
            opacity: 0.3; 
            filter: drop-shadow(0 0 5px #deff03);
          }
          10% { 
            opacity: 1; 
            filter: drop-shadow(0 0 15px #deff03) drop-shadow(0 0 25px #deff03);
          }
          15% { 
            opacity: 0.7; 
            filter: drop-shadow(0 0 8px #deff03);
          }
          20% { 
            opacity: 0.9; 
            filter: drop-shadow(0 0 12px #deff03);
          }
        }
        
        @keyframes spark-flash {
          0%, 90%, 100% { 
            opacity: 0; 
            transform: scale(0);
            box-shadow: 0 0 0 transparent;
          }
          10% { 
            opacity: 0.8; 
            transform: scale(1);
            box-shadow: 0 0 8px #deff03;
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5);
            box-shadow: 0 0 15px #deff03, 0 0 25px #fff159;
          }
          80% { 
            opacity: 0.6; 
            transform: scale(0.8);
            box-shadow: 0 0 5px #deff03;
          }
        }
        
        @keyframes electric-shock {
          0%, 98%, 100% { 
            opacity: 0;
            width: 0;
            height: 0;
          }
          1% { 
            opacity: 0.6;
            width: 1px;
            height: 20px;
            box-shadow: 0 0 10px #deff03;
          }
          2% { 
            opacity: 0;
            width: 0;
            height: 0;
          }
        }
        
        .spark {
          background: radial-gradient(circle, #deff03 0%, #fff159 50%, transparent 100%);
          border-radius: 50%;
        }
        
        .electric-shock {
          background: linear-gradient(90deg, transparent, #deff03, transparent);
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}
