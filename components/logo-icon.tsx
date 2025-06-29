import type React from "react"
import { cn } from "@/lib/utils"

interface LogoIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LogoIcon({ className, ...props }: LogoIconProps) {
  return (
    <div {...props} className={cn("relative aspect-[256/65]", className)}>
      <div
        className="w-full h-full bg-primary"
        style={{
          mask: "url(/logo-light.png) no-repeat center/contain",
          WebkitMask: "url(/logo-light.png) no-repeat center/contain",
        }}
      />
    </div>
  )
}
