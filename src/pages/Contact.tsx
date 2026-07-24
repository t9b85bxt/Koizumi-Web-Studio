import SeoHead from '../components/SeoHead'
import PageHero from '../components/PageHero'
import Breadcrumb from '../components/Breadcrumb'
import Contact from '../components/Contact'

function ContactPage() {
  return (
    <>
      <SeoHead
        title="無料相談・お問い合わせ | Koizumi Web Studio"
        description="ホームページ制作のご相談・お見積もりは無料です。LINE・メール・フォームからお気軽にお問い合わせください。原則平日24時間以内にご返信します。"
        path="/contact"
      />
      <PageHero
        eyebrow="お問い合わせ"
        heading="お問い合わせ"
        description="予算や内容が固まっていない段階でも大丈夫です。今の状況や困っていることを伺いながら、必要なことを一緒に整理します。"
        image="contact-hero"
        imageAlt="ノートパソコンとスマートフォンでメッセージのやり取り画面が表示されている様子"
      />
      <Breadcrumb current="お問い合わせ" />
      <Contact />
    </>
  )
}

export default ContactPage
