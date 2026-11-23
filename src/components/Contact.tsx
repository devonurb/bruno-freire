import { useState, type FormEvent } from 'react'
import { contact } from '../data/profile'
import { Chapter, Heading } from './Row'

type Channel = 'mail' | 'wpp'
type Errors = Partial<Record<'nome' | 'mensagem', string>>

/**
 * Formulário que monta a mensagem e abre o e-mail (mailto:) ou o WhatsApp (wa.me)
 * já preenchidos. Nada é enviado sem a confirmação do visitante no app escolhido.
 */
export function Contact() {
  const [channel, setChannel] = useState<Channel>('mail')
  const [nome, setNome] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [ready, setReady] = useState<{ url: string; texto: string } | null>(null)
  const [copyMsg, setCopyMsg] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs: Errors = {}
    if (!nome.trim()) errs.nome = 'Informe seu nome.'
    if (!mensagem.trim()) errs.mensagem = 'Escreva uma mensagem.'
    setErrors(errs)
    if (Object.keys(errs).length) return

    const subject = assunto.trim() || 'Contato pelo portfólio'
    const texto = `Olá, Bruno! Meu nome é ${nome.trim()}.\n\n${mensagem.trim()}`
    const url =
      channel === 'mail'
        ? `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(texto)}`
        : `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(`*${subject}*\n\n${texto}`)}`
    setReady({ url, texto })
    setCopyMsg('')
  }

  const copy = async () => {
    if (!ready) return
    try {
      await navigator.clipboard.writeText(ready.texto)
      setCopyMsg('Texto copiado.')
    } catch {
      setCopyMsg('Não foi possível copiar automaticamente.')
    }
  }

  const switchChannel = (c: Channel) => {
    setChannel(c)
    setReady(null)
  }

  return (
    <>
      <Chapter id="contato" label="Capítulo IV" title="Vamos" accent="conversar?" />
      <section className="row">
        <div className="l rv from-l">
          <Heading kicker="Contato" accent="Próximo" rest="capítulo" />
          <p className="desc" style={{ marginBottom: 26 }}>
            Aberto a oportunidades, projetos e trocas de conhecimento. Escolha o canal, escreva sua mensagem e ela chega
            até mim por e-mail ou WhatsApp.
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
            <div className="channel" role="radiogroup" aria-label="Canal de contato">
              <input type="radio" name="ch" id="ch-mail" checked={channel === 'mail'} onChange={() => switchChannel('mail')} />
              <label htmlFor="ch-mail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" /><path d="M3 6l9 7 9-7" /></svg>
                E-mail
              </label>
              <input type="radio" name="ch" id="ch-wpp" checked={channel === 'wpp'} onChange={() => switchChannel('wpp')} />
              <label htmlFor="ch-wpp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.3A8.5 8.5 0 1 1 20.5 11.5z" /></svg>
                WhatsApp
              </label>
            </div>
            <div className={`field${errors.nome ? ' err' : ''}`}>
              <label htmlFor="f-nome">Seu nome</label>
              <input id="f-nome" autoComplete="name" value={nome} onChange={(e) => setNome(e.target.value)} />
              <div className="msg">{errors.nome}</div>
            </div>
            <div className="field">
              <label htmlFor="f-assunto">Assunto</label>
              <input id="f-assunto" placeholder="Oportunidade, projeto, parceria…" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
            </div>
            <div className={`field${errors.mensagem ? ' err' : ''}`}>
              <label htmlFor="f-msg">Mensagem</label>
              <textarea id="f-msg" rows={4} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
              <div className="msg">{errors.mensagem}</div>
            </div>
            <button className="send" type="submit">
              {channel === 'mail' ? 'Preparar mensagem por e-mail →' : 'Preparar mensagem no WhatsApp →'}
            </button>
            <div className={`out${ready ? ' show' : ''}`} aria-live="polite">
              {ready && (
                <>
                  <b>Mensagem pronta.</b> Clique abaixo para abrir o{' '}
                  {channel === 'mail' ? 'seu aplicativo de e-mail' : 'WhatsApp'} com o texto preenchido e enviar para{' '}
                  <b>{channel === 'mail' ? contact.email : contact.whatsappDisplay}</b>.
                  <div className="acts">
                    <a className="go" href={ready.url} target="_blank" rel="noopener noreferrer">
                      {channel === 'mail' ? 'Abrir no meu e-mail' : 'Abrir no WhatsApp'} →
                    </a>
                    <button type="button" onClick={copy}>Copiar texto</button>
                  </div>
                  <div className="caption">{copyMsg}</div>
                </>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
