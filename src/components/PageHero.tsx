import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  heading: ReactNode
  description: string
  image: string
  imageAlt: string
}

function PageHero({ eyebrow, heading, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <picture>
        <source srcSet={`/${image}.webp`} type="image/webp" />
        <img
          src={`/${image}.jpg`}
          alt={imageAlt}
          width={1600}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/70 to-navy-900/90 md:bg-gradient-to-r md:from-navy-900/95 md:via-navy-900/75 md:to-navy-900/20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="max-w-xl">
          <p className="text-orange-400 font-semibold text-sm mb-3">{eyebrow}</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">{heading}</h1>
          <p className="text-navy-100 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default PageHero
