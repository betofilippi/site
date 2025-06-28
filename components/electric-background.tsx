"use client"

import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import type { Container, ISourceOptions } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

export function ElectricBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
        modes: {
          attract: {
            distance: 150,
            duration: 0.4,
            factor: 3,
          },
        },
      },
      particles: {
        color: {
          value: ["#deff03", "#fff159", "#ffff88", "#e6ff00"],
        },
        links: {
          color: "#deff03",
          distance: 80,
          enable: true,
          opacity: 0.2,
          width: 1,
          blink: true,
          consent: false,
          triangles: {
            enable: false,
          },
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
          vibrate: true,
          warp: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: { min: 0.1, max: 0.6 },
          animation: {
            enable: true,
            speed: 4,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2 },
          animation: {
            enable: true,
            speed: 8,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  if (init) {
    return (
      <Particles
        id="electric-particles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="fixed inset-0 z-0"
      />
    )
  }

  return null
}
