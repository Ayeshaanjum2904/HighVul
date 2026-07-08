import { connect } from 'react-redux';
import operations from '../../redux/operations';

import OrdensList from './ordensList';

const mapStateToProps = ({ ordens }) => ({
  field: ordens.ordenacao.nomeColuna,
  sort: ordens.ordenacao.sentidoOrdenacao,
});

const mapDispatchToProps = (dispatch) => ({
  setSortingOrder: (nome, ordem) => dispatch(
    operations.setSortingOrder(nome, ordem),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdensList);
