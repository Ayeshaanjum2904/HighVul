import { connect } from 'react-redux';

import operations from '../../../../redux/operations';
import SelectStatus from './selectStatus';

const mapStateToProps = ({ cobrancas }) => ({
  status: cobrancas.grupos.page.filters.status,
  isLoading: cobrancas.grupos.page.list.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateFiltersProperty: (propertyName, value) => {
    dispatch(operations.updateFiltersProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectStatus);
