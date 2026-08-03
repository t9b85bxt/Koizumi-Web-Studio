import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function CampaignBanner() {
  return (
    <section id="campaign" className="scroll-mt-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <Reveal delay={0}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg shadow-orange-100">
            <picture>
              <source srcSet="/campaign-banner.webp" type="image/webp" />
              <img
                src="/campaign-banner.jpg"
                alt="実績公開にご協力いただける企業様限定。通常30万円〜のところ99,000円〜(税込)、先着3社限定。"
                width={1600}
                height={900}
                loading="lazy"
                className="block w-full h-auto"
              />
            </picture>
            <Link
              to="/contact"
              aria-label="この価格で相談する"
              className="absolute left-1/2 bottom-[6%] w-[42%] h-[13%] -translate-x-1/2 rounded-full transition-colors hover:bg-black/5 active:bg-black/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CampaignBanner
