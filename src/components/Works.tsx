import Reveal from './Reveal'
import { DEMO_SITES } from '../data/worksData'

function Works() {
  return (
    <section className="bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <Reveal delay={0}>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">ホームページ製作例</h2>
          <p className="text-navy-600 mb-10">
            近い業種をまとめた3つのカテゴリで、作成サイトの方向性をご紹介します。
            <br />
            ※実在のサイトではなく、架空名で業種別のデモイメージです。
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEMO_SITES.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-white border border-navy-100 overflow-hidden transition hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={site.image}
                    alt={`${site.name}のファーストビュー`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-navy-800">{site.name}</h3>
                  <p className="text-xs text-navy-600 mb-2">{site.industry}</p>
                  <p className="text-sm text-navy-600 leading-relaxed">{site.caption}</p>
                  <p className="text-xs text-orange-600 font-semibold mt-3">デモサイトを見る →</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-10 rounded-xl bg-white border border-navy-100 p-6 text-sm text-navy-600 leading-relaxed">
            ホームページの有償実績は、現在募集中です。制作事例(社名・サイト)としての公開にご協力いただける方には、実績公開ご協力価格でご提供しています。
            より多くの方に、ホームページの良さを体感していただきたいという想いから企画した価格です。
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Works
