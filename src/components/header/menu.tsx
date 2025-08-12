"use client";
import { Link } from "@/i18n/navigation";
import { BookOpen } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import LanguageSwitcher from "../language-switcher";
import DarkMode from "./darkMode";
import MobileMenu from "./mobileMenu";
import { Suspense } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
export default function Menu() {
  const t = useTranslations("header");
  const messages = useMessages();
  const headerLinks = messages.header.headerLinks as {
    label: string;
    link: string;
  }[];

  return (
    <ViewTransition name={`menu`}>
      <header className="border-b border-gray-200 bg-white/95 py-2 backdrop-blur-sm transition-colors dark:border-gray-700 dark:bg-gray-900/95">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4">
          {/* logo */}
          <Link
            href={"/"}
            className="group flex cursor-pointer items-center space-x-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 transition-shadow">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-500 dark:text-white dark:group-hover:text-orange-400">
                IA Historietas
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("subtext")}
              </p>
            </div>
          </Link>
          {/* logo */}
          {/* links */}
          <div className="hidden items-center space-x-4 md:flex">
            {headerLinks.map((r) => (
              <Link
                href={r.link}
                key={r.label}
                className="font-medium text-gray-700 transition-colors hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400"
              >
                {r.label}
              </Link>
            ))}
          </div>
          {/* links */}
          {/* extra */}
          <div className="hidden items-center space-x-4 md:flex">
            <Suspense fallback={<div className="w-[150px]"></div>}>
              <LanguageSwitcher />
            </Suspense>
            <DarkMode />
          </div>
          {/* extra */}
          {/* MenuMobile */}
          <div className="md:hidden">
            <MobileMenu headerLinks={headerLinks} />
          </div>
          {/* MenuMobile */}
        </div>
      </header>
    </ViewTransition>
  );
}
