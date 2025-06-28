import type React from "react"
export function ElectricVehicleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="17" r="3" />
      <path d="M10 17h4" />
      <path d="M3 17V7h12v10" />
      <path d="M15 7h6l-3 5h3l-2 5" />
      <path d="M3 9h12" />
    </svg>
  )
}
