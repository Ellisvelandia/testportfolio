import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
      <div>
        <h1 className="text-lg font-medium">Perry Wang</h1>
        <p className="text-sm text-zinc-400">Product Designer</p>
      </div>
      
      <nav>
        <div className="inline-flex items-center justify-center rounded-full bg-zinc-800/50 px-1.5 py-1">
          <Link 
            href="/work"
            className="rounded-full px-4 py-1.5 text-sm transition-colors hover:bg-zinc-800"
          >
            Work
          </Link>
          <Link 
            href="/info"
            className="rounded-full px-4 py-1.5 text-sm transition-colors hover:bg-zinc-800"
          >
            Info
          </Link>
        </div>
      </nav>

      <div className="flex items-center gap-4">
        <a 
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm hover:opacity-70"
        >
          LinkedIn
          <ArrowUpRight className="h-3 w-3" />
        </a>
        <a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-1 text-sm hover:opacity-70"
        >
          Resume
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </header>
  )
}

