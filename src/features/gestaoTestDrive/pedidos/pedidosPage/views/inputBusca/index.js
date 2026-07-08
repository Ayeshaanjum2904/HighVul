import { connect } from 'react-redux';
import { Mixpanel, trackedProperties } from 'modules';

import operations from '../../redux/operations';

import InputBusca from './inputBusca';

const mapStateToProps = ({ pedidos }) => ({
  texto: pedidos.page.filters.texto,
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTexto: (texto) => {
    dispatch(operations.setTexto(texto));
    dispatch(operations.setIsFirstPageLoad(false));
    Mixpanel.trackPageFilter(trackedProperties.pedidosPage, 'text');
  },
  getPedidos: () => dispatch(operations.getPedidos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBusca);
