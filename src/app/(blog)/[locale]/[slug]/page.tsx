import { getPostBySlug } from "@/sanity/lib/fetch/getPostbySlug";
import { getLatestPostSlugs } from "@/sanity/lib/fetch/getLatestPostSlugs";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getLatestPostSlugs();

  const locales = routing.locales;

  const routingOnly = routing.locales.map((locale) => ({ locale }));
  console.log("routingOnly", routingOnly);
  //routingOnly [ { locale: 'en' }, { locale: 'pt-BR' }, { locale: 'es' } ]

  const params = posts.flatMap((post) =>
    locales.map((locale) => ({
      slug: post.slug,
      locale,
    })),
  );
  console.log("params static", params);
  /* params static [
  {
    slug: 'a-legendary-friendship-in-the-fishing-village',
    locale: 'en'
  },
  {
    slug: 'a-legendary-friendship-in-the-fishing-village',
    locale: 'pt-BR'
  },
  {
    slug: 'a-legendary-friendship-in-the-fishing-village',
    locale: 'es'
  },
  { slug: 'the-jungle-treasure', locale: 'en' },
  { slug: 'the-jungle-treasure', locale: 'pt-BR' },
  { slug: 'the-jungle-treasure', locale: 'es' }
] */

  return params;
}

export const revalidate = 3600;

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: "es" | "pt-BR" | "en"; slug: string }>;
}) {
  const { locale, slug } = await params;

  setRequestLocale(locale);
  const data = await getPostBySlug(slug, locale);

  if (!data) {
    notFound();
  }

  return (
    <div>
      page locale: {locale} slug: {slug}
      <h1 className="text-orange-500">{data?.title}</h1>
      {/* Renderize o restante do seu post aqui */}
    </div>
  );
}
