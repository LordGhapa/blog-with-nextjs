"use client"; // ESSENCIAL: Deve ser a primeira linha do arquivo

import { DiscussionEmbed } from "disqus-react";
import { useLocale } from "next-intl";
import { POST_BY_SLUG_QUERYResult } from "../../sanity.types";
import { usePathname } from "next/navigation"; // 1. Importar o usePathname

interface DisqusCommentsProps {
  post: POST_BY_SLUG_QUERYResult;
}

const DisqusComments = ({ post }: DisqusCommentsProps) => {
  const disqusShortname =
    process.env.NEXT_PUBLIC_DISQUS_SHORTNAME || "ia-historietas";

  const locale = useLocale();
  const pathname = usePathname();

  const baseUrl = process.env.VERCEL_URL
    ? ` https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL;

  const fullUrl = `${baseUrl}${pathname}`;

  if (!post?._id || !post?.title || !post.slug) {
    return null;
  }

  const disqusConfig = {
    url: fullUrl,
    identifier: post._id,
    title: post.slug,
    language: locale,
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Comentários
      </h2>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
