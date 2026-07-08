import { styled, TextField } from '@mui/material';

export const TextFieldComponent = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      borderColor: '#C5CEE0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00AFAD',
      backgroundColor: 'rgba(85, 87, 112, 0.08)',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontFamily: 'CircularStd, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#555770',
  },
});
