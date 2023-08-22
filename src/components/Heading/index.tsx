import { Title } from './styles';
import React from 'react';
export type HeadingProps = {
	children: React.ReactNode | string;
	colorDark?: boolean;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: 'small' | 'medium' | 'big' | 'huge';
	uppercase?: boolean;
};

export const Heading = ({
	children,
	colorDark = true,
	as = 'h1',
	size = 'huge',
	uppercase = false,
}: HeadingProps) => {
	return (
		<Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
			{children}
		</Title>
	);
};
