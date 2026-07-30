import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { FAQ_ITEMS } from '../data/faqItems'

const DIGEST_INDEXES = [0, 1, 5]

function HomeFaqDigest() {
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
            return (
              <div key={item.q} className="rounded-xl bg-white border border-navy-100 px-5 py-4">
                <p className="font-semibold text-navy-800 mb-2">{item.q}</p>
                <p className="text-sm text-navy-600 leading-relaxed">{item.a}</p>
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
