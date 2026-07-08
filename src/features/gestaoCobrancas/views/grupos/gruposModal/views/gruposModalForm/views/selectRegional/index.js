import { connect } from 'react-redux';

import SelectRegional from './selectRegionalGruposModal';

import operations from '../../../../redux/operations';
import selectors from '../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  regionalId: cobrancas.grupos.modal.grupo.regionalId,
  regionais: selectors.regionaisList(cobrancas),
  errors: cobrancas.grupos.modal.insertGrupo.errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegional);
