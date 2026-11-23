/**
 * Todo o conteúdo do portfólio fica aqui.
 * Para atualizar textos, experiências ou projetos, edite apenas este arquivo.
 */
import java from '../assets/icons/java.svg'
import spring from '../assets/icons/spring.svg'
import react from '../assets/icons/react.svg'
import typescript from '../assets/icons/typescript.svg'
import javascript from '../assets/icons/javascript.svg'
import postgresql from '../assets/icons/postgresql.svg'
import docker from '../assets/icons/docker.svg'
import git from '../assets/icons/git.svg'
import github from '../assets/icons/github.svg'
import python from '../assets/icons/python.svg'

export const profile = {
  firstLines: ['Bruno Lucas', 'Almeida'],
  lastName: 'Freire',
  role: { before: 'Desenvolvedor ', accent: 'Java', after: ' | Full-Stack Engineer' },
  badges: ['Java', 'Spring Boot', 'Software Engineering', 'Backend Development', 'Continuous Learning'],
  building: [
    'APIs REST com Java 21 & Spring Boot',
    'Interfaces com React & TypeScript',
    'Modelagem de dados em PostgreSQL',
    'Ambientes conteinerizados com Docker',
  ],
  year: '2026',
}

export const identity = [
  'Um profissional apaixonado por tecnologia, com mentalidade analítica e orientado à engenharia de software, que busca transformar problemas complexos em soluções eficientes, escaláveis e sustentáveis.',
  'Mais do que alguém que simplesmente escreve código: um profissional que entende o propósito do software, participa das decisões técnicas e se preocupa com a qualidade daquilo que entrega.',
]

export const identityCode = `public record Engineer(
    String nome,
    Mindset mindset,
    List<String> valores
) {
  // não apenas código: propósito
  public Solution resolver(Problem p) {
    return p.entender()
            .analisarCenarios()
            .decidirTecnicamente()
            .construir("eficiente",
                       "escalável",
                       "sustentável");
  }
}`

export const stackLine = {
  accent: 'Desenvolvedor Full Stack Java',
  rest: ' | Java 21 • Spring Boot • React • TypeScript | REST APIs • PostgreSQL • Docker | Software Engineering & Clean Architecture',
}

export type Tech = { name: string; icon: string }
export const stack: Tech[] = [
  { name: 'Java', icon: java },
  { name: 'Spring Boot', icon: spring },
  { name: 'React', icon: react },
  { name: 'TypeScript', icon: typescript },
  { name: 'JavaScript', icon: javascript },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'Docker', icon: docker },
  { name: 'Git', icon: git },
  { name: 'GitHub', icon: github },
  { name: 'Python', icon: python },
]

export const about = [
  'Sou profissional de tecnologia apaixonado por desenvolvimento de software, inovação e engenharia de soluções. Acredito que desenvolver software vai muito além de escrever código: envolve compreender problemas, analisar cenários, tomar decisões técnicas e construir soluções que realmente gerem valor.',
  'Minha atuação está direcionada ao desenvolvimento Full Stack, com foco no ecossistema Java, utilizando Java, Spring Boot, React, TypeScript e PostgreSQL. Tenho interesse especial em arquitetura de software, APIs REST, integração entre sistemas, modelagem de dados, boas práticas, segurança e aplicações escaláveis e de fácil manutenção.',
  'Minha mentalidade é orientada à evolução contínua: aprofundar conhecimentos, acompanhar novas tecnologias e transformar aprendizado em projetos e experiências práticas. Acredito que um bom desenvolvedor não é definido pela quantidade de tecnologias que conhece, mas pela capacidade de resolver problemas, aprender rapidamente, colaborar e assumir responsabilidade pela qualidade das entregas.',
  'Valorizo ambientes colaborativos, troca de conhecimento, comunicação transparente, pensamento crítico e autonomia. Meu objetivo é evoluir continuamente como engenheiro de software, contribuindo para projetos desafiadores e construindo uma carreira pautada pela excelência técnica, visão sistêmica e aprendizado constante.',
]

