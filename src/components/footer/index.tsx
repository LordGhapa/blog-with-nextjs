import { Link } from "@/i18n/navigation";
import { getAllCategories } from "@/sanity/lib/fetch/getAllCategories";
import { BookOpen, Mail, Linkedin, ExternalLink, Github } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import FooterCopyright from "./footerCopyright";

interface HeaderLink {
  label: string;
  link: string;
}

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations();
  // @ts-expect-error
  const allCategories = await getAllCategories(locale);

  const socialLinks = [
    {
      name: "Github",
      href: "https://github.com/LordGhapa/blog-with-nextjs",
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: "Portfolio",
      href: "https://felipe-lacerda.vercel.app/",
      icon: <ExternalLink className="h-6 w-6" />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/felipe-lacerda-oliveira/",
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      name: "Email",
      href: "mailto:felipef32@hotmail.com",
      icon: <Mail className="h-6 w-6" />,
    },
  ];

  const headerLinks = t.raw("header.headerLinks");

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/95 backdrop-blur-sm transition-colors dark:border-gray-700 dark:bg-gray-900/95">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href={"/"}
              className="mb-4 flex cursor-pointer items-center gap-3"
            >
              <div className="rounded-lg bg-orange-600 p-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                IA Historietas
              </h2>
            </Link>
            <p className="max-w-md text-gray-600 dark:text-gray-400">
              {t("footer.description")}
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="text-gray-700 transition-colors hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {headerLinks.map((link: HeaderLink) => (
                <li key={link.label}>
                  <Link
                    href={link.link}
                    className="transition-colors hover:text-orange-500 dark:hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
              {t("footer.categories")}
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {allCategories.slice(0, 4).map((category: any) => (
                <li key={category._id}>
                  <Link
                    href={{
                      pathname: "/",
                      query: { cat_include: category.slug },
                    }}
                    className="transition-colors hover:text-orange-500 dark:hover:text-orange-400"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-t border-gray-200 pt-6 text-center text-sm text-gray-600 md:flex-row md:justify-between dark:text-gray-400">
          <FooterCopyright />
          <p>{t("footer.credits")}</p>
        </div>
      </div>
    </footer>
  );
}
