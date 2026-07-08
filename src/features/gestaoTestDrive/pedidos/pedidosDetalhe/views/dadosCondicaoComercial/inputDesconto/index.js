import { connect } from 'react-redux';

import InputDesconto from './inputDesconto';

import selectors from '../../../redux/selectors';
import operations from '../../../redux/operations';

const mapStateToProps = ({ pedidos }) => ({
  descontoFinanciado: selectors.selectDescontoFinanciado(pedidos),
  descontoAVista: pedidos.details.modal.detalhePedido?.descontoAVista,
  isAVista: pedidos.details.modal.detalhePedido?.isAVista,
  isCondicaoNegociada: pedidos.details.modal.isCondicaoNegociada,
  status: pedidos.details.modal.detalhePedido?.status,
  percentualDesconto: selectors.selectDescontoNegociado(pedidos),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => {
    dispatch(operations.updateCondicaoProperty('percentualDesconto', value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputDesconto);
