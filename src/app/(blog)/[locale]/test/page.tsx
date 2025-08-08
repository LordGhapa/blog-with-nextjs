import { getAllPosts } from "@/sanity/lib/fetch/getAllPosts";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ReactMarkdown from "react-markdown";
import { routing } from "@/i18n/routing";

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

  const data = await getAllPosts(locale);
  // console.log("Dados recebidos do backend:", data.map(((r)=>r.title)));

  const post = data[0].body;

  // -------- AQUI ESTÁ A CORREÇÃO --------
  // Substitui as sequências de caracteres literais '\\n' por quebras de linha reais ('\n').
  // O regex /\\n/g procura por uma barra literal seguida de 'n' e o 'g' garante que todas as ocorrências sejam substituídas.
  const formattedPost = post?.replace(/\\n/g, "\n");
  // ------------------------------------

  return (
    <main className="container mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <div className="prose lg:prose-xl prose-strong:text-current prose-blockquote:text-current text-slate-800 dark:text-slate-200">
            <ReactMarkdown>{formattedPost}</ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}
