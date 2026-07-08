import { connect } from 'react-redux';
import operations from '../../../redux/operations';
import InputGrupoOpcionais from './inputGrupoOpcionais';

const mapStateToProps = (state) => ({
  grupoOpcionais: state.pedidos.details.modal.detalhePedido?.grupoOpcionais,
  camposEditaveis: state.pedidos.details.modal.detalhePedido?.camposEditaveis || [],
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (property, value) => (
    dispatch(operations.updateDetalheProperty(property, value))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputGrupoOpcionais);
