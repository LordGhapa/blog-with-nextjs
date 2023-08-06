import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.sizes.xlarge};
    margin-bottom: ${theme.spacings.sizes.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    font-size: ${theme.font.sizes.medium};
    ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacings.sizes.medium};
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
    display: block;
    margin-bottom: ${theme.spacings.sizes.medium};
  `}
`;
