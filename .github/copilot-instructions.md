
# Copilot Instructions for AI Agents

## Visão Geral da Arquitetura

- Projeto Next.js (App Router) com integração ao Sanity CMS (headless).
- Rotas, páginas e layouts em `src/app/` (ex: `(blog)/`, `draft-mode/`, `studio/`).
- Componentes reutilizáveis em `src/components/`.
- Integração Sanity: código em `src/sanity/` e tipos em `src/sanity/schemaTypes/`.
- Fluxo de preview/draft: rotas em `src/app/draft-mode/` e componentes como `DisableDraftMode`.

## Convenções e Padrões

- Imports absolutos via `@/` para `src/` (ex: `import { foo } from '@/sanity/lib/client'`).
- Funções utilitárias Sanity em `src/sanity/lib/` (ex: `client.ts`, `image.ts`).
- Layouts são funções assíncronas para habilitar draftMode (`await draftMode()`).
- Quando `draftMode` está ativo, renderize `<DisableDraftMode />` e recursos de visual editing.
- Estilização: TailwindCSS, com Prettier configurado para ordenar classes (`.prettierrc`).

## Workflows de Desenvolvimento

- Build: `npm run build` ou `pnpm build`
- Dev: `npm run dev` ou `pnpm dev` (usa Turbopack)
- Limpar cache: remova `.next/` e `node_modules/` se erros persistirem
- Preview/draft: acesse `/draft-mode/enable` e `/draft-mode/disable` para alternar modo draft
- Geração de tipos Sanity: `npm run type` (gera tipos e extrai schema)

## Integrações e Dependências

- Sanity: tokens via `process.env.SANITY_API_TOKEN_READ`
- Visual Editing: `next-sanity` e componentes customizados
- Navegação: use `next/navigation` para redirecionamentos

## Exemplos de Padrões

- Validação de preview:
  ```ts
  // src/app/draft-mode/enable/route.ts
  function validatePreviewUrl(clientWithToken, url) {
    // lógica customizada
    return { isValid: true, redirectTo: "/" };
  }
  ```
- Layout assíncrono:
  ```tsx
  export default async function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {(await draftMode()).isEnabled && <DisableDraftMode />}
          <div>{children}</div>
        </body>
      </html>
    );
  }
  ```

## Arquivos-Chave e Diretórios

- `src/app/draft-mode/enable/route.ts`: lógica de ativação de preview
- `src/components/DisableDraftMode.tsx`: botão para desativar modo draft
- `src/sanity/lib/client.ts`: configuração do cliente Sanity
- `src/sanity/lib/fetch/getAllPosts.ts`: fetch de posts do Sanity
- `.prettierrc`: ordenação de classes Tailwind

---

Seções incompletas ou dúvidas? Peça exemplos de fluxos, integração Sanity, ou padrões de preview/draftMode para detalhar mais.
