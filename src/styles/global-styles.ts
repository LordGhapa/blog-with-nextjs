import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
 margin:0;
 padding: 0;
 box-sizing: border-box;
}
html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body{
  font-family: 'Open Sans', sans-serif;
  background-color: gray;
  font-family: ${({ theme }) => theme.font.family.default};
}
h1,h2,h3,h4,h5,h6{
  margin: ${({ theme }) => theme.spacings.sizes.large} 0;
}
p{
  margin: ${({ theme }) => theme.spacings.sizes.medium} 0;
}
ul,ol{
  margin: ${({ theme }) => theme.spacings.sizes.medium};
  padding: ${({ theme }) => theme.spacings.sizes.medium};
}
a{
  color: ${({ theme }) => theme.colors.secondaryColor};
}
`;
