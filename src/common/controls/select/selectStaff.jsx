import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

const InputLabelStaff = withStyles(() => ({
  root: {
    top: '6px',
    left: '12px',
    fontSize: 14,
    lineHeight: '1.75',
    color: '#505669 !important',
  },
}))(InputLabel);

const Input = withStyles(() => ({
  root: {
    height: '40px',
    'label + &': {
      marginTop: '28px',
    },
  },
  input: {
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    fontSize: 14,
    lineHeight: '1.75',
    color: '#505669',
    padding: '8px 8px',
    '&:focus': {
      borderRadius: 4,
      backgroundColor: 'rgba(228, 233, 242, 0.24)',
    },
  },
}))(InputBase);

const SelectStaff = withStyles(() => ({
  icon: {
    height: '21px',
    width: '25px',
    fill: '#505669',
  },
  iconOpen: {
    height: '21px',
    width: '25px',
    fill: '#505669',
  },
  disabled: {
    backgroundColor: 'white',
    color: '#555770',
    opacity: 0,
  },
  root: {

  },
}))(Select);

export { InputLabelStaff, Input, SelectStaff };
