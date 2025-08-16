"use client";

import { useViewStore } from "@/app/store";
import { LayoutGrid, List } from "lucide-react";

export function ViewModeToggle() {
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
      className="relative hidden h-10 w-20 items-center rounded-lg bg-gray-300 p-1 transition-colors sm:flex dark:bg-gray-800"
    >
      <div className="absolute h-8 w-8 translate-x-0 cursor-pointer rounded-md bg-orange-500 shadow-md ring-1 ring-gray-900/5 transition-transform duration-300 ease-in-out [.view-mode-grid_&]:translate-x-[0.2rem] [.view-mode-list_&]:translate-x-[2.3rem]" />

      <div className="relative z-10 flex w-full justify-around">
        <LayoutGrid className="h-5 w-5 transition-colors duration-300 [.view-mode-grid_&]:text-white [.view-mode-list_&]:text-gray-400" />
        <List className="h-5 w-5 transition-colors duration-300 [.view-mode-grid_&]:text-gray-400 [.view-mode-list_&]:text-white" />
      </div>
    </button>
  );
}
