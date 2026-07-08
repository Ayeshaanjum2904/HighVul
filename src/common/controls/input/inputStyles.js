import { styled } from '@material-ui/styles';
import { TextField } from '@mui/material';
import colors from 'assets/styles/colors';

export const textField = (props) => ({
  root: {
    '& .MuiInputBase-root': {
      marginTop: '19px',
      borderRadius: '4px',
      fontSize: '14px',
      lineHeight: '1.71',
      color: '#8f9bb3',
      backgroundColor: 'rgba(228, 233, 242, 0.24)',
      height: '40px',
      padding: props.smallerRoot ? '8px 8px' : '12px 8px',
    },
    '& .MuiInputBase-root.Mui-disabled': {
      backgroundColor: '#FFFF',
    },
    '& .MuiInputBase-input': {
      fontSize: '14px',
      lineHeight: '1.71',
      color: '#555770',
      padding: '0px',
      '&::placeholder': {
        opacity: 1,
      },
    },
    '& .MuiInputBase-input:disabled': {
      color: '#555770',
    },
    '& .MuiFormLabel-root': {
      fontSize: '14px',
      lineHeight: '1.33',
      color: colors.secundary_color_700,
      marginLeft: '12px',
    },
    '& .MuiInput-underline:after': {
      display: 'none',
      borderBottom: 'none',
    },
    '& .MuiInput-underline:before': {
      display: 'none',
      borderBottom: 'none',
      transition: 'none',
    },
    '& .MuiInput-underline': {
      borderBottom: 'none',
    },
    '& .Mui-error': {
      border: '1px solid red',
    },
  },
  container: {
    fontSize: '14px',
    margin: '1px 0px 0px 8px',
    color: '#555770',
    whiteSpace: 'pre-wrap',
  },
  numberFormat: {
    marginTop: '-30px',
  },
  disableFormat: {
    width: '100%',
    color: '#7A7C9A !important',
    background: '#F7F9FC',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '6px',
    padding: '6px',
    borderRadius: '4px',
  },
});

export const StyledTextField = styled(TextField)((props) => ({
  ...textField(props).root,
  '& .Mui-focused': {
    color: colors.secundary_color_700,
  },
}));

StyledTextField.defaultProps = {
  variant: 'standard',
};
