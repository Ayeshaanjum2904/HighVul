import { connect } from 'react-redux';

import InputParcelas from './inputParcelas';

import selectors from '../../../redux/selectors';

import operations from '../../../redux/operations';

const mapStateToProps = ({ pedidos }) => ({
  parcelas: selectors.condicaoSelecionada(pedidos)?.parcelas,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
  negociada: selectors.condicaoSelecionada(pedidos)?.negociada,
});

const mapDispatchToProps = (dispatch) => ({
  updateCondicaoProperty: (propertyName, value) => {
    dispatch(operations.updateCondicaoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputParcelas);
