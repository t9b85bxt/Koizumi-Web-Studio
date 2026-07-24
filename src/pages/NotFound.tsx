import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
      <Helmet>
        <title>ページが見つかりません | Koizumi Web Studio</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <p className="text-orange-600 font-semibold text-sm mb-2">404</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">ページが見つかりませんでした</h1>
      <p className="text-navy-600 mb-8">
        お探しのページは移動または削除された可能性があります。URLをご確認いただくか、トップページからお探しください。
      </p>
      <Link
        to="/"
        className="inline-block rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3.5 transition hover:scale-105 active:scale-95"
      >
        トップページへ戻る
      </Link>
    </div>
  )
}

export default NotFound
