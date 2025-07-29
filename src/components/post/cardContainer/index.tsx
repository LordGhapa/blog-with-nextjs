"use client";
import { Grid, List } from "lucide-react";
import { ALL_POSTS_QUERYResult } from "../../../../sanity.types";
import { PostCard } from "./PostCard";

interface CardContainerProps {
  posts: ALL_POSTS_QUERYResult;
}
import { useState } from "react";
import { useLocale } from "next-intl";

export default function CardContainer({ posts }: CardContainerProps) {
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");

  const locale = useLocale();

  return (
    <>
      <div className="mb-6 flex justify-between border-t border-slate-700 pt-4">
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
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 gap-6 md:grid-cols-2"
            : "space-y-6"
        }
      >
        <PostCard post={posts[0]} viewMode={viewMode} locale={locale} />
      </div>
    </>
  );
}
