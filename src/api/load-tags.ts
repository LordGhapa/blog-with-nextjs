import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY_ALL_TAGS } from '../graphql/query';

export type dataTags = {
  tags: {
    data: {
      id: string;
      attributes: { displayName: string; slug: string };
    }[];
  };
};

export const loadTags = async (): Promise<dataTags> => {
  const data: dataTags = await request(
    config.graphqlURL,
    GRAPHQL_QUERY_ALL_TAGS,
    {},
  );

  return data;
};
