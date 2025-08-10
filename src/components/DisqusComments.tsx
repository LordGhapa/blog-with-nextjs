"use client";

import { DiscussionEmbed } from "disqus-react";

export default function DisqusComments() {
  const disqusShortname = "iahistorias";
  const disqusConfig = {
    url: typeof window !== "undefined" ? window.location.href : "",
    identifier: "ia-historias-article-1",
    title:
      "O Futuro da Inteligência Artificial: Uma Jornada Através das Possibilidades",
    language: "pt-BR",
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}
