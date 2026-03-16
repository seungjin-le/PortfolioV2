import { useState, useEffect } from 'react'
import { NAV_ITEMS, PROFILE } from '@/constants/portfolio'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'border-n200 border-b bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="flex-row-center-between m:px-5 max-w-content mx-auto px-8 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-t20 text-n900 hover:text-p500 cursor-pointer transition-colors">
          {PROFILE.nameEn}
        </button>

        {/* Desktop */}
        <ul className="flex-row-center hidden gap-8 md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleClick(href)}
                className={`text-b16 cursor-pointer border-b-2 pb-0.5 transition-all ${
                  activeSection === href.slice(1) ? 'border-p500 text-p500' : 'text-n600 hover:text-n900 border-transparent'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen((v) => !v)} className="text-n700 cursor-pointer md:hidden" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-n200 border-t bg-white/95 backdrop-blur-md md:hidden">
          <ul className="flex-col-start-start m:px-5 gap-1 px-8 py-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href} className="w-full">
                <button
                  onClick={() => handleClick(href)}
                  className={`text-b16 w-full cursor-pointer rounded-lg px-3 py-2.5 text-left transition-colors ${
                    activeSection === href.slice(1) ? 'bg-p50 text-p500' : 'text-n700 hover:bg-(--color-n50)'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navigation
