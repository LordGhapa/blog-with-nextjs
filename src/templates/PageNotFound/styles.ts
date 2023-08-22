import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
background-color: white;
display: flex;
flex-direction: column;
color: ${theme.colors.darkBg};
align-items: center;
justify-content: center;
height: 100vh;
padding-inline: ${theme.spacings.sizes.large};
font-size: ${theme.font.sizes.medium};
text-align: center;
h2{
  color: ${theme.colors.darkBg};
  font-size: ${theme.font.sizes.xlarge};
}
p{
  font-size: ${theme.font.sizes.medium};
}
  `}
`;
