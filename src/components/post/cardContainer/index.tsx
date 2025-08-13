"use client";
import { Grid, List } from "lucide-react";
import { ALL_POSTS_QUERYResult } from "../../../../sanity.types";
import { PostCard } from "./PostCard";
import { useLocale } from "next-intl";
import { useViewStore } from "@/app/store";

import { motion, LayoutGroup, Transition } from "framer-motion";
import { useEffect, useState } from "react";

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
  const locale = useLocale();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    let isActive = true;

    setTimeout(() => {
      if (isActive) setIsMounted(true);
    }, 0);

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <>
      <div
        className={`mb-6 flex justify-between border-t border-slate-700 pt-4`}
      >
        <p className="text-sm">
          <span className="font-bold text-orange-500">{posts.length}</span>{" "}
          <span className="text-black dark:text-white">Total</span>
        </p>

        <div className="relative flex items-center rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
          <LayoutGroup>
            <button
              onClick={() => setViewMode("grid")}
              className={`relative cursor-pointer rounded-md p-2 transition-colors hover:text-orange-500 dark:text-gray-400 [.view-mode-grid_&]:text-white [.view-mode-list_&]:text-gray-600`}
              title="Visualização em Grade"
            >
              {isMounted && viewMode === "grid" && (
                <motion.div
                  layoutId="active-view-pill"
                  initial={false}
                  transition={isMounted ? springTransition : { duration: 0 }}
                  className="absolute inset-0 z-0 rounded-md bg-orange-500"
                />
              )}

              <Grid className="relative z-10 h-4 w-4" />
            </button>

            <button
              onClick={() => setViewMode("list")}
              className={`relative cursor-pointer rounded-md p-2 transition-colors hover:text-orange-500 dark:text-gray-400 [.view-mode-grid_&]:text-gray-600 [.view-mode-list_&]:text-white`}
              title="Visualização em Lista"
            >
              {isMounted && viewMode === "list" && (
                <motion.div
                  layoutId="active-view-pill"
                  initial={false}
                  transition={isMounted ? springTransition : { duration: 0 }}
                  className="absolute inset-0 z-0 rounded-md bg-orange-500"
                />
              )}

              <List className="relative z-10 h-4 w-4" />
            </button>
          </LayoutGroup>
        </div>
      </div>

      <div className="[.view-mode-grid_&]:grid [.view-mode-grid_&]:grid-cols-1 [.view-mode-grid_&]:gap-6 md:[.view-mode-grid_&]:grid-cols-2 [.view-mode-list_&]:space-y-6">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} locale={locale} />
        ))}
      </div>
    </>
  );
}
