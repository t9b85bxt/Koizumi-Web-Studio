import { useState } from 'react'
import Reveal from './Reveal'
import { FAQ_ITEMS } from '../data/faqItems'

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-sky-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <Reveal delay={0}>
          <p className="text-orange-600 font-semibold text-sm mb-2 text-center">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-10 text-center">よくある質問</h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={item.q} className="rounded-xl bg-white border border-navy-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
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
                  {isOpen && (
                    <p className="px-5 pb-4 text-sm text-navy-600 leading-relaxed">{item.a}</p>
                  )}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Faq
