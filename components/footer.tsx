import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  const mentors = [
    {
      name: "Evan Quan",
      role: "UX Designer — GoDaddy",
      link: "in/evqu"
    },
    {
      name: "Shawn Park",
      role: "Sr. Staff Designer — Discord",
      link: "designby.sh"
    },
    {
      name: "John Avent",
      role: "Staff Product Designer — Discord",
      link: "johnnn.design"
    },
    {
      name: "Buck Wilson",
      role: "Owner — Horrible Design Co.",
      link: "read.cv/buck"
    }
  ]

  return (
    <footer className="border-t border-zinc-800 bg-black px-6 py-16 md:px-12 lg:px-24">
      <div className="grid gap-16 md:grid-cols-4">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="space-y-2">
            <h3 className="text-xl font-medium">{mentor.name}</h3>
            <p className="text-sm text-zinc-500">{mentor.role}</p>
            <a 
              href={`https://${mentor.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
            >
              {mentor.link}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-24 grid gap-16 border-t border-zinc-800 pt-16 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-zinc-500">Main</h4>
            <div className="mt-4 space-y-2">
              <Link href="/work" className="block text-zinc-400 hover:text-white">
                Work
              </Link>
              <Link href="/info" className="block text-zinc-400 hover:text-white">
                Info
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-zinc-500">Contact</h4>
            <div className="mt-4 space-y-2">
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-zinc-400 hover:text-white"
              >
                LinkedIn
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <br />
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-zinc-400 hover:text-white"
              >
                Resume
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-zinc-400">© 2024 Perry Wang. All Rights Reserved.</p>
          <p className="text-sm text-zinc-600">
            Made with love and Mango Green Teas (50% sugar, less ice).
          </p>
          <p className="text-sm text-zinc-600">
            Last updated by Perry on October 3, 2024, 12:48 PM EST
          </p>
        </div>
      </div>
    </footer>
  )
}

