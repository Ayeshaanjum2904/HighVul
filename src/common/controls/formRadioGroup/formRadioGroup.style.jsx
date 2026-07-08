import colors from 'assets/styles/colors';

export const RadioGroupStyle = (error) => ({
  background: colors.secundary_color_100_36,
  padding: '2px 8px 2px 8px',
  borderRadius: '4px',
  border: `${error ? colors.error_color_200 : 'transparent'} 1px solid`,
});
