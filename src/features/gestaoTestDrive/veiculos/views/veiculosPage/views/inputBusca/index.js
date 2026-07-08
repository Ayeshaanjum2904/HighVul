import { connect } from 'react-redux';

import { Mixpanel, trackedProperties } from 'modules';
import operations from '../../redux/operations';

import InputBusca from './inputBusca';

const mapStateToProps = ({ veiculos }) => ({
  texto: veiculos.page.filters.texto,
  isLoading: veiculos?.page?.veiculosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTexto: (texto) => {
    dispatch(operations.setTexto(texto));
    Mixpanel.trackPageFilter(trackedProperties.veiculosPage, 'text');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBusca);
