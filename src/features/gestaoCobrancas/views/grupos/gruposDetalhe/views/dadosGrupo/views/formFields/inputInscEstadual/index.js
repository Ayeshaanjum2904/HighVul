import { connect } from 'react-redux';

import InputInscEstadual from './inputInscEstadual';

import operations from '../../../../../redux/operations/operations';
import selectors from '../../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  inscricaoEstadual: selectors.select.inscEstadual(cobrancas),
  isEditing: cobrancas.grupos.details.updateGrupo.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputInscEstadual);
