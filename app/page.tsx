"use client"

import { useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  // Theme classes for consistent styling across components
  const themeClasses = {
    bg: isDark ? "bg-slate-900" : "bg-cream-50",
    text: isDark ? "text-cream-100" : "text-slate-800",
    cardBg: isDark ? "bg-slate-800/80" : "bg-white/90",
    cardBorder: isDark ? "border-blue-600/30" : "border-slate-300",
    navBg: isDark ? "bg-slate-900/90" : "bg-cream-50/90",
    navBorder: isDark ? "border-blue-600/20" : "border-slate-200",
    accent: isDark ? "text-blue-400" : "text-navy-700",
    muted: isDark ? "text-cream-200" : "text-slate-600",
    mutedLight: isDark ? "text-cream-300" : "text-slate-500",
  }

  return (
    <div
      className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} relative overflow-hidden transition-colors duration-300`}
    >
      {/* Animated Background */}
      <AnimatedBackground isDark={isDark} />

      {/* Navigation */}
      <Navigation
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onNavigate={scrollToSection}
        themeClasses={themeClasses}
      />

      {/* Hero Section */}
      <HeroSection isDark={isDark} onNavigate={scrollToSection} themeClasses={themeClasses} />

      {/* About Section */}
      <AboutSection isDark={isDark} themeClasses={themeClasses} />

      {/* Education Section */}
      <EducationSection isDark={isDark} themeClasses={themeClasses} />

      {/* Skills Section */}
      <SkillsSection isDark={isDark} themeClasses={themeClasses} />

      {/* Projects Section */}
      <ProjectsSection isDark={isDark} themeClasses={themeClasses} />

      {/* Contact Section */}
      <ContactSection isDark={isDark} themeClasses={themeClasses} />

      {/* Footer */}
      <Footer isDark={isDark} onNavigate={scrollToSection} themeClasses={themeClasses} />
    </div>
  )
}
