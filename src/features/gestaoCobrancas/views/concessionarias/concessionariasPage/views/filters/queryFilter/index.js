import { connect } from 'react-redux';
import { Mixpanel, trackedProperties } from 'modules';
import InputBusca from './inputBusca';

import operations from '../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  texto: cobrancas.concessionarias.page.filters.query,
  isLoading: cobrancas?.concessionarias?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTexto: (texto) => {
    dispatch(operations.setFilter('query', texto));
    Mixpanel.trackPageFilter(trackedProperties.concessionariasPage, 'text');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBusca);
