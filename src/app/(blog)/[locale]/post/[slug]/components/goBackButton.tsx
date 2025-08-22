"use client";

import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function GoBackButton() {
  const searchParams = useSearchParams();
  const t = useTranslations("post");

  const backUrl = `/${
    searchParams?.toString() ? `?${searchParams.toString()}` : ""
  }`;
  return (
    <Link
      href={backUrl}
      className="mb-6 flex items-center space-x-2 text-orange-500 transition-colors hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="font-medium">{t("backToHome")}</span>
    </Link>
  );
}
