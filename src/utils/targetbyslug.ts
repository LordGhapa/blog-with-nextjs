export function getPostBySlug(data, targetSlug) {
  const matchingPost = data.find((post) => post.attributes.slug === targetSlug);

  if (matchingPost) {
    const { id, attributes } = matchingPost;
    return { id, attributes };
  }

  return null;
}
