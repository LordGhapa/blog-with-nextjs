// components/LanguageSwitcher.tsx

"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation"; // Importe o hook para search params
import { useTransition, useCallback } from "react";

import Flag from "react-world-flags";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  // Hooks de navegação
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // Hook para ler os search params atuais

  // Lista dos idiomas disponíveis
  const locales = [
    { code: "en", flag: "US", label: "English" },
    { code: "pt-BR", flag: "BR", label: "Portuguese (Brazil)" },
    { code: "es", flag: "ES", label: "Spanish" },
  ];

  const onLanguageChange = useCallback(
    (nextLocale: string) => {
      // Cria uma cópia mutável dos search params atuais
      const newSearchParams = new URLSearchParams(searchParams.toString());

      // O pathname já está sem o locale. Agora juntamos tudo.
      const newPath = `${pathname}?${newSearchParams}`;

      startTransition(() => {
        router.replace(newPath, { locale: nextLocale });
      });
    },
    [pathname, router, searchParams],
  );

  return (
    <div className="flex items-center gap-3">
      {locales.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          disabled={isPending}
          className={`cursor-pointer transition-opacity ${locale !== lang.code ? "opacity-50 hover:opacity-100" : "cursor-default"}`}
          aria-label={`Change language to ${lang.label}`}
        >
          <Flag code={lang.flag} style={{ width: "30px", height: "20px" }} />
        </button>
      ))}
    </div>
  );
}
