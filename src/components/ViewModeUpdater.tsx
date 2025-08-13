"use client";

import { useViewStore } from "@/app/store";
import { useEffect } from "react";

export function ViewModeUpdater() {
  // Escuta o estado da viewMode da sua store.
  const { viewMode } = useViewStore();

  useEffect(() => {
    // A referência para a tag <html> é document.documentElement
    const docEl = document.documentElement;

    // Remove as classes antigas para evitar conflitos.
    docEl.classList.remove("view-mode-grid", "view-mode-list");

    // Adiciona a classe atual baseada no estado da store.
    docEl.classList.add(`view-mode-${viewMode}`);
  }, [viewMode]); // Roda sempre que a viewMode mudar.

  // Este componente não renderiza nada na UI.
  return null;
}
