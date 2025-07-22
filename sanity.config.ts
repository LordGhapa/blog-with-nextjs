"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { presentationTool } from "sanity/presentation";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),

    internationalizedArray({
      languages: [
        { id: "pt-BR", title: "Português" },
        { id: "en", title: "English" },
        { id: "es", title: "Español" },
      ],
      defaultLanguages: ["pt-BR"], // Idioma padrão
      fieldTypes: ["string", "text"], // Tipos de campo que você quer internacionalizar
    }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      previewUrl: {
        preview: "/",
        previewMode: {
          enable: "/draft-mode/enable",
        },
      },
    }),
  ],
});
