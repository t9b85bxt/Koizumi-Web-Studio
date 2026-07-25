import { WEB3FORMS_ACCESS_KEY } from '../../src/siteConfig'

interface Env {
  TURNSTILE_SECRET_KEY: string
}

interface RequestContext {
  request: Request
  env: Env
}

type ContactPayload = {
  name?: string
  company?: string
  email?: string
  phone?: string
  message?: string
  turnstileToken?: string
}

type TurnstileVerifyResponse = {
  success: boolean
}

export const onRequestPost = async ({ request, env }: RequestContext): Promise<Response> => {
  const payload = (await request.json()) as ContactPayload

  if (!payload.turnstileToken || !payload.name || !payload.email || !payload.message) {
    return Response.json({ success: false, message: '必須項目が不足しています。' }, { status: 400 })
  }

  const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: payload.turnstileToken,
      remoteip: request.headers.get('CF-Connecting-IP') ?? undefined,
    }),
  })
  const verifyData = (await verifyRes.json()) as TurnstileVerifyResponse

  if (!verifyData.success) {
    return Response.json(
      { success: false, message: '認証に失敗しました。もう一度お試しください。' },
      { status: 400 },
    )
  }

  const web3formsRes = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `【HP制作のご相談】${payload.company || payload.name}様より`,
      from_name: payload.name,
      email: payload.email,
      '会社名・屋号': payload.company,
      電話番号: payload.phone,
      message: payload.message,
    }),
  })
  const web3formsData = await web3formsRes.json()

  return Response.json(web3formsData, { status: web3formsRes.ok ? 200 : 502 })
}
