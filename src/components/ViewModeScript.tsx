// Nenhuma diretiva "use client" aqui. Este componente roda no servidor
// para injetar o script que será executado imediatamente no navegador.

export const ViewModeScript = () => {
  // A chave do localStorage é definida diretamente aqui.
  // Ela deve corresponder exatamente ao 'name' no seu middleware 'persist' do Zustand.
  const storageKey = "view-mode-storage";

  const script = `
    (function() {
      // 1. Define 'grid' como o valor padrão.
      let viewMode = 'grid';

      try {
        const storedValue = localStorage.getItem('${storageKey}');

        if (storedValue) {
          // 2. Extrai o estado de dentro do objeto que o Zustand salva.
          const { state } = JSON.parse(storedValue);

          // 3. Valida se o valor salvo é um dos esperados ('grid' ou 'list').
          if (state && (state.viewMode === 'grid' || state.viewMode === 'list')) {
            viewMode = state.viewMode;
          }
        }
      } catch (e) {
        // Se houver qualquer erro (ex: JSON inválido), o script continua
        // com o valor padrão 'grid'. O log ajuda a depurar.
        console.error('Erro ao ler o modo de visualização do localStorage. Usando padrão.', e);
      }

      // 4. Aplica a classe final na tag <html>.
      // document.documentElement é a referência para a tag <html>.
      const docEl = document.documentElement;

      // Limpa classes antigas para garantir que apenas uma esteja ativa.
      docEl.classList.remove('view-mode-grid', 'view-mode-list');

      // Adiciona a classe correta.
      docEl.classList.add('view-mode-' + viewMode);
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};
