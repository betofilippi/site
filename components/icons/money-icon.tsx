import type React from "react"
export function MoneyIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9.354c-1.176-.616-3.02-.456-4 .314-1.023.805-1.023 2.159 0 2.964 1.009.789 2.889.922 4 .314 1.049-.574 1.049-1.974 0-2.548" />
      <path d="M12 6v2m0 8v2" />
    </svg>
  )
}
