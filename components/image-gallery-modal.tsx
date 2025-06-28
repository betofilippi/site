"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ImageGalleryModalProps {
  images: string[]
  currentImageIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
  productName: string
}

export function ImageGalleryModal({
  images,
  currentImageIndex,
  isOpen,
  onClose,
  onNavigate,
  productName,
}: ImageGalleryModalProps) {
  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowLeft":
          onNavigate(currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1)
          break
        case "ArrowRight":
          onNavigate(currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0)
          break
        case "Escape":
          onClose()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentImageIndex, images.length, onNavigate, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
        <div className="relative w-full h-full">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 bg-black/50 hover:bg-black/70 text-white"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white"
            onClick={() => onNavigate(currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1)}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white"
            onClick={() => onNavigate(currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0)}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Current image */}
          <div className="relative w-[85vw] h-[85vh]">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${productName} Gallery Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
