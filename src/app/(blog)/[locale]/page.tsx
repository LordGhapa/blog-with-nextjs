import { getAllPosts } from "@/sanity/lib/fetch/getAllPosts";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";

import CardContainer from "@/components/post/cardContainer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: "es" | "pt-BR" | "en" }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  const data = await getAllPosts(locale);

  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <CardContainer posts={data} />
        </div>
        {/* aside */}
        <div className="space-y-4 lg:col-span-1">
          <div className="h-[50%] rounded-lg border border-amber-700 p-4">
            aside
          </div>
          <div className="h-[50%] rounded-lg border border-amber-700 p-4">
            aside
          </div>
        </div>
        {/* aside */}
      </div>

      {/* <h1 className="text-red-500">{t("title")}</h1>
      <h1>IDIOMA : {locale}</h1>
      {data.map((r) => (
        <div key={r._id}>
          <p>API: {r.title}</p>
          <div className="prose lg:prose-xl  text-white marker:text-black">
            <ReactMarkdown>{r.body}</ReactMarkdown>
          </div>
        </div>
      ))} */}
    </main>
  );
}
