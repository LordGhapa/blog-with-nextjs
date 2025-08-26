import { Link } from "@/i18n/navigation";
import {
  Award,
  Code,
  Layers,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

// Define a type for the translation function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TFunction = (key: string) => any;

// --- ESTRUTURAS DE DADOS COM TRADUÇÃO ---
const getChallenges = (t: TFunction) => [
  {
    icon: Layers,
    title: t("challengeTitles.i18n"),
    description: t("challenges.i18n"),
  },
  {
    icon: Code,
    title: t("challengeTitles.nextjs"),
    description: t("challenges.nextjs"),
  },
  {
    icon: Zap,
    title: t("challengeTitles.headless"),
    description: t("challenges.headless"),
  },
  {
    icon: ShieldCheck,
    title: t("challengeTitles.ux"),
    description: t("challenges.ux"),
  },
];

const getSkills = (t: TFunction) => [
  {
    name: "Next.js",
    description: t("skills.nextjs"),
    level: t("skillLevels.advanced"),
  },
  {
    name: "Sanity.io",
    description: t("skills.sanity"),
    level: t("skillLevels.experienced"),
  },
  {
    name: "TypeScript",
    description: t("skills.typescript"),
    level: t("skillLevels.advanced"),
  },
  {
    name: "Internacionalização (i18n)",
    description: t("skills.i18n"),
    level: t("skillLevels.experienced"),
  },
  {
    name: "Tailwind CSS",
    description: t("skills.tailwind"),
    level: t("skillLevels.intermediate"),
  },
];

const getLearnings = (t: TFunction) => [
  {
    year: t("learningTypes.hardSkill"),
    title: t("learnings.hardSkill"),
    description: t("learnings.hardSkillDescription"),
  },
  {
    year: t("learningTypes.integration"),
    title: t("learnings.integration"),
    description: t("learnings.integrationDescription"),
  },
  {
    year: t("learningTypes.feature"),
    title: t("learnings.feature"),
    description: t("learnings.featureDescription"),
  },
];

const getStats = (t: TFunction) => [
  { number: "3", label: t("stats.languages") },
  { number: "10+", label: t("stats.serverComponents") },
  { number: "5+", label: t("stats.sanitySchemas") },
  { number: "100%", label: t("stats.challengeCompleted") },
];

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  const challenges = getChallenges(t);
  const skills = getSkills(t);
  const learnings = getLearnings(t);
  const stats = getStats(t);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
            <Rocket className="h-12 w-12 text-white" />
          </div>
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            {t("mainTitle")}{" "}
            <span className="text-orange-500">{t("mainTitleHighlight")}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-2 text-3xl font-bold text-orange-500">
              {stat.number}
            </div>
            <div className="text-sm font-medium text-gray-600 md:text-base dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* Objetivo do Projeto */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h2 className="flex items-center space-x-2 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                <Target className="h-6 w-6 translate-y-0.5 text-orange-500" />
                <span>{t("mainGoal.title")}</span>
              </h2>
            </div>
            <div className="p-6 text-sm sm:text-base">
              <p
                className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t.raw("mainGoal.paragraph1"),
                }}
              />
              <p
                className="leading-relaxed text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: t.raw("mainGoal.paragraph2"),
                }}
              />
            </div>
          </div>

          {/* Desafios e Soluções */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h2 className="flex items-center space-x-2 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                <ShieldCheck className="h-6 w-6 translate-y-0.5 text-orange-500" />
                <span>{t("challenges.title")}</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {challenges.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="hidden rounded-lg bg-orange-100 p-3 min-[425px]:block dark:bg-orange-900/30">
                        <IconComponent className="size-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
                          {value.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Aprendizados e Conquistas */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h2 className="flex items-center space-x-2 text-base font-bold text-gray-900 min-[425px]:text-2xl dark:text-white">
                <Award className="h-6 min-w-6 text-orange-500" />
                <span>{t("learnings.title")} </span>
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {learnings.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="hidden size-20 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 min-[425px]:flex dark:bg-orange-900/30">
                      <span className="text-center text-xs font-bold text-orange-600 dark:text-orange-400">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:col-span-1">
          {/* Competências Técnicas */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white">
                <Code className="h-5 w-5 translate-y-0.5 text-orange-500" />
                <span>{t("skills.title")}</span>
              </h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {skills.map((skill, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-md font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                      {skill.level}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Contato */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="text-center">
              <Lightbulb className="mx-auto mb-4 h-10 w-10 text-gray-400" />
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                {t("contact.title")}
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {t("contact.description")}
              </p>
              <Link
                href={"/contact"}
                className="cursor-pointer rounded-lg bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
              >
                {t("contact.button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
