import { ArticleHeaderProps } from '.';

const data = {
  data: [
    {
      id: '1',
      attributes: {
        createdAt: '2023-08-02T02:35:47.618Z',
        title: 'sou um titulo',
        slug: 'post',
        resumo: 'sou um resumo',
        allowComments: true,
        cover: {
          data: {
            attributes: {
              altText: 'sou o texto alternativo',
              url: 'https://res.cloudinary.com/duqhyfegq/image/upload/v1690917958/24ee2b3a_edb4_43ee_8a3f_442fd78dd9a3_d0d60705fc.jpg',
            },
          },
        },
        category: {
          data: {
            id: '2',
            attributes: {
              displayName: 'categoria-Teste',
              slug: 'category',
            },
          },
        },
        author: {
          data: {
            id: '2',
            attributes: {
              displayName: 'felipe',
              slug: 'author',
            },
          },
        },
      },
    },
  ],
};
const { title, resumo, cover, author, category, createdAt } =
  data.data[0].attributes;

export default {
  title,
  resumo,
  cover,
  author,
  category,
  createdAt,
} as unknown as ArticleHeaderProps;
