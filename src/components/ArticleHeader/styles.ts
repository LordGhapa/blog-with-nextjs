import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
display: flex;
flex-direction: column;
    padding-bottom: ${theme.spacings.sizes.xlarge};
    margin-bottom: ${theme.spacings.sizes.xlarge};

    font-size: ${theme.font.sizes.medium};
    ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacings.sizes.medium};
    }
    @media ${theme.media.lteSmall} {
      padding-bottom:0;
    margin-bottom: 0;

    }
  `}
`;

export const Resumo = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.sizes.medium} 0;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
  max-width: 100%;
  max-height: 52rem;
  object-fit:cover;
    display: block;
    margin-bottom: ${theme.spacings.sizes.medium};
  `}
`;
