import Reveal from './Reveal'

const ROWS = [
  {
    axis: '料金',
    typical: '見積もりを取らないと分からない。追加費用が発生しがち。',
    ours: '最初から全部公開。追加請求は原則ありません。',
  },
  {
    axis: '著作権',
    typical: '制作会社に残ることがある。',
    ours: 'お客さま名義へ譲渡します。',
  },
  {
    axis: 'ドメイン',
    typical: '制作会社名義で管理されるケースがある。',
    ours: 'お客さま名義で取得します。',
  },
  {
    axis: '対応スピード',
    typical: '窓口が混み合い、返信に数日かかることも。',
    ours: '原則平日24時間以内に返信します。',
  },
  {
    axis: '納品後',
    typical: '更新のたびに都度見積もり。連絡が取りづらくなることも。',
    ours: '月額保守プランで継続的に伴走します。',
  },
]

function Comparison() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <Reveal delay={0}>
        <p className="text-orange-600 font-semibold text-sm mb-2 text-center">他社との違い</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2 text-center">
          一般的な制作会社の例と比べて
        </h2>
        <p className="text-navy-600 mb-10 text-center">
          特定の会社を指すものではなく、よくあるケースの一例としてご紹介します。
        </p>
      </Reveal>

      <Reveal delay={150}>
        <div className="overflow-x-auto rounded-xl border border-navy-100">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-navy-50 text-navy-800">
                <th className="text-left font-semibold px-4 py-3 w-28">項目</th>
                <th className="text-left font-semibold px-4 py-3">一般的な制作会社の例</th>
                <th className="text-left font-semibold px-4 py-3 bg-orange-50 text-orange-600">
                  Koizumi Web Studio
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.axis} className="border-t border-navy-100">
                  <td className="px-4 py-4 font-semibold text-navy-800 align-top">{row.axis}</td>
                  <td className="px-4 py-4 text-navy-600 align-top">{row.typical}</td>
                  <td className="px-4 py-4 text-navy-800 align-top bg-orange-50/40">{row.ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  )
}

export default Comparison
