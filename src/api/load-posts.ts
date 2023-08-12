import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY_POSTS_BY_SLUG } from '../graphql/query';
import { Setting } from '../shared-types/Setting';
import { PostStrapi } from '../shared-types/post-strapi';

export type LoadPostVariables = {
  authorSlug?: string;
  categorySlug?: string;
  tagSlug?: string;
};
export type LoadPostsProps = {
  setting: Setting;
  posts: PostStrapi;
};

export const loadPosts = async (
  variables: LoadPostVariables = {},
): Promise<LoadPostsProps> => {
  const data: LoadPostsProps = await request(
    config.graphqlURL,
    GRAPHQL_QUERY_POSTS_BY_SLUG,
    {
      ...variables,
    },
  );

  const { setting, posts } = data;

  const result = {
    setting,
    posts,
  };

  return result;
};
