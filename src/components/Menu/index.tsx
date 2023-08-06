import React, { useState } from 'react';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { LogoLink } from '../LogoLink';
import { Cover } from '../../shared-types/Cover';
import { MenuLink } from '../MenuLink';

export type MenuLink = {
  id: string;
  link: string;
  text: string;
  newTab?: boolean;
};

export type MenuProps = {
  menuLink: MenuLink[];
  blogName: string;
  logo: Cover;
};

export const Menu = ({ menuLink, blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleOpenCloneMenu = () => {
    event.preventDefault();
    setMenuVisible((s) => !s);
  };
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
          {menuLink.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
