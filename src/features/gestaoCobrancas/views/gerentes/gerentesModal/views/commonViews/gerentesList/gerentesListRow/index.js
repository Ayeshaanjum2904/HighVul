import { connect } from 'react-redux';

import ListRow from './listRow';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  deleteGerenteList: cobrancas.gerentes.modal.deleteGerenteList,
});

const mapDispatchToProps = (dispatch) => ({
  deleteGerente: (id) => dispatch(operations.deleteGerente(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListRow);
