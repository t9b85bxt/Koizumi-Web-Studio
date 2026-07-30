import Reveal from './Reveal'

const SERVICES = [
  {
    title: 'ホームページ新規制作',
    note: '99,000円〜',
    desc: 'お打ち合わせからデモ提案・制作・公開まで一貫して対応します。契約前に実際に動くデモサイトをお見せするので、完成イメージのすり合わせができます。',
    includes: ['スマートフォン対応', '検索対策(SEO)の基礎設定', 'お問い合わせフォーム', '独自ドメイン取得サポート'],
  },
  {
    title: '既存ホームページのリニューアル',
    note: '個別お見積もり',
    desc: '今あるホームページの強みを活かしつつ、表示速度・読み込みやすさ・問い合わせ動線を整えて作り直します。移行前後の見え方の変化もご説明します。',
    includes: ['現状サイトの課題整理', '表示速度・スマホ対応の改善', '問い合わせ動線の見直し', '公開後の動作確認'],
  },
  {
    title: '保守・運用サポート',
    note: '月額4,980円〜',
    desc: 'サーバー・ドメイン(URL)・SSL(暗号化通信)の管理から、月次の軽微修正・更新まで、状況に合わせた月額プランをご用意します。',
    includes: ['サーバー・SSLの管理', '定期バックアップ', '軽微な修正・更新作業', 'プラン変更はいつでも相談可'],
  },
  {
    title: 'ドメイン・サーバー取得サポート',
    note: '制作費に含む',
    desc: 'ドメイン(◯◯.comなど、ホームページの住所)はお客さま名義で取得することを前提に、設定からメール開設までフォローします。',
    includes: ['お客さま名義でのドメイン取得', 'サーバーの初期設定', '独自メールアドレスの開設', '契約更新のご案内'],
  },
]

function Services() {
  return (
    <section className="bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <Reveal delay={0}>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">提供メニュー</h2>
          <p className="text-navy-600 mb-10">
            ホームページ制作から保守運用、ドメイン取得まで。お客さまの状況に合わせて柔軟に組み合わせられます。
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.title} className="rounded-xl bg-white border border-navy-100 p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-navy-800">{service.title}</h3>
                  <span className="shrink-0 text-xs font-semibold text-orange-600 bg-orange-50 rounded-full px-2.5 py-1">
                    {service.note}
                  </span>
                </div>
                <p className="text-sm text-navy-600 leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-1.5 text-sm text-navy-600">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-orange-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Services
