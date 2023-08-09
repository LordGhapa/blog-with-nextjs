import { Category } from './Category';
import { Cover } from './Cover';
import { Tags } from './Tags';
import { Author } from './author';

export type PostStrapi = {
  posts: {
    data: PostData[];
  };
};
type PostData = {
  id: string;
  attributes: {
    createdAt: string;
    title: string;
    slug: string;
    resumo: string;
    content: string;
    allowComments: boolean;
    cover: Cover;
    category: Category;
    tags: Tags;
    author: Author;
  };
};
