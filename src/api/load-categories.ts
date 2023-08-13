import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY_ALL_CATEGORIES } from '../graphql/query';

export type dataCategories = {
  categories: {
    data: {
      id: string;
      attributes: { displayName: string; slug: string };
    }[];
  };
};

export const loadCategories = async (): Promise<dataCategories> => {
  const data: dataCategories = await request(
    config.graphqlURL,
    GRAPHQL_QUERY_ALL_CATEGORIES,
    {},
  );

  return data;
};
