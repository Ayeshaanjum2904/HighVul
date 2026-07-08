import { connect } from 'react-redux';
import CondicaoListRow from './condicaoListRow';

import operations from '../../../../redux/operations';
import selector from '../../../../redux/selector';

const mapStateToProps = ({ condicoesComerciais }) => ({
  mvs: condicoesComerciais.details.mvsList,
  selectedMvsList: selector.selectSelectedMvsList(condicoesComerciais),
  page: condicoesComerciais.page.page,
});

const mapDispatchToProps = (dispatch) => ({
  setVeiculo: (oldId, mvs) => dispatch(operations.changeCondicaoModel(oldId, mvs)),
  removeVeiculo: (id) => dispatch(operations.removeSelectedMvs(id)),
  deleteVeiculo: (id) => dispatch(operations.setStatus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CondicaoListRow);
