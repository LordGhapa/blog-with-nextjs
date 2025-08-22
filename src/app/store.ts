import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

function createSyncedStore<T extends object>(
  creator: StateCreator<T, [], [["zustand/persist", T]]>,
  options: PersistOptions<T>,
) {
  const useStore = create(persist(creator, options));

  if (typeof window !== "undefined") {
    window.addEventListener("storage", (event) => {
      if (event.key === options.name) {
        try {
          const newPersistedState = JSON.parse(event.newValue || "{}");
          if (newPersistedState && newPersistedState.state) {
            useStore.setState(newPersistedState.state);
          }
        } catch (error) {
          console.error(
            `Error parsing ${options.name} from localStorage`,
            error,
          );
        }
      }
    });
  }

  return useStore;
}

interface ViewState {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export const useViewStore = createSyncedStore<ViewState>(
  (set) => ({
    viewMode: "grid",
    setViewMode: (mode) => set({ viewMode: mode }),
  }),
  {
    name: "view-mode-storage",
  },
);

interface ReadPostsState {
  readPosts: string[];
  addReadPost: (id: string) => void;
  removeReadPost: (id: string) => void;
  isPostRead: (id: string) => boolean;
  getAllReadPosts: () => string[];
}

export const useReadPostsStore = createSyncedStore<ReadPostsState>(
  (set, get) => ({
    readPosts: [],
    addReadPost: (id) =>
      set((state) => {
        if (state.readPosts.includes(id)) {
          return state;
        }
        return { readPosts: [...state.readPosts, id] };
      }),
    removeReadPost: (id) =>
      set((state) => ({
        readPosts: state.readPosts.filter((postId) => postId !== id),
      })),
    isPostRead: (id) => get().readPosts.includes(id),
    getAllReadPosts: () => get().readPosts,
  }),
  {
    name: "read-posts-storage",
  },
);
