import { Card, CardContent } from "@/components/ui/card"
import { Code, Rocket, Star } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate developer with a love for creating innovative solutions and exploring new technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              I'm a full-stack developer with over 3 years of experience building web applications. My journey started
              with a fascination for how things work, which naturally led me to programming.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              When I'm not coding, you can find me stargazing, reading about space exploration, or working on side
              projects that push the boundaries of what's possible on the web.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              I believe in writing clean, maintainable code and creating user experiences that are both functional and
              delightful.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Clean Code</h3>
                </div>
                <p className="text-muted-foreground text-pretty">
                  Writing maintainable, scalable code that stands the test of time
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Innovation</h3>
                </div>
                <p className="text-muted-foreground text-pretty">
                  Always exploring new technologies and pushing creative boundaries
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Excellence</h3>
                </div>
                <p className="text-muted-foreground text-pretty">
                  Committed to delivering high-quality solutions that exceed expectations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
