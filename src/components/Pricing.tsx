import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { PRICING_PLANS } from '../data/pricingPlans'

const MAINTENANCE_PLANS = [
  { name: 'ライト', price: '月4,980円', desc: 'サーバー・SSL管理、月1バックアップ、軽微修正 月1回まで。' },
  { name: 'スタンダード', price: '月12,800円', desc: '上記+更新作業 月3回、バナー1枚/月、四半期アクセスレポート。' },
  { name: 'プレミアム', price: '月29,800円', desc: '上記+月次30分MTG、緊急対応1回/月。' },
]

const INCLUDED_ITEMS = [
  '制作費・初期設定一式',
  'SSL(暗号化通信)の設定',
  '検索対策(SEO)の基礎設定',
  'スマートフォン対応',
  'お問い合わせフォーム',
  'アクセス解析(Googleアナリティクス等)の設定',
]

const EXTRA_ITEMS = [
  'ドメイン代(年1,500円〜・お客さま名義で取得)',
  'プロカメラマンの撮影費(必要な場合のみ)',
  '有料素材・有料フォントの実費',
  'サーバーの種別変更(特別な要件が発生する場合)',
]

function Pricing() {
  return (
    <section className="bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <Reveal delay={0}>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">ホームページ制作 料金プラン</h2>
        <p className="text-navy-600 mb-10">最初から全部お見せします。追加請求は原則ありません。</p>
      </Reveal>

      <Reveal delay={150}>
        <h3 className="font-semibold text-navy-800 mb-4">ホームページ制作プラン</h3>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-6 transition hover:scale-[1.02] ${
                plan.highlight ? 'border-orange-500 shadow-lg shadow-orange-100' : 'border-navy-100'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-orange-600 text-white text-xs font-semibold px-3 py-1">
                  おすすめ
                </span>
              )}
              <h4 className="font-semibold text-navy-800 mb-1">{plan.name}</h4>
              <p className="text-sm text-navy-600 leading-relaxed mb-4">{plan.desc}</p>
              <p className="text-2xl font-bold text-navy-900 mb-1">{plan.price}</p>
              <p className="text-xs font-semibold text-orange-600 mb-4">{plan.note}</p>
              <ul className="space-y-2 text-sm text-navy-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-orange-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={250}>
        <h3 className="font-semibold text-navy-800 mb-4">月額保守料</h3>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {MAINTENANCE_PLANS.map((plan) => (
            <div key={plan.name} className="rounded-xl border border-navy-100 p-6">
              <h4 className="font-semibold text-navy-800 mb-1">{plan.name}</h4>
              <p className="text-xl font-bold text-navy-900 mb-3">{plan.price}</p>
              <p className="text-sm text-navy-600 leading-relaxed">{plan.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-navy-800 mb-4">含まれるもの</h3>
            <ul className="space-y-2 text-sm text-navy-600">
              {INCLUDED_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-orange-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-navy-800 mb-4">別途料金</h3>
            <ul className="space-y-2 text-sm text-navy-600">
              {EXTRA_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-navy-400">・</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          to="/services"
          className="inline-block mt-8 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          詳しい制作の流れはこちら →
        </Link>
      </Reveal>
      </div>
    </section>
  )
}

export default Pricing
