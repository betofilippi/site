import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LogoIcon({ className, ...props }: LogoIconProps) {
  return (
    <div {...props} className={cn("relative aspect-[256/65]", className)}>
      <Image src="/logo-light.png" alt="NXT Logo" fill className="object-contain" priority />
    </div>
  )
}
