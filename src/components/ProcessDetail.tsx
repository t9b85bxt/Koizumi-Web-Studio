import { ClipboardList, LayoutTemplate, FileSignature, Rocket, LifeBuoy, type LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

type Step = {
  title: string
  duration: string
  icon: LucideIcon
  desc: string
  prepare: string[]
  handle: string[]
  point: string
}

const STEPS: Step[] = [
  {
    title: 'ヒアリング',
    duration: '目安 1〜3日',
    icon: ClipboardList,
    desc: '現状の課題やご要望、ご予算感を伺います。オンライン(Zoom・Google Meet等)またはお電話で、30分〜1時間程度お話しします。',
    prepare: ['今のお悩み・ご要望(箇条書きでも可)', '参考にしたいサイトがあれば共有', 'ご予算・公開希望時期の目安'],
    handle: ['ヒアリングシートに沿った質問', '日程調整・オンライン打ち合わせの設定', '概算お見積もりのご提示'],
    point: 'まだ内容が固まっていなくても大丈夫です。「何から考えればいいか分からない」という状態からご相談いただけます。',
  },
  {
    title: 'デモ提案',
    duration: '目安 3〜7日',
    icon: LayoutTemplate,
    desc: 'ヒアリング内容をもとに、実際に動くデモサイトを個別にお作りします。契約前にご覧いただけるので、完成イメージのズレを防げます。',
    prepare: ['掲載したい写真・文章素材(あれば)', 'デモをご覧になった率直なご感想'],
    handle: ['御社向けのデザイン・構成のご提案', 'スマホ・PCで確認できる動くデモサイトの制作', '修正ご希望のヒアリング'],
    point: 'デモは絵(モックアップ)ではなく実際に動くサイトなので、スマホでの見え方まで契約前に確認できます。',
  },
  {
    title: '契約・着手',
    duration: '即日〜数日',
    icon: FileSignature,
    desc: 'デモにご納得いただけたら、金額・納期・成果物の範囲を書面でご確認いただいたうえで、正式に制作を開始します。',
    prepare: ['契約内容のご確認', '正式にご依頼いただく旨のご連絡'],
    handle: ['お見積書・契約内容の書面提示', 'ご入金確認後、正式に制作着手'],
    point: '金額に含まれる範囲を事前に明確にしているので、契約後に想定外の追加請求が発生することは原則ありません。',
  },
  {
    title: '納品',
    duration: '目安 1〜2週間',
    icon: Rocket,
    desc: '最終確認いただいた内容で、本番サーバーへの公開設定を行います。公開後は表示速度や動作、リンク切れがないかまで確認します。',
    prepare: ['掲載内容の最終確認', 'スマホ・PCでの見え方チェック'],
    handle: ['本番サーバーへのアップロード作業', 'ドメイン・SSL(暗号化通信)の設定', '公開後の動作確認・表示速度チェック'],
    point: '公開作業もこちらで行うので、専門知識がなくても当日は最終確認をしていただくだけで大丈夫です。',
  },
  {
    title: '保守・運用',
    duration: '継続(任意)',
    icon: LifeBuoy,
    desc: '公開して終わりにせず、ご希望に応じて月額プランで継続的にサポートします。テキストや写真の差し替えなど、軽微な更新も承ります。',
    prepare: ['更新したい内容があれば随時ご連絡'],
    handle: ['サーバー・ドメイン・SSLの管理', '軽微な修正・更新作業', 'トラブル発生時の対応'],
    point: '保守プランへの加入は必須ではありません。ご不安な場合だけ、ご希望に応じて選んでいただけます。',
  },
]

function ProcessDetail() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-28 lg:pt-20 pb-16 lg:pb-24">
      <Reveal delay={0}>
        <p className="text-orange-600 font-semibold text-sm mb-2 text-center">PROCESS</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2 text-center">ご相談から公開までの流れ</h2>
        <p className="text-navy-600 mb-10 text-center">
          それぞれのステップで、準備いただくことと当方で対応することをまとめました。
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="hidden sm:flex items-center mb-44 px-4">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center text-center w-32">
                <div className="w-16 h-16 rounded-full bg-navy-900 text-white text-xl font-bold flex items-center justify-center mb-3">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold text-navy-800">{step.title}</p>
              </div>
              {index < STEPS.length - 1 && <div className="flex-1 h-px bg-navy-100 mx-4" />}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="space-y-6">
        {STEPS.map((step, index) => (
          <Reveal key={step.title} delay={150 + index * 50}>
            <div className="rounded-2xl border border-navy-100 overflow-hidden">
              <div className="bg-navy-900 text-white px-6 py-5 flex items-center gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-white/15 flex items-center justify-center font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <step.icon className="w-4 h-4" aria-hidden="true" />
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <span className="shrink-0 text-xs font-medium text-navy-100 bg-white/10 rounded-full px-3 py-1">
                  {step.duration}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-navy-600 leading-relaxed mb-5">{step.desc}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div className="rounded-lg bg-sky-50 p-4">
                    <p className="text-xs font-semibold text-navy-800 mb-2">お客さまにご準備いただくこと</p>
                    <ul className="space-y-1.5 text-sm text-navy-600">
                      {step.prepare.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-navy-400">・</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <p className="text-xs font-semibold text-navy-800 mb-2">当方で対応すること</p>
                    <ul className="space-y-1.5 text-sm text-navy-600">
                      {step.handle.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-orange-600">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border-l-4 border-l-orange-400 bg-white px-4 py-3">
                  <p className="text-xs font-semibold text-orange-600 mb-1">POINT</p>
                  <p className="text-sm text-navy-600 leading-relaxed">{step.point}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ProcessDetail
