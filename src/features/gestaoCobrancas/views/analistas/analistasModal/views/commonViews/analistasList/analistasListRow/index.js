import { connect } from 'react-redux';

import ListRow from './listRow';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  deleteAnalistaList: cobrancas.analistas.modal.deleteAnalistaList,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAnalista: (id) => dispatch(operations.deleteAnalista(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListRow);
