import DisqusComments from "@/components/DisqusComments";
import {
  ArrowLeft,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";


export default function ContactPage() {
  const contactLinks = [
    {
      name: "Email",
      value: "felipef32@hotmail.com",
      href: "mailto:felipef32@hotmail.com",
      icon: Mail,
      description: "Entre em contato direto por email",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "GitHub",
      value: "github.com/iahistorietas",
      href: "https://github.com/LordGhapa/blog-with-nextjs",
      icon: Github,
      description: "Veja o projeto ",
      color: "text-gray-800 dark:text-gray-200",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/iahistorietas",
      href: "https://linkedin.com/in/iahistorietas",
      icon: Linkedin,
      description: "Conecte-se conosco profissionalmente",
      color: "text-blue-700 dark:text-blue-300",
    },
    {
      name: "Portfólio",
      value: "felipe-lacerda.vercel.app/",
      href: "https://felipe-lacerda.vercel.app/",
      icon: ExternalLink,
      description: "Conheça meus trabalhos e projetos",
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      value: "Brasil",
      description: "Atendimento remoto em todo o país",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      description: "WhatsApp disponível",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex: 9h às 18h",
      description: "Horário de Brasília (GMT-3)",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Entre em <span className="text-orange-500">Contato</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Tem alguma dúvida, sugestão ou quer colaborar conosco? Adoraríamos
            ouvir de você!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Contact Links - Main Section */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-orange-800/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Conecte-se Conosco
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Escolha a melhor forma de entrar em contato
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {contactLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
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
                          className={`rounded-lg bg-white p-3 shadow-sm transition-shadow group-hover:shadow-md dark:bg-gray-800 ${link.color}`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            {link.name}
                          </h3>
                          <p className="mb-2 font-medium text-orange-600 transition-colors group-hover:text-orange-700 dark:text-orange-400 dark:group-hover:text-orange-300">
                            {link.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-orange-500" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-4">
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
                Informações de Contato
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
                Perguntas Frequentes
              </h3>
            </div>

            <div className="space-y-4 p-6">
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">
                  Como as histórias são criadas?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Utilizamos inteligência artificial avançada para gerar
                  histórias criativas e envolventes.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">
                  Posso sugerir temas?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Claro! Adoramos receber sugestões de temas e ideias para novas
                  histórias.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">
                  Tempo de resposta?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Respondemos todas as mensagens em até 42 dias úteis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
