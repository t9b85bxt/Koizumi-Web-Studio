import { Link } from 'react-router-dom'
import { FilePlus2, RefreshCcw, ShieldCheck, Globe2, Bot, type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

const DIGEST_ITEMS: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'ホームページ新規制作',
    desc: 'ヒアリングからデモ提案・公開まで、99,000円〜で一貫してお任せいただけます。',
    icon: FilePlus2,
  },
  {
    title: 'リニューアル',
    desc: '今のサイトの強みを活かしながら、表示速度や問い合わせ動線を整え直します。',
    icon: RefreshCcw,
  },
  {
    title: '保守・運用サポート',
    desc: '月額4,980円〜、サーバー・ドメインの管理から軽微な更新まで伴走します。',
    icon: ShieldCheck,
  },
  {
    title: 'ドメイン取得サポート',
    desc: 'ドメイン(URL)はお客さま名義で取得。設定からメール開設までフォローします。',
    icon: Globe2,
  },
  {
    title: 'AI活用相談',
    desc: '問い合わせ対応や業務効率化など、AIの使いどころを一緒に整理します。',
    icon: Bot,
  },
]

function HomeServicesDigest() {
  return (
    <section className="bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <Reveal delay={0}>
          <p className="text-orange-600 font-semibold text-sm mb-2">サービス</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">制作から運用まで、まとめて相談できます</h2>
          <p className="text-navy-600 mb-8">状況に合わせて、必要なメニューだけを組み合わせられます。</p>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIGEST_ITEMS.map((item) => (
              <div key={item.title} className="rounded-xl bg-white border border-navy-100 p-5 flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="inline-block mt-6 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            対応サービス内容と料金の目安を見る →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default HomeServicesDigest
