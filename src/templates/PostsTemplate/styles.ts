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
    border-radius: 1.5rem;
    &:disabled {
      background: ${theme.colors.darkerGray};
    }
  `}
`;
export const SearchContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    font-size: ${theme.font.sizes.small};

    .total{
      font-weight:bold;
    margin-left: 1rem;
    }
    svg{
      color:${theme.colors.secondary};
      height: 100%;
      background-color:${theme.colors.darkBg};
      border-radius: 0px 8px  8px 0;
      padding: 5px;

    }

    input[type="search"]::-webkit-search-cancel-button {
cursor: pointer;
        }
    `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.sizes.small};
    height: 4rem;
    border-radius: 8px 0px  0px 8px;
    border-right: 0px;
    border-style: solid;
   outline: none;
   :focus,:focus-visible{
      border: 2px solid ${theme.colors.darkBg};
      border-right: 0px;
      outline: none;
    }

  `}
`;
