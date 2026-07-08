import { connect } from 'react-redux';

import DescontosListRow from './descontosListRow';

import operations from '../../../redux/operations';

const mapDispatchToProps = (dispatch) => ({
  setUpdatePage: (descontoId, marca) => dispatch(operations.setUpdatePage(descontoId, marca)),
  setDescontoId: (descontoId) => dispatch(operations.setDescontoId(descontoId)),
  deleteDesconto: () => { dispatch(operations.deleteDesconto()); },
});

export default connect(null, mapDispatchToProps)(DescontosListRow);
