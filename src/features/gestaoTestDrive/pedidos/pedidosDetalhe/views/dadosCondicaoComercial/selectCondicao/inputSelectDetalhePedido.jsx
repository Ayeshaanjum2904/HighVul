import { withStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';

const InputSelectDetalhePedido = withStyles(() => ({
  root: {
    height: '40px',
    'label + &': {
      marginTop: '16px',
    },
  },
  input: {
    height: '35px',
    marginLeft: '-10px',
    paddingTop: '14px',
    paddingLeft: '10px',
    paddingBottom: '0px',
    borderRadius: '5px',
    position: 'center',
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    fontSize: 14,
    lineHeight: '1.71',
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

export default InputSelectDetalhePedido;
