"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

interface NavigationProps {
  isDark: boolean
  onToggleTheme: () => void
  onNavigate: (section: string) => void
  themeClasses: {
    navBg: string
    navBorder: string
    accent: string
    muted: string
  }
}

export function Navigation({ isDark, onToggleTheme, onNavigate, themeClasses }: NavigationProps) {
  const menuItems = ["Home", "About", "Education", "Skills", "Projects", "Contact"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${themeClasses.navBg} backdrop-blur-md border-b ${themeClasses.navBorder} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`text-xl font-bold ${themeClasses.accent} font-serif`}>Tokiso Malapane</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`${themeClasses.muted} hover:${themeClasses.accent} transition-colors font-serif`}
              >
                {item}
              </button>
            ))}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <MobileMenu isDark={isDark} onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </nav>
  )
}
