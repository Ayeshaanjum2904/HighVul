import { connect } from 'react-redux';

import SelectMarca from './selectMarcaDadosGrupo';

import operations from '../../../../../redux/operations/operations';
import selectors from '../../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  marcaId: selectors.select.marca(cobrancas),
  marcas: selectors.marcasList(cobrancas),
  errors: cobrancas.grupos.details.updateGrupo.errors,
  isEditing: cobrancas.grupos.details.updateGrupo.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
