import { connect } from 'react-redux';
import { Mixpanel, trackedProperties } from 'modules';

import Operations from '../../../../redux/operations';

import InputNumDve from './inputNumDve';

const mapStateToProps = ({ descontos }) => ({
  numeroDve: descontos.page.filters.text,
  isLoading: descontos?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setNumeroDve: (dve) => {
    dispatch(Operations.setDve(dve));
    Mixpanel.trackPageFilter(trackedProperties.descontosPage, 'text');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumDve);
