import { connect } from 'react-redux';
import { Mixpanel, trackedProperties } from 'modules';
import InputBusca from './inputBusca';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  texto: cobrancas.grupos.page.filters.texto,
  isLoading: cobrancas?.grupos?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTexto: (texto) => {
    dispatch(operations.setTexto(texto));
    Mixpanel.trackPageFilter(trackedProperties.gruposPage, 'text');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBusca);
