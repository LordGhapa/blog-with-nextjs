"use client";

import { useState } from "react";
import { ALL_POSTS_QUERYResult } from "../../../../sanity.types";
import { PostCard } from "./PostCard";
import { useLocale, useTranslations } from "next-intl";
import { useViewStore } from "@/app/store";

import { ViewModeToggle } from "./ViewModeToggle";

const POSTS_PER_PAGE = 6;

interface CardContainerProps {
  posts: ALL_POSTS_QUERYResult;
}

export default function CardContainer({ posts }: CardContainerProps) {
  useViewStore();
  const locale = useLocale();
  const t = useTranslations();
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + POSTS_PER_PAGE);
  };

  const hasMorePosts = visiblePosts < posts.length;

  return (
    <>
      <div
        className={`mb-6 flex justify-between border-t border-slate-700 pt-4`}
      >
        <p className="text-sm">
          <span className="font-bold text-orange-500">{posts.length}</span>{" "}
          <span className="text-black dark:text-white">Total</span>
        </p>
        <ViewModeToggle />
      </div>

      <div className="[.view-mode-grid_&]:grid [.view-mode-grid_&]:grid-cols-1 [.view-mode-grid_&]:gap-6 md:[.view-mode-grid_&]:grid-cols-2 [.view-mode-list_&]:space-y-6">
        {posts.slice(0, visiblePosts).map((post) => (
          <PostCard key={post._id} post={post} locale={locale} />
        ))}
      </div>

      {hasMorePosts && (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="rounded-lg border border-orange-300 cursor-pointer bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
          >
            {t("loadMore")}
          </button>
        </div>
      )}
    </>
  );
}
