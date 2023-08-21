import * as Styled from './styles';
import { PostGrid } from '../../components/PostGrid';
import { Setting } from '../../shared-types/Setting';
import { PostStrapi } from '../../shared-types/post-strapi';
import { loadMenuAllLinksProps } from '../../utils/menuLinks';
import { Search } from '@styled-icons/material-outlined/Search';
import { Base } from '../Base';
import { useEffect, useState } from 'react';

export type PostsTemplateProps = {
  setting: Setting;
  posts?: PostStrapi | undefined;
  menuAllLinks: loadMenuAllLinksProps;
  currentFilter?: string;
};

export const PostsTemplate = ({
  setting,
  posts = undefined,
  menuAllLinks,
  currentFilter = undefined,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(undefined);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const [numberPosts, setNumberPosts] = useState(6);
  const [searchValue, setSearchValue] = useState('');
  const [newStatePosts, setNewStatePosts] = useState(undefined);
  /* CARREGAMENTO INICIAL DE POSTS */
  useEffect(() => {
    setNewStatePosts(posts?.data?.slice(0, numberPosts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* CARREGAMENTO INICIAL DE POSTS */

  /* FILTRO DE POSTS- */
  useEffect(() => {
    const filteredData = posts?.data?.filter(
      (data) =>
        data.attributes.title.toLowerCase().includes(searchValue) ||
        data.attributes.resumo.toLowerCase().includes(searchValue),
    );
    setStatePosts(filteredData);
  }, [posts.data, searchValue]);

  const handleSearchPosts = (e) => {
    const inputValue = String(e.target.value).toLowerCase();
    setSearchValue(inputValue);
  };
  /* FILTRO DE POSTS- */

  /* VERIFICANDO SE DEVE CARREGA MAIS POSTS */
  const verifyLoadMorePosts = () => {
    if (newStatePosts?.length && newStatePosts?.length < statePosts?.length) {
      setButtonDisabled(false);
      setNoMorePosts(false);
    } else {
      setButtonDisabled(true);
      setNoMorePosts(true);
    }
  };
  useEffect(() => {
    verifyLoadMorePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newStatePosts]);

  const handleLoadMorePosts = async () => {
    setNumberPosts((s) => (s = s + 3));
  };
  /* VERIFICANDO SE DEVE CARREGA MAIS POSTS */

  /* CARREGAMENTO APOS FILTRO E APOS VERIFICA TOTAL DE POSTS */
  useEffect(() => {
    setNewStatePosts(statePosts?.slice(0, numberPosts));
  }, [statePosts, numberPosts]);

  /* CARREGAMENTO APOS FILTRO E APOS VERIFICA TOTAL DE POSTS */
  return (
    <Base menuAllLinks={menuAllLinks} setting={setting}>
      <p className="currentFilter">{currentFilter}</p>
      <Styled.SearchContainer>
        <Styled.SearchInput
          value={searchValue}
          onChange={(e) => handleSearchPosts(e)}
          placeholder="Pesquisa"
          type="search"
        />
        <Search />{' '}
        <span className="total">Total: {statePosts?.length ?? '0'}</span>
      </Styled.SearchContainer>

      {posts?.data?.length > 0 && <PostGrid posts={newStatePosts} />}

      {newStatePosts?.length > 0 && (
        <Styled.ButtonContainer>
          <Styled.Button
            disabled={buttonDisabled}
            onClick={handleLoadMorePosts}
          >
            {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
          </Styled.Button>
        </Styled.ButtonContainer>
      )}
    </Base>
  );
};
