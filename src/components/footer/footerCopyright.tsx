"use client";

import { useTranslations } from "next-intl";
import { HeartIcon } from "lucide-react";

export default function FooterCopyright() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  const copyrightText = t("copyright", { year: currentYear, heart: "{heart}" });
  const parts = copyrightText.split("{heart}");

  return (
    <p className="text-nowrap">
      {parts[0]}
      <HeartIcon className="inline h-4 w-4 text-red-500" />
      {parts[1]}
    </p>
  );
}
