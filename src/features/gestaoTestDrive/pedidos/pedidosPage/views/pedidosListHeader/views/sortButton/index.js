import { connect } from 'react-redux';

import operations from '../../../../redux/operations';

import SortButton from './sortButton';

const mapStateToProps = ({ pedidos }) => ({
  isAscSort: pedidos.page.filters.isAscSort,
});

const mapDispatchToProps = (dispatch) => ({
  setSorting: (isAscSort) => dispatch(operations.setSorting(isAscSort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortButton);
