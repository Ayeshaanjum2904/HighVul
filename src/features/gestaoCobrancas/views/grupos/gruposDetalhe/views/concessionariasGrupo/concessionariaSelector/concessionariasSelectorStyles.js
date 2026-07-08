export const multipleSelectStyles = {
  root: {
    marginTop: '-20px',
  },
  listBox: {
    '& .MuiAutocomplete-option': {
      padding: '0 0 0 0',
      margin: '1px 1px',
      borderRadius: '4px',
      backgroundColor: '#F7F9FC',
      '&[data-focus="true"]': {
        backgroundColor: '#EDF1F7',
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
  input: {
    '&.MuiAutocomplete-inputRoot': {
      backgroundColor: 'rgba(228, 233, 242, 0.24)',

    },
    '&.MuiInputBase-root': {
      padding: '5.7px 20px 5.7px 8px',
      maxHeight: '40px',
      overflow: 'hidden',
    },
  },
};