export const interests = [
  'Java | Spring Boot | Spring Security',
  'React | TypeScript | JavaScript',
  'PostgreSQL | SQL | Modelagem de Dados',
  'REST APIs | Integrações | Microservices',
  'Docker | Git | GitHub',
  'Clean Code | SOLID | Design Patterns',
  'Software Architecture | Domain-Driven Design',
  'Inteligência Artificial aplicada ao desenvolvimento de software',
]

export type Experience = {
  num: [string, string]
  numLabel: string
  kicker: string
  title: [string, string]
  where: string
  period: string
  /** Parágrafos aceitam **negrito** */
  paragraphs: string[]
  learned?: string
  trophy?: string
  chips: string[]
  visual: 'yolo' | 'courses'
  caption: string
  textSide: 'left' | 'right'
  watermark?: string
}

export const experiences: Experience[] = [
  {
    num: ['20', '24'],
    numLabel: 'ABR — DEZ',
    kicker: 'Estágio · Desenvolvimento de software',
    title: ['STTP', 'Mobilidade'],
    where: 'Superintendência de Trânsito e Transporte Público',
    period: 'abr/2024 → dez/2024',
    paragraphs: [
      'Atuei como suporte de software em projetos do departamento e participei de projetos de **machine learning** voltados à identificação e contagem de veículos em trechos da cidade, utilizando **YOLO com Python**.',
      'No mesmo período desenvolvi um projeto freelancer de sistema de sorteio com **PHP e MySQL**.',
    ],
    learned:
      'A lógica de programação consolidada no projeto de sorteio e as habilidades de colaboração adquiridas no suporte junto ao time de tecnologia.',
    chips: ['Python', 'YOLO', 'Machine Learning', 'PHP', 'MySQL', 'Suporte de software'],
    visual: 'yolo',
    caption: 'fig. 05 — visão computacional aplicada à mobilidade urbana (ilustração)',
    textSide: 'right',
  },
  {
    num: ['HO', 'JE'],
    numLabel: 'ATUAL',
    kicker: 'Professor de tecnologia · Atual',
    title: ['SECTI', 'Educação'],
    where: 'Secretaria de Ciência, Tecnologia e Inovação',
    period: 'atuação atual',
    paragraphs: [
      'Comecei como monitor dos cursos gratuitos que a secretaria oferece para a população que não tem acesso às tecnologias do dia a dia — e hoje atuo como professor.',
      'Ministro **Letramento Digital Básico**, **Banco de Dados**, **Canva/CapCut** e **Web Design**, traduzindo conceitos técnicos em linguagem acessível.',
    ],
    trophy: 'Projeto campeão · Smart City',
    chips: ['Ensino', 'Banco de Dados', 'Web Design', 'Comunicação', 'Inclusão digital'],
    visual: 'courses',
    caption: 'fig. 06 — trilhas que ministro para a comunidade',
    textSide: 'left',
    watermark: 'SMART CITY',
  },
]

export type ProjectVisual =
  | { kind: 'code'; file: string; code: string }
  | { kind: 'dashboard'; file: string }

export type Project = {
  num: string
  kicker: string
  name: [string, string]
  description: string
  highlights: string[]
  chips: string[]
  links: { label: string; href: string }[]
  visual: ProjectVisual
  textSide: 'left' | 'right'
  watermark?: string
}

/**
 * ATENÇÃO: projetos de EXEMPLO (fictícios).
 * Substitua pelos seus projetos reais e preencha os links antes de divulgar.
 */
