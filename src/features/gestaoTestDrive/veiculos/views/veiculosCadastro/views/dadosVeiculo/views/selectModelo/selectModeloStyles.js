import colors from 'assets/styles/colors';

export const selectModeloStyles = {
  listBox: {
    '& .MuiAutocomplete-option': {
      padding: '0 0 0 0',
      '&[aria-selected="true"]': {
        backgroundColor: colors.secundary_color_100_56,
        borderBottom: colors.secundary_color_100_48,
      },
    },
  },
  popupIcon: {
    '& .MuiAutocomplete-popupIndicator': {
      marginRight: '5px',
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
    margin: '-2px -8px 0px 0px',
    '& .MuiInputBase-adornedEnd': {
      background: 'rgba(228, 233, 242, 0.24)',
      marginLeft: '-8px',
    },
    '& .MuiInputBase-root': {
      padding: '5.7px 20px 5.7px 8px',
      maxHeight: '40px',
    },
    '& .MuiFormLabel-root': {
      margin: '1px 0px 0px 0px',
    },
  },
};
