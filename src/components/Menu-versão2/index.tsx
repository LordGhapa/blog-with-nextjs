/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { LogoLink } from '../LogoLink';
import { Cover } from '../../shared-types/Cover';
import { MenuLink } from '../MenuLink';
import { Details } from '../Details';
import { loadMenuAllLinksProps } from '../../utils/menuLinks';

export type MenuProps = {
  blogName: string;
  logo: Cover;
  menuAllLinks: loadMenuAllLinksProps;
};

export const Menu = ({ blogName, logo, menuAllLinks }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleOpenCloneMenu = () => {
    event.preventDefault();
    setMenuVisible((s) => !s);
  };

  useEffect(() => {
    const details = document.querySelectorAll('details');
    details.forEach((targetDetail) => {
      targetDetail.addEventListener('click', () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open');
          }
        });
      });
    });
  }, []);
  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        onClick={handleOpenCloneMenu}
        href="#"
      >
        {menuVisible ? (
          <CloseIcon aria-label="Close Menu" title="fechar menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" title="abrir menu" />
        )}
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink
              text={blogName}
              srcImg={logo.data.attributes.url}
              link={'/'}
            ></LogoLink>
          </Styled.Logo>

          <Details nameDetails="Categorias">
            {menuAllLinks.categories.categories.data.map((category) => (
              <MenuLink
                key={category.id}
                link={`/category/${category.attributes.slug}`}
              >
                {category.attributes.displayName}
              </MenuLink>
            ))}
          </Details>

          <Details nameDetails="Autores">
            {menuAllLinks.authors.authors.data.map((author) => (
              <MenuLink
                key={author.id}
                link={`/author/${author.attributes.slug}`}
              >
                {author.attributes.displayName}
              </MenuLink>
            ))}
          </Details>

          <Details nameDetails="Tags">
            {menuAllLinks.tags.tags.data.map((tag) => (
              <MenuLink key={tag.id} link={`/tags/${tag.attributes.slug}`}>
                {tag.attributes.displayName}
              </MenuLink>
            ))}
          </Details>
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
