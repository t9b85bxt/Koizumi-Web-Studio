import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { PRICING_PLANS } from '../data/pricingPlans'

function HomePricingDigest() {
  return (
    <section className="bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <Reveal delay={0}>
          <p className="text-orange-600 font-semibold text-sm mb-2">料金の目安</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">最初から全部お見せします</h2>
          <p className="text-navy-600 mb-8">追加請求は原則ありません。詳細な内訳もあわせてご確認いただけます。</p>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid sm:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl bg-white border p-6 ${
                  plan.highlight ? 'border-orange-500 shadow-lg shadow-orange-100' : 'border-navy-100'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-orange-600 text-white text-xs font-semibold px-3 py-1">
                    おすすめ
                  </span>
                )}
                <h3 className="font-semibold text-navy-800 mb-1">{plan.name}</h3>
                <p className="text-xl font-bold text-navy-900 mb-2">{plan.price}</p>
                <p className="text-sm text-navy-600">{plan.summary}</p>
              </div>
            ))}
          </div>

          <Link
            to="/pricing"
            className="inline-block mt-6 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            料金プランの詳細を見る →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default HomePricingDigest
