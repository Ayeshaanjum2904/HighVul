import { connect } from 'react-redux';

import { Mixpanel, trackedProperties } from 'modules';
import * as operations from '../../redux/operations';

import InputBusca from './inputBusca';

const mapStateToProps = ({ ofertas }) => ({
  texto: ofertas.search.texto,
  isLoading: ofertas?.ofertas?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTexto: (texto) => {
    dispatch(operations.setTexto(texto));
    Mixpanel.trackPageFilter(trackedProperties.ofertasPage, 'text');
  },
  getOfertas: () => dispatch(operations.getOfertas()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBusca);
