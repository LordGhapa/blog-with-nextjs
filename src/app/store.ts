import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ViewState {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export const useViewStore = create<ViewState>()(
  persist(
    (set) => ({
      viewMode: "grid",
      setViewMode: (mode) => set({ viewMode: mode }),
    }),
    {
      name: "view-mode-storage",
    },
  ),
);

import { useState, useEffect } from "react";

const useHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
};

export default useHydration;
