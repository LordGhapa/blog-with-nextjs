import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';

export const ToggleTheme = () => {
	const { setTheme } = useContext(BlogThemeContext);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const localTheme = localStorage?.getItem('theme');
		if (!localTheme) return;
		const newTheme = JSON.parse(localTheme);
		if (newTheme.name === 'inverted') {
			setChecked(true);
		}
	}, []);

	useEffect(() => {
		setTheme(checked ? 'inverted' : 'default');
	}, [checked, setTheme]);

	const handleChange = () => {
		setChecked((s) => !s);
	};

	return (
		<Styled.Wrapper>
			<Styled.Label>
				Dark ou Light Mode
				<Styled.Input
					type="checkbox"
					value="Dark mode active"
					onChange={handleChange}
					checked={checked}
				/>
				<Styled.Slider />
			</Styled.Label>
		</Styled.Wrapper>
	);
};
