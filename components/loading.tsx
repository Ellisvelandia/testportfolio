export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-1">
        <div className="h-2 w-2 animate-[bounce_1s_infinite] rounded-full bg-zinc-400" />
        <div className="h-2 w-2 animate-[bounce_1s_infinite_0.2s] rounded-full bg-zinc-400" />
        <div className="h-2 w-2 animate-[bounce_1s_infinite_0.4s] rounded-full bg-zinc-400" />
      </div>
      <p className="mt-4 text-sm text-zinc-400">Just a moment</p>
    </div>
  )
}

