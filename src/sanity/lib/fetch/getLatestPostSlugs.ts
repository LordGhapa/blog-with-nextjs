import { defineQuery } from "next-sanity";
import { backendClient } from "../backendClient";

const LATEST_POST_SLUGS_QUERY = defineQuery(`
*[_type == "historietas-post"] | order(_createdAt desc) [0...20] {
  "slug": slug.current,
}`);
const client = backendClient;
interface SlugResponse {
  slug: string;
}

export const getLatestPostSlugs = async (): Promise<SlugResponse[]> => {
  try {
    const slugs = await client.fetch(LATEST_POST_SLUGS_QUERY);

    return slugs || [];
  } catch (error) {
    console.error("Error fetching latest post slugs:", error);
    return [];
  }
};
