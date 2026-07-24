import SeoHead from '../components/SeoHead'
import PageHero from '../components/PageHero'
import Breadcrumb from '../components/Breadcrumb'
import About from '../components/About'
import Values from '../components/Values'
import FinalCta from '../components/FinalCta'

function AboutPage() {
  return (
    <>
      <SeoHead
        title="運営者について | Koizumi Web Studio"
        description="Koizumi Web Studioの運営方針とできること。料金公開・著作権譲渡・専門用語を使わない説明など、制作にあたって大事にしていることをご紹介します。"
        path="/about"
      />
      <PageHero
        eyebrow="私について"
        heading={
          <>
            Webで迷わないための、
            <br />
            身近な制作パートナー
          </>
        }
        description="料金は最初から全て公開し、著作権はお客さま名義へ譲渡、ドメイン(URL)もお客さま名義で取得する形で制作を進めます。業種や拠点を限定せず、全国のお客さまとオンラインでやり取りしながら対応しています。"
        image="about-hero"
        imageAlt="窓辺のカフェで、ノートパソコンを見ながら打ち合わせをする二人の様子"
      />
      <Breadcrumb current="私について" />
      <About />
      <Values />
      <FinalCta
        heading="まずは無料でご相談ください"
        description="ご依頼前のご相談・お見積もりは無料です。どんな小さなことでもお気軽にお問い合わせください。"
      />
    </>
  )
}

export default AboutPage
