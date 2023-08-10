import Link from 'next/link';
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
          <Link href={`/author/${author.data.attributes.slug}`}>
            {author.data.attributes.displayName}
          </Link>
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
            <Link href={`/category/${category.data.attributes.slug}`}>
              {category.data.attributes.displayName}
            </Link>
          </span>
        )}
      </p>
    </Styled.Wrapper>
  );
};
