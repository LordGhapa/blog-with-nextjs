import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.sizes.large};
    margin: ${theme.spacings.sizes.large} 0;
    display: flex;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacings.sizes.small} ${theme.spacings.sizes.large};
    cursor: pointer;

    &:disabled {
      background: ${theme.colors.darkerGray};
    }
  `}
`;
