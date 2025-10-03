import { Hero } from "@/components/hero"
import { About } from "@/components/about"

import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import Work from "@/components/work"

export default function Home() {
  return (
    <main className="min-h-screen bg-background stars-bg">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  )
}
