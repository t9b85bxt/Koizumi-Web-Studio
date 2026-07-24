import { Link } from 'react-router-dom'
import { Globe, HelpCircle, Wallet, MonitorSmartphone, type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

const PAIN_POINTS: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'ホームページがない、何年も更新していない',
    desc: '名刺代わりのホームページすら無い、あるけれど古いままで放置している。',
    icon: Globe,
  },
  {
    title: '何を頼めばいいのか、費用相場も分からない',
    desc: 'どこに相談すればいいのか、いくらかかるものなのか見当がつかない。',
    icon: HelpCircle,
  },
  {
    title: '制作会社に頼んで高額請求されたという話を聞いて不安',
    desc: '見積もり以上の金額を後から請求された、という噂を聞いて踏み出せない。',
    icon: Wallet,
  },
  {
    title: '契約するまで、実際どんなサイトになるのか分からず不安',
    desc: '説明を聞いてもイメージが湧かないまま契約するのは不安、というお声をよく聞きます。',
    icon: MonitorSmartphone,
  },
]

function Pain() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <Reveal delay={0}>
        <p className="text-orange-600 font-semibold text-sm mb-2 text-center">お悩み</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-10 text-center">こんなお悩みありませんか？</h2>
      </Reveal>

      <Reveal delay={150}>
        <div className="grid sm:grid-cols-2 gap-5">
          {PAIN_POINTS.map((pain) => (
            <div
              key={pain.title}
              className="rounded-xl border border-navy-100 border-l-4 border-l-orange-400 p-5 flex gap-4"
            >
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-navy-50 text-navy-600 flex items-center justify-center">
                <pain.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-800 mb-1">{pain.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{pain.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={250}>
        <div className="mt-8 rounded-2xl bg-navy-900 text-white p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">当てはまるものが、ひとつでもありましたか？</h3>
            <p className="text-navy-100 text-sm leading-relaxed">
              「うちの場合はどうすれば」を、無料相談で一緒に整理します。ご相談だけのご利用でも大丈夫です。
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3.5 transition hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            無料で相談する →
          </Link>
        </div>
      </Reveal>
    </section>
  )
}

export default Pain
