const data = {
  data: {
    setting: {
      data: {
        id: '2',
        attributes: {
          blogName: 'meu blog',
          blogDescription: 'blog-descrição',
          logo: {
            data: {
              id: '2',
              attributes: {
                altText: 'sou o texto alternativo',
                url: 'https://res.cloudinary.com/duqhyfegq/image/upload/v1690917958/24ee2b3a_edb4_43ee_8a3f_442fd78dd9a3_d0d60705fc.jpg',
              },
            },
          },
          menuLink: [
            {
              id: '1',
              link: '#link',
              text: 'link do menu',
              newTab: false,
            },
            {
              id: '2',
              link: '#link2',
              text: 'link do menu2',
              newTab: false,
            },
            {
              id: '3',
              link: '#lin3',
              text: 'link do menu3',
              newTab: false,
            },
          ],
          footerText: '<p>sou um footer</p>',
        },
      },
    },
    posts: {
      data: [
        {
          id: '1',
          attributes: {
            createdAt: '2023-08-02T02:35:47.618Z',
            title: 'sou um titulo',
            slug: 'post',
            resumo: 'sou um resumo',
            content: '<p>sou um conteúdo</p>',
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
            tags: {
              data: [
                {
                  id: '2',
                  attributes: {
                    slug: 'tag',
                    displayName: 'tag-Teste',
                  },
                },
                {
                  id: '3',
                  attributes: {
                    slug: 'tag-1',
                    displayName: 'React',
                  },
                },
              ],
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
        {
          id: '2',
          attributes: {
            createdAt: '2023-08-02T02:35:47.618Z',
            title: 'sou um titulo2',
            slug: 'post2',
            resumo: 'sou um resumo2',
            content: '<p>sou um conteúdo2</p>',
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
            tags: {
              data: [
                {
                  id: '2',
                  attributes: {
                    slug: 'tag',
                    displayName: 'tag-Teste',
                  },
                },
                {
                  id: '3',
                  attributes: {
                    slug: 'tag-1',
                    displayName: 'React',
                  },
                },
              ],
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
    },
  },
};
export const { setting, posts } = data.data;
export const mock = { setting, posts };
