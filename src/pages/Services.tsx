import SeoHead from '../components/SeoHead'
import PageHero from '../components/PageHero'
import Breadcrumb from '../components/Breadcrumb'
import Services from '../components/Services'
import Process from '../components/Process'
import FinalCta from '../components/FinalCta'

function ServicesPage() {
  return (
    <>
      <SeoHead
        title="サービス内容・制作の流れ | ホームページ制作 | Koizumi Web Studio"
        description="ホームページ新規制作・リニューアル・保守運用・ドメイン取得サポート・AI活用相談まで。ご相談から公開までの流れもご紹介します。"
        path="/services"
      />
      <PageHero
        eyebrow="サービス"
        heading={
          <>
            必要なことだけを、
            <br />
            目的に合わせて整えます。
          </>
        }
        description="新規制作、リニューアル、保守運用、ドメイン・サーバーの準備、文章整理まで。今の状況と目的を一緒に整理し、無理なく成果につながる形をご提案します。"
        image="services-hero"
        imageAlt="夕方の商店街に並ぶ、あたたかい照明の店舗の様子"
      />
      <Breadcrumb current="サービス" />
      <Services />
      <Process />
      <FinalCta
        heading="どのメニューが合うか、一緒に整理しましょう"
        description="複数のメニューを組み合わせてのご相談も可能です。まずはお気軽にお問い合わせください。"
      />
    </>
  )
}

export default ServicesPage
