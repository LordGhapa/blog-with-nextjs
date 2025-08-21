"use client";

import { ALL_POSTS_QUERYResult } from "../../../../sanity.types";
import { PostCard } from "./PostCard";
import { useLocale } from "next-intl";
import { useViewStore } from "@/app/store";

import { ViewModeToggle } from "./ViewModeToggle";

interface CardContainerProps {
  posts: ALL_POSTS_QUERYResult;
}



export default function CardContainer({ posts }: CardContainerProps) {
  useViewStore();
  const locale = useLocale();

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
        {posts.map((post) => (
          <PostCard key={post._id} post={post} locale={locale} />
        ))}
      </div>
    </>
  );
}
