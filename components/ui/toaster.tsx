"use client"
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import { useToast as useToastHooks } from "@/hooks/use-toast"

function Toaster() {
  const { toasts } = useToastHooks()

  return (
    <ToastProvider>
      {toasts.map(({ ...props }) => (
        <Toast key={props.id} {...props}>
          <div className="grid gap-1">
            <ToastTitle>{props.title}</ToastTitle>
            {props.description && <ToastDescription>{props.description}</ToastDescription>}
          </div>
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}

export { Toaster }
