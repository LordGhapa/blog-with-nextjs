import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY_ALL_AUTHORS } from '../graphql/query';

type dataAuthors = {
  categories: {
    data: {
      id: string;
      attributes: { displayName: string; slug: string };
    }[];
  };
};

export const loadAuthors = async (): Promise<dataAuthors> => {
  const data: dataAuthors = await request(
    config.graphqlURL,
    GRAPHQL_QUERY_ALL_AUTHORS,
    {},
  );

  return data;
};
