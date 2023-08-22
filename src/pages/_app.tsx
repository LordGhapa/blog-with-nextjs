import { GlobalStyles } from './../styles/global-styles';
import React from 'react';

import { AppProps } from 'next/app';
import { BlogThemeProvider } from '../contexts/BlogThemeContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<BlogThemeProvider>
				<GlobalStyles />
				<Component {...pageProps} />
			</BlogThemeProvider>
		</>
	);
}
