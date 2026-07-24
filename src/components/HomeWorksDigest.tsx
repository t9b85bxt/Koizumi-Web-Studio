import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { DEMO_SITES } from '../data/worksData'

function HomeWorksDigest() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <Reveal delay={0}>
        <p className="text-orange-600 font-semibold text-sm mb-2">制作実績</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">業種別のデザイン例をご紹介します</h2>
        <p className="text-navy-600 mb-8">
          実際に動くデモサイトで、デザインの方向性をご覧いただけます。※架空の事業者名によるデザイン例です。
        </p>
      </Reveal>

      <Reveal delay={150}>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3">
          {DEMO_SITES.map((site) => (
            <Link
              key={site.name}
              to="/works"
              className="group shrink-0 w-48 sm:w-auto rounded-lg bg-white border border-navy-100 overflow-hidden transition hover:shadow-md hover:scale-[1.02] active:scale-95"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={site.image}
                  alt={`${site.name}のファーストビュー`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-navy-800 text-sm">{site.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/works"
          className="inline-block mt-6 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          制作実績・事例を見る →
        </Link>
      </Reveal>
    </section>
  )
}

export default HomeWorksDigest
