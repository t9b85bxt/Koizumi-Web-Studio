import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { NAV_ITEMS, CONTACT_EMAIL, LINE_URL } from '../siteConfig'

function Footer() {
  return (
    <footer className="bg-white border-t border-navy-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <p className="font-bold text-lg text-navy-800 mb-2">
          Koizumi<span className="text-orange-600"> Web</span> Studio
        </p>
        <p className="text-sm text-navy-600 mb-6">全国どこからでも、リモートでご相談・ご依頼いただけます。</p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-6">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className="text-navy-700 hover:text-orange-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white text-sm font-semibold px-4 py-2 transition"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            気軽に相談はLINE
          </a>
          <p className="text-sm text-navy-600">
            メール:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy-700 hover:text-orange-600 transition-colors">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <p className="text-xs text-navy-400">© 2026 Koizumi Web Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
