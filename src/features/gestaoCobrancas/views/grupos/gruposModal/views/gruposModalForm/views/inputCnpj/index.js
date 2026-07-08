import { connect } from 'react-redux';

import InputCnpj from './inputCnpj';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  cnpj: cobrancas.grupos.modal.grupo.cnpj,
  errors: cobrancas.grupos.modal.insertGrupo.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputCnpj);
