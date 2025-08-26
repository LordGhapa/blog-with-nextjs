import DisqusComments from "@/components/DisqusComments";
import { Link } from "@/i18n/navigation";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Phone,
  Clock,
  BookOpen,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("contactPage");

  const contactLinks = [
    {
      name: "Email",
      value: "felipef32@hotmail.com",
      href: "mailto:felipef32@hotmail.com",
      icon: Mail,
      description: t("emailDescription"),
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "GitHub",
      value: "github.com/iahistorietas",
      href: "https://github.com/LordGhapa/blog-with-nextjs",
      icon: Github,
      description: t("githubDescription"),
      color: "text-gray-800 dark:text-gray-200",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/felipe-lacerda-oliveira/",
      href: "https://www.linkedin.com/in/felipe-lacerda-oliveira/",

      icon: Linkedin,
      description: t("linkedinDescription"),
      color: "text-blue-700 dark:text-blue-300",
    },
    {
      name: "Portfólio",
      value: "felipe-lacerda.vercel.app/",
      href: "https://felipe-lacerda.vercel.app/",
      icon: ExternalLink,
      description: t("portfolioDescription"),
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: t("locationTitle"),
      value: t("locationValue"),
      description: t("locationDescription"),
    },
    {
      icon: Phone,
      title: t("phoneTitle"),
      value: t("phoneValue"),
      description: t("phoneDescription"),
    },
    {
      icon: Clock,
      title: t("scheduleTitle"),
      value: t("scheduleValue"),
      description: t("scheduleDescription"),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            {t("title")}
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Contact Links - Main Section */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {t("connectWithUs")}
              </h2>
              <p className="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-400">
                {t("connectSubtitle")}
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {contactLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target={
                        link.href.startsWith("mailto:") ? "_self" : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto:")
                          ? ""
                          : "noopener noreferrer"
                      }
                      className="group rounded-xl border border-transparent bg-gray-50 p-6 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md dark:bg-gray-700/50 dark:hover:border-orange-800 dark:hover:bg-orange-900/20"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`hidden rounded-lg bg-white p-3 shadow-sm transition-shadow group-hover:shadow-md min-[425px]:block dark:bg-gray-800 ${link.color}`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                              {link.name}
                            </h3>
                            <span>
                              <ExternalLink className="size-4 text-gray-400 transition-colors group-hover:text-orange-500" />
                            </span>
                          </div>
                          <p className="mb-2 font-medium text-orange-600 transition-colors group-hover:text-orange-700 dark:text-orange-400 dark:group-hover:text-orange-300">
                            {link.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-4 rounded-2xl bg-white p-4">
            <div className="overflow-hidden rounded-2xl">
              <DisqusComments title="ContactPage" />
            </div>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-1">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("contactInfo")}
              </h3>
            </div>

            <div className="space-y-6 p-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-900/30">
                      <IconComponent className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {info.value}
                      </p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("faqTitle")}
              </h3>
            </div>

            <div className="space-y-4 p-6">
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">
                  {t("faq1Question")}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("faq1Answer")}
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">
                  {t("faq2Question")}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("faq2Answer")}
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">
                  {t("faq3Question")}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("faq3Answer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
