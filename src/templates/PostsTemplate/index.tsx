import * as Styled from './styles';
import { PostGrid } from '../../components/PostGrid';
import { Setting } from '../../shared-types/Setting';
import { PostStrapi } from '../../shared-types/post-strapi';
import { loadMenuAllLinksProps } from '../../utils/menuLinks';

import { Base } from '../Base';
import { useEffect, useState } from 'react';

export type PostsTemplateProps = {
  setting: Setting;
  posts?: PostStrapi;
  menuAllLinks: loadMenuAllLinksProps;
  currentFilter?: string;
};

export const PostsTemplate = ({
  setting,
  posts,
  menuAllLinks,
  currentFilter = undefined,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(undefined);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const [numberPosts, setNumberPosts] = useState(6);

  useEffect(() => {
    setStatePosts(posts.data.slice(0, numberPosts));

    if (statePosts?.length && statePosts.length >= posts.data.length) {
      setButtonDisabled(true);
      setNoMorePosts(true);
    } else {
      setButtonDisabled(false);
      setNoMorePosts(false);
    }
  }, [numberPosts, posts.data, statePosts?.length]);

  const handleLoadMorePosts = async () => {
    setNumberPosts((s) => (s = s + 3));
  };

  return (
    <Base menuAllLinks={menuAllLinks} setting={setting}>
      <p className="currentFilter">{currentFilter}</p>
      {posts?.data?.length > 0 && <PostGrid posts={statePosts} />}
      <Styled.ButtonContainer>
        <Styled.Button disabled={buttonDisabled} onClick={handleLoadMorePosts}>
          {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
        </Styled.Button>
      </Styled.ButtonContainer>
    </Base>
  );
};
