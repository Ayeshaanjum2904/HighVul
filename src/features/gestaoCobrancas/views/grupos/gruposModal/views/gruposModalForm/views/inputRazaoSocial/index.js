import { connect } from 'react-redux';

import InputRazaoSocial from './inputRazaoSocial';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  razaoSocial: cobrancas.grupos.modal.grupo.razaoSocial,
  errors: cobrancas.grupos.modal.insertGrupo.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputRazaoSocial);
