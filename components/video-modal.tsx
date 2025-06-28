"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/90">
        <div className="relative w-full h-full">
          {/* Vídeo */}
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            loop
            playsInline
            className="w-full h-full object-contain"
            style={{ maxHeight: "90vh" }}
          />

          {/* Controles */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </Button>
            <Button variant="ghost" size="icon" className="bg-black/50 hover:bg-black/70 text-white" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mensagem de som */}
          {isMuted && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              Clique no ícone para ativar o som
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
