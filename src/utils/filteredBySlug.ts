import { PostData } from '../shared-types/post-strapi';

export function getPostBySlug(data, targetSlug): PostData {
  const matchingPost = data.find((post) => post.attributes.slug === targetSlug);

  if (matchingPost) {
    const { id, attributes } = matchingPost;
    return { id, attributes };
  }

  return null;
}
