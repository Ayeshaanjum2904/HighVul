import { connect } from 'react-redux';
import operations from '../../redux/operations';
import FilterButton from '../../../../../../../common/controls/buttonFilter';

const mapStateToProps = ({ cobrancas }) => ({
  isFilterSelected: cobrancas?.contatos?.page?.isFilterSelected,
  isLoading: cobrancas?.contatos?.page?.list?.isLoading,
  textApply: 'Filtrar',
  textSelect: 'Filtrar',
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(operations.setPage(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
