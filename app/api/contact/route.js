import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request) {
  let body

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Neispravan sadržaj zahtjeva.' }, { status: 400 })
  }

  const name = (body?.name ?? '').toString().trim()
  const email = (body?.email ?? '').toString().trim()
  const phone = (body?.phone ?? '').toString().trim()
  const message = (body?.message ?? '').toString().trim()
  const website = (body?.website ?? '').toString().trim()

  if (website) {
    return NextResponse.json({ message: 'Poruka je uspješno poslana.' })
  }

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: 'Unesi ispravno ime.' }, { status: 400 })
  }

  if (!isValidEmail(email) || email.length > 160) {
    return NextResponse.json({ error: 'Unesi ispravnu email adresu.' }, { status: 400 })
  }

  if (phone.length > 40) {
    return NextResponse.json({ error: 'Unesi ispravan broj telefona.' }, { status: 400 })
  }

  if (message.length < 20 || message.length > 4000) {
    return NextResponse.json({ error: 'Unesi poruku od 20 do 4000 znakova.' }, { status: 400 })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM
  const to = process.env.CONTACT_TO?.split(',').map((value) => value.trim()).filter(Boolean)

  if (!resendApiKey || !from || !to?.length) {
    return NextResponse.json(
      { error: 'Email još nije postavljen. Dodaj potrebne varijable okruženja i pokušaj ponovno.' },
      { status: 500 },
    )
  }

  const resend = new Resend(resendApiKey)

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = phone ? escapeHtml(phone) : 'Nije navedeno'
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">Nova poruka preko White Belt kontakt forme</h2>
      <p><strong>Ime:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Telefon:</strong> ${safePhone}</p>
      <p><strong>Poruka:</strong><br />${safeMessage}</p>
    </div>
  `

  const text = [
    'Nova poruka preko White Belt kontakt forme',
    '',
    `Ime: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phone || 'Nije navedeno'}`,
    '',
    'Poruka:',
    message,
  ].join('\n')

  const { data, error } = await resend.emails.send(
    {
      from,
      to,
      subject: `Nova prijava preko kontakt forme - ${name}`,
      replyTo: email,
      html,
      text,
    },
    {
      idempotencyKey: `contact-inquiry/${Date.now()}`,
    },
  )

  if (error) {
    return NextResponse.json({ error: error.message || 'Trenutačno nije moguće poslati poruku.' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Poruka je uspješno poslana.', data })
}
