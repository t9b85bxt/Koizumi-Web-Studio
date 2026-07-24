import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MobileCtaBar from './MobileCtaBar'

function Layout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900 focus:shadow-lg"
      >
        メインコンテンツへスキップ
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="pb-16 lg:pb-0 outline-none">
        <Outlet />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}

export default Layout
