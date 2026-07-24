import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <picture>
        <source srcSet="/hero.webp" type="image/webp" />
        <img
          src="/hero.jpg"
          alt="カフェでノートパソコンを開き、ホームページのデザインを検討している様子"
          width={1600}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[65%_35%]"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/70 to-navy-900/90 md:bg-gradient-to-r md:from-navy-900/95 md:via-navy-900/75 md:to-navy-900/20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-28">
        <div className="max-w-xl">
          <Reveal delay={0}>
            <a
              href="#campaign"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 text-xs sm:text-sm font-semibold px-4 py-2 mb-5 transition hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              実績公開ご協力価格
              <span className="text-orange-400">｜99,000円〜(税込)</span>
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-orange-400 font-semibold text-sm mb-3">全国対応のホームページ制作パートナー</p>
          </Reveal>
          <Reveal delay={160}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              あなたの事業に、
              <br />
              問い合わせにつながる
              <br />
              ホームページを。
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-navy-100 leading-relaxed mb-8">
              作って終わりのホームページではなく、問い合わせ・予約・来店につながる仕組みまで整えます。
              全国どこからでも、リモートで対応しています。
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3.5 transition hover:scale-105 active:scale-95"
              >
                無料で相談する
              </Link>
              <Link
                to="/works"
                className="rounded-full border border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 transition hover:scale-105 active:scale-95"
              >
                制作例を見る
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
