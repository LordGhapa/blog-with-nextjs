import React from 'react';
import * as Styled from './styles';

export const PageNotFound = () => {
	return (
		<Styled.Wrapper>
			<h2>ERROR 404</h2> A página que você busca não foi encontrada{' '}
			<a href="/">Clique para voltar ao inicio</a>
		</Styled.Wrapper>
	);
};
