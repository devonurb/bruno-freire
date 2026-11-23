# Bruno Lucas Almeida Freire — Portfólio

Portfólio profissional em formato de **linha do tempo vertical**: ao rolar a página, o visitante percorre identidade, stack, trajetória, projetos e contato.

**Desenvolvedor Java | Full-Stack Engineer** — Java 21 • Spring Boot • React • TypeScript • PostgreSQL • Docker

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- CSS puro com variáveis (tema claro/escuro) — sem framework de UI
- Ilustrações em SVG como componentes React
- Deploy automático no GitHub Pages via GitHub Actions

## Funcionalidades

- Linha do tempo com faixa central, régua e **barra de progresso de leitura**
- Animações de entrada conforme a rolagem (`IntersectionObserver`), respeitando `prefers-reduced-motion`
- Ícones das tecnologias em cinza que **acendem na cor real** no hover/toque
- **Modo claro/escuro** com transição circular (View Transitions API), atalho de teclado `T` e preferência salva
- Formulário de contato que monta a mensagem para **e-mail** ou **WhatsApp**
- Layout responsivo (no celular a faixa vai para a lateral)

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # serve o build localmente
npm run lint
```

## Editando o conteúdo

Todo o texto fica em **`src/data/profile.ts`**: identidade, sobre mim, interesses, experiências, projetos e contato.
Os projetos atuais são **exemplos** — substitua pelos reais e preencha os links.

## Estrutura

```
src/
├── App.tsx                    # monta a linha do tempo
├── data/profile.ts            # conteúdo do portfólio
├── components/
│   ├── Row.tsx                # "parada" da linha do tempo (texto | número | visual)
│   ├── Hero.tsx, Stack.tsx, Sections.tsx, Contact.tsx, Nav.tsx, ThemeToggle.tsx, Card.tsx
│   └── illustrations/         # SVGs (detecção de veículos, camadas, cursos…)
├── hooks/                     # useTheme, useReveal, useScrollSpy
├── lib/highlight.tsx          # realce de sintaxe dos cartões de código
├── styles/global.css
└── assets/icons/              # ícones Devicon (MIT)
```

## Deploy (GitHub Pages)

1. Em **Settings → Pages**, selecione **Source: GitHub Actions**.
2. Cada push na `main` publica o site em `https://devonurb.github.io/bruno-freire/`.

O `base: './'` do `vite.config.ts` permite publicar também na Vercel, Netlify ou em domínio próprio sem alterações.

## Contato

- E-mail: brunolucasafreire@gmail.com
- WhatsApp: +55 83 98113-1090
