import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategories = async (locale: "en" | "pt-BR" | "es") => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
*[_type == "historietas-category"]{
  _id,
  "title": title[_key == $locale][0].value,
  "slug": slug.current
}`);

  try {
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
      params: { locale },
    });

    return categories.data || [];
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
};
