import { useContext } from 'react';

import { ThemeContext } from './themeSetting';

export const useTheme = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return {
    theme,
    themeColor: theme.colors,
    updateTheme,
  };
};
