import { connect } from 'react-redux';
import { Mixpanel, trackedProperties } from 'modules';
import InputBusca from './inputBUC';

import operations from '../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  buc: cobrancas.concessionarias.page.filters.codBuc,
  isLoading: cobrancas.concessionarias.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setBuc: (texto) => {
    dispatch(operations.setFilter('codBuc', texto));
    Mixpanel.trackPageFilter(trackedProperties.concessionariasPage, 'codBuc');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBusca);
