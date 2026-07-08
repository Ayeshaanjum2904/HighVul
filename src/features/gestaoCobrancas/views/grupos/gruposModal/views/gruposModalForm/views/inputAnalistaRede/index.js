import { connect } from 'react-redux';

import InputAnalistaRede from './inputAnalistaRede';

import operations from '../../../../redux/operations';

const mapStateToProps = ({ cobrancas }) => ({
  analistaRede: cobrancas.grupos.modal.grupo.analistaRede,
  errors: cobrancas.grupos.modal.insertGrupo.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InputAnalistaRede);
