import { connect } from 'react-redux';

import InputAnexarNotaFiscal from './inputAnexarNotaFiscal';

import operations from '../../../redux/operations';

const mapStateToProps = ({ pedidos }) => ({
  urlFatura: pedidos.details.modal.detalhePedido?.urlFatura,
  tamanhoFatura: pedidos.details.modal.detalhePedido?.tamanhoFatura,
  nomeFatura: pedidos.details.modal.detalhePedido?.nomeFatura,
  currentStatus: pedidos.details.modal.detalhePedido?.status,
  isUploadError: pedidos.details?.uploadFaturaPedido.isError,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFaturaPedido: () => dispatch(operations.deleteFaturaPedido()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputAnexarNotaFiscal);
