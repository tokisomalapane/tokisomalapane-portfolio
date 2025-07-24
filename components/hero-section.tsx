"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface HeroSectionProps {
  isDark: boolean
  onNavigate: (section: string) => void
  themeClasses: {
    accent: string
    muted: string
  }
}

export function HeroSection({ isDark, onNavigate, themeClasses }: HeroSectionProps) {
  const [typedText, setTypedText] = useState("")
  const fullText = "Hi, I'm Tokiso Malapane"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // TODO: Replace with actual CV download link
  const handleDownloadCV = () => {
    // Replace this URL with your actual CV file path
    window.open('/Tokiso_Malapane_CV_FullStack_1-1.pdf', '_blank')
    console.log("Download CV clicked - Replace with actual CV link")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with typing effect */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-serif">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl ${themeClasses.accent} mb-4 font-serif`}>
            Final Year BSc IT Student | Aspiring Cloud & Security Specialist
          </p>

          {/* Bio description */}
          <p className={`text-base sm:text-lg ${themeClasses.muted} mb-8 max-w-2xl mx-auto px-4 font-serif`}>
            Passionate about cybersecurity, cloud computing, and AI. Building secure, scalable solutions while pursuing
            excellence in technology innovation.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              onClick={() => onNavigate("projects")}
              className={`${
                isDark ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-navy-700 hover:bg-navy-800 text-white"
              } px-6 sm:px-8 py-3 text-base sm:text-lg font-serif`}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={handleDownloadCV}
              className={`${
                isDark
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                  : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
              } px-6 sm:px-8 py-3 text-base sm:text-lg font-serif`}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
