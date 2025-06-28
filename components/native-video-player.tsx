"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoIcon } from "./logo-icon"

interface NativeVideoPlayerProps {
  src: string
  title: string
  className?: string
}

export function NativeVideoPlayer({ src, title, className = "" }: NativeVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [showPoster, setShowPoster] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        setShowPoster(false)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <div
      className={`relative w-full aspect-video bg-black rounded-lg overflow-hidden group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onPlay={() => {
          setIsPlaying(true)
          setShowPoster(false)
        }}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={() => setIsMuted(videoRef.current?.muted || false)}
        onEnded={() => setShowPoster(true)}
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>

      {/* Poster personalizado */}
      {showPoster && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {/* Padrão de fundo sutil */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(222,255,3,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(222,255,3,0.05)_50%,transparent_51%)] bg-[length:20px_20px]" />
          </div>

          {/* Conteúdo do poster */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
            {/* Logo */}
            <div className="mb-8">
              <LogoIcon className="h-16 md:h-20 text-white" />
            </div>

            {/* Título */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">Vídeo Institucional</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-md">
              Conheça nossa fábrica e nosso compromisso com a inovação
            </p>

            {/* Botão de play estilizado */}
            <button
              onClick={togglePlay}
              className="group/play relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-primary/20 hover:bg-primary/30 border-2 border-primary rounded-full transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
              <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1 group-hover/play:scale-110 transition-transform duration-300" />
            </button>

            {/* Indicador de duração */}
            <div className="mt-6 px-4 py-2 bg-black/30 rounded-full text-sm text-gray-300">Clique para assistir</div>
          </div>
        </div>
      )}

      {/* Overlay de controles (apenas quando o vídeo está tocando) */}
      {!showPoster && (
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Botão de play central */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="w-16 h-16 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={togglePlay}
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
          )}

          {/* Controles inferiores */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={toggleFullscreen}
            >
              <Maximize className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
