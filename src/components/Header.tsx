import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { NAV_ITEMS, LINE_URL } from '../siteConfig'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-navy-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="font-bold text-lg text-navy-800 shrink-0">
          Koizumi<span className="text-orange-600"> Web</span> Studio
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-orange-600 font-semibold' : 'text-navy-700 hover:text-orange-600'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white text-sm font-semibold px-4 py-2.5 transition hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            LINE相談
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-block rounded-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 transition hover:scale-105 active:scale-95"
          >
            無料で相談する
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="メニュー"
            className="lg:hidden p-2 text-navy-800"
          >
            {menuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-navy-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-sm">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `py-2.5 transition-colors ${isActive ? 'text-orange-600 font-semibold' : 'text-navy-700'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-navy-100 flex flex-col gap-2">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white font-semibold px-5 py-3 transition"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                LINE相談
              </a>
              <Link
                to="/contact"
                className="text-center rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-3 transition"
              >
                無料で相談する
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
