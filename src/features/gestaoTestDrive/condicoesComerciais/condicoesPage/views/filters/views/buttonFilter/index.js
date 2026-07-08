import { connect } from 'react-redux';

import ButtonFilter from 'common/controls/buttonFilter';
import operations from '../../../../redux/operations';

const mapStateToProps = ({ condicoesComerciais }) => ({
  isFilterSelected: condicoesComerciais?.page?.isFilterSelected,
  isLoading: condicoesComerciais?.page?.list?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(operations.setPageNumber(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);