export const projects: Project[] = [
  {
    num: '01',
    kicker: 'API REST · Backend',
    name: ['Fleet', 'Flow'],
    description:
      'API para monitoramento de tráfego urbano: recebe contagens de veículos por trecho, consolida séries históricas e expõe indicadores para painéis de mobilidade.',
    highlights: [
      'Arquitetura hexagonal com Spring Boot 3 e Java 21',
      'Consultas agregadas otimizadas em PostgreSQL',
      'Documentação OpenAPI e testes com Testcontainers',
    ],
    chips: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker'],
    links: [
      { label: 'Código', href: '#' },
      { label: 'Detalhes', href: '#' },
    ],
    visual: {
      kind: 'code',
      file: 'GET /api/v1/trechos/42/contagens',
      code: `// 200 OK · 38ms
{
  "trecho": "Av. Floriano Peixoto",
  "periodo": "2026-11-23",
  "total": 12874,
  "pico": { "hora": "18:00", "veiculos": 1432 },
  "porTipo": {
    "carro": 9120, "moto": 2851,
    "onibus": 903
  }
}`,
    },
    textSide: 'left',
  },
  {
    num: '02',
    kicker: 'Full Stack · Web App',
    name: ['Edu', 'Track'],
    description:
      'Plataforma para gestão de cursos gratuitos de inclusão digital: matrículas, turmas, frequência e emissão de certificados, pensada para secretarias e ONGs.',
    highlights: [
      'Front-end em React + TypeScript com componentes reutilizáveis',
      'Autenticação JWT e perfis de acesso com Spring Security',
      'Relatórios de frequência gerados a partir do PostgreSQL',
    ],
    chips: ['React', 'TypeScript', 'Spring Security', 'PostgreSQL'],
    links: [
      { label: 'Código', href: '#' },
      { label: 'Demo', href: '#' },
    ],
    visual: { kind: 'dashboard', file: 'edutrack.app/turmas' },
    textSide: 'right',
  },
  {
    num: '03',
    kicker: 'Microsserviço · Domain-Driven Design',
    name: ['Pay', 'Ledger'],
    description:
      'Microsserviço de lançamentos financeiros com modelagem orientada a domínio, garantindo consistência, idempotência e trilha de auditoria para cada transação.',
    highlights: [
      'Agregados, value objects e eventos de domínio',
      'Idempotência por chave e controle transacional',
      'Pipeline de CI com testes e build de imagem Docker',
    ],
    chips: ['Spring Boot', 'DDD', 'Microservices', 'GitHub Actions'],
    links: [
      { label: 'Código', href: '#' },
      { label: 'Arquitetura', href: '#' },
    ],
    visual: {
      kind: 'code',
      file: 'domain/Lancamento.java',
      code: `public final class Lancamento {

  private final LancamentoId id;
  private final Dinheiro valor;
  private Status status = Status.PENDENTE;

  public DomainEvent confirmar() {
    if (status != Status.PENDENTE)
      throw new RegraDeNegocioException(
        "Lançamento já processado");
    status = Status.CONFIRMADO;
    return new LancamentoConfirmado(id, valor);
  }
}`,
    },
    textSide: 'left',
    watermark: 'DDD',
  },
  {
    num: '04',
    kicker: 'IA aplicada ao desenvolvimento',
    name: ['Dev', 'Assist'],
    description:
      'Ferramenta de linha de comando que usa modelos de linguagem para revisar Pull Requests de projetos Spring, apontando problemas de performance, segurança e boas práticas.',
    highlights: [
      'Integração com a API do GitHub para comentar em PRs',
      'Regras de análise baseadas em Clean Code e SOLID',
      'Execução via container Docker em pipelines de CI',
    ],
    chips: ['Java 21', 'IA / LLM', 'GitHub API', 'Docker'],
    links: [
      { label: 'Código', href: '#' },
      { label: 'Documentação', href: '#' },
    ],
    visual: {
      kind: 'code',
      file: 'terminal — devassist review',
      code: `$ devassist review src/main/java --diff main
// analisando 14 arquivos alterados…

✖ UsuarioService.java:48
  consulta N+1 em findPedidos()
  sugestão: usar JOIN FETCH
! PedidoController.java:22
  validação ausente em @RequestBody
✔ 12 arquivos sem apontamentos

// resumo enviado ao Pull Request #87`,
    },
    textSide: 'right',
  },
]

export const contact = {
  email: 'brunolucasafreire@gmail.com',
  whatsappDisplay: '+55 83 98113-1090',
  whatsappNumber: '5583981131090',
}

export const navLinks = [
  { id: 'identidade', label: 'Identidade' },
  { id: 'stack', label: 'Stack' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
]
