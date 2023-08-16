import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`

  transition: all 300ms ease-in-out ;

    ${HeadingStyles} {
      margin: 0;
      margin-block:1rem;
    }


    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    &:hover a {
      color: ${theme.colors.secondary};
    }

  `}
`;

export const Cover = styled.img`
  max-width: 100%;
  transition: opacity 300ms ease-in-out;
  aspect-ratio: 3/2;
`;

export const Resumo = styled.p`
font-size: 1.6rem;
margin: 0;

`;
