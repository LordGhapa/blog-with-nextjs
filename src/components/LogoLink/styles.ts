/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
text-decoration: none;
color: inherit;
display: flex;
align-items: center;
>img{
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background-color: red;
  object-fit:  cover;
}

`}
`;
