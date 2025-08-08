"use client";
import { Grid, List } from "lucide-react";
import { ALL_POSTS_QUERYResult } from "../../../../sanity.types";
import { PostCard } from "./PostCard";

interface CardContainerProps {
  posts: ALL_POSTS_QUERYResult;
}

import { useLocale } from "next-intl";
import useHydration, { useViewStore } from "@/app/store";

import { cn } from "@/lib/utils";

export default function CardContainer({ posts }: CardContainerProps) {
  const { viewMode, setViewMode } = useViewStore();
  const hasHydrated = useHydration();
  const locale = useLocale();

  if (!hasHydrated) {
    return;
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

        <div className="hidden items-center rounded-lg bg-gray-100 p-1 sm:flex dark:bg-gray-800">
          <button
            onClick={() => setViewMode("grid")}
            className={`rounded-md p-2 transition-colors ${
              viewMode === "grid"
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:text-orange-500 dark:text-gray-400"
            }`}
            title="Visualização em Grade"
          >
            <Grid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`rounded-md p-2 transition-colors ${
              viewMode === "list"
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:text-orange-500 dark:text-gray-400"
            }`}
            title="Visualização em Lista"
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
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
      </div>
    </>
  );
}
