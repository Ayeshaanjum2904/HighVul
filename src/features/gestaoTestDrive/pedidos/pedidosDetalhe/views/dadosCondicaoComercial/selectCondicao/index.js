import { connect } from 'react-redux';

import operations from '../../../redux/operations';

import SelectCondicao from './selectCondicao';

import selectors from '../../../redux/selectors';

const mapStateToProps = ({ pedidos }) => ({
  condicaoSelecionada: selectors?.condicaoSelecionada(pedidos),
  detalhePedido: pedidos.details.modal?.detalhePedido,

});

const mapDispatchToProps = (dispatch) => ({
  updateCondicaoSelecionada: (condicao) => {
    dispatch(operations.updateCondicaoSelecionada(condicao));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCondicao);
