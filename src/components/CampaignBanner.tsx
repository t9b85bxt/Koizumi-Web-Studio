import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function CampaignBanner() {
  return (
    <section id="campaign" className="scroll-mt-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <Reveal delay={0}>
          <Link
            to="/contact"
            className="block rounded-[2.5rem] overflow-hidden shadow-lg shadow-orange-100 transition hover:scale-[1.01] active:scale-[0.99]"
          >
            <picture>
              <source srcSet="/campaign-banner.webp" type="image/webp" />
              <img
                src="/campaign-banner.jpg"
                alt="実績公開にご協力いただける企業様限定。通常30万円〜のところ99,000円〜(税込)、先着3社限定。この価格で相談する。"
                width={1600}
                height={900}
                loading="lazy"
                className="w-full h-auto"
              />
            </picture>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default CampaignBanner
