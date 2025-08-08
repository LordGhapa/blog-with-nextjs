// sanity/lib/mutations.ts

import { backendClient } from "@/sanity/lib/backendClient";
import { SanityDocument } from "next-sanity";

interface TranslatablePayload {
  [langKey: string]: string; // ex: { "pt-BR": "Tecnologia", "en": "Technology" }
}


export async function findOrCreateDocument(
  docType: "historietas-tag" | "historietas-category",
  payload: TranslatablePayload,
): Promise<SanityDocument> {
  const client = backendClient;

  
  const titlesForQuery = Object.values(payload); // ["Sua Tag", "Your Tag", "Su Tag"]
  const titleForCreate = Object.entries(payload).map(([key, value]) => ({
    _key: key,
    value: value,
  }));

  
  const slugSource = payload["en"] || Object.values(payload)[0];
  const slug = {
    _type: "slug",
    current: slugSource.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
  };

 
  const query = `*[_type == $docType && count((title[].value)[@ in $titles]) > 0][0]`;
  const params = { docType, titles: titlesForQuery };


  const existingDoc = await client.fetch<SanityDocument | null>(query, params);

  
  if (existingDoc) {
    console.log(`Document '${docType}' find:`, existingDoc.title);
    return existingDoc;
  }

 
  console.log(`Document '${docType}' not find. creating new...`);
  try {
    const newDoc = await client.create({
      _type: docType,
      title: titleForCreate,
      slug,
    });
    console.log(`Document '${docType}' created:`, newDoc.title);
    return newDoc;
  } catch (error) {
    console.error(`Error creating document'${docType}':`, error);
    throw error;
  }
}
