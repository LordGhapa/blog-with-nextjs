import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';
import config from '../../config/index';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="ia-historietas"
        config={{
          url: `${config.URL_SITE}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};
