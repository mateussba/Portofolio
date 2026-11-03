# Portfólio — Mateus

Base de portfólio em Astro e TypeScript, com CSS responsivo e sem framework JavaScript no navegador.

## Desenvolvimento

Requer Node.js 22.12 ou superior.

```bash
npm install
npm run dev
```

Acesse o endereço local informado pelo Astro (normalmente http://localhost:4321).

```bash
npm run check   # Verificação de tipos e componentes Astro
npm run build   # Gera o site estático em dist/
npm run preview # Visualiza o build localmente
```

## Personalização

- `src/data/portfolio.ts`: nome, apresentação, sobre, tecnologias, contatos e projetos.
- `src/pages/index.astro`: estrutura das seções e título principal.
- `src/components/ProjectCard.astro`: card e ilustrações dos projetos.
- `src/layouts/BaseLayout.astro`: documento HTML, metadados e tema inicial.
- `src/styles/global.css`: cores, tipografia, layouts, animações e responsividade.
- `public/favicon.svg`: ícone do site.
- `public/images/wood-gray.png`: textura de madeira cinza fornecida pelo usuário, aplicada no site.
- `public/images/walnut.webp`: textura original de nogueira, preservada como alternativa.
- `design/wood-texture-prompt.txt`: prompt da textura.

Os três projetos são exemplos visuais, não trabalhos reais. Substitua suas informações e adicione `url` e `source` para exibir os links. Os contatos ficam ocultos até que seus endereços sejam preenchidos. O texto sobre você e a lista de tecnologias também são sugestões para personalizar.

Identidade visual em preto quente e marfim, com textura de madeira cinza fornecida pelo usuário. Inclui filtro de projetos, suporte a movimento reduzido, navegação por teclado e animações de entrada progressivas. O conteúdo continua visível sem JavaScript; filtros e animações dependem de JavaScript. O tema escuro é fixo para preservar essa identidade.

As fontes DM Sans e Manrope são carregadas do Google Fonts, com fallback local. Não há backend, formulário de envio, analytics ou publicação configurados.
