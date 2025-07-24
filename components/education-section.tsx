"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, Award } from "lucide-react"

interface EducationSectionProps {
  isDark: boolean
  themeClasses: {
    accent: string
    muted: string
    cardBg: string
    cardBorder: string
  }
}

export function EducationSection({ isDark, themeClasses }: EducationSectionProps) {
  // TODO: Update with actual education details
  const educationData = {
    degree: "Bachelor of Science in Information Technology",
    university: "North-West University (NWU)",
    graduationYear: "2026", // Update with actual graduation year
    gpa: "74/100", // Update with actual GPA
    courses: [
      "Object Orientated Programming",
      "System Analysis & Design",
      "Databases",
      "Web Development",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Information Security",
      "Data Analytics",
    ],
  }

  return (
    <section
      id="education"
      className={`py-16 sm:py-20 ${isDark ? "bg-slate-900/50" : "bg-slate-50/50"} relative z-10 px-4 sm:px-6`}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center font-serif">
            <GraduationCap className={`inline mr-3 ${themeClasses.accent}`} />
            Education
          </h2>

          {/* Education card */}
          <Card className={`${themeClasses.cardBg} ${themeClasses.cardBorder} backdrop-blur-sm`}>
            <CardHeader>
              <CardTitle className={`text-xl sm:text-2xl ${themeClasses.accent} font-serif`}>
                {educationData.degree}
              </CardTitle>
              <CardDescription className={`text-base sm:text-lg ${themeClasses.muted} font-serif`}>
                {educationData.university}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Education details */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className={`flex items-center space-x-4 ${themeClasses.muted} font-serif`}>
                  <Calendar className={`h-5 w-5 ${themeClasses.accent}`} />
                  <span>Expected Graduation: {educationData.graduationYear}</span>
                </div>
                <div className={`flex items-center space-x-4 ${themeClasses.muted} font-serif`}>
                  <Award className={`h-5 w-5 ${themeClasses.accent}`} />
                  <span>Current GPA: {educationData.gpa}</span>
                </div>
              </div>

              {/* Relevant coursework */}
              <div>
                <h4 className={`text-lg font-semibold mb-3 ${themeClasses.accent} font-serif`}>Relevant Coursework:</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {educationData.courses.map((course) => (
                    <Badge
                      key={course}
                      variant="secondary"
                      className={`${
                        isDark ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-700"
                      } text-xs sm:text-sm`}
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
