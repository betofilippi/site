"use client"

import { useState, useEffect } from "react"

export function useTypewriter(text: string, delay = 50, startDelay = 0) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (startDelay > 0) {
      const startTimer = setTimeout(() => {
        setCurrentIndex(0)
      }, startDelay)
      return () => clearTimeout(startTimer)
    }
  }, [startDelay])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, delay, text])

  return { text: currentText, isComplete }
}
