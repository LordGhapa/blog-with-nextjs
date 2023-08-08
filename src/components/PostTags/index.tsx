import Link from 'next/link';
import { Tags } from '../../shared-types/Tags';
import * as Styled from './styles';

export type PostTagsProps = Tags;
export const PostTags = (tags: PostTagsProps) => {
  if (tags?.data?.length < 1 || tags?.data === undefined) {
    return;
  }

  return (
    <Styled.Wrapper>
      Tags:
      {tags.data.map((r) => (
        <span key={r.id}>
          <Link href={`/${r.attributes.slug}`}>{r.attributes.displayName}</Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};
