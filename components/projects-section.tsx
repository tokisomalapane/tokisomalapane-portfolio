"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Github, ExternalLink } from "lucide-react"

interface ProjectsSectionProps {
  isDark: boolean
  themeClasses: {
    accent: string
    muted: string
    cardBg: string
    cardBorder: string
  }
}

export function ProjectsSection({ isDark, themeClasses }: ProjectsSectionProps) {
  // TODO: Replace with your actual projects
  const clientProjects = [
    {
      title: "Simple Clothing Brand E-Commerse Website",
      description: "Java & Custom Linked List Implementation",
      details:
        "Developed and Designed a responsive e-commerce website for a Client",
      technologies: ["Next.js", "TailwindCSS", "React", "Node.js"],
      githubUrl: "https://github.com/tokisomalapane/DEVOL-HERESY", // Replace with actual URL
      demoUrl: "https://devol-Heresy.vercel.app", // Replace with actual demo URL
      hasDemo: true,
    },
    {
      title: "Tutoring Management System",
      description: "Team Project - Full Stack Web Application",
      details:
        "Collaborated with a team to build a System That managed entities  such as Tutors ,Students ,Appointments , Qualifications and Administrators",
      technologies: ["C#", ".NET", "MySQL"],
      githubUrl: "https://github.com/CMPG223-30/WISEMENTORMINDS/tree/MAIN/WiseMentorMinds(p1)", // Replace with actual URL
      demoUrl: null,
      hasDemo: false,
    },
  ]

  const personalProjects = [
    
    {
      title: "Portfolio Website",
      description: "This Website",
      details:
        "Designed and developed this responsive portfolio website with modern animations and a tech-inspired aesthetic.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/tokisomalapane/tokisomalapane-portfolio", // Replace with actual URL
    },
    {
      title: "Portfolio Website(demo)",
      description: "Demo Porfolio website",
      details:
        "Designed and developed this responsive portfolio website with modern animations and a tech-inspired aesthetic.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/tokisomalapane/Tokiso-Portfolio", // Replace with actual URL
      demoUrl: "https://tokisomalapane.vercel.app", // Replace with actual demo URL
      hasDemo: true,
    },
  ]

  const handleProjectLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <section
      id="projects"
      className={`py-16 sm:py-20 ${isDark ? "bg-slate-900/50" : "bg-slate-50/50"} relative z-10 px-4 sm:px-6`}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center font-serif">
            <Briefcase className={`inline mr-3 ${themeClasses.accent}`} />
            Projects
          </h2>

          {/* Client & Team Projects */}
          <div className="mb-16">
            <h3 className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${themeClasses.accent} font-serif`}>
              🧑‍💼 Client & Team Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {clientProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`${themeClasses.cardBg} ${themeClasses.cardBorder} hover:border-blue-400 transition-all hover:scale-105 backdrop-blur-sm`}
                >
                  <CardHeader>
                    <CardTitle className={`${themeClasses.accent} font-serif`}>{project.title}</CardTitle>
                    <CardDescription className={`${themeClasses.muted} font-serif`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={`${themeClasses.muted} mb-4 text-sm sm:text-base font-serif`}>{project.details}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleProjectLink(project.githubUrl)}
                        className={`${
                          isDark
                            ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                            : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
                        } text-xs font-serif`}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      {project.hasDemo && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleProjectLink(project.demoUrl!)}
                          className={`${
                            isDark
                              ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                              : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
                          } text-xs font-serif`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${themeClasses.accent} font-serif`}>
              💡 Personal Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {personalProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`${themeClasses.cardBg} ${themeClasses.cardBorder} hover:border-blue-400 transition-all hover:scale-105 backdrop-blur-sm`}
                >
                  <CardHeader>
                    <CardTitle className={`${themeClasses.accent} font-serif`}>{project.title}</CardTitle>
                    <CardDescription className={`${themeClasses.muted} font-serif`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={`${themeClasses.muted} mb-4 text-sm font-serif`}>{project.details}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleProjectLink(project.githubUrl)}
                      className={`${
                        isDark
                          ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                          : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
                      } text-xs font-serif`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
