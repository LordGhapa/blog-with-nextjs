import Link from "next/link";
import { Frown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="flex min-h-[calc(100vh)] flex-col items-center justify-center text-center dark:bg-slate-800">
      <div className="flex items-center justify-center">
        <Frown className="mr-4 h-16 w-16 text-orange-500" />
        <div>
          <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-200">
            404
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t("title")}
          </p>
        </div>
      </div>
      <p className="mt-4 text-slate-500 dark:text-slate-400">
        {t("description")}
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-orange-500 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
      >
        {t("backToHome")}
      </Link>
    </div>
  );
}
