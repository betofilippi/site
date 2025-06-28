import type React from "react"
export function NXTVehicleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M6 17h12" />
      <path d="M15 6h3l3 5.5" />
      <path d="M3 17V8c0-1.1.9-2 2-2h6.5" />
      <path d="M9 6l3 5.5" />
      <path d="M15 11.5L12 6" />
      <path d="M15 6V4" />
    </svg>
  )
}
