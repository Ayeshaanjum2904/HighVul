import { connect } from 'react-redux';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

import SelectStatusVeiculosPage from './selectStatusVeiculosPage';

const mapStateToProps = ({ veiculos }) => ({
  status: veiculos.page.filters.status,
  statusList: selectors.mapStatus(),
  isLoading: veiculos?.page?.veiculosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setStatus: (status) => dispatch(operations.setStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectStatusVeiculosPage);
