import { LogoLink } from '../LogoLink';
import { Heading } from '../Heading';
import * as Styled from './styles';
import React from 'react';
export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        srcImg={logo}
        text={`${blogName}-${blogDescription}`}
      />
      {showText && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};