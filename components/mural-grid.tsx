"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface MediaItem {
  id: number
  created_at: string
  updated_at: string
  name: string
  date: string
  image_url: string
  thumbnail_url: string
}

export default function MuralGrid() {
  const [media, setMedia] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchMedia = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/mural")

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("API Error Response:", {
          status: response.status,
          statusText: response.statusText,
          errorData,
        })
        throw new Error(errorData.details || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("API Response:", data)

      if (!data.success) {
        throw new Error(data.details || "Failed to fetch media")
      }

      if (!Array.isArray(data.media)) {
        console.error("Invalid media data:", data)
        throw new Error("Invalid response format: media is not an array")
      }

      setMedia(data.media)
      console.log("Media data set:", data.media)
    } catch (error) {
      console.error("Fetch error:", error)
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
      setError(errorMessage)
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMedia()
  }, [])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button onClick={() => fetchMedia()} className="bg-blue-500 hover:bg-blue-600">
          Tentar novamente
        </Button>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8 space-x-2">
        <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
        <span>Carregando...</span>
      </div>
    )
  }

  if (media.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <Alert>
          <AlertTitle>Nenhuma mídia encontrada</AlertTitle>
          <AlertDescription>Não foram encontradas imagens ou vídeos para exibir.</AlertDescription>
        </Alert>
      </div>
    )
  }

  console.log("Rendering media items:", media)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {media.map((item) => (
        <div
          key={item.id}
          className="relative aspect-square rounded-lg overflow-hidden bg-gray-50 shadow hover:shadow-sm transition-shadow duration-200"
        >
          {item.thumbnail_url ? (
            <Image
              src={item.thumbnail_url}
              alt={item.name || "Mural image"}
              fill
              className="object-cover transition-opacity duration-300"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={(e) => {
                console.error("Image failed to load:", item.thumbnail_url)
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg"
              }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
              <AlertCircle className="h-14 w-14 text-gray-200 mb-2" />
              <span className="text-sm text-gray-300">Imagem indisponível</span>
            </div>
          )}
          {item.date && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
              {new Date(item.date).toLocaleDateString("pt-BR")}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
