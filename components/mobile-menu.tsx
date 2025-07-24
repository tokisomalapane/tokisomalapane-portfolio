'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MobileMenuProps {
  isDark: boolean
  onNavigate: (section: string) => void
}

export function MobileMenu({ isDark, onNavigate }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact']

  const handleNavigate = (section: string) => {
    onNavigate(section.toLowerCase())
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 p-0"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className={`absolute top-full left-0 right-0 ${
          isDark ? 'bg-slate-950/95' : 'bg-white/95'
        } backdrop-blur-md border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        } shadow-lg`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`text-left py-2 px-4 rounded-md transition-colors ${
                    isDark 
                      ? 'hover:bg-slate-800 hover:text-blue-400' 
                      : 'hover:bg-slate-100 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
