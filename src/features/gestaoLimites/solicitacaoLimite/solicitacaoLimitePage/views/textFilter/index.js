import { connect } from 'react-redux';

import { Mixpanel, trackedProperties } from 'modules';
import operations from '../../redux/operations';

import TextFilter from './textFilter';

const mapStateToProps = ({ limites }) => ({
  texto: limites.page.filters.texto,
  isLoading: limites?.page?.solicitacoesList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setTexto: (texto) => {
    dispatch(operations.setTexto(texto));
    Mixpanel.trackPageFilter(trackedProperties.limitesPage, 'text');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextFilter);
