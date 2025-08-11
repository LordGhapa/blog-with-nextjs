"use client";

import { DiscussionEmbed } from "disqus-react";
import { POST_BY_SLUG_QUERYResult } from "../../sanity.types";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
interface DisqusCommentsProps {
  post: POST_BY_SLUG_QUERYResult;
}
export default function DisqusComments({ post }: DisqusCommentsProps) {
  const locale = useLocale();

  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
    ? ` https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL;
  const pathname = usePathname();

  const fullUrl = `${baseUrl}${pathname}`;

  if (!post?._id || !post?.title || !post.slug) {
    return null;
  }
  const disqusShortname = "iahistorias";
  const disqusConfig = {
    url: typeof window !== "undefined" ? fullUrl : "",
    identifier: post?._id,
    title: post?.slug,
    language: locale,
  };

  return (
    <DiscussionEmbed
      key={pathname}
      shortname={disqusShortname}
      config={disqusConfig}
    />
  );
}
