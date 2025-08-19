import {
  ArrowLeft,
  Sparkles,
  Target,
  Heart,
  Zap,
  Users,
  BookOpen,
  Code,
  Lightbulb,
  Award,
} from "lucide-react";
import GoBackButton from "../post/[slug]/components/goBackButton";

export default function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: "Criatividade",
      description:
        "Exploramos os limites da imaginação através da tecnologia, criando histórias únicas e envolventes.",
    },
    {
      icon: Target,
      title: "Qualidade",
      description:
        "Cada história é cuidadosamente refinada para oferecer a melhor experiência de leitura possível.",
    },
    {
      icon: Heart,
      title: "Paixão",
      description:
        "Amamos contar histórias e acreditamos no poder da narrativa para conectar pessoas.",
    },
    {
      icon: Zap,
      title: "Inovação",
      description:
        "Utilizamos as mais avançadas tecnologias de IA para revolucionar a criação de conteúdo.",
    },
  ];

  const skills = [
    { name: "Inteligência Artificial", level: 95 },
    { name: "Storytelling", level: 90 },
    { name: "Desenvolvimento Web", level: 85 },
    { name: "Design UX/UI", level: 80 },
    { name: "Marketing Digital", level: 75 },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Lançamento do IA Historietas",
      description:
        "Início do projeto com foco em histórias geradas por inteligência artificial.",
    },
    {
      year: "2023",
      title: "Pesquisa e Desenvolvimento",
      description:
        "Período de estudos e testes com diferentes modelos de IA para geração de conteúdo.",
    },
    {
      year: "2022",
      title: "Conceito Inicial",
      description:
        "Primeira ideia de combinar tecnologia e narrativa para criar algo único.",
    },
  ];

  const stats = [
    { number: "100+", label: "Histórias Criadas" },
    { number: "50K+", label: "Leitores Mensais" },
    { number: "15+", label: "Categorias" },
    { number: "99%", label: "Satisfação" },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Sobre o <span className="text-orange-500">IA Historietas</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Somos pioneiros na criação de histórias através de inteligência
            artificial, combinando tecnologia de ponta com a arte milenar de
            contar histórias.
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
            <div className="font-medium text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* Mission Section */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h2 className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white">
                <Target className="h-6 w-6 text-orange-500" />
                <span>Nossa Missão</span>
              </h2>
            </div>
            <div className="p-6">
              <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                Nossa missão é democratizar a criação de histórias através da
                inteligência artificial, tornando a narrativa acessível a todos
                e explorando novos horizontes criativos que apenas a tecnologia
                pode proporcionar.
              </p>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                Acreditamos que cada pessoa tem histórias para contar, e nossa
                tecnologia serve como uma ponte entre a imaginação humana e as
                possibilidades infinitas da IA.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h2 className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white">
                <Heart className="h-6 w-6 text-orange-500" />
                <span>Nossos Valores</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="rounded-lg bg-orange-100 p-3 dark:bg-orange-900/30">
                        <IconComponent className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
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

          {/* Timeline Section */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h2 className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white">
                <Award className="h-6 w-6 text-orange-500" />
                <span>Nossa Jornada</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                      <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-400">
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
          {/* Skills Section */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white">
                <Code className="h-5 w-5 text-orange-500" />
                <span>Competências</span>
              </h3>
            </div>
            <div className="space-y-4 p-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white">
                <Users className="h-5 w-5 text-orange-500" />
                <span>Equipe</span>
              </h3>
            </div>
            <div className="p-6">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
                  <span className="text-xl font-bold text-white">IA</span>
                </div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Equipe IA Historietas
                </h4>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  Desenvolvedores, designers e especialistas em IA trabalhando
                  juntos para criar as melhores histórias.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                    Criativo
                  </span>
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                    Inovador
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
            <div className="text-center">
              <Lightbulb className="mx-auto mb-4 h-12 w-12 opacity-90" />
              <h3 className="mb-2 text-xl font-bold">Tem uma ideia?</h3>
              <p className="mb-4 text-sm text-orange-100">
                Adoraríamos ouvir suas sugestões para novas histórias ou
                melhorias no site.
              </p>
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50">
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
