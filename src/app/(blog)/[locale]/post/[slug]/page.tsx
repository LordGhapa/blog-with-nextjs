import { getPostBySlug } from "@/sanity/lib/fetch/getPostbySlug";
import { getLatestPostSlugs } from "@/sanity/lib/fetch/getLatestPostSlugs";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import GoBackButton from "./components/goBackButton";
import IsReadUpdate from "./components/IsReadUpdate";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Calendar, Tag } from "lucide-react";

import ReactMarkdown from "react-markdown";
import { Link } from "@/i18n/navigation";
import DisqusComments from "@/components/DisqusComments";

import IsReadButton from "@/components/isReadButton";
import PageView from "./components/pageView";
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

  if (!post) notFound();

  const date = new Date(post._createdAt).toLocaleDateString(locale);

  const formattedPost = (post?.body ?? "").replace(/\\n/g, "\n");

  return <PageView post={post} date={date} formattedPost={formattedPost} />;
}
