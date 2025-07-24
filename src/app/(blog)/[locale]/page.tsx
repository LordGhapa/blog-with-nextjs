import { getAllPosts } from "@/sanity/lib/fetch/getAllPosts";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import ReactMarkdown from "react-markdown";

import { routing } from "@/i18n/routing";
import LanguageSwitcher from "@/components/language-switcher";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";
export const revalidate = 3600;
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await params;
//   const t = await getTranslations({ locale, namespace: "Metadata" });

//   return {
//     title: t("title"),
//   };
// }

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
    <main className="container mx-auto px-4 py-8">
      {/* <h1 className="text-red-500">{t("title")}</h1>
      <h1>IDIOMA : {locale}</h1>
      {data.map((r) => (
        <div key={r._id}>
          <p>API: {r.title}</p>
          <div className="prose lg:prose-xl text-black marker:text-black">
            <ReactMarkdown>{r.body}</ReactMarkdown>
          </div>
        </div>
      ))} */}
    </main>
  );
}
