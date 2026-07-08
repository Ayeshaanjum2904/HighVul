import { connect } from 'react-redux';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';
import SelectRegional from './selectRegionalGruposPage';

const mapStateToProps = ({ cobrancas }) => ({
  regional: cobrancas.grupos.page.filters.regional,
  regionalList: selectors.regionaisList(cobrancas),
  isLoading: cobrancas.grupos.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateFiltersProperty: (propertyName, value) => {
    dispatch(operations.updateFiltersProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegional);
