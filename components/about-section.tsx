"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, User } from "lucide-react"

interface AboutSectionProps {
  isDark: boolean
  themeClasses: {
    accent: string
    muted: string
    text: string
  }
}

export function AboutSection({ isDark, themeClasses }: AboutSectionProps) {
  // TODO: Replace with actual social media links
  const socialLinks = {
    github: "https://github.com/tokisomalapane", // Replace with actual GitHub URL
    linkedin: "https://linkedin.com/in/tokiso-malapane-9aa0961a1", // Replace with actual LinkedIn URL
    email: "mailto:tukimalapane@gmail.com", // Replace with actual email
  }

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <section id="about" className="py-16 sm:py-20 relative z-10 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center font-serif">
            <User className={`inline mr-3 ${themeClasses.accent}`} />
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Profile image/avatar */}
            <div className="order-2 md:order-1">
              {/* TODO: Replace this placeholder with actual profile image */}
              <img src="/WhatsApp Image 2025-07-25 at 00.18.08.jpeg" alt="Tokiso Malapane" className="w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full object-cover" /> 
              
            </div>

            {/* About content */}
            <div className="space-y-6 order-1 md:order-2">
              <p className={`text-base sm:text-lg ${themeClasses.muted} leading-relaxed font-serif`}>
                I'm a final-year BSc Information Technology student at North-West University (NWU), driven by a passion
                for cybersecurity, cloud computing, and artificial intelligence. My journey in technology is fueled by
                curiosity and a commitment to building secure, innovative solutions.
              </p>
              <p className={`text-base sm:text-lg ${themeClasses.muted} leading-relaxed font-serif`}>
                With hands-on experience in software development and a growing expertise in cloud platforms, I'm
                preparing to make a meaningful impact in the tech industry. I believe in continuous learning and staying
                ahead of emerging technologies.
              </p>

              {/* Social media buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSocialClick(socialLinks.github)}
                  className={`${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                      : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
                  } font-serif`}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSocialClick(socialLinks.linkedin)}
                  className={`${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                      : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
                  } font-serif`}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSocialClick(socialLinks.email)}
                  className={`${
                    isDark
                      ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                      : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
                  } font-serif`}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
