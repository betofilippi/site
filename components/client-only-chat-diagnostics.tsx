"use client"

import dynamic from "next/dynamic"

const ChatDiagnostics = dynamic(() => import("@/components/chat-diagnostics"), {
  ssr: false,
})

export function ClientOnlyChatDiagnostics() {
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return <ChatDiagnostics />
}
