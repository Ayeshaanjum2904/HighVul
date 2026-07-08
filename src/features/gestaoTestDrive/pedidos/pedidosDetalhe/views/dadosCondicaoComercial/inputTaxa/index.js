import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import selectors from '../../../redux/selectors';

import InputTaxa from './inputTaxa';

const mapStateToProps = ({ pedidos }) => ({
  taxa: selectors.condicaoSelecionada(pedidos)?.taxa,
  camposEditaveis: pedidos.details.modal.detalhePedido?.camposEditaveis,
  negociada: selectors.condicaoSelecionada(pedidos)?.negociada,
});

const mapDispatchToProps = (dispatch) => ({
  updateCondicaoProperty: (propertyName, value) => {
    dispatch(operations.updateCondicaoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTaxa);
