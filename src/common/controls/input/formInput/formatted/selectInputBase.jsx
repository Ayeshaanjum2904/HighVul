import { withStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

const CustomInputBase = withStyles(() => ({
  root: {
    height: '40px',
    'label + &': {
      marginTop: '26px',
    },
  },
  input: {
    marginLeft: '-8px',
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    fontSize: 14,
    lineHeight: '1.75',
    color: '#8f9bb3',
    padding: '8px 8px',
    '&:focus': {
      borderRadius: 4,
      backgroundColor: 'rgba(228, 233, 242, 0.24)',
    },
  },
  disabled: {
    backgroundColor: 'white',
    color: '#555770',
  },
}))(InputBase);

const CustomInputLabel = withStyles(() => ({
  root: {
    top: '5px',
    fontSize: 14,
    lineHeight: '1.75',
    color: '#8f9bb3 !important',
  },
}))(InputLabel);

export { CustomInputBase, CustomInputLabel };
