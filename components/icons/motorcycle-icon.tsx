import type React from "react"
export function MotorcycleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="5" cy="18" r="3" />
      <circle cx="19" cy="18" r="3" />
      <path d="M7.5 18h9" />
      <path d="M14 18V8c0-1.1-.9-2-2-2H8" />
      <path d="M2 9h4" />
      <path d="M15 6h5l-3 4" />
      <path d="M13 6h2" />
    </svg>
  )
}
