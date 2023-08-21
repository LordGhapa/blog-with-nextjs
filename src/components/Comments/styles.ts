/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  background-color:white;
border-radius: 15px;
padding: ${theme.spacings.sizes.large} ${theme.spacings.sizes.small};
  `}
`;
