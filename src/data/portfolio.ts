// Conteúdo do portfólio de Mateus Bezerra.
export const profile = {
  name: 'Mateus',
  role: 'Desenvolvedor web',
  headline: 'Ideias ganham forma.',
  tagline: 'Design, código e curiosidade.',
  description: 'Um espaço para compartilhar o que construo, o que aprendo e minha forma de transformar ideias em experiências digitais.',
  about: 'Sou Mateus Bezerra, desenvolvedor web. Crio interfaces e aplicações com atenção à clareza, aos detalhes e à experiência de quem usa.',
  email: '', // Adicione seu e-mail para ativar o contato.
  github: 'https://github.com/mateussba',
  whatsapp: 'https://wa.me/5588982264689',
  phone: '(88) 98226-4689',
  linkedin: '', // URL completa do seu LinkedIn.
};
export const skills = ['HTML & CSS', 'JavaScript', 'TypeScript', 'Astro', 'React', 'Git & GitHub'];
export const education = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'UniFAP — Centro Universitário Paraíso',
    location: 'Juazeiro do Norte, CE',
    status: 'Em andamento · 1º semestre',
    description: 'Graduação tecnológica voltada ao desenvolvimento de software, sistemas e soluções digitais.',
    url: 'https://unifapce.edu.br/graduacao/analise-e-desenvolvimento-de-sistemas/',
  },
  {
    title: 'CS50x — Introdução à Ciência da Computação',
    institution: 'Harvard University · Curso online',
    location: 'Online',
    status: 'Em andamento há 2 meses',
    description: 'Fundamentos de computação e resolução de problemas, com algoritmos, estruturas de dados, C, Python, SQL e desenvolvimento web.',
    url: 'https://cs50.harvard.edu/x/',
  },
];
export type Category = 'Todos' | 'Web' | 'Interfaces' | 'Experimentos';
export const categories: Category[] = ['Todos', 'Web', 'Interfaces', 'Experimentos'];
export const projects = [
  { id: 'aquamonitor', number: '01', title: 'AquaMonitor', category: 'Web', type: 'Monitoramento ambiental', description: 'Protótipo acadêmico de monitoramento de alagamentos em Juazeiro do Norte, com painel, alertas e simulação via MQTT.', tags: ['React', 'TypeScript', 'Vite', 'MQTT'], visual: 'aqua', url: '', source: 'https://github.com/mateussba/AquaMonitor' },
  { id: 'kmirra', number: '02', title: 'Kmirra', category: 'Interfaces', type: 'Plataforma de gestão', description: 'Agenda, clientes e financeiro em uma plataforma para manicures e nail designers, com site próprio para agendamentos.', tags: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'], visual: 'kmirra', url: 'https://kmirra.com', source: '' },
];
