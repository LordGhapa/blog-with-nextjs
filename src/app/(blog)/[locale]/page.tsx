import { getAllPosts } from "@/sanity/lib/fetch/getAllPosts";
import { getAllCategories } from "@/sanity/lib/fetch/getAllCategories";
import { getAllTags } from "@/sanity/lib/fetch/getAllTags";

import { setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";

import CardContainer from "@/components/post/cardContainer";
import RecentPosts from "@/components/recent-posts";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
export const revalidate = 9198000;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: "es" | "pt-BR" | "en" }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const data = await getAllPosts(locale);
  const allCategories = await getAllCategories(locale);
  // console.log("TODAS AS CATEGORIAS", allCategories);
  const allTags = await getAllTags(locale);
  // console.log("TODAS AS Tags", allTags);

  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <CardContainer posts={data} />
        </div>
        {/* aside */}
        <aside className="space-y-4 lg:col-span-1">
          <RecentPosts posts={data.slice(0, 3)} />
        </aside>
        {/* aside */}
      </div>
    </main>
  );
}
