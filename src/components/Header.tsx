import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const navItems = ['Home', 'Features', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-serif font-bold text-stone-800">
          Heritage AR
        </a>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-stone-600 hover:text-stone-900 transition-colors"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">
          Download App
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <button
                key={item}
                className="py-2 text-left text-stone-600 hover:text-stone-900 transition-colors"
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </button>
            ))}
            <Button variant="outline" className="mt-4">
              Download App
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

