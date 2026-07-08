import { connect } from 'react-redux';

import HistoricoListRow from './historicoListRow';
import operations from '../../../../historicoDetalhe/redux/operations';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  openModalEmail: (id) => dispatch(operations.setModalOpen(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoricoListRow);
