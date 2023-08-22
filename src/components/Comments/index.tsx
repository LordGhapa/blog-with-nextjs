import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';
import config from '../../config/index';
import { useEffect, useState } from 'react';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  const [disqusConfig, setDisqusConfig] = useState({});

  useEffect(() => {
    setDisqusConfig({
      url: `${config.URL_SITE}/post/${slug}`,
      identifier: slug.split('-').join('_'),
      title: title.split('-').join('_'),
      language: 'pt_BR',
    });
  }, [slug, title]);

  return (
    <Styled.Wrapper>
      <DiscussionEmbed shortname="iahistorias" config={disqusConfig} />
    </Styled.Wrapper>
  );
};
