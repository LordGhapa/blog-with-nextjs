# Copilot Instructions for AI Agents

## Visão Geral da Arquitetura

- Projeto Next.js (App Router) com integração ao Sanity para CMS headless.
- Estrutura principal em `src/app/` para rotas, páginas e layouts.
- Componentes reutilizáveis em `src/components/`.
- Integração Sanity: código em `src/sanity/` e tipos em `src/sanity/schemaTypes/`.
- Fluxo de preview/draft: rotas em `src/app/draft-mode/` e componentes como `DisableDraftMode`.

## Convenções e Padrões

- Imports absolutos usando `@/` para `src/`.
- Funções utilitárias para Sanity em `src/sanity/lib/`.
- Layouts usam funções assíncronas para habilitar draftMode (`await draftMode()`).
- Preview/draftMode: use `DisableDraftMode` e `VisualEditing` quando `draftMode` está ativo.
- Estilização: TailwindCSS, com Prettier configurado para ordenar classes (`.prettierrc`).

## Workflows de Desenvolvimento

- Build: `npm run build` ou `pnpm build`.
- Dev: `npm run dev` ou `pnpm dev`.
- Limpar cache: remova `.next/` e `node_modules/` se erros persistirem.
- Preview: acesse rotas de draft em `/draft-mode/enable` e `/draft-mode/disable`.

## Integrações e Dependências

- Sanity: tokens via `process.env.SANITY_API_TOKEN_READ`.
- Visual Editing: `next-sanity` e componentes customizados.
- Navegação: use `next/navigation` para redirecionamentos.

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

## Arquivos-Chave

- `src/app/draft-mode/enable/route.ts`: lógica de ativação de preview.
- `src/components/DisableDraftMode.tsx`: botão para desativar modo draft.
- `src/sanity/lib/client.ts`: configuração do cliente Sanity.
- `.prettierrc`: ordenação de classes Tailwind.

---

Seções incompletas ou dúvidas? Peça exemplos de fluxos, integração Sanity, ou padrões de preview/draftMode para detalhar mais.
