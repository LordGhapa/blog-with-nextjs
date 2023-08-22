import { LogoLink } from '../LogoLink';
import { Heading } from '../Heading';
import * as Styled from './styles';
import React from 'react';
import Link from 'next/link';
export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logoUrl: string;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logoUrl,
  showText,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        srcImg={logoUrl}
        text={`${blogName}-${blogDescription}`}
      />
      {showText && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            <Link href={'/'}> {blogName}</Link>
            <p>{blogDescription}</p>
          </Heading>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
