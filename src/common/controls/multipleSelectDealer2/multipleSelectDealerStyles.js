export const multipleSelect = {
  root: {
    marginTop: '1px',
  },
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
      padding: '5.7px 20px 5.7px 8px',
      height: '40px',
      overflow: 'hidden',
      border: ({ isActive }) => (isActive ? 'solid 1px rgba(85, 87, 112, 1)' : 'none'),
    },
  },
  checkbox: {
    borderRadius: 0,
    padding: '5px 0px 5px 0px',
    color: 'rgba(85, 87, 112, 1)',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-checked': {
      color: '#00AFAD',
    },
  },

  tag: {
    margin: '0px',
    '&.MuiChip-root': {
      fontSize: '14px',
      color: '#8f9bb3',
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
  content: {
    display: 'flex',
    alignItems: 'center',
    padding: '3px 0px 3px 16px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

  },
  line: {
    borderBottom: 'solid 1px #8f93a1',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  nome: {
    fontStyle: 'normal',
    fontWeight: '450',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#555770',
  },
  dados: {
    fontStyle: 'normal',
    fontWeight: '450',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#8F9BB3',
  },
  icon: {
    marginRight: '10px',
  },
};
