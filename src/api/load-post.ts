import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY_POST } from '../graphql/query';
import { Setting } from '../shared-types/Setting';
import { PostStrapi } from '../shared-types/post-strapi';

export type LoadPostVariables = {
  id: number;
};
export type LoadPostsProps = {
  setting: Setting;
  posts: PostStrapi;
};

export const loadPost = async (
  variables: LoadPostVariables = { id: 0 },
): Promise<LoadPostsProps> => {
  const data: LoadPostsProps = await request(
    config.graphqlURL,
    GRAPHQL_QUERY_POST,
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
