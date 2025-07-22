import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllPosts = async () => {
  const ALL_POSTS_QUERY = defineQuery(`*[_type=="historietas-post"]`);

  try {
    const posts = await sanityFetch({
      query: ALL_POSTS_QUERY,
    });

    return posts.data || [];
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
};
