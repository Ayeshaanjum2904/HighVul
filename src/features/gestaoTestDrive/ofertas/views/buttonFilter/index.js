import { connect } from 'react-redux';

import ButtonFilter from 'common/controls/buttonFilter';
import * as operations from '../../redux/operations';

const mapStateToProps = ({ ofertas }) => ({
  isFilterSelected: ofertas?.isFilterSelected,
  isLoading: ofertas?.ofertas?.isLoading,
  textApply: 'Filtrar',
  textSelect: 'Filtrar',
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(operations.setPagina(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);
