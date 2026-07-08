import { connect } from 'react-redux';

import InputAnalistaRede from './inputAnalistaRede';

import operations from '../../../../../redux/operations/operations';
import selectors from '../../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  analistaRede: selectors.select.analistaRede(cobrancas),
  errors: cobrancas.grupos.details.updateGrupo.errors,
  isEditing: cobrancas.grupos.details.updateGrupo.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputAnalistaRede);
