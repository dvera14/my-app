"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full twinkle-animation"></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full twinkle-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-white rounded-full twinkle-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full twinkle-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Shooting star */}
        <div
          className="absolute top-20 left-0 w-1 h-1 bg-primary rounded-full shooting-star"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-primary">David Adrian Vera</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Electrical and Artificial Intelligence Systems Engineering
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" onClick={scrollToProjects} className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <div className="flex gap-4">
            <a href="https://github.com/dvera14" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/david-vera05/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
