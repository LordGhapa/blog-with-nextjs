import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getPostBySlug = async (
  slug: string,
  locale: "en" | "pt-BR" | "es",
) => {
  const POST_BY_SLUG_QUERY = defineQuery(`
*[_type == "historietas-post" && slug.current == $slug][0] {
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
    const post = await sanityFetch({
      query: POST_BY_SLUG_QUERY,
      params: { slug, locale },
    });

    return post.data || null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};
