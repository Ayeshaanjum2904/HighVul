import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import selectors from '../../../redux/selectors';
import TipoSelect from './tipoSelect';

const mapStateToProps = ({ cobrancas }) => ({
  tipo: cobrancas.historico.page.filters.tipo,
  tipoList: selectors.tipoList(cobrancas),
  isLoading: cobrancas?.historico?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTipo: (tipo) => dispatch(operations.setFilter('tipo', tipo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TipoSelect);
