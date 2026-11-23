import { useState, type FormEvent } from 'react'
import { contact } from '../data/profile'
import { Chapter, Heading } from './Row'

type Field = 'nome' | 'email' | 'mensagem'
type Errors = Partial<Record<Field, string>>
type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'done'; ok: boolean; mailto: string }

// Chave pública lida no build (ver .env.example). Sem ela, o formulário oferece abrir o app de e-mail.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function sendEmail(data: { nome: string; email: string; subject: string; mensagem: string }): Promise<boolean> {
  if (!WEB3FORMS_KEY) return false
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `[Portfólio] ${data.subject}`,
        from_name: 'Portfólio — formulário de contato',
        name: data.nome,
        email: data.email,
        replyto: data.email,
        message: data.mensagem,
      }),
    })
    const json = (await res.json().catch(() => ({}))) as { success?: boolean }
    return res.ok && json.success === true
  } catch {
    return false
  }
}

/**
 * Formulário de contato: envia a mensagem automaticamente para o meu e-mail via Web3Forms.
 * Se o envio falhar ou a chave não estiver configurada, oferece um link mailto: já preenchido.
 */
export function Contact() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [botcheck, setBotcheck] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status.kind === 'sending') return
    const errs: Errors = {}
    if (!nome.trim()) errs.nome = 'Informe seu nome.'
    if (!email.trim()) errs.email = 'Informe seu e-mail para eu poder responder.'
    else if (!EMAIL_RE.test(email.trim())) errs.email = 'E-mail inválido.'
    if (!mensagem.trim()) errs.mensagem = 'Escreva uma mensagem.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    if (botcheck) return // honeypot preenchido → provável bot

    const subject = assunto.trim() || 'Contato pelo portfólio'
    const data = { nome: nome.trim(), email: email.trim(), subject, mensagem: mensagem.trim() }
    const texto = `Olá, Bruno! Meu nome é ${data.nome} (${data.email}).\n\n${data.mensagem}`
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(texto)}`

    setStatus({ kind: 'sending' })
    const ok = await sendEmail(data)
    setStatus({ kind: 'done', ok, mailto })
    if (ok) {
      setNome('')
      setEmail('')
      setAssunto('')
      setMensagem('')
    }
  }

  const done = status.kind === 'done' ? status : null

  return (
    <>
      <Chapter id="contato" label="Capítulo IV" title="Vamos" accent="conversar?" />
      <section className="row">
        <div className="l rv from-l">
          <Heading kicker="Contato" accent="Próximo" rest="capítulo" />
          <p className="desc" style={{ marginBottom: 26 }}>
            Aberto a oportunidades, projetos e trocas de conhecimento. Escreva sua mensagem e ela chega direto no meu
            e-mail.
          </p>
          <div className="contact-info">
            <div className="ci">
              <div className="kicker">E-mail</div>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="ci">
              <div className="kicker">WhatsApp</div>
              <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                {contact.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>
        <div className="num rv" aria-hidden="true">✉</div>
        <div className="r rv from-r">
          <form onSubmit={onSubmit} noValidate>
            <div className={`field${errors.nome ? ' err' : ''}`}>
              <label htmlFor="f-nome">Seu nome</label>
              <input id="f-nome" autoComplete="name" value={nome} onChange={(e) => setNome(e.target.value)} />
              <div className="msg">{errors.nome}</div>
            </div>
            <div className={`field${errors.email ? ' err' : ''}`}>
              <label htmlFor="f-email">Seu e-mail</label>
              <input
                id="f-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="msg">{errors.email}</div>
            </div>
            <div className="field">
              <label htmlFor="f-assunto">Assunto</label>
              <input
                id="f-assunto"
                placeholder="Oportunidade, projeto, parceria…"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              />
            </div>
            <div className={`field${errors.mensagem ? ' err' : ''}`}>
              <label htmlFor="f-msg">Mensagem</label>
              <textarea id="f-msg" rows={4} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
              <div className="msg">{errors.mensagem}</div>
            </div>
            {/* honeypot anti-spam: invisível para pessoas */}
            <input
              type="text"
              name="botcheck"
              className="hp"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={botcheck}
              onChange={(e) => setBotcheck(e.target.value)}
            />
            <button className="send" type="submit" disabled={status.kind === 'sending'}>
              {status.kind === 'sending' ? 'Enviando…' : 'Enviar mensagem →'}
            </button>
            <div className={`out${done ? ' show' : ''}`} aria-live="polite">
              {done &&
                (done.ok ? (
                  <>
                    <b>Mensagem enviada!</b> Obrigado pelo contato — respondo assim que possível.
                  </>
                ) : (
                  <>
                    <b>Não foi possível enviar automaticamente.</b> Use o botão abaixo para me mandar a mensagem já
                    preenchida pelo seu e-mail.
                    <div className="acts">
                      <a className="go" href={done.mailto} target="_blank" rel="noopener noreferrer">
                        Abrir no meu e-mail →
                      </a>
                    </div>
                  </>
                ))}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
