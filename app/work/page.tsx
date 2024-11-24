import { SiteHeader } from "@/components/site-header"
import { MoveDown, ArrowUpRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <SiteHeader />
      
      {/* Glowing light effect */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/10 blur-[120px]" />
      
      {/* Hero Section */}
      <section className="relative mx-auto max-w-[1400px] px-6 pt-32 md:px-12 lg:px-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-12 backdrop-blur-sm">
          {/* Browser Traffic Lights */}
          <div className="absolute left-4 top-4 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="mt-8 space-y-12">
            <h1 className="text-4xl font-medium leading-tight md:text-6xl lg:text-7xl">
              I craft products,{" "}
              <br className="hidden md:block" />
              interactions &{" "}
              <span className="italic text-zinc-400">stories.</span>
            </h1>

            <div className="space-y-2">
              <p className="text-lg md:text-xl">
                Designer at Discord. Based in Toronto.
              </p>
              <p className="text-lg text-zinc-500 md:text-xl">
                Formerly at Google and RBC.
              </p>
            </div>

            <div className="flex justify-center pt-12">
              <MoveDown className="h-6 w-6 animate-bounce text-zinc-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mx-auto max-w-[1400px] space-y-4 px-6 py-24 md:px-12 lg:px-24">
        <Link 
          href="/work/stadia-bluetooth"
          className="group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/80"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium md:text-3xl">Stadia Bluetooth</h2>
              <p className="text-zinc-500">
                Google, '23 — Giving a second life to over a million controllers.
              </p>
            </div>
            <ArrowUpRight className="h-6 w-6 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800">
            <Image
              src="/placeholder.svg"
              alt="Stadia Bluetooth Interface"
              width={1200}
              height={675}
              className="w-full"
            />
          </div>
        </Link>

        <Link 
          href="/work/text-hub-next"
          className="group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/80"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium md:text-3xl">Text Hub Next</h2>
              <p className="text-zinc-500">
                Discord, '23 — A new way to discover and share text commands.
              </p>
            </div>
            <ArrowUpRight className="h-6 w-6 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800">
            <Image
              src="/placeholder.svg"
              alt="Text Hub Next Interface"
              width={1200}
              height={675}
              className="w-full"
            />
          </div>
        </Link>
      </section>
    </main>
  )
}

