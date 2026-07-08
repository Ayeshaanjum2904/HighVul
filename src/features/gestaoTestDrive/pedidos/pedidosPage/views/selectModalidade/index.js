import { connect } from 'react-redux';

import operations from '../../redux/operations';

import SelectModalidade from './selectModalidadePedidosPage';

const mapStateToProps = ({ pedidos }) => ({
  modalidade: pedidos.page.filters.modalidade,
  isLoading: pedidos?.page?.pedidosList?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setModalidade: (modalidade) => dispatch(operations.setModalidade(modalidade)),
  setIsFirstPageLoad: (value) => dispatch(operations.setIsFirstPageLoad(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectModalidade);
