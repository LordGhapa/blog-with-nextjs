import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
 margin:0;
 padding: 0;
 box-sizing: border-box;
 font-family: 'Open Sans', sans-serif;
 font-size: 1.6rem;
}
html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body{
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.font.family.default};
  color: ${({ theme }) => theme.colors.darkText};
}
h1,h2,h3,h4,h5,h6{
  margin: ${({ theme }) => theme.spacings.sizes.large} 0;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
}
p{
  margin: ${({ theme }) => theme.spacings.sizes.medium} 0;
}
ul,ol{
  margin: ${({ theme }) => theme.spacings.sizes.medium};
  padding: ${({ theme }) => theme.spacings.sizes.medium};
}
a{
  color: ${({ theme }) => theme.colors.secondary};
}
.currentFilter{
  font-weight: bold;
  text-align: center;
  font-size:3rem;
  margin:0;
}
`;
