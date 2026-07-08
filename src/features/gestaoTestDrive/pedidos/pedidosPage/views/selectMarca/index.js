import { connect } from 'react-redux';

import operations from '../../redux/operations';
import selectors from '../../redux/selectors';

import SelectMarca from './selectMarcaPedidosPage';

const mapStateToProps = ({ pedidos }) => ({
  marca: pedidos.page.filters.marca,
  brandsList: selectors.brandsList(pedidos),
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setMarca: (marca) => dispatch(operations.setMarca(marca)),
  setIsFirstPageLoad: (value) => dispatch(operations.setIsFirstPageLoad(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
