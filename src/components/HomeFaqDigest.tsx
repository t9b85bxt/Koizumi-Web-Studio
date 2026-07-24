import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { FAQ_ITEMS } from '../data/faqItems'

const DIGEST_INDEXES = [0, 1, 5]

function HomeFaqDigest() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <Reveal delay={0}>
        <p className="text-orange-600 font-semibold text-sm mb-2 text-center">FAQ</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-10 text-center">よくある質問</h2>
      </Reveal>

      <Reveal delay={150}>
        <div className="space-y-3">
          {DIGEST_INDEXES.map((itemIndex) => {
            const item = FAQ_ITEMS[itemIndex]
            const isOpen = openIndex === itemIndex
            return (
              <div key={item.q} className="rounded-xl bg-white border border-navy-100 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : itemIndex)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-navy-800"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-orange-600 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && <p className="px-5 pb-4 text-sm text-navy-600 leading-relaxed">{item.a}</p>}
              </div>
            )
          })}
        </div>

        <Link
          to="/pricing"
          className="inline-block mt-6 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          よくある質問をもっと見る →
        </Link>
      </Reveal>
    </section>
  )
}

export default HomeFaqDigest
