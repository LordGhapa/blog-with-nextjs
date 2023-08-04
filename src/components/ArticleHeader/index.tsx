import { Category } from '../../shared-types/Category';
import { Cover } from '../../shared-types/Cover';
import { Author } from '../../shared-types/author';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  createdAt: string;
  title: string;
  slug: string;
  resumo: string;
  allowComments: boolean;
  cover: Cover;
  category: Category;
  author: Author;
};

export const ArticleHeader = ({
  title,
  resumo,
  cover,
  author,
  category,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}</Heading>
      <Styled.Resumo>{resumo}</Styled.Resumo>
      <Styled.Cover src={cover.data.attributes.url} alt={title} />
      <ArticleMeta author={author} createdAt={createdAt} category={category} />
    </Styled.Wrapper>
  );
};
