import { styled } from '@material-ui/styles';
import { Checkbox } from '@mui/material';
import colors from 'assets/styles/colors';

export const multipleSelect = {
  root: {
    marginTop: '1px',
  },
  listBox: {
    maxHeight: '210px',
    padding: '8px 0',
    '& .MuiAutocomplete-option': {
      padding: '0 0 0 0',
      '&[aria-selected="true"]': {
        backgroundColor: colors.primary_color_100_36,
      },
    },
  },
  popupIcon: {
    '& .MuiAutocomplete-popupIndicator': {
      borderRadius: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  clearIcon: {
    '& .MuiAutocomplete-clearIndicator': {
      borderRadius: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  input: {
    '&.MuiAutocomplete-inputRoot': {
      backgroundColor: 'rgba(228, 233, 242, 0.24)',
    },
    '&.MuiInputBase-root': {
      color: colors.secundary_color_700,
      backgroundColor: 'rgba(228, 233, 242, 0.24)',
      padding: '5.7px 20px 5.7px 8px',
      height: '40px',
      overflow: 'hidden',
      border: ({ isActive }) => (isActive ? 'solid 1px rgba(85, 87, 112, 1)' : 'none'),
    },
  },

  tag: {
    '&.MuiChip-root': {
      fontSize: '14px',
      color: colors.secundary_color_700,
      backgroundColor: 'transparent',
      border: 'none',
      height: '30px',
      overflow: 'hidden',
    },
    '& .MuiChip-label': {
      paddingLeft: '0px',
      paddingRight: '8px',
    },
    '& .MuiChip-deleteIcon': {
      width: '18px',
      height: '18px',
    },
  },
};

export const StyledCheckbox = styled(Checkbox)(() => ({
  borderRadius: 0,
  padding: '5px 0px 5px 0px',
  color: 'rgba(85, 87, 112, 1)',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&.Mui-checked': {
    color: colors.primary_color_700,
  },
}));
