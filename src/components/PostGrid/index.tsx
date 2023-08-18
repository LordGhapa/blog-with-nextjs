import { Cover } from '../../shared-types/Cover';
import { PostCard } from '../PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  posts: {
    id: string;
    attributes: {
      title: string;
      slug: string;
      resumo: string;
      content: string;
      cover: Cover;
    };
  }[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {posts.length === 0 && (
        <Styled.NotFound>Nenhum post encontrado aqui 😢</Styled.NotFound>
      )}
      <Styled.Grid>
        {posts.length > 0 &&
          posts.map((post, index) => (
            <PostCard
              key={`${post.attributes.slug}${index}`}
              cover={post.attributes.cover}
              title={post.attributes.title}
              slug={post.attributes.slug}
              resumo={post.attributes.resumo}
            />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
