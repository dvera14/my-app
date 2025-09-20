import { Card, CardContent } from "@/components/ui/card"
import { Code, Rocket, Star } from "lucide-react"

export function About() {
  return (
    <section id="about" className="min-h-screen py-10 relative bg-gray-900">
      <div className = "min-h-screen py-10 relative bg-gray-900">
        <div className="container size-100% px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">About Me</h2>
        </div>
        <div className="text-left min-h-[24rem] w-full mb-8 mt-8 bg-black/40 border-2 border-[#ffffff] p-8 rounded-xl max-w-5xl mx-auto" style={{ fontFamily: "Inter, 'Segoe UI', Arial, sans-serif" }}>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I am an engineering student specializing in Electrical and AI Systems Engineering, with a keen interest in developing integrated hardware and software solutions. My academic and project experience has equipped me with a strong foundation in both technical and analytical skills.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty mt-6">
            I have contributed to multidisciplinary teams through active participation in the Western Cyber Society and the Western Automotive Challenge, focusing on cybersecurity applications and embedded road user detection systems for autonomous vehicles. Additionally, I have mentored peers in CAD design software (SolidWorks and Onshape), supporting the advancement of engineering projects and fostering collaborative learning environments.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty mt-6">
            In the upcoming academic year, I will be contributing to the Western Aero Design Team and the Western AI Club, where I will be applying my technical skills to the design, development, and implementation of engineering and AI-driven projects.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty mt-6">
            Fluent in English, French, and Spanish, I bring strong communication skills and adaptability to collaborative environments. I am eager to apply my technical knowledge and problem-solving abilities to projects that advance technology and deliver meaningful impact.
          </p>
        </div>
      </div>
    </section>
  )
}
