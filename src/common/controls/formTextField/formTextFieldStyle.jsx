import colors from 'assets/styles/colors';
import typography from 'setup/typograhy';

const handleTextColor = (text, error) => {
  if (error) return colors.error_color_200;
  return text ? colors.secundary_color_700 : colors.secundary_color_400;
};

export const TextFieldStyle = (text, error) => ({
  border: `${error ? colors.error_color_200 : 'transparent'} 1px solid`,
  borderRadius: '4px',
  '& .MuiOutlinedInput-root': {
    height: 38,
    padding: '0px 8px 0px 12px',
    color: `${handleTextColor(text, error)} !important`,
    backgroundColor: colors.secundary_color_100_36,
    '& fieldset': {
      border: 'none',
    },
    '&.Mui-focused': {
      backgroundColor: colors.input_background_focused,
    },
  },
  '& .MuiOutlinedInput-input': {
    ...typography['14_regular'],
    color: 'inherit',
    lineHeight: '24px',
    padding: 0,
    '&::placeholder': {
      opacity: 1,
    },
  },
});
