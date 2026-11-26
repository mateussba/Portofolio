# Mateus Bezerra | Portfólio

Sou desenvolvedor web e estudante de Análise e Desenvolvimento de Sistemas na UniFAP, em Juazeiro do Norte (CE). Neste portfólio, reúno projetos que desenvolvi e compartilho minha formação e as tecnologias com que trabalho.

**[Acessar o portfólio](https://mateusbezerraa.vercel.app)** · [Perfil no GitHub](https://github.com/mateussba)

## Projetos em destaque

| Projeto | O que faz | Link |
| --- | --- | --- |
| **AquaMonitor** | Protótipo acadêmico de monitoramento de alagamentos, com dashboard, alertas e simulação de dados via MQTT. | [Repositório](https://github.com/mateussba/AquaMonitor) |
| **KMirra** | Plataforma para manicures e nail designers gerenciarem agenda, clientes e financeiro, com site próprio para receber agendamentos. | [Site](https://kmirra.com) |

## Tecnologias do portfólio

Site estático e responsivo, construído com **Astro**, **TypeScript** e **CSS**. O conteúdo do perfil, da formação e dos projetos fica em [src/data/portfolio.ts](src/data/portfolio.ts).

## Como rodar localmente

Requer Node.js 22.23.4 ou superior e npm 9.6.5 ou superior.

```bash
git clone https://github.com/mateussba/Portofolio.git
cd Portofolio
npm ci
npm run dev
```

Acesse [localhost:4321](http://localhost:4321).

| Comando | Função |
| --- | --- |
| `npm run check` | Verifica os tipos e componentes Astro. |
| `npm run build` | Gera o site estático em `dist/`. |
| `npm run preview` | Abre uma prévia local depois de `npm run build`. |
