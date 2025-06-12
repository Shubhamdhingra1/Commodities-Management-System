import { useSelector } from 'react-redux';

export const useTheme = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  return { isDarkMode };
}; 