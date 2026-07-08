import { connect } from 'react-redux';

import operations from '../../../redux/operations';
import CodigoConcessionariaComissaoInput from './codigoConcessionariaComissaoInput';

const mapStateToProps = (state) => ({
  codigoConcessionariaComissao: state.pedidos.details.modal.detalhePedido?.codigoConcessionariaComissao || '',
  camposEditaveis: state.pedidos.details.modal.detalhePedido?.camposEditaveis || [],
});

const mapDispatchToProps = (dispatch) => ({
  updateDetalheProperty: (property, value) => (
    dispatch(operations.updateDetalheProperty(property, value))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CodigoConcessionariaComissaoInput);
