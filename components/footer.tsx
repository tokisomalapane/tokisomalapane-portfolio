"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface FooterProps {
  isDark: boolean
  onNavigate: (section: string) => void
  themeClasses: {
    navBorder: string
    mutedLight: string
    accent: string
  }
}

export function Footer({ isDark, onNavigate, themeClasses }: FooterProps) {
  const menuItems = ["Home", "About", "Education", "Skills", "Projects", "Contact"]

  // TODO: Replace with actual resume download link
  const handleDownloadResume = () => {
    // Replace this URL with your actual resume file path
    window.open('/Tokiso_Malapane_CV_FullStack_1-1.pdf', '_blank')
    console.log("Download Resume clicked - Replace with actual resume link")
  }

  return (
    <footer
      className={`py-8 ${isDark ? "bg-slate-900" : "bg-slate-100"} border-t ${themeClasses.navBorder} relative z-10`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Copyright */}
          <div className={`${themeClasses.mutedLight} text-center lg:text-left font-serif`}>
            © 2025 Tokiso Malapane. All rights reserved.
          </div>

          {/* Resume Download */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadResume}
              className={`${
                isDark
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                  : "border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
              } font-serif`}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`${themeClasses.mutedLight} hover:${themeClasses.accent} transition-colors text-sm font-serif`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
