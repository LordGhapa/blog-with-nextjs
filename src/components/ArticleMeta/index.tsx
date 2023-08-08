import { Category } from '../../shared-types/Category';
import { Author } from '../../shared-types/author';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  category: Category;
  author: Author;
};

export const ArticleMeta = ({
  createdAt,
  author,
  category,
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        Por:{' '}
        {typeof author !== 'undefined' ? (
          <a href={`/author/${author.data.attributes.slug}`}>
            {author.data.attributes.displayName}
          </a>
        ) : (
          'Desconhecido'
        )}{' '}
        |{' '}
        <span>
          <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        </span>{' '}
        |{' '}
        {typeof category !== 'undefined' && (
          <span className="categories">
            <a href={`/category/${category.data.attributes.slug}`}>
              {category.data.attributes.displayName}
            </a>
          </span>
        )}
      </p>
    </Styled.Wrapper>
  );
};
