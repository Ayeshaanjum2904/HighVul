import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import selectors from '../../../redux/selectors';

import InputCoeficiente from './inputCoeficiente';

const mapStateToProps = ({ pedidos }) => ({
  coeficiente: selectors.condicaoSelecionada(pedidos)?.coeficiente,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
  negociada: selectors.condicaoSelecionada(pedidos)?.negociada,
});

const mapDispatchToProps = (dispatch) => ({
  updateCondicaoProperty: (propertyName, value) => {
    dispatch(operations.updateCondicaoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputCoeficiente);
