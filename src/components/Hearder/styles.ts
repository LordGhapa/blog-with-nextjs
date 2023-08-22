import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.spacings.sizes.xhuge};
    width: 100%;
    max-width: ${theme.sizes.max};
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
    margin: 0 auto;

    ${HeadingStyles} {
      margin: 0 0 calc(${theme.spacings.sizes.small} - 1rem);
    }

    @media ${theme.media.lteSmall} {
      display: flex;
      flex-flow: column wrap;
      padding-bottom:0;
      & > ${HeadingStyles} {
        margin: 0 0 ${theme.spacings.sizes.medium} 0;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.sizes.large};
    max-width: 48rem;
    a{
      text-decoration: none;
      color: inherit;
    }
    a:hover{
      text-decoration: underline;
    }
 p{
      font-size: ${theme.font.sizes.small};
      font-weight: normal;
    }
    @media ${theme.media.lteSmall} {
      margin-left: 0;
    }

  `}
`;
