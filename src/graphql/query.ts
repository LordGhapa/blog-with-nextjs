import { gql } from 'graphql-request';

export const GRAPHQL_QUERY_ALL_CATEGORIES = gql`
query GET_ALL_CATEGORY {
  categories {
    data {
      id
      attributes {
        displayName
        slug
      }
    }
  }
}
`;

export const GRAPHQL_QUERY_POSTS_BY_SLUG = gql`
fragment cover on Post {
  cover {
    data {
      attributes {
        createdAt
        altText: alternativeText
        url
      }
    }
  }
}
fragment category on CategoryEntityResponse {
  data {
    id
    attributes {
      displayName
      slug
    }
  }
}
fragment tags on TagRelationResponseCollection {
  data {
    id
    attributes {
      slug
      displayName
    }
  }
}
fragment author on AuthorEntityResponse {
  data {
    id
    attributes {
      displayName
      slug
    }
  }
}
fragment settings on SettingEntityResponse {
  data {
    id
    attributes {
      blogName
      blogDescription
      logo {
        data {
          id
          attributes {
            altText: alternativeText
            url
          }
        }
      }
      footerText
    }
  }
}


query GET_POSTS_BY_SLUG($pageSize: Int =9999999,$authorSlug: String,$categorySlug: String,$tagSlug: String) {
  setting {
    ...settings
  }
  posts( sort: ["id:desc"], pagination: { pageSize: $pageSize },filters: {
    author: {
     slug: {
        eq: $authorSlug
      }
    }
     category: {
     slug: {
        eq: $categorySlug
      }
    }
     tags: {
      slug: {
        eq: $tagSlug
      }
    }
  }
  ) {
    data {
      id
      attributes {
         createdAt
        title
        slug
        content
        resumo: excerpt
        allowComments
        ...cover
        category {
          ...category
        }
        tags {
          ...tags
        }
        author {
          ...author
        }
      }
    }
  }
}

`;

export const GRAPHQL_QUERY_ALL_AUTHORS = gql`
query GET_ALL_AUTHOR {
  authors {
    data {
      id
      attributes {
        displayName
        slug
      }
    }
  }
}
`;

export const GRAPHQL_QUERY_ALL_TAGS = gql`
query GET_ALL_TAGS {
tags {
    data {
      id
      attributes {
        displayName
        slug
      }
    }
  }
}
`;
