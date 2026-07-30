import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function CampaignBanner() {
  return (
    <section id="campaign" className="scroll-mt-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <Reveal delay={0}>
          <div className="rounded-[2.5rem] bg-gradient-to-br from-orange-400 to-orange-500 text-white px-6 sm:px-10 py-12 lg:py-16 text-center">
            <p className="text-xs font-semibold bg-white/25 inline-block rounded-full px-3 py-1 mb-5 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
              実績公開ご協力価格・同時進行3社まで
            </p>
            <p className="text-lg sm:text-2xl font-semibold mb-1 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
              <span className="line-through opacity-70">通常30万円〜</span>
              <span className="mx-2">→</span>
            </p>
            <p className="text-5xl sm:text-7xl font-bold mb-2 [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]">
              99,000円〜<span className="text-lg sm:text-xl font-normal ml-2">(税込)</span>
            </p>
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
              制作事例(社名・サイト)としての公開にご協力いただける事業者さま向けの特別価格です。
              1ページ完結型の標準的な構成、スマートフォン対応、検索対策(SEO)の基礎設定、お問い合わせフォームまでを含みます。
              比較・検討の場面で選ばれるための情報整理と導線設計を行い、公開後の保守・改善相談にも対応します。
              品質維持のため同時進行3社までとさせていただきます。
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-white text-orange-600 font-semibold px-8 py-3.5 transition hover:bg-navy-50 hover:scale-105 active:scale-95"
            >
              この価格で相談する →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CampaignBanner
