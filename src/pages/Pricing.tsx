import SeoHead from '../components/SeoHead'
import PageHero from '../components/PageHero'
import Breadcrumb from '../components/Breadcrumb'
import Pricing from '../components/Pricing'
import CampaignBanner from '../components/CampaignBanner'
import Faq from '../components/Faq'
import { FAQ_ITEMS } from '../data/faqItems'
import FinalCta from '../components/FinalCta'

function PricingPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <SeoHead
        title="料金プラン・よくある質問 | ホームページ制作 | Koizumi Web Studio"
        description="ホームページ制作の料金プランと月額保守料を、追加費用なしで最初から公開しています。よくある質問もあわせてご確認いただけます。"
        path="/pricing"
        jsonLd={faqJsonLd}
      />
      <PageHero
        eyebrow="料金"
        heading={
          <>
            料金も内容も、
            <br />
            納得して選べるように。
          </>
        }
        description="制作費・保守費・追加になりやすい項目まで、事前に分かりやすく整理します。必要なものだけを選べるようにし、あとから不安が残らない進め方を大切にしています。"
        image="pricing-hero"
        imageAlt="電卓や書類が置かれた木製デスクの様子"
      />
      <Breadcrumb current="料金" />
      <Pricing />
      <CampaignBanner />
      <Faq />
      <FinalCta
        heading="ご予算に合わせてご提案します"
        description="料金についての疑問・ご相談も、契約前の無料相談で解消できます。"
      />
    </>
  )
}

export default PricingPage
