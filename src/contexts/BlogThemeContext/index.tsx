import { createContext, useCallback, useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
export type BlogThemeProviderProps = {
  children: React.ReactNode;
};
export type BlogThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'default' | 'inverted') => void;
};
export const BlogThemeContext = createContext<BlogThemeContextValues>({
  theme,
});

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);
    setBlogTheme(newTheme);
  }, []);

  const handleSetTheme: BlogThemeContextValues['setTheme'] = useCallback(
    (mode = 'default') => {
      if (mode === 'default') {
        setBlogTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
      } else {
        const newTheme: DefaultTheme = {
          ...theme,
          name: 'inverted',
          colors: {
            primary: '#dfdfdf',
            darkText: '#f9f9f9',
            secondary: '#dc143c',
            white: '#000000',
            background: '#131F24',
            lightBg: '#dfdfdf',
            darkBg: '#0a1128',
            mediumGray: '#dddddd',
            darkerGray: '#AAAAAA',
          },
        };
        setBlogTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
      }
    },
    [],
  );

  return (
    <BlogThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  );
};
