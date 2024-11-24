import { SiteHeader } from "@/components/site-header"
import { Loading } from "@/components/loading"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-grow flex items-center justify-center">
        <Loading />
      </div>
    </main>
  )
}

