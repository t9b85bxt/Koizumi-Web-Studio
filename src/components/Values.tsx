import Reveal from './Reveal'
import { VALUES } from '../data/valuesData'

function Values() {
  return (
    <section className="bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <Reveal delay={0}>
          <p className="text-orange-600 font-semibold text-sm mb-2 text-center">私のスタンス</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-10 text-center">
            制作にあたって大事にしていること
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((value, index) => (
              <div key={value.title} className="relative overflow-hidden rounded-xl bg-white border border-navy-100 p-5">
                <span
                  aria-hidden="true"
                  className="absolute -top-2 -right-1 text-5xl font-bold text-navy-50 select-none"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="relative w-11 h-11 rounded-full bg-navy-50 text-navy-600 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="relative font-semibold text-navy-800 mb-2">{value.title}</h3>
                <p className="relative text-sm text-navy-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Values
