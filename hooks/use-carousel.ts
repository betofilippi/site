"use client"

import { useState, useCallback } from "react"

export function useCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)

  const setSlide = useCallback((index: number) => {
    setActiveSlide(index)
  }, [])

  return { activeSlide, setActiveSlide: setSlide }
}
