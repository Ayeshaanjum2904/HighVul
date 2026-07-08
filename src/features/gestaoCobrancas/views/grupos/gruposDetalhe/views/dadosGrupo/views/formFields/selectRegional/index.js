import { connect } from 'react-redux';

import SelectRegional from './selectRegionalDadosGrupo';

import operations from '../../../../../redux/operations/operations';
import selectors from '../../../../../redux/selectors';

const mapStateToProps = ({ cobrancas }) => ({
  regionalId: selectors.select.regional(cobrancas),
  regionais: selectors.regionaisList(cobrancas),
  errors: cobrancas.grupos.details.updateGrupo.errors,
  isEditing: cobrancas.grupos.details.updateGrupo.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
  updateGrupoProperty: (propertyName, value) => {
    dispatch(operations.updateGrupoProperty(propertyName, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegional);
