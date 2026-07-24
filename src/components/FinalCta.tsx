import { Link } from 'react-router-dom'
import Reveal from './Reveal'

type FinalCtaProps = {
  heading: string
  description?: string
  ctaLabel?: string
}

function FinalCta({ heading, description, ctaLabel = 'まずは話を聞いてみる' }: FinalCtaProps) {
  return (
    <section className="bg-navy-900 text-white">
      <Reveal delay={0}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 lg:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{heading}</h2>
          {description && <p className="text-navy-100 leading-relaxed mb-8">{description}</p>}
          <Link
            to="/contact"
            className="inline-block rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 transition hover:scale-105 active:scale-95"
          >
            {ctaLabel} →
          </Link>
        </div>
      </Reveal>
    </section>
  )
}

export default FinalCta
