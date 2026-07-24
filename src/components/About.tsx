import { Globe, Palette, Bot, ShieldCheck, type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

const SKILLS: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'ホームページ制作',
    desc: '表示が速く、長く安心して使えるホームページを制作します。スマートフォンでも見やすく仕上げます。',
    icon: Globe,
  },
  {
    title: 'デザイン',
    desc: '見やすさを大切に、業種やお店の雰囲気に合ったデザインに整えます。',
    icon: Palette,
  },
  {
    title: 'AI活用のご相談',
    desc: '問い合わせ対応や業務効率化など、AIをどう使えばいいか分からない、というご相談にも対応します。',
    icon: Bot,
  },
  {
    title: '保守・運用サポート',
    desc: '公開後もサーバー・ドメインの管理や、軽微な更新まで長く伴走します。',
    icon: ShieldCheck,
  },
]

function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <Reveal delay={0}>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Koizumi Web Studioについて</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="max-w-3xl space-y-4 text-navy-700 leading-relaxed mb-12">
          <p>
            Koizumi Web Studioでは、ホームページ制作を通じて、事業やサービスの魅力がきちんと伝わる導線づくりをお手伝いしています。
          </p>
          <p>
            見た目を整えるだけでなく、「誰に何を伝えるか」「問い合わせや予約につなげるには何が必要か」を一緒に整理しながら制作します。
            制作内容や費用、公開後の運用まで一つずつ整理し、納得して進められる形でご案内します。
          </p>
          <p>
            料金や制作内容は事前にできるだけ明確にお伝えし、公開後の修正や運用についても相談しやすい関係を目指しています。
            まだ内容が固まっていない段階でも大丈夫です。まずは今の状況やお悩みを聞かせてください。
          </p>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-orange-600 font-semibold text-sm mb-2">対応できる技術・スキル</p>
        <h3 className="text-xl font-bold text-navy-900 mb-4">できること</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {SKILLS.map((skill) => (
            <div key={skill.title} className="rounded-xl border border-navy-100 p-5">
              <div className="w-11 h-11 rounded-full bg-navy-50 text-navy-600 flex items-center justify-center mb-4">
                <skill.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-navy-800 mb-2">{skill.title}</h4>
              <p className="text-sm text-navy-600 leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default About
