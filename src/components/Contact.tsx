import { useState, type FormEvent } from 'react'
import { MessageCircle, Mail } from 'lucide-react'
import { CONTACT_EMAIL, LINE_URL, WEB3FORMS_ACCESS_KEY } from '../siteConfig'
import Reveal from './Reveal'

const MESSAGE_MAX_LENGTH = 500

function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `【HP制作のご相談】${form.company || form.name}様より`,
          from_name: form.name,
          email: form.email,
          '会社名・屋号': form.company,
          電話番号: form.phone,
          message: form.message,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', company: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <Reveal delay={0}>
        <p className="text-navy-600 mb-6 text-center">
          ご相談・お見積もりは無料です。原則平日24時間以内に必ずご返信します。
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white p-5 flex items-center gap-4 transition hover:scale-[1.02] active:scale-95"
          >
            <div className="shrink-0 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold mb-0.5">LINEで相談</h3>
              <p className="text-sm text-white/90">気軽な質問はこちらから、すぐに送れます。</p>
            </div>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-xl bg-navy-800 hover:bg-navy-900 text-white p-5 flex items-center gap-4 transition hover:scale-[1.02] active:scale-95"
          >
            <div className="shrink-0 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold mb-0.5">メールで直接送る</h3>
              <p className="text-sm text-white/90 break-all">{CONTACT_EMAIL}</p>
            </div>
          </a>
        </div>
      </Reveal>

      <Reveal delay={150}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-800 mb-1.5">
            お名前 <span className="text-orange-600">必須</span>
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="例:山田 太郎"
            value={form.name}
            onChange={handleChange('name')}
            className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy-800 mb-1.5">
            会社名・屋号 <span className="text-navy-400">任意</span>
          </label>
          <input
            id="company"
            type="text"
            placeholder="例:株式会社◯◯"
            value={form.company}
            onChange={handleChange('company')}
            className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-1.5">
              メールアドレス <span className="text-orange-600">必須</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="example@example.com"
              value={form.email}
              onChange={handleChange('email')}
              className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-navy-800 mb-1.5">
              電話番号 <span className="text-orange-600">必須</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="090-0000-0000"
              value={form.phone}
              onChange={handleChange('phone')}
              className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-1.5">
            相談内容 <span className="text-orange-600">必須</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            maxLength={MESSAGE_MAX_LENGTH}
            placeholder="ご検討中の内容・現状・気になる点など、お気軽にお書きください。"
            value={form.message}
            onChange={handleChange('message')}
            className="w-full rounded-lg border border-navy-100 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <p className="text-xs text-navy-600 text-right mt-1">
            {form.message.length} / {MESSAGE_MAX_LENGTH}
          </p>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 transition hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:hover:scale-100"
        >
          {status === 'submitting' ? '送信中...' : '送信する'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-navy-700 text-center bg-sky-50 rounded-lg py-3 px-4">
            送信しました。ご連絡ありがとうございます。原則平日24時間以内にご返信します。
          </p>
        )}
        {status === 'error' && (
          <p className="text-xs text-navy-600 text-center bg-sky-50 rounded-lg py-3 px-4">
            送信に失敗しました。お手数ですが{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-600 underline">
              {CONTACT_EMAIL}
            </a>{' '}
            まで直接ご連絡ください。
          </p>
        )}
      </form>
      </Reveal>
    </section>
  )
}

export default Contact
