import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  author,
  category,
  content,
  cover,
  createdAt,
  resumo,
  slug,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader
        allowComments={true}
        author={author}
        category={category}
        title={title}
        resumo={resumo}
        cover={cover}
        createdAt={createdAt}
        slug={slug}
      />
      <HtmlContent html={content} />
    </Styled.Wrapper>
  );
};
