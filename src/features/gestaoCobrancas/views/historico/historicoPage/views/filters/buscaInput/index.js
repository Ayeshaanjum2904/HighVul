import { connect } from 'react-redux';
import { Mixpanel, trackedProperties } from 'modules';
import BuscaInput from './buscaInput';

import operations from '../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  busca: cobrancas.historico.page.filters.busca,
  isLoading: cobrancas?.historico?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTexto: (texto) => {
    dispatch(operations.setFilter('busca', texto));
    Mixpanel.trackPageFilter(trackedProperties.historicoPage, 'text');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BuscaInput);
