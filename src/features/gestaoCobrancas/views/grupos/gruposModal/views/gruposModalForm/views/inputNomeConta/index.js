import { connect } from 'react-redux';

import InputNomeConta from './inputNomeConta';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  nomeConta: cobrancas.grupos.modal.grupo.nomeConta,
  errors: cobrancas.grupos.modal.insertGrupo.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputNomeConta);
