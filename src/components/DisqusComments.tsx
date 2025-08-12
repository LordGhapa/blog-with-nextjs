"use client";

import { DiscussionEmbed } from "disqus-react";
import { POST_BY_SLUG_QUERYResult } from "../../sanity.types";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

interface DisqusCommentsProps {
  post?: POST_BY_SLUG_QUERYResult;

  title?: string;
  identifier?: string;
}

export default function DisqusComments({
  post,
  title,
  identifier,
}: DisqusCommentsProps) {
  const locale = useLocale();
  const pathname = usePathname();

  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL || "";

  const fullUrl = `${baseUrl}${pathname}`;

  const finalIdentifier = identifier || post?._id || pathname;
  const finalTitle = title || post?.title || "Comentários";

  const disqusShortname = "iahistorias";
  const disqusConfig = {
    url: fullUrl,
    identifier: finalIdentifier,
    title: finalTitle,
    language: locale,
  };

  return (
    <DiscussionEmbed
      key={fullUrl}
      shortname={disqusShortname}
      config={disqusConfig}
    />
  );
}
