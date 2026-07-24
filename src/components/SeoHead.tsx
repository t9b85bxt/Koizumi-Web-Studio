import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../siteConfig'

type SeoHeadProps = {
  title: string
  description: string
  path: string
  jsonLd?: object | object[]
}

function SeoHead({ title, description, path, jsonLd }: SeoHeadProps) {
  const canonicalUrl = `${SITE_URL}${path}`
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta property="og:site_name" content="Koizumi Web Studio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLdList.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  )
}

export default SeoHead
