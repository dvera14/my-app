import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { id } from "date-fns/locale"

export function Projects() {
  const projects = [
    {
      id:"secureframe",
      title: "AI-Powered Video Encryption App",
      description:
        "Developed SecureFrame, an AI-powered video encryption application, as part of the Western Cyber Society (Oct 2024 – Apr 2025). Contributed to full-stack development by implementing YOLO object detection with OpenCV for video processing and securing sensitive content with AES encryption. Awarded first place in Cybersecurity at the Toronto Tech Expo hosted by Slalom Consulting.",
      image: "/secureFrame.JPG",
      technologies: ["Python", "React", "YOLO", "Open CV", "Flask", "AES"],
      liveUrl: "https://drive.google.com/file/d/1KYz3xVee7ywdgHGF9lbrjUA0VVaj2mlF/view",
      githubUrl: "https://github.com/dvera14/SecureFrame",
    },
      
    {
      id:"quadcopterdrone",
      title: "Quadcopter Drone",
      description:
        "Currently in the process of building an RC Quadcopter drone built from scratch using Arduino(Teensy) and various electronic components. Features include remote control, altitude hold, and basic autonomous flight capabilities.",
      image: "/quadcopter.png",
      technologies: ["C++", "PID Control", "Signal Processing", "Aeronautics"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id:"FinancialApp",
      title: "Unfified Stock Analyzer",
      description:
        "Built a platform that brings together data from Reddit, X (Twitter), Alpha Vantage, and Twelve Data to analyze real-time stock trends and market sentiment. Containerized the project with Docker for easy deployment and consistent environments, and designed modular API handlers with robust testing using pytest",
      image: "/financialproj.png",
      technologies: ["Python", "REST APIs", "Docker", "pytest"],
      liveUrl: "",
      githubUrl: "https://github.com/dvera14/Financial-News-Data-Showcase",
    },
    {
      id:"portfolio",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      image: "/homepage.png",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title}
                  className="w-full h-48 object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {/* Render Live Demo button only if liveUrl is available */}
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {/* Render Code button only if githubUrl is available */}
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
                </div>
              </CardContent>
            </Card>
      
          ))}
        </div>
      </div>
    </section>
  )
}
