import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../siteConfig'

type BreadcrumbProps = {
  current: string
}

function Breadcrumb({ current }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: current },
    ],
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="パンくずリスト" className="text-xs text-navy-600">
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/" className="hover:text-orange-600 transition-colors">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy-800 font-medium">
            {current}
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
