"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Shield, Cloud, Brain } from "lucide-react"

interface SkillsSectionProps {
  isDark: boolean
  themeClasses: {
    accent: string
    mutedLight: string
    cardBg: string
    cardBorder: string
  }
}

export function SkillsSection({ isDark, themeClasses }: SkillsSectionProps) {
  // TODO: Update with your actual skills
  const skillsData = {
    languages: ["Java", "Python", "C#", "HTML", "CSS", "JavaScript", "C++"],
    frameworks: ["React", "Node.js", ".NET"],
    tools: ["Git", "Docker", "AWS", "Linux", "ChatGPT(Prompt Engineering)"],
    concepts: ["OOP", "Networking", "Security", "Structured Design", "Problem Solving"],
  }

  const interestAreas = [
    {
      icon: Shield,
      title: "Security",
      desc: "Introduction to Cybersecurity",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      desc: "AWS, containerization",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      desc: "Machine learning, Data analysis",
    },
    {
      icon: Code,
      title: "Software Development",
      desc: "Full-stack development, clean code, best practices",
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 relative z-10 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center font-serif">
            <Code className={`inline mr-3 ${themeClasses.accent}`} />
            Skills & Expertise
          </h2>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Languages */}
            <Card
              className={`${themeClasses.cardBg} ${themeClasses.cardBorder} hover:border-blue-400 transition-colors backdrop-blur-sm`}
            >
              <CardHeader>
                <CardTitle className={`${themeClasses.accent} font-serif`}>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skillsData.languages.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${
                        isDark ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-700"
                      } mr-2 mb-2 text-xs`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frameworks */}
            <Card
              className={`${themeClasses.cardBg} ${themeClasses.cardBorder} hover:border-blue-400 transition-colors backdrop-blur-sm`}
            >
              <CardHeader>
                <CardTitle className={`${themeClasses.accent} font-serif`}>Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skillsData.frameworks.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${
                        isDark ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-700"
                      } mr-2 mb-2 text-xs`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card
              className={`${themeClasses.cardBg} ${themeClasses.cardBorder} hover:border-blue-400 transition-colors backdrop-blur-sm`}
            >
              <CardHeader>
                <CardTitle className={`${themeClasses.accent} font-serif`}>Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skillsData.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${
                        isDark ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-700"
                      } mr-2 mb-2 text-xs`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Concepts */}
            <Card
              className={`${themeClasses.cardBg} ${themeClasses.cardBorder} hover:border-blue-400 transition-colors backdrop-blur-sm`}
            >
              <CardHeader>
                <CardTitle className={`${themeClasses.accent} font-serif`}>Core Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skillsData.concepts.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${
                        isDark ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-700"
                      } mr-2 mb-2 text-xs`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interest Areas */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interestAreas.map((area) => (
              <Card
                key={area.title}
                className={`${themeClasses.cardBg} ${themeClasses.cardBorder} hover:border-blue-400 transition-all hover:scale-105 backdrop-blur-sm`}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <area.icon className={`h-10 w-10 sm:h-12 sm:w-12 ${themeClasses.accent} mx-auto mb-4`} />
                  <h3 className={`text-base sm:text-lg font-semibold ${themeClasses.accent} mb-2 font-serif`}>
                    {area.title}
                  </h3>
                  <p className={`text-xs sm:text-sm ${themeClasses.mutedLight} font-serif`}>{area.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
