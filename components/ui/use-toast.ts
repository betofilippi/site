"use client"

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import { useToast as useToastHooks, toast } from "@/hooks/use-toast"

function useToast() {
  return useToastHooks()
}

export { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, useToast, toast }
