import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllTags = async (locale: "en" | "pt-BR" | "es") => {
  const ALL_TAGS_QUERY = defineQuery(`
*[_type == "historietas-tag"]{
  _id,
  "title": title[_key == $locale][0].value,
  "slug": slug.current
}`);

  try {
    const tags = await sanityFetch({
      query: ALL_TAGS_QUERY,
      params: { locale },
    });

    return tags.data || [];
  } catch (error) {
    console.error("Error fetching all tags:", error);
    return [];
  }
};
