import type React from "react"
export function PartnershipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="6" r="3" />
      <circle cx="16" cy="6" r="3" />
      <path d="M5 14h6v6H5z" />
      <path d="M13 14h6v6h-6z" />
      <path d="M8 14v-2" />
      <path d="M16 14v-2" />
      <path d="M9 18h6" />
    </svg>
  )
}
