# Instituto Amar - Landing Page

Landing page institucional moderna para o **Instituto Amar**, desenvolvida com **React.js**, **Vite** e **Tailwind CSS**.

## 🎯 Sobre o Projeto

O **Instituto Amar** é uma organização sem fins lucrativos de Mongaguá que promove transformação social por meio de ações solidárias, educação e capacitação. Esta página apresenta o instituto, seus projetos e facilita doações.

## 🚀 Tecnologias

- React.js
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React
- Framer Motion

## 📄 Funcionalidades

- **Home**: Hero, estatísticas, preview de eventos, cursos, galeria e planos de doação.
- **Sobre**: Missão, visão, história, equipe e prêmios.
- **Eventos / Cursos**: Listagem com filtros e detalhes.
- **Doação**: Planos mensais, PIX, transparência.
- **Galeria**: Grid com lightbox e categorias.
- **Contato**: Formulário, mapa e redes sociais.

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/Devgusta5/Instituto-Amar.git

# Acesse o diretório
cd Instituto-Amar

# Instale as dependências do projeto
npm install

# Se ainda não tiver o Tailwind CSS instalado globalmente, instale localmente como no projeto:
# (Isso já está no package.json, o npm install cobre, mas para referência:)
npm install -D tailwindcss postcss autoprefixer

# Se der erro com as fontes ou animações, garanta que você tem as libs corretas:
# (Também já inclusas no package.json)
npm install lucide-react react-router-dom

# Execute o projeto em modo desenvolvimento
npm run dev

