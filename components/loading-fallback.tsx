export function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-primary rounded-full animate-spin border-t-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
