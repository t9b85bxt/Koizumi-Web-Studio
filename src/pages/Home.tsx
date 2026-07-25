import SeoHead from '../components/SeoHead'
import Hero from '../components/Hero'
import Pain from '../components/Pain'
import Comparison from '../components/Comparison'
import HomeValuesDigest from '../components/HomeValuesDigest'
import HomeServicesDigest from '../components/HomeServicesDigest'
import HomeWorksDigest from '../components/HomeWorksDigest'
import Industries from '../components/Industries'
import Process from '../components/Process'
import HomePricingDigest from '../components/HomePricingDigest'
import HomeFaqDigest from '../components/HomeFaqDigest'
import CampaignBanner from '../components/CampaignBanner'
import FinalCta from '../components/FinalCta'
import { SITE_URL, LINE_URL } from '../siteConfig'

function Home() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Koizumi Web Studio',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    sameAs: [LINE_URL],
  }

  return (
    <>
      <SeoHead
        title="ホームページ制作 | 全国対応・個人事業主/小規模事業者向け | Koizumi Web Studio"
        description="全国どこからでもご相談いただけるホームページ制作。料金は最初から全て公開、著作権・ドメインはお客さま名義。作って終わりにせず、問い合わせにつながる仕組みまで整えます。"
        path="/"
        jsonLd={organizationJsonLd}
      />
      <Hero />
      <Pain />
      <Comparison />
      <HomeValuesDigest />
      <HomeServicesDigest />
      <HomeWorksDigest />
      <Industries />
      <Process />
      <HomePricingDigest />
      <HomeFaqDigest />
      <CampaignBanner />
      <FinalCta
        heading="まずは話を聞いてみませんか"
        description="ご相談・お見積もりは無料です。どんな小さなことでもお気軽にお問い合わせください。"
      />
    </>
  )
}

export default Home
