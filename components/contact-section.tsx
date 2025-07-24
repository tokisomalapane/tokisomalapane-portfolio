"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

interface ContactSectionProps {
  isDark: boolean
  themeClasses: {
    accent: string
    muted: string
    text: string
    cardBg: string
    cardBorder: string
  }
}

export function ContactSection({ isDark, themeClasses }: ContactSectionProps) {
  // TODO: Replace with your actual contact information
  const contactInfo = {
    email: "tukimalapane@gmail.com", // Replace with actual email
    github: "https://github.com/tokisomalapane", // Replace with actual GitHub URL
    linkedin: "https://linkedin.com/in/tokiso-malapane-9aa0961a1", // Replace with actual LinkedIn URL
    location: "Johannesburg,Gauteng, South Africa", // Update with actual location
  }

  const handleContactClick = (type: string) => {
    switch (type) {
      case "email":
        window.open(`mailto:${contactInfo.email}`, "_blank")
        break
      case "github":
        window.open(contactInfo.github, "_blank")
        break
      case "linkedin":
        window.open(contactInfo.linkedin, "_blank")
        break
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 relative z-10 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center font-serif">
            <Mail className={`inline mr-3 ${themeClasses.accent}`} />
            Contact Information
          </h2>

          {/* Introduction */}
          <div className="text-center mb-12">
            <h3 className={`text-xl sm:text-2xl font-semibold mb-6 ${themeClasses.accent} font-serif`}>
              Let's Connect
            </h3>
            <p
              className={`${themeClasses.muted} mb-8 text-base sm:text-lg max-w-2xl mx-auto font-serif leading-relaxed`}
            >
              I welcome opportunities to discuss technology, collaborate on meaningful projects, and connect with fellow
              professionals in the field.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <Card
              className={`${themeClasses.cardBg} ${themeClasses.cardBorder} backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-2`}
            >
              <CardContent className="p-6 text-center">
                <Mail className={`h-8 w-8 ${themeClasses.accent} mx-auto mb-4`} />
                <h4 className={`font-semibold ${themeClasses.text} mb-2 font-serif text-lg`}>Email</h4>
                <p className={`text-sm ${themeClasses.muted} font-serif mb-4`}>{contactInfo.email}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleContactClick("email")}
                  className={`${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                      : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
                  } font-serif`}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* GitHub */}
            <Card
              className={`${themeClasses.cardBg} ${themeClasses.cardBorder} backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-2`}
            >
              <CardContent className="p-6 text-center">
                <Github className={`h-8 w-8 ${themeClasses.accent} mx-auto mb-4`} />
                <h4 className={`font-semibold ${themeClasses.text} mb-2 font-serif text-lg`}>GitHub</h4>
                <p className={`text-sm ${themeClasses.muted} font-serif mb-4`}>github.com/tokiso-malapane</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleContactClick("github")}
                  className={`${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                      : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
                  } font-serif`}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card
              className={`${themeClasses.cardBg} ${themeClasses.cardBorder} backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-2`}
            >
              <CardContent className="p-6 text-center">
                <Linkedin className={`h-8 w-8 ${themeClasses.accent} mx-auto mb-4`} />
                <h4 className={`font-semibold ${themeClasses.text} mb-2 font-serif text-lg`}>LinkedIn</h4>
                <p className={`text-sm ${themeClasses.muted} font-serif mb-4`}>linkedin.com/in/tokiso-malapane</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleContactClick("linkedin")}
                  className={`${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                      : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
                  } font-serif`}
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location */}
          <div className="text-center mt-8">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className={`h-5 w-5 ${themeClasses.accent}`} />
              <span className={`${themeClasses.muted} font-serif`}>{contactInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
