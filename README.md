# Blog com Next.js, Sanity e Suporte a Múltiplos Idiomas

Este é um projeto de blog desenvolvido com Next.js e Sanity, com suporte a múltiplos idiomas, projetado para ser uma base sólida para projetos futuros.

## ✨ Features

- **Next.js 15:** Framework React para renderização no lado do servidor e geração de sites estáticos.
- **Sanity v4:** CMS headless para gerenciamento de conteúdo.
- **Suporte a Múltiplos Idiomas:** Com `next-intl`.
- **Modo Rascunho (Draft Mode):** Visualize o conteúdo antes de publicar.
- **Tailwind CSS:** Para estilização.
- **TypeScript:** Para um código mais robusto e seguro.
- **Zustand:** Para gerenciamento de estado.
- **ESLint e Prettier:** Para manter a qualidade e a consistência do código.

## 🚀 Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20.x ou superior)
- [pnpm](https://pnpm.io/installation)

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/ia-historietas-2.git
   cd ia-historietas-2
   ```

2. **Instale as dependências:**

   ```bash
   pnpm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto, copiando o exemplo de `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Em seguida, preencha as variáveis de ambiente no arquivo `.env` com suas credenciais do Sanity:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=...
   NEXT_PUBLIC_SANITY_DATASET=...
   SANITY_API_TOKEN=...
   SANITY_API_TOKEN_READ=...
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

Para acessar o Sanity Studio, navegue para [http://localhost:3000/studio](http://localhost:3000/studio).

## 📜 Scripts Disponíveis

- `pnpm dev`: Inicia o servidor de desenvolvimento do Next.js.
- `pnpm devt`: Inicia o servidor de desenvolvimento do Next.js com Turbopack.
- `pnpm build`: Compila o projeto para produção.
- `pnpm start`: Inicia o servidor de produção.
- `pnpm lint`: Executa o linter para verificar a qualidade do código.
- `pnpm type`: Extrai o esquema do Sanity e gera os tipos TypeScript.
- `pnpm commit`: Inicia o processo de commit com Commitizen.
- `pnpm prettier`: Formata o código com o Prettier.

## Deploy

Para fazer o deploy do seu aplicativo Next.js, a maneira mais fácil é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.