"use client"

import * as Icons from "lucide-react"

// Define a type for all possible icon names from lucide-react
type IconName = keyof typeof Icons

interface FeatureIconProps {
  name: IconName | string // Allow string for flexibility, but treat as IconName
  className?: string
}

export function FeatureIcon({ name, className }: FeatureIconProps) {
  // Assert name is a valid key of Icons
  const LucideIcon = Icons[name as IconName]

  // Fallback if the icon name is not found
  if (!LucideIcon) {
    return <Icons.HelpCircle className={className} />
  }

  return <LucideIcon className={className} />
}
