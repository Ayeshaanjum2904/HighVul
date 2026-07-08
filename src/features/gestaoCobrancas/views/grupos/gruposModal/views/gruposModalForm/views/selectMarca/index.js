import { connect } from 'react-redux';

import SelectMarca from './selectMarcaGruposModal';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  marcaId: cobrancas.grupos.modal.grupo.marcaId,
  marcas: selectors.marcasList(cobrancas),
  errors: cobrancas.grupos.modal.insertGrupo.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);
