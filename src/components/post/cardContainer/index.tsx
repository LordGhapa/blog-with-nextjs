"use client";
import { Grid, List } from "lucide-react";
import { ALL_POSTS_QUERYResult } from "../../../../sanity.types";
import { PostCard } from "./PostCard";
import { useLocale } from "next-intl";
import useHydration, { useViewStore } from "@/app/store";
import { cn } from "@/lib/utils";


import { motion, LayoutGroup, Transition } from "framer-motion";

interface CardContainerProps {
  posts: ALL_POSTS_QUERYResult;
}
const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};
export default function CardContainer({ posts }: CardContainerProps) {
  const { viewMode, setViewMode } = useViewStore();
  const hasHydrated = useHydration();
  const locale = useLocale();

  if (!hasHydrated) {

    return null;
  }

  return (
    <>
      <div
        className={`mb-6 flex justify-between border-t border-slate-700 pt-4`}
      >
        <p className="text-sm text-slate-400">
          <span className="font-bold text-orange-500">{posts.length}</span>{" "}
          Total
        </p>

        <div className="relative flex items-center rounded-lg bg-gray-100 p-1 sm:flex dark:bg-gray-800">
          {/* Botão de Grade */}
          <button
            onClick={() => setViewMode("grid")}
            className={`relative rounded-md p-2 transition-colors ${
              viewMode === "grid"
                ? "text-white"
                : "text-gray-600 hover:text-orange-500 dark:text-gray-400"
            }`}
            style={{ WebkitTapHighlightColor: "transparent" }} // Melhora a experiência no mobile
            title="Visualização em Grade"
          >
            {/* O fundo laranja animado */}
            {viewMode === "grid" && (
              <motion.div
                layoutId="active-view-pill"
                className="absolute inset-0 z-0 rounded-md bg-orange-500"
                transition={springTransition}
              />
            )}
            {/* O ícone precisa de z-index para ficar na frente do fundo */}
            <Grid className="relative z-10 h-4 w-4" />
          </button>

          {/* Botão de Lista */}
          <button
            onClick={() => setViewMode("list")}
            className={`relative rounded-md p-2 transition-colors ${
              viewMode === "list"
                ? "text-white"
                : "text-gray-600 hover:text-orange-500 dark:text-gray-400"
            }`}
            style={{ WebkitTapHighlightColor: "transparent" }}
            title="Visualização em Lista"
          >
            {/* O fundo laranja animado */}
            {viewMode === "list" && (
              <motion.div
                layoutId="active-view-pill"
                className="absolute inset-0 z-0 rounded-md bg-orange-500"
                transition={springTransition}
              />
            )}
            {/* O ícone precisa de z-index para ficar na frente do fundo */}
            <List className="relative z-10 h-4 w-4" />
          </button>
        </div>
      </div>

      <LayoutGroup>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn({
            "grid grid-cols-1 gap-6 md:grid-cols-2": viewMode === "grid",
            "space-y-6": viewMode === "list",
          })}
        >
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              viewMode={viewMode}
              locale={locale}
            />
          ))}
        </motion.div>
      </LayoutGroup>
    </>
  );
}
