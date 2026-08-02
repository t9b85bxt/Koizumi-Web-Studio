import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const STEPS = [
  { title: 'ご相談・ヒアリング', desc: '現状・お悩み・ご予算を伺います。' },
  { title: 'お見積もり・契約', desc: '金額・納期を書面で確認します。' },
  { title: 'コーディング・実装', desc: 'デザイン・実装を進めます。' },
  { title: '公開・納品', desc: '動作確認まで丁寧に行います。' },
  { title: '保守・運用', desc: '月額プランで継続的に伴走します。' },
]

function Process() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <Reveal delay={0}>
        <p className="text-orange-600 font-semibold text-sm mb-2 text-center">制作の流れ</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-10 text-center">ご相談から公開までの流れ</h2>
      </Reveal>

      <Reveal delay={150}>
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-orange-600 text-white font-semibold flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold text-navy-800 mb-1">{step.title}</h3>
              <p className="text-sm text-navy-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8">
          <Link
            to="/services"
            className="inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            詳しい制作の流れはこちら →
          </Link>
        </p>
      </Reveal>
    </section>
  )
}

export default Process
