

"use client";

import { useViewStore } from "@/app/store";
import { LayoutGrid, List } from "lucide-react";

export function ViewModeToggle() {
  // O hook ainda é necessário para a interatividade (onClick) e acessibilidade (aria-label).
  const { viewMode, setViewMode } = useViewStore();

  const handleToggle = () => {
    const nextMode = viewMode === "grid" ? "list" : "grid";
    setViewMode(nextMode);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={`Mudar para visualização em ${
        viewMode === "grid" ? "list" : "grid"
      }`}
      className="relative flex h-10 w-20 items-center rounded-lg bg-gray-300 p-1 transition-colors dark:bg-gray-800"
    >
      {/* Fundo animado. Seu estilo agora usa a variável CSS. */}
      <div className="absolute h-8 w-8 translate-x-0 cursor-pointer rounded-md bg-orange-500 shadow-md ring-1 ring-gray-900/5 transition-transform duration-300 ease-in-out [.view-mode-grid_&]:translate-x-[0.2rem] [.view-mode-list_&]:translate-x-[2.3rem]" />

      {/* Container para os ícones */}
      <div className="relative z-10 flex w-full justify-around">
        {/* A cor do ícone agora é controlada pela sua variável CSS */}
        <LayoutGrid
          className="h-5 w-5 transition-colors duration-300 [.view-mode-grid_&]:text-white [.view-mode-list_&]:text-gray-400"
          // style={{ color: "var(--grid-icon-color)" }}
        />
        <List
          className="h-5 w-5 transition-colors duration-300 [.view-mode-grid_&]:text-gray-400 [.view-mode-list_&]:text-white"
          // style={{ color: "var(--list-icon-color)" }}
        />
      </div>
    </button>
  );
}
