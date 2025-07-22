import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllPosts = async (locale: "en" | "pt-BR" | "es") => {
  const ALL_POSTS_QUERY = defineQuery(`
*[_type == "historietas-post"] {
  _id,
  _createdAt,
  "slug": slug.current,
  "title": title[_key == $locale][0].value,
  "body": body[_key == $locale][0].value,
  mainImage {
    "alt": alt[_key == $locale][0].value,
    asset->{
      _id,
      url,
      metadata {
        dimensions
      }
    }
  },
  author->{
    name,
    "slug": slug.current,
    image
  },
  categories[]->{
    _id,
  "title": title[_key == $locale][0].value,
   "slug": slug.current
  },
  tags[]->{
    _id,
   "title": title[_key == $locale][0].value,
  "slug": slug.current
  }
}`);

  try {
    const posts = await sanityFetch({
      query: ALL_POSTS_QUERY,
      params: { locale },
    });

    return posts.data || [];
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
};
