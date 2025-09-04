import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="h-screen bg-background p-4 md:p-6 flex flex-col">
      <div className="max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Header Section */}
        <header className="mb-6 text-center flex-shrink-0">
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-2 border-border glass-card flex items-center justify-center overflow-hidden">
                <img src="/professional-headshot.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-balance mb-1">John Appleseed</h1>
              <p className="text-sm text-muted-foreground">Insert tagline blurb or quote here.</p>
            </div>
          </div>
        </header>

        {/* Main Grid Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Career Section */}
          <Card className="glass-card glass-hover p-4 lg:row-span-2 flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-center">Career</h2>
            <div className="space-y-4 flex-1">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-xl border border-border glass-card flex items-center justify-center flex-shrink-0">
                  <img src="/tech-startup-logo.png" alt="Company #1" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1">Senior Developer</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-xl border border-border glass-card flex items-center justify-center flex-shrink-0">
                  <img src="/company-logo-software-development.png" alt="Company #2" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1">Full Stack Engineer</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Projects Section */}
          <Card className="glass-card glass-hover p-4 flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-center">Projects</h2>
            <div className="space-y-4 flex-1">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-xl border border-border glass-card flex items-center justify-center flex-shrink-0">
                  <img src="/project-icon-web-app.png" alt="Project #1" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1">E-Commerce Platform</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-xl border border-border glass-card flex items-center justify-center flex-shrink-0">
                  <img src="/project-icon-mobile-app.png" alt="Project #2" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1">Mobile Analytics</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Blogs Section */}
          <Card className="glass-card glass-hover p-4 lg:row-span-2 flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-center">Blogs</h2>

            {/* Blog Categories */}
            <div className="flex gap-2 mb-4 justify-center">
              <Badge variant="outline" className="glass-card text-xs">
                Personal
              </Badge>
              <Badge variant="outline" className="glass-card text-xs">
                Professional
              </Badge>
            </div>

            {/* Featured Section */}
            <div className="mb-4 flex-shrink-0">
              <h3 className="text-base font-semibold mb-2 text-center">Featured</h3>
              <Card className="glass-card p-3 border-primary/30">
                <h4 className="font-semibold mb-1 text-sm">Building Scalable Web Apps</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </Card>
            </div>

            {/* Recent Section */}
            <div className="flex-1 overflow-hidden">
              <h3 className="text-base font-semibold mb-2 text-center">Recent</h3>
              <div className="space-y-2">
                <Card className="glass-card p-3">
                  <h4 className="font-semibold mb-1 text-sm">React Performance Tips</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                </Card>

                <Card className="glass-card p-3">
                  <h4 className="font-semibold mb-1 text-sm">TypeScript Best Practices</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                </Card>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-shrink-0">
          {/* Education Section */}
          <Card className="glass-card glass-hover p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Education</h2>
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl border border-border glass-card flex items-center justify-center flex-shrink-0">
                <img src="/university-school-icon.png" alt="School" className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-1">Computer Science Degree</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore.
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Section */}
          <Card className="glass-card glass-hover p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Contact Me</h2>
            <div className="flex justify-center gap-3">
              <Button
                size="icon"
                variant="outline"
                className="glass-card glass-hover w-10 h-10 rounded-full bg-transparent"
              >
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="glass-card glass-hover w-10 h-10 rounded-full bg-transparent"
              >
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="glass-card glass-hover w-10 h-10 rounded-full bg-transparent"
              >
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="glass-card glass-hover w-10 h-10 rounded-full bg-transparent"
              >
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
