import SeoHead from '../components/SeoHead'
import PageHero from '../components/PageHero'
import Breadcrumb from '../components/Breadcrumb'
import Works from '../components/Works'
import CampaignBanner from '../components/CampaignBanner'
import FinalCta from '../components/FinalCta'

function WorksPage() {
  return (
    <>
      <SeoHead
        title="制作実績・事例紹介 | Koizumi Web Studio"
        description="工務店・整体院・飲食店など、業種別の制作デザイン例をご紹介します。実際のサイトを見ながら、作成イメージをご確認いただけます。"
        path="/works"
      />
      <PageHero
        eyebrow="実績"
        heading={
          <>
            どんな見せ方が合うか、
            <br />
            先に確認できます。
          </>
        }
        description="業種や目的に合わせたデザイン例を用意し、伝え方・写真の使い方・問い合わせ導線を確認できるようにしています。制作実績は順次追加していきます。"
        image="works-hero"
        imageAlt="カフェの窓際でノートパソコンのグラフを確認している様子"
      />
      <Breadcrumb current="実績" />
      <Works />
      <CampaignBanner />
      <FinalCta
        heading="こんなサイトを作りたい、というご相談も歓迎です"
        description="イメージに近いデザイン例があれば、お気軽にお伝えください。"
      />
    </>
  )
}

export default WorksPage
