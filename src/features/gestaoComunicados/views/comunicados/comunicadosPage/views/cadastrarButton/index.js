import { connect } from 'react-redux';

import operations from '../../../comunicadosModal/redux/operations';

import CadastrarButton from './cadastrarButton';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(operations.setOpenModal()),
});

export default connect(null, mapDispatchToProps)(CadastrarButton);
