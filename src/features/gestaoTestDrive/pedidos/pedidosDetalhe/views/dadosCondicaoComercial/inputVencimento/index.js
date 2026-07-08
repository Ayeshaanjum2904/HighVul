import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import selectors from '../../../redux/selectors';

import InputVencimento from './inputVencimento';

const mapStateToProps = ({ pedidos }) => ({
  vencimento: selectors.condicaoSelecionada(pedidos)?.vencimento,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
  negociada: selectors.condicaoSelecionada(pedidos)?.negociada,
});

const mapDispatchToProps = (dispatch) => ({
  updateCondicaoProperty: (propertyName, value) => {
    dispatch(operations.updateCondicaoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputVencimento);
