import type React from "react"
export function HandshakeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M 3 16 L 7 16 L 10 19 L 13 16 L 21 16" />
      <path d="M 3 8 L 7 8 L 10 5 L 13 8 L 21 8" />
      <path d="M 10 5 L 10 19" />
    </svg>
  )
}
