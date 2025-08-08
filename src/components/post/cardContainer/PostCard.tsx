"use client";
import { Tag, Eye, EyeOff, Calendar } from "lucide-react";

// import { useReadingStatus } from "../hooks/useReadingStatus";
import ReactMarkdown from "react-markdown";

import { ALL_POSTS_QUERYResult } from "../../../../sanity.types";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface PostCardProps {
  post: ALL_POSTS_QUERYResult[0];
  viewMode?: "list" | "grid";
  onClick?: () => void;
  locale?: string;
}

export function PostCard({ post, onClick, viewMode, locale }: PostCardProps) {
  // const { isRead, toggleRead } = useReadingStatus();
  // const postIsRead = isRead(post.id);
  const postIsRead = !true; // Placeholder for reading status logic
  // Placeholder for view mode logic, can be passed as prop

  const t = useTranslations("post");

  const date = new Date(post._createdAt).toLocaleDateString(locale);

  const handleReadToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    // toggleRead(post.id);
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (viewMode === "list") {
    return (
      <article
        className="group cursor-pointer overflow-hidden rounded-xl border border-gray-400 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-2xl"
        onClick={handleCardClick}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden sm:h-auto sm:w-48">
            {post.mainImage?.asset && (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title || "Post image"}
                width={300} // Defina uma largura adequada para a visualização em lista
                height={300} // Defina uma altura adequada para a visualização em lista
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute top-4 left-4">
              <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
                {post.categories && post.categories.length > 0
                  ? post.categories[0]?.title
                  : ""}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>

              <button
                onClick={handleReadToggle}
                className={`rounded-full p-2 transition-all duration-200 ${
                  postIsRead
                    ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-gray-100 text-gray-500 hover:bg-orange-100 hover:text-orange-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-orange-900/30"
                }`}
                title={postIsRead ? "Marcar como não lido" : "Marcar como lido"}
              >
                {postIsRead ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>

            <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-500 dark:text-white dark:group-hover:text-orange-400">
              {post.title}
            </h3>

            <div className="mb-4 line-clamp-2 text-base text-gray-600 dark:text-gray-300">
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => <span {...props} />,
                }}
              >
                {post?.body?.replace(/\\n/g, "\n") ?? ""}
              </ReactMarkdown>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags &&
                  post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag._id}
                      className="inline-flex items-center space-x-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag.title}</span>
                    </span>
                  ))}
              </div>

              <span className="text-sm font-medium text-orange-500 capitalize transition-colors hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
                {t("readMore")} →
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-xl border border-gray-400 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-2xl"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        {post.mainImage?.asset && (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title || "Post image"}
            width={post.mainImage.asset.metadata?.dimensions?.width}
            height={post.mainImage.asset.metadata?.dimensions?.height}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
            {post.categories && post.categories.length > 0
              ? post.categories[0]?.title
              : ""}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>

          <button
            onClick={handleReadToggle}
            className={`rounded-full p-2 transition-all duration-200 ${
              postIsRead
                ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                : "bg-gray-100 text-gray-500 hover:bg-orange-100 hover:text-orange-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-orange-900/30"
            }`}
            title={postIsRead ? "Marcar como não lido" : "Marcar como lido"}
          >
            {postIsRead ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </button>
        </div>

        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-500 dark:text-white dark:group-hover:text-orange-400">
          {post.title}
        </h3>

        <div className="mb-4 line-clamp-3 text-base text-gray-600 dark:text-gray-300">
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => <span {...props} />,
            }}
          >
            {post?.body?.replace(/\\n/g, "\n") ?? ""}
          </ReactMarkdown>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags &&
              post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag._id}
                  className="inline-flex items-center space-x-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag.title}</span>
                </span>
              ))}
          </div>

          <span className="text-sm font-medium text-orange-500 capitalize transition-colors hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
            {t("readMore")} →
          </span>
        </div>
      </div>
    </article>
  );
}
