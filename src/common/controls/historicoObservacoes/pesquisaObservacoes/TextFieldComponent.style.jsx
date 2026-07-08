import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import { SearchRounded } from '@material-ui/icons';
import colors from 'assets/styles/colors';

export const StyledTextField = styled(TextField)({
  width: '324px',
  height: '40px',
  backgroundColor: colors.input_background,
  marginRight: '4px',
  borderRadius: '4px',
  borderBottom: '1px solid rgba(229, 230, 235, 0.24)',
  '& .MuiOutlinedInput-root': {
    padding: '0 10px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '0px',
    fontFamily: 'CircularStd, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    color: colors.secundary_color_700,
  },
});

export const CustomSearchRoundedIcon = styled(SearchRounded)({
  fontSize: '24px !important',
  color: 'rgba(85, 87, 112, 1) !important',
  margin: '0px 8px',
  top: '3px',
  left: '3px',
  gap: '0px',
  opacity: '0px',
});
