"use client";
import { Tag, Eye, EyeOff, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import { ALL_POSTS_QUERYResult } from "../../../../sanity.types";
import { cn } from "@/lib/utils";

import { motion, Transition } from "framer-motion";
import { unstable_ViewTransition as ViewTransition } from "react";
interface PostCardProps {
  post: ALL_POSTS_QUERYResult[0];
  viewMode?: "list" | "grid";
  locale?: string;
}

export function PostCard({ post, viewMode = "grid", locale }: PostCardProps) {
  const t = useTranslations("post");
  const date = new Date(post._createdAt).toLocaleDateString(locale);
  const postIsRead = false;
  const handleReadToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const isListView = viewMode === "list";
  const transition: Transition = {
    type: "spring",
    stiffness: 400,
    damping: 40,
  };

  return (
    <ViewTransition name={`post-component-${post._id}`}>
      <motion.article
        layout
        transition={transition}
        className={cn(
          "group relative cursor-pointer overflow-hidden rounded-xl border border-gray-700 bg-white shadow-sm transition-colors duration-300 hover:shadow-lg dark:bg-gray-800 dark:hover:shadow-2xl",
        )}
      >
        <div
          className={cn("flex h-full", {
            "flex-col sm:flex-row": isListView,
            "flex-col": !isListView,
          })}
        >
          <motion.div
            layout
            transition={transition}
            className={cn("relative overflow-hidden", {
              "h-48 sm:h-auto sm:w-48": isListView,
              "h-48": !isListView,
            })}
          >
            {post.mainImage?.asset && (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title || "Post image"}
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute top-4 left-4">
              <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
                {post.categories?.[0]?.title ?? ""}
              </span>
            </div>
          </motion.div>

          <motion.div
            layout
            transition={transition}
            className={cn("flex flex-1 flex-col p-6", {
              "flex-1": isListView,
            })}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <button
                onClick={handleReadToggle}
                title={postIsRead ? "Marcar como não lido" : "Marcar como lido"}
                className={cn(
                  "z-20 rounded-full p-2 transition-all duration-200",
                  {
                    "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400":
                      postIsRead,
                    "bg-gray-100 text-gray-500 hover:bg-orange-100 hover:text-orange-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-orange-900/30":
                      !postIsRead,
                  },
                )}
              >
                {postIsRead ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>

            <Link href={`/${post.slug}`}>
              <span className="absolute inset-0 z-10"></span>

              <h3 className="relative z-10 mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-500 dark:text-white dark:group-hover:text-orange-400">
                {post.title}
              </h3>
            </Link>

            <div className="relative mb-4 line-clamp-3 text-base text-gray-600 dark:text-gray-300">
              <ReactMarkdown
                components={{ p: ({ node, ...props }) => <span {...props} /> }}
              >
                {post?.body?.replace(/\\n/g, "\n") ?? ""}
              </ReactMarkdown>
            </div>

            <div className="relative mt-auto flex flex-col gap-1 pt-4">
              <div className="flex flex-wrap gap-2">
                {post.tags?.slice(0, isListView ? 4 : 3).map((tag) => (
                  <Link
                    href={"#"}
                    key={tag._id}
                    className="group/tag z-10 inline-flex items-center space-x-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 hover:text-orange-500 dark:bg-gray-700 dark:text-gray-300"
                  >
                    <Tag className="h-3 w-3 group-hover/tag:text-orange-500" />
                    <span className="group-hover/tag:text-orange-500">
                      {tag.title}
                    </span>
                  </Link>
                ))}
              </div>
              <span className="z-0 text-end text-sm font-medium text-orange-500 capitalize transition-colors group-hover:text-orange-600 dark:text-orange-400 dark:group-hover:text-orange-300">
                {t("readMore")} →
              </span>
            </div>
          </motion.div>
        </div>
      </motion.article>{" "}
    </ViewTransition>
  );
}
