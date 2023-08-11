/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../HtmlContent/styles';

export const Container = styled.footer`
${({ theme }) => css`

text-align: center;
font-size: ${theme.font.sizes.small};
border-top: .2rem solid ${theme.colors.darkBg};
padding-block: 3rem;
a{
  color: inherit;
  text-decoration: none;
}
& ${TextComponent}{
  font-size:${theme.font.sizes.small};

}


`}
`;
