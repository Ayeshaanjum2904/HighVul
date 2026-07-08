export const selectVeiculoStyles = {
  listBox: {
    '& .MuiAutocomplete-option': {
      padding: '0 0 0 0',
      '&[aria-selected="true"]': {
        backgroundColor: 'rgba(0, 175, 173, 0.16)',
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
    margin: '-2px 0px 0px 0px',
    width: '100%',
    '& .MuiInputBase-adornedEnd': {
      background: 'rgba(228, 233, 242, 0.24)',
      marginLeft: '-8px',
    },
    '& .MuiInputBase-root': {
      padding: '8px 12px',
      maxHeight: '40px',
      overflow: 'hidden',
    },
    '& .MuiFormLabel-root': {
      margin: '1px 0px 0px 0px',
    },
  },
};
