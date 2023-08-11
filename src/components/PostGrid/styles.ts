import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

`;

export const NotFound = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.sizes.large};
    text-align: center;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.sizes.large};
    padding: ${theme.spacings.sizes.large};
    min-height: 50vh;
    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;
