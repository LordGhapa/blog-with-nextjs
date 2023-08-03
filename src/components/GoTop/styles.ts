/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
position: fixed;
background: ${theme.colors.primary};
color: ${theme.colors.white};
display: flex;
align-items: center;
justify-content: center;
height: 4rem;
width: 4rem;
bottom: 2rem;
right: 2rem;
z-index: 6;
opacity: 0.8;
`}
`;
