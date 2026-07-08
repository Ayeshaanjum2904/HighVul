import colors from 'assets/styles/colors';
import typography from 'setup/typograhy';

export const TextFieldStyle = (text) => ({
  '&& .MuiInputBase-root': { paddingLeft: '4px', gap: '6px' },
  '& .MuiOutlinedInput-root': {
    height: 32,
    color: text ? colors.secundary_color_400 : colors.secundary_color_700,
    backgroundColor: colors.input_background,
    '& fieldset': {
      border: 'none',
    },
    '&.Mui-focused': {
      backgroundColor: colors.input_background_focused,
    },
  },
  '& .MuiOutlinedInput-input': {
    ...typography['14_regular'],
    lineHeight: '24px',
  },
});

export const InputContainerStyle = {
  height: 48,
  alignItems: 'center',
  display: 'flex',
  padding: '0px 8px',
};
