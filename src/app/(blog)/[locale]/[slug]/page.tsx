import { getPostBySlug } from "@/sanity/lib/fetch/getPostbySlug";
import { getLatestPostSlugs } from "@/sanity/lib/fetch/getLatestPostSlugs";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import GoBackButton from "./components/goBackButton";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Calendar, Eye, EyeOff, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Link } from "@/i18n/navigation";
import DisqusComments from "@/components/DisqusComments";

export async function generateStaticParams() {
  const posts = await getLatestPostSlugs();

  const locales = routing.locales;

  const params = posts.flatMap((post) =>
    locales.map((locale) => ({
      slug: post.slug,
      locale,
    })),
  );

  return params;
}

export const revalidate = 9198000;

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: "es" | "pt-BR" | "en"; slug: string }>;
}) {
  const { locale, slug } = await params;

  setRequestLocale(locale);
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }
  const date = new Date(post._createdAt).toLocaleDateString(locale);

  const postIsRead = false;

  const formattedPost = (post?.body ?? "").replace(/\\n/g, "\n");

  return (
    <main className="container mx-auto w-full max-w-4xl px-4 py-8">
      <div className="mb-8">
        <GoBackButton />

        <div className="overflow-hidden rounded-xl border border-gray-700 bg-white shadow-sm dark:bg-gray-800">
          {/* Featured Image */}
          <div className="relative h-64 overflow-hidden md:h-96">
            {post.mainImage?.asset && (
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
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Meta Info */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>
              </div>

              <button
                // onClick={handleReadToggle}
                title={postIsRead ? "Marcar como não lido" : "Marcar como lido"}
                className={cn("rounded-full p-2 transition-all duration-200", {
                  "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400":
                    postIsRead,
                  "bg-gray-100 text-gray-500 hover:bg-orange-100 hover:text-orange-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-orange-900/30":
                    !postIsRead,
                })}
              >
                {postIsRead ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-3xl leading-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              {post.title}
            </h1>

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

            <div className="prose lg:prose-xl prose-strong:text-current prose-blockquote:text-current relative w-full! max-w-full! text-slate-800 lg:w-full! dark:text-slate-200">
              <ReactMarkdown>{formattedPost}</ReactMarkdown>
            </div>

            {/* Tags */}

            <div className="flex flex-wrap gap-2 pt-6">
              {post.tags?.map((tag) => (
                <Link
                  href={"#"}
                  key={tag._id}
                  className="group/tag inline-flex cursor-pointer items-center space-x-1 rounded-full bg-orange-100 px-3 py-2 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-200 hover:text-orange-600 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
                >
                  <Tag className="size-4 group-hover/tag:text-orange-500" />
                  <span className="group-hover/tag:text-orange-500">
                    {tag.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-4">
        <div className="overflow-hidden rounded-2xl">
          <DisqusComments />
        </div>
      </div>
    </main>
  );
}
