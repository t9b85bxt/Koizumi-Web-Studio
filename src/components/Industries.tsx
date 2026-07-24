import { Hammer, UtensilsCrossed, GraduationCap, HeartPulse, Scale, Store, type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

const FEATURED_INDUSTRIES: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: '工務店・リフォーム', desc: '施工実績・スタッフ紹介・OB様の声を整理し、信頼につなげます。', icon: Hammer },
  { title: '飲食店・カフェ', desc: 'メニュー・雰囲気が伝わる写真中心の構成で、来店意欲を高めます。', icon: UtensilsCrossed },
  { title: '整体院・サロン', desc: '施術内容・料金・ご予約導線を整理し、初めての方の不安を減らします。', icon: HeartPulse },
]

const OTHER_INDUSTRIES: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: '学習塾・教室', desc: 'コース内容・料金・講師紹介を分かりやすく整理し、体験申込につなげます。', icon: GraduationCap },
  { title: '士業・専門家', desc: '専門知識をやさしい言葉で伝え、相談へのハードルを下げます。', icon: Scale },
  { title: '小売・地域サービス', desc: '営業時間・アクセス・取扱商品を整理し、来店・問い合わせにつなげます。', icon: Store },
]

function Industries() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <Reveal delay={0}>
        <p className="text-orange-600 font-semibold text-sm mb-2">対応業種について</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">業種を問わずお受けしています</h2>
        <p className="text-navy-600 mb-10">
          業種にかかわらずご相談ください。これまでにご相談・ご対応の多い業種の例は以下のとおりです。
        </p>
      </Reveal>

      <Reveal delay={150}>
        <div className="grid sm:grid-cols-3 gap-5 mb-6">
          {FEATURED_INDUSTRIES.map((industry) => (
            <div key={industry.title} className="rounded-xl border border-navy-100 p-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-navy-800 mb-1">{industry.title}</h3>
              <p className="text-sm text-navy-600 leading-relaxed">{industry.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-navy-100 divide-y divide-navy-100 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:divide-x">
          {OTHER_INDUSTRIES.map((industry) => (
            <div key={industry.title} className="p-5 flex gap-3 items-start">
              <div className="shrink-0 w-9 h-9 rounded-full bg-sky-100 text-navy-600 flex items-center justify-center">
                <industry.icon className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-800 text-sm mb-1">{industry.title}</h3>
                <p className="text-xs text-navy-600 leading-relaxed">{industry.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-navy-600 mt-8">
          上記以外の業種でもお気軽にご相談ください。飲食店・美容・士業・教室など、幅広く対応しています。
        </p>
      </Reveal>
    </section>
  )
}

export default Industries
