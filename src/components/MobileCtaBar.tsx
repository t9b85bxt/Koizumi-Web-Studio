import { Link } from 'react-router-dom'
import { MessageCircle, Send } from 'lucide-react'
import { LINE_URL } from '../siteConfig'

function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
      <div className="h-14 grid grid-cols-2">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm font-semibold bg-[#06C755] text-white"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          LINEで相談
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 text-sm font-semibold bg-orange-600 text-white"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          無料で相談する
        </Link>
      </div>
    </div>
  )
}

export default MobileCtaBar
