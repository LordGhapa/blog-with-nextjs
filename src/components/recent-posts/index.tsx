import { User } from "lucide-react";
import { ALL_POSTS_QUERYResult } from "../../../sanity.types";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { unstable_ViewTransition as ViewTransition } from "react";
interface RecentPostsProps {
  posts: ALL_POSTS_QUERYResult;
}
export default async function RecentPosts({ posts }: RecentPostsProps) {
  const t = await getTranslations();
  return (
    <ViewTransition name={`recentPosts`}>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
          <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white">
            <User className="h-5 w-5 text-orange-500 uppercase" />
            <span>{t("recentPosts")}</span>
          </h3>
        </div>

        <div className="p-6">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post?.slug ?? "/notfound"}
              className="mb-2 block rounded-lg p-3 transition-colors duration-200 last:mb-0 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <p className="line-clamp-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </ViewTransition>
  );
}
