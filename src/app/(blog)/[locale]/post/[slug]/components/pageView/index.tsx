"use client";
import DisqusComments from "@/components/DisqusComments";
import GoBackButton from "../goBackButton";
import IsReadUpdate from "../IsReadUpdate";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import IsReadButton from "@/components/isReadButton";
import { urlFor } from "@/sanity/lib/image";
import ReactMarkdown from "react-markdown";
import { POST_BY_SLUG_QUERYResult } from "../../../../../../../../sanity.types";
import { useState, useEffect, Suspense } from "react";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

interface PageViewProps {
  post: POST_BY_SLUG_QUERYResult;
  locale: "es" | "pt-BR" | "en";
  formattedPost: string;
}

export default function PageView({
  post,
  locale,
  formattedPost,
}: PageViewProps) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (post?._createdAt) {
      setFormattedDate(new Date(post._createdAt).toLocaleDateString(locale));
    }
  }, [post?._createdAt, locale]);

  if (!post) return;
  return (
    <motion.main className="container mx-auto w-full max-w-4xl px-4 py-8">
      <div className="mb-8">
        <Suspense>
          <GoBackButton />
        </Suspense>
        <IsReadUpdate postId={post?._id} />

        <motion.div
          key={post._id}
          layoutId={post._id}
          className="overflow-hidden rounded-xl border border-gray-700 bg-white shadow-sm dark:bg-gray-800"
        >
          {/* Featured Image */}
          <motion.div
            layoutId={`post-image-${post._id}`}
            className="relative h-64 overflow-hidden md:h-96"
          >
            {post?.mainImage?.asset && (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title || "Post image"}
                width={post.mainImage.asset.metadata?.dimensions?.width}
                height={post.mainImage.asset.metadata?.dimensions?.height}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute top-6 left-6">
              <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white">
                {Array.isArray(post?.categories) &&
                typeof post.categories[0] === "object" &&
                "title" in post.categories[0]
                  ? post.categories[0].title
                  : "no category"}
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <motion.div
              layoutId={`post-extra-${post._id}`}
              className="mb-6 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  {formattedDate ? (
                    <span>{formattedDate}</span>
                  ) : (
                    <span className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                  )}
                </div>
              </div>
              <IsReadButton postId={post._id} />
            </motion.div>

            {/* Title */}

            <motion.h1
              layoutId={`post-title-${post._id}`}
              className="mb-6 text-3xl leading-tight font-bold text-gray-900 md:text-4xl dark:text-white"
            >
              {post.title}
            </motion.h1>

            {/* Author */}
            <div className="mb-8 flex items-center space-x-3 border-b border-gray-700 pb-6">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
                {post.author?.image && (
                  <Image
                    src={urlFor(post.author?.image).url()}
                    alt={post.author?.name ?? ""}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {post.author?.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">DEV</p>
              </div>
            </div>

            {/* Content */}

            <motion.div
              layoutId={`post-text-${post._id}`}
              className="prose lg:prose-xl prose-strong:text-current prose-blockquote:text-current relative w-full! max-w-full! text-slate-800 lg:w-full! dark:text-slate-200"
            >
              <ReactMarkdown>{formattedPost}</ReactMarkdown>
            </motion.div>

            {/* Tags */}

            <motion.div
              layoutId={`post-tags-${post._id}`}
              className="flex flex-wrap gap-2 pt-6"
            >
              {post.tags?.map((tag) => (
                <Link
                  href={"/"}
                  key={tag._id}
                  className="group/tag inline-flex cursor-pointer items-center space-x-1 rounded-full bg-orange-100 px-3 py-2 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-200 hover:text-orange-600 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
                >
                  <Tag className="size-4 group-hover/tag:text-orange-500" />
                  <span className="group-hover/tag:text-orange-500">
                    {tag.title}
                  </span>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="rounded-2xl bg-white p-4">
        <div className="overflow-hidden rounded-2xl">
          <DisqusComments post={post} />
        </div>
      </div>
    </motion.main>
  );
}
