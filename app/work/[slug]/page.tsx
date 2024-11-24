import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from 'lucide-react'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <Link 
        href="/work" 
        className="fixed left-6 top-6 z-50 inline-flex items-center gap-2 rounded-full bg-zinc-800/50 px-4 py-2 backdrop-blur-sm transition-colors hover:bg-zinc-800"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </Link>

      {/* Content */}
      <div className="mx-auto max-w-[1400px] px-6 pt-32 md:px-12 lg:px-24">
        {/* Header */}
        <div className="relative space-y-4 pb-32 text-center">
          {/* Glowing Effect */}
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-500/20 blur-[120px]" />
          
          <h1 className="relative text-4xl font-medium md:text-6xl lg:text-7xl">
            Test Hub Next
          </h1>
          <p className="relative text-lg text-zinc-400">
            Google, Stadia — September '22
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-[1fr_200px]">
          {/* Main Content */}
          <div className="space-y-32">
            {/* Overview Section */}
            <section className="grid gap-24 md:grid-cols-2">
              <div className="space-y-12">
                <div>
                  <h2 className="text-xl font-medium">My Role</h2>
                  <p className="mt-2 text-zinc-400">
                    Lead Designer — Feature Scoping, Research, Interaction Design, Visual Design, Prototyping
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-medium">Team</h2>
                  <ul className="mt-2 space-y-1 text-zinc-400">
                    <li>Dean Whillier, UXE</li>
                    <li>Lisa Clift, UXR</li>
                    <li>Tony deCatanzaro, SWE</li>
                    <li>Ryan Bartely, PM</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-medium">Timeline & Status</h2>
                  <p className="mt-2 text-zinc-400">3 Months, Sunset</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-medium">Overview</h2>
                <div className="space-y-4 text-zinc-400">
                  <p>
                    Test Hub was a companion web app originally built to be used by Stadia game developers to monitor, emulate, capture, and debug their games in the cloud.
                  </p>
                  <p>
                    I owned and led design strategy for the future of Test Hub in support of Stadia's B2B pivot — playing a critical role in scoping and prototyping a transformative feature set, while modernizing the product as Google's Material Design 3 guidelines were emerging.
                  </p>
                  <p>
                    Test Hub Next's vision was highly praised by key stakeholders but was, unfortunately, sunset alongside Stadia in September 2022.
                  </p>
                </div>
              </div>
            </section>

            {/* Highlights Section */}
            <section className="space-y-16 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                <div className="h-6 w-6 text-blue-400">✨</div>
              </div>
              <h2 className="mx-auto max-w-3xl text-3xl font-medium md:text-4xl">
                The future of playtesting in the cloud — adaptable to everyone and all the different types of interactive content they develop.
              </h2>
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <Image
                  src="/placeholder.svg"
                  alt="Test Hub Interface"
                  width={1200}
                  height={800}
                  className="w-full"
                />
              </div>
            </section>

            {/* Context Section */}
            <section className="space-y-16">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider text-zinc-500">Context</p>
                <h2 className="text-3xl font-medium md:text-4xl">
                  A new direction for Stadia.
                </h2>
              </div>
              
              <div className="grid gap-24 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-medium">Immersive Stream.</h3>
                </div>
                <div className="space-y-4 text-zinc-400">
                  <p>
                    In Q2 of 2022, Google announced that Stadia would be pivoting from being a consumer platform to a B2B, enterprise-grade service, called Immersive Stream (Figure 1.0).
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-white">
                <Image
                  src="/placeholder.svg"
                  alt="Stadia Immersive Stream Announcement"
                  width={1200}
                  height={800}
                  className="w-full"
                />
              </div>
            </section>
          </div>

          {/* Table of Contents */}
          <nav className="hidden lg:block">
            <div className="sticky top-8 space-y-4">
              <h2 className="text-sm uppercase tracking-wider text-zinc-500">Contents</h2>
              <ul className="space-y-2 text-sm">
                {[
                  'Overview',
                  'Highlights',
                  'Context',
                  'Problem Space',
                  'Research Summary',
                  'High-Level Audit',
                  'The Module Model',
                  'M1: Video Preview',
                  'M2: Stream Logs',
                  'M3: Graphs',
                  'Customization',
                  'Supporting Plans',
                  'More Visions',
                  'Retrospective'
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`text-zinc-400 transition-colors hover:text-white ${
                        index === 0 ? 'text-white' : ''
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </main>
  )
}

