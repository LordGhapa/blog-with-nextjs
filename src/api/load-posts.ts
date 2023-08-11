import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/query';
import { Setting } from '../shared-types/Setting';
import { PostStrapi } from '../shared-types/post-strapi';

export type LoadPostVariables = {
  start?: number;
  limit?: number;
};
export type LoadPostsProps = {
  setting: Setting;
  posts: PostStrapi;
};
export const loadPosts = async (
  variables: LoadPostVariables = {},
): Promise<LoadPostsProps> => {
  const defaultVariables: LoadPostVariables = {
    start: 0,
    limit: 6,
  };

  const data: LoadPostsProps = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });

  const { setting, posts } = data;

  const result = {
    setting,
    posts,
  };

  return result;
};
