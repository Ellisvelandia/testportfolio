import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      <div className="mx-auto max-w-[1400px] px-6 pt-32 md:px-12 lg:px-24">
        {/* About Section */}
        <section className="mb-32 space-y-2">
          <span className="text-sm uppercase tracking-wider text-zinc-500">About Me</span>
          <h1 className="max-w-4xl text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
            I'm passionate about creating beautiful products that{" "}
            <span className="italic text-zinc-400">empower people.</span>
          </h1>
        </section>

        {/* Story Section */}
        <div className="space-y-40">
          {/* Japan Photos */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl">
              <Image 
                src="/placeholder.svg" 
                alt="Portrait with Mount Fuji"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl">
              <Image 
                src="/placeholder.svg" 
                alt="Fushimi Inari Shrine"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-full mt-4">
              <p className="text-lg text-zinc-400">
                This is my story — alongside some flicks from my recent trip to Japan.
              </p>
            </div>
          </section>

          {/* Architecture Background */}
          <section className="grid gap-24 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">My background in Architecture.</h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  In June of 2022, I graduated from architecture school at the University of Toronto. 
                  There, I became obsessed with architectural visualization.
                </p>
                <p>
                  I was deeply fascinated in the concepts of modularity and adaptability — how our built 
                  environment could organically evolve in conjuction with humanity.
                </p>
              </div>
            </div>
          </section>

          {/* UX Journey */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl">
              <Image 
                src="/placeholder.svg" 
                alt="Playground equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl">
              <Image 
                src="/placeholder.svg" 
                alt="Person fishing"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-full space-y-8">
              <h2 className="text-2xl font-medium">This thing called UX?</h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  When the pandemic struck, I took it as an opportunity to explore new things. 
                  I came across UX design competitions, and thought it might be fun to just give 
                  it a go (several times).
                </p>
                <p>
                  Long story short, my failures eventually turned into successes, and the rest was history.
                </p>
              </div>
            </div>
          </section>

          {/* More Section */}
          <section className="grid gap-24 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">But, I wanted more.</h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  Though I loved the freedom of academic practice, I was greatly dissatisfied 
                  with just how slow the industry actually moved.
                </p>
                <p>
                  I wanted to push my design craft at a faster pace and have a positive impact 
                  on vastly more people.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-12">
            <h2 className="text-sm uppercase tracking-wider text-zinc-500">Experience</h2>
            
            <div className="space-y-24">
              <div className="grid gap-8 md:grid-cols-2">
                <h3 className="text-3xl font-medium">Discord</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl">Senior Product Designer, Core</h4>
                    <p className="text-zinc-500">07/23 - Present</p>
                  </div>
                  <p className="text-zinc-400">
                    I'm designing the future of Discord's messaging & core product experiences, 
                    amongst other top secret projects.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <h3 className="text-3xl font-medium">Google</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl">Interaction Designer, Stadia</h4>
                    <p className="text-zinc-500">06/22 - 04/23</p>
                  </div>
                  <p className="text-zinc-400">
                    I owned a product that was part of Stadia's developer suite, and led design 
                    on the website for enabling Bluetooth on Stadia Controllers post-sunset.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <h3 className="text-3xl font-medium">RBC</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl">UX Design Intern, Innovation</h4>
                    <p className="text-zinc-500">Summer '21</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Content */}
          <section className="space-y-8 pb-32">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium">In my spare time,</h2>
              <p className="text-zinc-400">
                I'm probably making tweaks to my portfolio or hanging out on Discord.
              </p>
              <p className="text-zinc-400">
                Other than that, you'll find me playing basketball and volleyball, hitting the gym, 
                gaming, and trying to get my hands on the latest tech.
              </p>
            </div>
            
            <p className="text-xl">Thanks for stopping by!</p>
            
            <div className="pt-8">
              <Image 
                src="/placeholder.svg" 
                alt="Signature"
                width={100}
                height={50}
                className="opacity-80"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

