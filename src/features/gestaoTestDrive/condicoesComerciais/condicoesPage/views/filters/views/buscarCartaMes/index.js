import { connect } from 'react-redux';

import { Mixpanel, trackedProperties } from 'modules';
import Operations from '../../../../redux/operations';

import BuscarCartaDoMes from './buscarCartaMes';

const mapStateToProps = ({ condicoesComerciais }) => ({
  cartaMes: condicoesComerciais.page.filters.text,
  isLoading: condicoesComerciais?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setCartaMes: (cartaMes) => {
    dispatch(Operations.setCartaMes(cartaMes));
    Mixpanel.trackPageFilter(trackedProperties.condicoesPage, 'text');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BuscarCartaDoMes);
